import React, { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";
import { FaArrowCircleUp } from "react-icons/fa";

const Home = () => {
    const navigate = useNavigate();
    const [ulkeler, setUlkeler] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);

                // Add headers when sending request to API
                const response = await fetch(
                    "https://restcountries.com/v3.1/all?fields=name,flags,capital,currencies,languages,region,population,maps,translations",
                    {
                        method: "GET",
                        headers: {
                            Accept: "application/json",
                        },
                    }
                );

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();

                // Ensure data is an array
                if (Array.isArray(data)) {
                    setUlkeler(data);
                } else {
                    throw new Error(
                        "Expected array format data not received from API"
                    );
                }
            } catch (error) {
                console.error("API Error:", error);
                setError(`Error occurred while loading data: ${error.message}`);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []); // removed ulkeler dependency

    //* this function routes to details page when clicked
    const handleDetailsClick = (name) => {
        navigate(`/details/${name}`);
    };

    //* this function scrolls to top when button is clicked
    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    //* capture input data with onChange and store in searchTerm variable
    const [searchTerm, setSearchTerm] = useState("");
    const handleSearchChange = useCallback((event) => {
        setSearchTerm(event.target.value);
    }, []);

    //*Filter captured data through countries array and store matching data in filteredUlkeler variable.
    const filteredUlkeler = Array.isArray(ulkeler)
        ? ulkeler.filter(
              ({ name }) =>
                  name &&
                  name.common &&
                  name.common.toLowerCase().includes(searchTerm.toLowerCase())
          )
        : [];

    //*About 250 country data is received from API, but we can determine the number of countries to paginate with slice method.
    const paginatedUlkeler = filteredUlkeler.slice(0, 250);

    // Loading state
    if (loading) {
        return (
            <div
                style={{
                    backgroundColor: "var(--bg-primary)",
                    minHeight: "100vh",
                    paddingTop: "100px",
                }}
            >
                <Container className="text-center mt-5 d-flex flex-column align-items-center">
                    <div
                        className="modern-spinner"
                        style={{ marginTop: "6rem" }}
                    ></div>
                    <p
                        className="mt-3"
                        style={{ color: "var(--text-primary)" }}
                    >
                        Loading country data...
                    </p>
                </Container>
            </div>
        );
    }

    // Error state
    if (error) {
        return (
            <div
                style={{
                    backgroundColor: "var(--bg-primary)",
                    minHeight: "100vh",
                    paddingTop: "100px",
                }}
            >
                <Container className="text-center mt-5 d-flex flex-column align-items-center">
                    <div
                        className="modern-alert modern-alert-danger"
                        style={{ marginTop: "6rem", maxWidth: "500px" }}
                    >
                        <h4 style={{ marginBottom: "16px" }}>Error!</h4>
                        <p style={{ marginBottom: "20px" }}>{error}</p>
                        <button
                            className="modern-btn"
                            onClick={() => window.location.reload()}
                            style={{
                                background: "white",
                                color: "var(--danger)",
                            }}
                        >
                            Try Again
                        </button>
                    </div>
                </Container>
            </div>
        );
    }

    return (
        <div
            style={{
                backgroundColor: "var(--bg-primary)",
                minHeight: "100vh",
                paddingTop: "100px",
            }}
        >
            <Container className="text-center mt-4 d-flex flex-column align-items-center">
                <div className="w-100 d-flex justify-content-center mb-4">
                    <input
                        className="modern-input"
                        style={{ maxWidth: "500px", marginTop: "2rem" }}
                        type="text"
                        placeholder="Search countries..."
                        onChange={handleSearchChange}
                        autoFocus
                    />
                </div>

                {paginatedUlkeler.length === 0 && searchTerm ? (
                    <div
                        className="modern-alert modern-alert-info mt-3"
                        style={{ maxWidth: "500px" }}
                    >
                        No results found for "{searchTerm}".
                    </div>
                ) : null}

                <Row className="mt-3 m-auto">
                    {paginatedUlkeler.map(({ flags, name }) => {
                        return (
                            <Col
                                className="mt-3 m-auto d-flex justify-content-center align-items-center"
                                key={name.common}
                                xs={12}
                                sm={6}
                                md={4}
                                lg={4}
                                xl={3}
                            >
                                <div
                                    className="modern-card"
                                    style={{
                                        width: "100%",
                                        maxWidth: "280px",
                                        minWidth: "250px",
                                    }}
                                >
                                    <div
                                        style={{
                                            height: "180px",
                                            overflow: "hidden",
                                            cursor: "pointer",
                                        }}
                                        onClick={() =>
                                            handleDetailsClick(name.common)
                                        }
                                    >
                                        <img
                                            src={flags?.png || flags?.svg}
                                            alt={`${name.common} flag`}
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "cover",
                                            }}
                                            onError={(e) => {
                                                e.target.src =
                                                    "https://via.placeholder.com/272x181?text=Flag+Not+Found";
                                            }}
                                        />
                                    </div>
                                    <div style={{ padding: "20px" }}>
                                        <h5
                                            style={{
                                                color: "var(--text-primary)",
                                                marginBottom: "16px",
                                                fontWeight: "600",
                                            }}
                                        >
                                            {name.common}
                                        </h5>
                                        <button
                                            className="modern-btn modern-btn-primary"
                                            onClick={() =>
                                                handleDetailsClick(name.common)
                                            }
                                            style={{ width: "100%" }}
                                        >
                                            View Details
                                        </button>
                                    </div>
                                </div>
                            </Col>
                        );
                    })}
                </Row>

                <button
                    className="modern-btn"
                    style={{
                        position: "fixed",
                        bottom: "60px",
                        right: "20px",
                        width: "60px",
                        height: "60px",
                        zIndex: "333",
                        borderRadius: "50%",
                        background: "var(--gradient-primary)",
                        color: "white",
                        border: "none",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "var(--shadow-lg)",
                    }}
                    onClick={handleScrollToTop}
                >
                    <FaArrowCircleUp size={24} />
                </button>
            </Container>
        </div>
    );
};
export default Home;
