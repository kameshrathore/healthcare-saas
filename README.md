# Healthcare SaaS Dashboard

A modern healthcare SaaS dashboard built with **React**, **TypeScript**, **TanStack Router**, **Firebase Auth**, **shadcn/ui**, and **TailwindCSS**.  
It provides modules for managing patients, viewing analytics, authentication system, and modern UI workflows.

---

## 🚀 Live Demo

👉 https://healthcare-saas-demo.netlify.app

---

## 🚀 Features

### 🔐 Authentication (Firebase)
- Email & Password login
- Google OAuth login
- Session handling via Firebase Auth
- Protected routes (redirect to login if not authenticated)

---

### 📊 Dashboard
- Overview cards for:
  - Patients
  - Appointments
  - Revenue (UI mock)
- Quick navigation to modules

---

### 👨‍⚕️ Patient Management
- Interactive DataTable with:
  - Search & filtering
  - Pagination
  - Column visibility control
  - Sorting support

---

### 📈 Analytics Module
- Charts powered by **Recharts**
- Custom shadcn/ui chart components
- Clean dashboard visualizations

---

### 🔔 Notifications (PWA Feature)
- Browser notifications (Web Notification API)
- Service Worker integration
- Login success/failure notifications
- Google login notifications

---

### ⚙️ Progressive Web App (PWA)
- Service Worker registered
- Offline-ready foundation (basic)
- Ready for push notification upgrade (FCM)

---

### 📱 Responsive UI
- Fully responsive design
- Mobile + desktop optimized
- Modern SaaS layout

---

## 🛠️ Tech Stack

- **React 18 + TypeScript**
- **Vite** (fast build tool)
- **TanStack Router** (routing system)
- **Firebase Authentication**
- **shadcn/ui** (UI components)
- **TailwindCSS** (styling)
- **Recharts** (data visualization)
- **Lucide-react** (icons)

---


## 📦 Installation

```bash
git clone https://github.com/your-username/healthcare-saas.git
cd healthcare-saas
npm install
npm run dev