# 🍕Resturant Analysis - RAG with Ollama & LangChain

<div align="center">
  <img alt="FastAPI" src="https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi" />
  <img alt="React" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img alt="Vite" src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" />
  <img alt="Ollama" src="https://img.shields.io/badge/Ollama-black?style=for-the-badge&logo=ollama&logoColor=white" />
</div>
<br>

Welcome to **PIZZA(AI)LAB**, a modern, interactive web application that leverages Retrieval-Augmented Generation (RAG) using Ollama, LangChain, and a FastAPI backend with a beautiful Glassmorphism React frontend!

---

## 🎥 Demo Experience

<div align="center">
  <video src="https://github.com/abysbyte/PIZZA-AI-LAB---RAG-with-Ollama---LangChain/raw/main/demo.mp4" width="100%" controls="controls" muted="muted"></video>
</div>

---

## ✨ Features

<details>
<summary><b>🎨 Premium Frontend (Glassmorphism UI)</b></summary>
<br>

- Built with **React** and **Vite** for blazing fast performance.
- Modern **Dark Mode** aesthetic with purple and magenta accents.
- Responsive, asymmetrical layout with an interactive chat panel.

</details>

<details>
<summary><b>🧠 Advanced AI Backend (RAG)</b></summary>
<br>

- Powered by **FastAPI** for high-performance API endpoints.
- Uses **LangChain** and **Ollama** (`llama3.2:1b`) for intelligent, context-aware responses.
- Vector retrieval built on realistic restaurant reviews data.

</details>

<details>
<summary><b>🔒 Secure Authentication</b></summary>
<br>

- Full JWT-based user authentication (Signup/Login).
- Secure password hashing with bcrypt and SQLAlchemy database integration.

</details>

---

## � Workflow Architecture

### System Overview
```
┌─────────────────────────────────────────────────────────────────┐
│                     PIZZA(AI)LAB Workflow                       │
└─────────────────────────────────────────────────────────────────┘

                    ┌──────────────────┐
                    │  React Frontend  │
                    │  (Vite + React)  │
                    └────────┬─────────┘
                             │
                             ↓
                    ┌──────────────────┐
                    │   FastAPI REST   │
                    │   API Endpoints  │
                    └────────┬─────────┘
                             │
                ┌────────────┼────────────┐
                │            │            │
                ↓            ↓            ↓
            ┌────────┐ ┌──────────┐ ┌──────────┐
            │  Auth  │ │   RAG    │ │ Database │
            │  Flow  │ │ Pipeline │ │ (SQLite) │
            └────────┘ └──────────┘ └──────────┘
```

### Detailed Workflow Stages

#### 1️⃣ **User Authentication Flow**
```
User Input (Signup/Login)
    ↓
Frontend Form Submission
    ↓
FastAPI Endpoint (/auth/signup or /auth/login)
    ↓
Password Hashing (bcrypt)
    ↓
SQLite Database Validation
    ↓
JWT Token Generation (24-hour expiry)
    ↓
Token Returned to Frontend
    ↓
Token Stored in Local Storage
```

#### 2️⃣ **Query Processing & RAG Pipeline**
```
User Question Input
    ↓
Frontend sends Query → FastAPI Endpoint (/query)
    ↓
JWT Token Verification
    ↓
Question Pre-processing
    ↓
Vector Embedding Generation (Ollama: mxbai-embed-large)
    ↓
Semantic Search in Chroma Vector Store
    ↓
Retrieve Top 3 Relevant Restaurant Reviews (k=3)
    ↓
LangChain Prompt Template Creation
    ↓
Ollama LLM Processing (llama3.2:1b)
    ↓
Context-Aware Response Generation
    ↓
Response Formatting & JSON Return
    ↓
Frontend Display in Chat Panel
```

#### 3️⃣ **Data Flow Breakdown**

| Stage | Component | Purpose |
|-------|-----------|---------|
| **Input** | React Frontend | User enters question/text |
| **Transmission** | HTTP/REST API | Secure data transfer with JWT |
| **Validation** | FastAPI Middleware | Token verification & CORS handling |
| **Vector Processing** | Ollama Embeddings | Convert text → semantic vectors |
| **Retrieval** | Chroma Vector DB | Search & retrieve relevant reviews |
| **LLM Processing** | Ollama LLM (llama3.2:1b) | Generate intelligent responses |
| **Output** | FastAPI Response | JSON formatted result |
| **Display** | React Components | Render response in UI |

#### 4️⃣ **Data Sources & Storage**

```
realistic_restaurant_reviews.csv
    ↓
Vector Embedding (First Run Only)
    ↓
Stored in: chrome_langchain_db/ (Chroma Collection)
    ↓
Persistent Across Sessions
    ↓
Retrieved on Every Query
```

#### 5️⃣ **Complete Request-Response Cycle**

```
┌─ FRONTEND ────────────────────────────────────────────┐
│                                                        │
│  1. User enters question                              │
│  2. JWT token added to request headers                │
│  3. HTTP POST to /api/query endpoint                  │
│                                                        │
└────────────────────────┬────────────────────────────┘
                         │
                    (HTTP Request)
                         │
                         ↓
┌─ BACKEND (FastAPI) ───────────────────────────────────┐
│                                                        │
│  1. Verify JWT token                                  │
│  2. Extract question from request body                │
│  3. Generate embeddings (Ollama)                      │
│  4. Query Chroma vector store (k=3)                   │
│  5. Format context with reviews                       │
│  6. Call Ollama LLM with prompt + context             │
│  7. Collect AI-generated response                     │
│                                                        │
└────────────────────────┬────────────────────────────┘
                         │
                    (HTTP Response)
                         │
                         ↓
┌─ FRONTEND ────────────────────────────────────────────┐
│                                                        │
│  1. Receive JSON response                             │
│  2. Parse AI answer                                   │
│  3. Update chat UI with message                       │
│  4. Display in chat panel                             │
│                                                        │
└────────────────────────────────────────────────────────┘
```

---

## �🚀 Quick Start Guide

Follow these steps to get the application running locally!

### 1. Prerequisites
- Python 3.9+
- Node.js 18+
- [Ollama](https://ollama.com/) installed and running locally with the `llama3.2:1b` model pulled:
  ```bash
  ollama run llama3.2:1b
  ```

### 2. Backend Setup
<details>
<summary><i>👉 Click to expand Backend Instructions</i></summary>
<br>

1. Navigate to the root directory.
2. Create and activate a virtual environment (optional but recommended):
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```
3. Install dependencies:
   ```bash
   pip install fastapi uvicorn sqlalchemy passlib bcrypt python-jose langchain-ollama langchain-core langchain-chroma
   ```
4. Run the FastAPI server:
   ```bash
   python app.py
   ```
   The backend will start at `http://localhost:8000`.
</details>

### 3. Frontend Setup
<details>
<summary><i>👉 Click to expand Frontend Instructions</i></summary>
<br>

1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
2. Install Node dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```
   The frontend will start at `http://localhost:5173`.
</details>

---

## 📂 Project Structure

```text
📦 RAG-with-ollama
 ┣ 📂 frontend               # React + Vite UI setup
 ┃ ┣ 📂 src                  # Frontend source code (Components, Pages, etc.)
 ┃ ┗ 📜 package.json         # Node dependencies
 ┣ 📜 app.py                 # Main FastAPI application & Endpoints
 ┣ 📜 database.py            # SQLAlchemy Database setup & User Models
 ┣ 📜 vector.py              # LangChain Document Loading & Vector Store setup
 ┣ 📜 users.db               # SQLite database file
 ┗ 📜 realistic_restaurant_reviews.csv # Dataset for RAG implementation
```

---

## 🤝 Acknowledgments

*Made with ❤️ by NORTHBLEU VISHAL.*
