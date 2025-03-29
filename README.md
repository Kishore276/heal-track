# heal-track

Project Bolt is an innovative healthcare web application designed to streamline patient and doctor interactions. Built using React, TypeScript, and Tailwind CSS, it features interactive and user-friendly dashboards for both patients and doctors. The project is optimized for fast performance with Vite and supports mobile access through Expo by generating a QR code.

The primary goal of Project Bolt is to enhance healthcare management efficiency by providing easy access to patient data, medical records, and appointment tracking. With its mobile compatibility, healthcare professionals and patients can access the system on the go, making it versatile and practical.

✨ Features
Interactive Dashboards: Separate views for patients and doctors to manage medical records and appointments.

User Authentication: Secure login and role-based access for doctors and patients.

Mobile Access: Generate a QR code to access the app via the Expo Go app.

Responsive Design: Built with Tailwind CSS to ensure a smooth experience on various devices.

High Performance: Uses Vite for fast builds and live reloading.

Type Safety: Leverages TypeScript to reduce runtime errors and improve maintainability.

🌐 Live Demo
Access the app online via Vercel: Project Bolt on Vercel

📱 Mobile App Download
Download the mobile app (APK - Android): Download APK

🛠️ Technologies Used
Frontend: React, TypeScript, Tailwind CSS, Vite

Backend: Node.js

Mobile: Expo (development), APK built using Median

QR Code Generation: qrcode-terminal

Deployment: Vercel (web), Median (APK)

🚀 Getting Started
Prerequisites
Node.js (v18 or higher recommended)

Expo Go app installed on your mobile device

Installation
Clone the repository:

bash
Copy
Edit
git clone <repository-url>
cd project-bolt/project
Install dependencies:

bash
Copy
Edit
npm install
Run the development server:
bash
Copy
Edit
npm run dev
📱 Generating QR Code for Mobile Access
To access the app on your mobile device:

Install the QR code terminal package:

bash
Copy
Edit
npm install qrcode-terminal
Run the QR code generator script:

bash
Copy
Edit
node generate_qr.js
Scan the displayed QR code with the Expo Go app.

⚠️ Troubleshooting
Ensure Node.js is correctly installed.

If QR code generation fails, reinstall the qrcode-terminal package.

Make sure your phone and PC are on the same Wi-Fi network when accessing via Expo.

📄 License
This project is licensed under the MIT License.
