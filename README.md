# 📰 Node.js Blogging Backend - DevOps Ready

A robust and scalable backend for a blogging platform built with **Node.js**, **Express.js**, and **MongoDB**. Designed with DevOps best practices, including **Dockerization**, **environment management**, **logging**, and **CI/CD readiness**.

---

## 🚀 Features

- 🧾 RESTful API for posts, users, and authentication
- 🔒 JWT-based authentication & role-based access
- 🐳 Docker & Docker Compose support
- 📦 Environment-based configuration using `.env`
- 📈 Logging and error handling
- 🧪 Ready for CI/CD pipeline integration

---

## 🛠️ Tech Stack

- **Node.js** + **Express.js**
- **MongoDB** with Mongoose ODM
- **JWT** for authentication
- **Docker** for containerization
- **Nodemon** for development
- **dotenv** for configuration
- **Morgan** for HTTP logging

---

## 🧑‍💻 Local Development Setup

```bash
# 1. Clone the repository
git clone https://github.com/MoizAnsari-Dev/Node-Js_Blogging_Backend.git
cd Node-Js_Blogging_Backend

# 2. Install dependencies
npm install

# 3. Create .env file
cp .env.example .env
# Edit .env to include MongoDB URI, JWT secret, etc.

# 4. Start the server
npm run dev
```
## 🐳 Docker Usage
🧱 Docker Compose (Recommended)
```bash
# Build and start containers
docker-compose up --build -d

# Stop containers
docker-compose down
```
#### Ensure your ``` .env ``` file matches the Docker environment (e.g. MONGO_URI=mongodb://mongo:27017/).

## 📦 Dockerfile
A Dockerfile is included for creating a production-ready image.

```bash
docker build -t blog-backend .
docker run -p 5000:5000 blog-backend
```

## 📁 Folder Structure
```bash 
├── config/          # Database & environment configs
├── controllers/     # Business logic
├── middleware/      # Auth & error handlers
├── models/          # Mongoose models
├── routes/          # API endpoints
├── .env.example     # Sample env variables
├── Dockerfile       # Docker build config
├── docker-compose.yml
└── server.js        # App entry point
```

## 🔐 Environment Variables
Create a ``` .env ``` file based on ```.env.example```.
```bash 
PORT=5000
MONGO_URI=mongodb://localhost:27017/blogdb
JWT_SECRET=your_jwt_secret

```

## ✅ API Endpoints
#### Method	Route	Description
#### ```POST	/api/register	Register a new user```
#### ```POST	/api/login	Login & get token```
#### ```GET	/api/posts	Get all blog posts```
#### ```POST	/api/posts	Create a new post```
#### ```PUT	/api/posts/:id	Update a post```
#### ```DELETE	/api/posts/:id	Delete a post```

## 🧪 Testing
```bash
# Run tests (if configured)
npm test
```
You can integrate Jest or Mocha for unit & integration tests.

## 🤝 Contributing
### Fork the repo

1. Create your feature branch (```git checkout -b feature-name```)

2. Commit your changes (```git commit -m 'Add feature'```)

3. Push to the branch (```git push origin feature-name```)

4. Open a Pull Request

## 📄 License
### This project is licensed under the MIT License.

## 👨‍💻 Author
Moiz Ansari

```
Let me know if you'd like to include GitHub Actions, deployment steps (e.g., EC2/Nginx), or database seed scripts. I can tailor the README further based on your DevOps workflow.
```

