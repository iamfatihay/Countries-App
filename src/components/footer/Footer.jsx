import "./Footer.css";

const Footer = () => {
    return (
        <footer
            className="modern-footer"
            style={{
                padding: "20px 0",
                textAlign: "center",
                marginTop: "auto",
                borderTop: "1px solid var(--border-color)",
            }}
        >
            <div style={{ color: "var(--text-secondary)" }}>
                <p style={{ margin: 0, fontSize: "14px" }}>
                    © 2023 Countries App - Made with ❤️ by Fatih Ay
                </p>
            </div>
        </footer>
    );
};

export default Footer;
