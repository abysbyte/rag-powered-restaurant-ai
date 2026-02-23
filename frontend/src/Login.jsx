import React, { useState } from 'react';
import { LogIn, Lock, User, Pizza } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            const response = await fetch('http://localhost:8000/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.detail || 'Login failed');
            }

            // Store session
            localStorage.setItem('token', data.access_token);
            localStorage.setItem('username', data.username);

            onLogin(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="login-container">
            <div className="login-glass-card">
                <div className="login-header">
                    <div className="login-logo">
                        <Pizza size={40} color="#ec4899" />
                        <h1>PIZZA<span>(AI)</span>LAB</h1>
                    </div>
                    <p>Access the neural palate</p>
                </div>

                <form onSubmit={handleLogin} className="login-form">
                    <div className="form-group">
                        <div className="input-with-icon">
                            <User size={18} className="input-icon" />
                            <input
                                type="text"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="input-with-icon">
                            <Lock size={18} className="input-icon" />
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    {error && <div className="login-error">{error}</div>}

                    <button type="submit" className="login-btn" disabled={isLoading}>
                        {isLoading ? (
                            <div className="loading-dots">
                                <div className="dot"></div>
                                <div className="dot"></div>
                                <div className="dot"></div>
                            </div>
                        ) : (
                            <>
                                AUTHENTICATE <LogIn size={18} />
                            </>
                        )}
                    </button>
                </form>

                <div className="login-footer">
                    <p>FOR AUTHORIZED CHEFS ONLY</p>
                    <div className="footer-line"></div>
                    <div style={{ marginTop: '1.5rem', fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)' }}>
                        NEW RECRUIT? <span
                            onClick={() => navigate('/signup')}
                            style={{ color: 'var(--accent-purple)', cursor: 'pointer', fontWeight: '600', textDecoration: 'underline' }}
                        >
                            CREATE ACCOUNT
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
