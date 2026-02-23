import React, { useState, useRef, useEffect } from 'react'
import { Send, ArrowRight, Pizza, Menu, User } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const Dashboard = ({ onLogout }) => {
    const [username, setUsername] = useState('')
    const [messages, setMessages] = useState([])
    const [input, setInput] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const messagesEndRef = useRef(null)
    const navigate = useNavigate()

    useEffect(() => {
        const storedUsername = localStorage.getItem('username')
        if (storedUsername) {
            setUsername(storedUsername)
            setMessages([
                { role: 'assistant', content: `Welcome back, Chef ${storedUsername}. Our forensic palate is primed. What secret reviews shall we decode today?` }
            ])
        } else {
            setMessages([
                { role: 'assistant', content: 'Explore the futuristic taste of our reviews. How can I guide you today?' }
            ])
        }
    }, [])

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages])

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!input.trim() || isLoading) return

        const userMessage = { role: 'user', content: input }
        setMessages(prev => [...prev, userMessage])
        setInput('')
        setIsLoading(true)

        try {
            const response = await fetch('http://localhost:8000/query', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ question: input })
            })

            if (!response.ok) throw new Error('API Error')

            const data = await response.json()
            setMessages(prev => [...prev, { role: 'assistant', content: data.response }])
        } catch (error) {
            setMessages(prev => [...prev, { role: 'assistant', content: 'Connection failed. Is the chef in the kitchen? (Backend error)' }])
        } finally {
            setIsLoading(false)
        }
    }

    const handleLogoutClick = () => {
        onLogout()
        navigate('/')
    }

    return (
        <div className="main-layout">
            {/* Decorative Background Text */}
            <div className="bg-decorative-text">
                PIZZ<br />RAG
            </div>

            {/* Hero Section */}
            <div className="hero-section">
                <header className="logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
                    PIZZA<span>(AI)</span>LAB
                </header>

                <div className="hero-content">
                    <div className="user-profile-badge">
                        <User size={14} />
                        <span>CHEF_{username.toUpperCase()}</span>
                    </div>
                    <h2>Taste the<br />Future.</h2>
                    <p>
                        A high-tech approach to restaurant intelligence.
                        Analyze thousands of hidden flavors through our advanced neural palate.
                    </p>

                    <button className="discover-btn">
                        Discover
                        <div className="arrow">
                            <ArrowRight size={14} />
                        </div>
                    </button>
                </div>

                <div style={{ marginTop: 'auto', display: 'flex', gap: '2rem', fontSize: '0.8rem', color: 'rgba(255,255,255,0.3)' }}>
                    <div>NEW RELEASE 2026</div>
                    <div>POWERED BY OLLAMA</div>
                    <div
                        onClick={handleLogoutClick}
                        style={{ marginLeft: 'auto', cursor: 'pointer', textDecoration: 'underline' }}
                    >
                        LOGOUT
                    </div>
                </div>
            </div>

            {/* Chat Panel */}
            <aside className="chat-panel">
                <div className="chat-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3>NEURAL CHAT</h3>
                    <Menu size={20} style={{ opacity: 0.5, cursor: 'pointer' }} />
                </div>

                <div className="messages-list">
                    {messages.map((msg, idx) => (
                        <div key={idx} className={`message ${msg.role}`}>
                            {msg.content}
                        </div>
                    ))}
                    {isLoading && (
                        <div className="message assistant" style={{ background: 'transparent', border: 'none' }}>
                            <div className="loading-dots">
                                <div className="dot"></div>
                                <div className="dot"></div>
                                <div className="dot"></div>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                <form className="input-area" onSubmit={handleSubmit}>
                    <div className="input-container">
                        <input
                            type="text"
                            placeholder="Query the database..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            disabled={isLoading}
                        />
                        <button className="send-btn" type="submit" disabled={isLoading || !input.trim()}>
                            <Send size={18} />
                        </button>
                    </div>
                </form>
            </aside>
        </div>
    )
}

export default Dashboard;
