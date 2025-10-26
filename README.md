# HealTrack

A comprehensive healthcare management application designed to streamline interactions between patients and healthcare providers. Built with modern web technologies featuring intuitive dashboards for both patients and doctors.

## 🎯 Project Overview

HealTrack is an innovative healthcare web application that enhances healthcare management efficiency by providing:

- **Easy access to patient data and medical records**
- **Streamlined appointment tracking and management**
- **Speed recovery through guided doctor instructions**
- **Mobile-friendly access for healthcare on the go**

## ✨ Features

- **🏥 Interactive Dashboards**: Separate, role-based views for patients and doctors to manage medical records and appointments
- **🔐 User Authentication**: Secure login system with role-based access control for doctors and patients
- **📱 Mobile Access**: Cross-platform compatibility with Expo integration for mobile devices
- **🎨 Responsive Design**: Built with Tailwind CSS to ensure smooth experience across all devices
- **⚡ High Performance**: Optimized with Vite for fast loading and smooth interactions
- **🛡️ Type Safety**: Built with TypeScript to reduce runtime errors and improve code maintainability

## 🌐 Live Demo

Access the app online: [HealTrack on Vercel](https://gfg-hackathon-zeta.vercel.app/)

## 🛠️ Technologies Used

- **Frontend**: React 18.2, TypeScript 5.3
- **Mobile Framework**: Expo ~51.0, React Native 0.74
- **Build Tool**: Vite 5.2
- **Styling**: Tailwind CSS 3.4
- **Icons**: Lucide React, Expo Vector Icons
- **Deployment**: Vercel (web), Expo (mobile)

## 📁 Project Structure

```plaintext
heal-track/
├── 📱 App.native.tsx         # Root Expo app component (native)
├── 📱 App.tsx                # Root web app component
├── 📄 app.json               # Expo app configuration
├── 📄 expo-entry.js          # Expo entry point
├── 📄 package.json           # Dependencies and scripts
├── 📄 vite.config.ts         # Vite configuration
├── 📄 tailwind.config.js     # Tailwind CSS configuration
├── 📄 tsconfig.json          # TypeScript configuration
├── 📄 index.html             # HTML entry point
├── 📄 eslint.config.js       # ESLint configuration
├── 📄 postcss.config.js      # PostCSS configuration
├── 📄 LICENSE                # MIT License
├── 📄 README.md              # Project documentation
├── � assets/                # Static assets
└── 📂 src/                   # Source code directory
    ├── 📱 App.tsx            # Main React app component
    ├── 📱 main.tsx           # Application entry point
    ├── 🎨 index.css          # Global styles
    ├── 📝 types.ts           # TypeScript type definitions
    ├── 📝 vite-env.d.ts      # Vite environment types
    ├── 📂 components/        # React components
    │   ├── 👨‍⚕️ DoctorDashboard.tsx        # Doctor interface (web)
    │   ├── 👨‍⚕️ DoctorDashboard.native.tsx  # Doctor interface (native)
    │   ├── 🔐 Login.tsx                  # Authentication component (web)
    │   ├── 🔐 Login.native.tsx           # Authentication component (native)
    │   ├── 👤 PatientDashboard.tsx       # Patient interface (web)
    │   ├── 👤 PatientDashboard.native.tsx # Patient interface (native)
    │   └── � ProgressBar.tsx            # Progress bar component
    ├── �📂 context/           # React context providers
    │   └── 🔐 AuthContext.tsx            # Authentication context
    └── 📂 data/              # JSON data files
        ├── 💡 careTips.json              # Healthcare tips
        ├── 💬 messages.json              # App messages
        ├── 🎯 milestones.json            # Health milestones
        ├── 🧪 tests.json                 # Medical tests data
        └── 👥 users.json                 # User data
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher recommended)
- **npm** or **yarn** package manager
- **Expo Go app** installed on your mobile device (for mobile testing)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Kishore276/heal-track.git
   cd heal-track
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server (web):

   ```bash
   npm run dev
   ```

   The web application will be available at `http://localhost:5173`

### 📱 Mobile Development

To run the app on mobile devices:

1. Start the Expo development server:

   ```bash
   npm start
   ```

2. Use the Expo Go app to scan the QR code displayed in your terminal

3. For platform-specific development:

   ```bash
   # For Android
   npm run android
   
   # For iOS
   npm run ios
   
   # For web
   npm run web
   ```

## 🏗️ Build for Production

To build the application for production:

```bash
# Build web version
npm run build

# Preview production build
npm run preview
```

## 🧪 Demo Credentials

For testing purposes, you can use the following credentials:

- **Doctor Account**:
  - Email: `doctor@healtrack.com`
  - Password: doctor123

- **Patient Account**:
  - Email: `patient@healtrack.com`
  - Password: patient123

## 🔧 Troubleshooting

### Common Issues

- **Node.js Installation**: Ensure Node.js v18+ is properly installed on your system
- **Network Connectivity**: Make sure your mobile device and development machine are on the same Wi-Fi network when using Expo
- **Dependency Issues**: Try deleting `node_modules` and running `npm install` again if you encounter package-related errors
- **Expo Go Issues**: Ensure you have the latest version of Expo Go installed on your mobile device
- **Build Errors**: Clear the cache with `npm run dev -- --force` or delete `.vite` folder

### Getting Help

If you encounter any issues:

1. Check the [Expo documentation](https://docs.expo.dev/)
2. Check the [Vite documentation](https://vitejs.dev/)
3. Review the project's [issue tracker](https://github.com/Kishore276/heal-track/issues)
4. Ensure all prerequisites are met

## 🤝 Contributing

We welcome contributions to HealTrack! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please ensure your code follows the existing style and passes all linting checks.

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## 👨‍💻 Developer

**G. Yuva Kishore Reddy**  
Passionate about AI, automation, and building impactful tech solutions.

### Contact

- **Email**: <g.yuvakishorereddy@gmail.com>
- **WhatsApp Channel**: <https://whatsapp.com/channel/0029Vb3la9V7NoZtA1GUI00d>
- **GitHub**: [@Kishore276](https://github.com/Kishore276)

---

⭐ Star this repo if you found it helpful!

**HealTrack** - Bridging the gap between patients and healthcare providers through innovative technology.

