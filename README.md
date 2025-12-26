# healthwallet
HealthWallet is a full-stack web app that allows users to securely store medical reports, view health vitals, and manage their personal health data.
healthwallet/
│
├── client/          
│   └── src/
│       ├── pages/   
│       ├── components/
│       ├── styles/
│       └── App.jsx
│
├── server/         
│   ├── server.js
│   ├── db.js
│   └── uploads/    
│
└── README.md
It is built using:
React (Vite) — Frontend
Node.js + Express — Backend API
SQLite — Database
Multer — File uploads

Features:
1.User Authentication
2.Register new users
3.Secure login
4.Prevent duplicate accounts
5.Logout with session clearing

Dashboard:
1.Visual overview of health vitals:
2.Heart rate
3.Blood pressure
4.Blood sugar
5.Oxygen level
6.Weight
7.Temperature

Upload Medical Reports:
1.Upload PDF / JPG / PNG files
2.Enter report title, type, and date
3.Files stored on backend securely

Reports Page:
1.View list of uploaded reports
2.Future enhancements: view, download, delete

Navigation:
1.Sidebar navigation for quick access
2.Protected routes (only logged-in users can access app pages)

Installation & Setup:
1.Clone the repository
git clone <your-repo-url>
cd healthwallet

2️.Install & run backend (Server)
cd server
npm install
mkdir uploads
node server.js
Server runs at:
http://localhost:5000

3️.Install & run frontend (Client)
Open new terminal:
cd client
npm install
npm run dev
Frontend runs at:

http://localhost:5173

 API Endpoints:
Authentication
POST /api/register
POST /api/login

Reports
POST /api/reports     (file upload)
Uploads are stored in:
server/uploads/
