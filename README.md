🚀 AI Cover Letter Generator
An AI-powered full-stack web application that generates professional and personalized cover letters using artificial intelligence.
Users can enter job details and upload their resume to instantly receive a high-quality, tailored cover letter.

🌐 Live Demo:
👉 https://ai-cover-letter-frontend.vercel.app/

✨ Key Features
🤖 AI-generated cover letters using Google Gemini

📝 Custom inputs: Name, Job Role, Company & Skills

📄 Resume upload (PDF supported)

⚡ Fast, responsive, and user-friendly interface

🔐 Secure backend with environment variables

🌍 Full-stack architecture (Frontend + Backend)

🛠 Tech Stack
Frontend
HTML

CSS

JavaScript

React

Backend
Node.js

Express.js

Google Gemini AI API

Tools & Platforms
Git & GitHub

VS Code

Vercel (Frontend Deployment)

Render / Cloud Platform (Backend Deployment)

📁 Project Structure
pgsql
Copy code
ai-cover-letter-generator
│
├── backend
│ ├── server.js
│ ├── routes
│ ├── package.json
│ └── .env (ignored)
│
├── public
├── src
├── package.json
└── README.md
⚙️ Local Setup & Installation
1️⃣ Clone the repository
bash
Copy code
git clone https://github.com/kbdev-00/ai-cover-letter-generator.git
cd ai-cover-letter-generator
2️⃣ Backend Setup
bash
Copy code
cd backend
npm install
Create a .env file:

env
Copy code
PORT=5000
GEMINI_API_KEY=your_gemini_api_key_here
Run backend:

bash
Copy code
npm start
3️⃣ Frontend Setup
bash
Copy code
npm install
npm start
🔗 API Endpoint
bash
Copy code
POST /generate-cover-letter
Request:
FormData (name, role, company, skills, resume)

Response:
AI-generated cover letter text

🚀 Deployment
Frontend: Deployed on Vercel

Backend: Can be deployed on Render / Cloud platforms

Live Project:
👉 https://ai-cover-letter-frontend.vercel.app/

📌 Future Enhancements
📄 Download cover letter as PDF

🎨 Multiple templates & tones

👤 User authentication & history

☁️ Scalable cloud deployment

👨‍💻 Author
Ketan Bhaskar

GitHub: https://github.com/kbdev-00

LinkedIn: https://www.linkedin.com/in/ketan-bhaskar-70b66335a

📜 License
This project is developed for learning, internship, and portfolio purposes.
