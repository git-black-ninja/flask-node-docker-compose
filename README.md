# Node + Flask Full-Stack App (Docker Compose)

A simple full-stack application with:

- **Frontend:** Node.js + Express
- **Backend:** Flask (Python)
- **Containerization:** Docker & Docker Compose

---

## 📂 Project Structure

project-root/
├── frontend/ # Node.js + Express app
│ ├── Dockerfile
│ └── ...
├── backend/ # Flask app
│ ├── Dockerfile
│ └── ...
├── docker-compose.yml
└── README.md

---

## 🚀 Setup & Run

### 1️⃣ Clone the Repository
```bash
git clone git@github.com:<your-username>/node-flask-docker-compose.git
cd node-flask-docker-compose
```

### Build & Start Containers

```bash
docker-compose up --build
```

This will:

Build images for frontend and backend

Run both services on the same Docker network

### 3️⃣ Access the App

Frontend: http://localhost:3000

Backend API: http://localhost:5000
