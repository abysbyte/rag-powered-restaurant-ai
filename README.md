# 🍕 PIZZA(AI)LAB - RAG with Ollama & LangChain

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
  <video src="./frontend/public/video/Recording 2026-02-23 230323.mp4" width="100%" controls="controls"></video>
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

## 🚀 Quick Start Guide

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
