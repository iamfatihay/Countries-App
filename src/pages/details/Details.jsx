import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";

const Details = () => {
    //*useParams is used to capture data sent via router.
    const { namee } = useParams();
    const navigate = useNavigate();
    const [ülke, setUlke] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCountryData = async () => {
            try {
                setLoading(true);
                setError(null);

                const response = await fetch(
                    `https://restcountries.com/v3.1/name/${namee}?fields=name,flags,capital,currencies,languages,region,population,maps,translations`,
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

                if (Array.isArray(data)) {
                    setUlke(data);
                } else {
                    throw new Error(
                        "Expected array format data not received from API"
                    );
                }
            } catch (error) {
                console.error("API Error:", error);
                setError(
                    `Error occurred while loading country data: ${error.message}`
                );
            } finally {
                setLoading(false);
            }
        };

        fetchCountryData();
    }, [namee]);

    //* This function provides access to googlemaps URL from API in a separate page.
    const handleMapClick = (mapUrl) => {
        window.open(mapUrl, "_blank");
    };

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
                <Container
                    className="text-center d-flex justify-content-center align-items-center"
                    style={{ minHeight: "50vh" }}
                >
                    <div>
                        <div
                            className="modern-spinner"
                            style={{ margin: "0 auto" }}
                        ></div>
                        <p
                            className="mt-3"
                            style={{ color: "var(--text-primary)" }}
                        >
                            Loading country details...
                        </p>
                    </div>
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
                <Container className="text-center d-flex justify-content-center">
                    <div
                        className="modern-alert modern-alert-danger"
                        style={{ maxWidth: "500px" }}
                    >
                        <h4 style={{ marginBottom: "16px" }}>Error!</h4>
                        <p style={{ marginBottom: "20px" }}>{error}</p>
                        <div
                            style={{
                                display: "flex",
                                gap: "12px",
                                justifyContent: "center",
                                flexWrap: "wrap",
                            }}
                        >
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
                            <button
                                className="modern-btn"
                                onClick={() => navigate("/")}
                                style={{
                                    background: "var(--bg-hover)",
                                    color: "var(--text-primary)",
                                }}
                            >
                                Back to Home
                            </button>
                        </div>
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
                paddingBottom: "50px",
            }}
        >
            <Container className="text-center d-flex justify-content-center">
                {ülke.map((a) => {
                    const {
                        name,
                        capital,
                        currencies,
                        languages,
                        region,
                        population,
                        maps,
                        translations,
                        flags,
                    } = a;
                    if (name.common === namee) {
                        return (
                            <div
                                key={name.common}
                                className="w-100"
                                style={{ maxWidth: "600px" }}
                            >
                                <div
                                    className="modern-card"
                                    style={{ padding: "0" }}
                                >
                                    <div
                                        style={{
                                            height: "300px",
                                            overflow: "hidden",
                                            position: "relative",
                                        }}
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
                                                    "https://via.placeholder.com/600x300?text=Flag+Not+Found";
                                            }}
                                        />
                                    </div>
                                    <div style={{ padding: "40px" }}>
                                        <h1
                                            style={{
                                                color: "var(--text-primary)",
                                                marginBottom: "30px",
                                                fontWeight: "700",
                                            }}
                                        >
                                            {name.common}
                                        </h1>

                                        <div
                                            style={{
                                                textAlign: "left",
                                                marginBottom: "30px",
                                            }}
                                        >
                                            {translations?.tur?.official && (
                                                <div
                                                    style={{
                                                        marginBottom: "16px",
                                                    }}
                                                >
                                                    <strong
                                                        style={{
                                                            color: "var(--text-secondary)",
                                                        }}
                                                    >
                                                        Turkish translation:
                                                    </strong>
                                                    <span
                                                        style={{
                                                            color: "var(--text-primary)",
                                                            marginLeft: "8px",
                                                        }}
                                                    >
                                                        {
                                                            translations.tur
                                                                .official
                                                        }
                                                    </span>
                                                </div>
                                            )}

                                            <div
                                                style={{ marginBottom: "16px" }}
                                            >
                                                <strong
                                                    style={{
                                                        color: "var(--text-secondary)",
                                                    }}
                                                >
                                                    Population:
                                                </strong>
                                                <span
                                                    style={{
                                                        color: "var(--text-primary)",
                                                        marginLeft: "8px",
                                                    }}
                                                >
                                                    {population?.toLocaleString() ||
                                                        "N/A"}
                                                </span>
                                            </div>

                                            <div
                                                style={{ marginBottom: "16px" }}
                                            >
                                                <strong
                                                    style={{
                                                        color: "var(--text-secondary)",
                                                    }}
                                                >
                                                    Currencies:
                                                </strong>
                                                <span
                                                    style={{
                                                        color: "var(--text-primary)",
                                                        marginLeft: "8px",
                                                    }}
                                                >
                                                    {currencies &&
                                                    Object.keys(currencies)
                                                        .length > 0
                                                        ? Object.values(
                                                              currencies
                                                          )
                                                              .map(
                                                                  (
                                                                      curr,
                                                                      index
                                                                  ) =>
                                                                      index ===
                                                                      0
                                                                          ? curr.name
                                                                          : `, ${curr.name}`
                                                              )
                                                              .join("")
                                                        : "N/A"}
                                                </span>
                                            </div>

                                            {capital && capital.length > 0 && (
                                                <div
                                                    style={{
                                                        marginBottom: "16px",
                                                    }}
                                                >
                                                    <strong
                                                        style={{
                                                            color: "var(--text-secondary)",
                                                        }}
                                                    >
                                                        Capital:
                                                    </strong>
                                                    <span
                                                        style={{
                                                            color: "var(--text-primary)",
                                                            marginLeft: "8px",
                                                        }}
                                                    >
                                                        {capital[0]}
                                                    </span>
                                                </div>
                                            )}

                                            <div
                                                style={{ marginBottom: "16px" }}
                                            >
                                                <strong
                                                    style={{
                                                        color: "var(--text-secondary)",
                                                    }}
                                                >
                                                    Region:
                                                </strong>
                                                <span
                                                    style={{
                                                        color: "var(--text-primary)",
                                                        marginLeft: "8px",
                                                    }}
                                                >
                                                    {region || "N/A"}
                                                </span>
                                            </div>

                                            <div
                                                style={{ marginBottom: "30px" }}
                                            >
                                                <strong
                                                    style={{
                                                        color: "var(--text-secondary)",
                                                    }}
                                                >
                                                    Languages:
                                                </strong>
                                                <span
                                                    style={{
                                                        color: "var(--text-primary)",
                                                        marginLeft: "8px",
                                                    }}
                                                >
                                                    {languages &&
                                                    Object.values(languages)
                                                        .length > 0
                                                        ? Object.values(
                                                              languages
                                                          )
                                                              .map(
                                                                  (
                                                                      language,
                                                                      index
                                                                  ) =>
                                                                      index ===
                                                                      0
                                                                          ? language
                                                                          : `, ${language}`
                                                              )
                                                              .join("")
                                                        : "N/A"}
                                                </span>
                                            </div>
                                        </div>

                                        <div
                                            style={{
                                                display: "flex",
                                                gap: "16px",
                                                justifyContent: "center",
                                                flexWrap: "wrap",
                                            }}
                                        >
                                            <button
                                                className="modern-btn modern-btn-primary"
                                                onClick={() =>
                                                    handleMapClick(
                                                        maps?.googleMaps
                                                    )
                                                }
                                                disabled={!maps?.googleMaps}
                                            >
                                                View on Google Maps
                                            </button>

                                            <button
                                                className="modern-btn"
                                                onClick={() => navigate("/")}
                                                style={{
                                                    background:
                                                        "var(--bg-hover)",
                                                    color: "var(--text-primary)",
                                                }}
                                            >
                                                Back to Home
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    }
                    return null;
                })}
            </Container>
        </div>
    );
};
export default Details;
