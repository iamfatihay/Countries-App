import React from "react";
import { Container } from "react-bootstrap";
import logo from "../../img/logo.gif";

const About = () => {
    return (
        <div
            style={{
                backgroundColor: "var(--bg-primary)",
                minHeight: "100vh",
                paddingTop: "100px",
                paddingBottom: "50px",
            }}
        >
            <Container>
                <div className="text-center">
                    <div
                        className="modern-card"
                        style={{
                            padding: "60px 40px",
                            maxWidth: "800px",
                            margin: "0 auto",
                        }}
                    >
                        <h1
                            style={{
                                color: "var(--text-primary)",
                                marginBottom: "30px",
                                fontWeight: "700",
                            }}
                        >
                            About Countries App
                        </h1>

                        <div
                            style={{ textAlign: "left", marginBottom: "40px" }}
                        >
                            <p
                                style={{
                                    color: "var(--text-secondary)",
                                    fontSize: "18px",
                                    lineHeight: "1.6",
                                    marginBottom: "20px",
                                }}
                            >
                                The Countries App is a comprehensive resource
                                for people who are interested in learning more
                                about different cultures, histories, and
                                geographies. With detailed information about
                                250+ countries around the world, you'll be able
                                to explore and discover new things about the
                                world we live in.
                            </p>

                            <p
                                style={{
                                    color: "var(--text-secondary)",
                                    fontSize: "18px",
                                    lineHeight: "1.6",
                                    marginBottom: "20px",
                                }}
                            >
                                You can search for any country and get detailed
                                information about its geography, culture,
                                government, population, currencies, languages,
                                and more. The app also includes interactive
                                Google Maps integration to help you better
                                understand each country's location.
                            </p>

                            <p
                                style={{
                                    color: "var(--text-secondary)",
                                    fontSize: "18px",
                                    lineHeight: "1.6",
                                    marginBottom: "30px",
                                }}
                            >
                                Additionally, we have designed the app to be
                                fully responsive and adaptable to different
                                screen sizes, featuring both light and dark
                                themes to ensure a seamless experience for all
                                users, whether they are using a phone, tablet,
                                or desktop computer. We are committed to
                                providing the best possible experience for our
                                users.
                            </p>
                        </div>

                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                marginTop: "40px",
                            }}
                        >
                            <img
                                alt="Countries App Logo"
                                src={logo}
                                style={{
                                    maxWidth: "400px",
                                    width: "100%",
                                    height: "auto",
                                    borderRadius: "12px",
                                }}
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default About;
