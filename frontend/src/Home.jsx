import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Pizza, Zap, Shield, Globe } from 'lucide-react';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="home-container">
            <nav className="home-nav">
                <div className="logo">
                    PIZZA<span>(AI)</span>LAB
                </div>
                <div className="nav-links">
                    <button onClick={() => navigate('/login')} className="nav-btn-link">LOGIN</button>
                    <button onClick={() => navigate('/signup')} className="nav-btn-primary">GET STARTED</button>
                </div>
            </nav>

            <main className="home-hero">
                <div className="hero-badge">VERSION 2.0 PROTOCOL ACTIVE</div>
                <h1>The Neural Palate of the <span>Next Generation.</span></h1>
                <p>
                    Revolutionizing restaurant intelligence with hyper-advanced RAG architecture.
                    Analyze reviews, predict trends, and decode the future of gastronomy.
                </p>

                <div className="hero-cta">
                    <button onClick={() => navigate('/signup')} className="main-cta-btn">
                        INITIALIZE SESSION <ArrowRight size={20} />
                    </button>
                    <div className="cta-subtext">Free trial for authorized chefs.</div>
                </div>

                <div className="hero-features">
                    <div className="feature-card">
                        <Zap size={24} color="#a855f7" />
                        <h3>Ollama Powered</h3>
                        <p>On-device LLM processing for ultimate privacy and speed.</p>
                    </div>
                    <div className="feature-card">
                        <Shield size={24} color="#ec4899" />
                        <h3>Secure Vault</h3>
                        <p>Enterprise-grade encryption for your gastronomic data.</p>
                    </div>
                    <div className="feature-card">
                        <Globe size={24} color="#3b82f6" />
                        <h3>Global Palate</h3>
                        <p>Support for 50+ languages and regional cuisines.</p>
                    </div>
                </div>
            </main>

            <footer className="home-footer">
                <div className="footer-content">
                    <div className="footer-logo">PIZZA(AI)LAB</div>
                    <div className="footer-copyright">© 2026 NORTHBLEU VISHAL. ALL RIGHTS RESERVED.</div>
                </div>
            </footer>
        </div>
    );
};

export default Home;
