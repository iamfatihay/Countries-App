import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import Footer from "./components/footer/Footer";
import MyNavbar from "./components/navbar/MyNavbar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Details from "./pages/details/Details";
import NotFound from "./pages/notFound/NotFound";
import "./App.css";
import "./styles/themes.css";

function App() {
    //! burada navbar ve footer demirbaş olmalı, Home, About, Details sayfaları Route etiketleri ile Routes içinde belirlenmeli

    return (
        <ThemeProvider>
            <div>
                <Router
                    future={{
                        v7_startTransition: true,
                        v7_relativeSplatPath: true,
                    }}
                >
                    <MyNavbar />
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/details/:namee" element={<Details />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                    <Footer />
                </Router>
            </div>
        </ThemeProvider>
    );
}

export default App;
