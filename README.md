# 🏥 Healthcare SaaS Dashboard

A modern healthcare SaaS dashboard built with **React**, **TypeScript**, **TanStack Router**, **Firebase Auth**, **shadcn/ui**, and **TailwindCSS**.  
It provides modules for managing patients, analytics, authentication, and a modern SaaS-style UI experience.

---

## 🚀 Live Demo

👉 https://healthcare-saas-demo.netlify.app

---

## ✨ Features

### 🧭 Routing (TanStack Router)
- File-based + code-based routing architecture
- Nested layouts with protected routes
- Automatic route tree management
- Dynamic navigation between modules
- Route-level authentication guard (protected pages)

---

### 🔐 Authentication (Firebase)
- Email & Password login
- Google OAuth login
- Session handling via Firebase Auth
- Protected routes (redirect to login if not authenticated)
- Error handling for invalid credentials

---

### 📊 Dashboard
- Overview stats cards:
  - Patients
  - Appointments
  - Revenue (UI mock data)
- Quick navigation to modules
- Modern SaaS-style UI cards

---

### 👨‍⚕️ Patient Management
- Interactive DataTable with:
  - Search & filtering
  - Pagination
  - Column visibility toggle
  - Sorting support
- Grid + List view toggle
- Clean responsive UI

---

### 📈 Analytics Module
- Charts powered by **Recharts**
- OPD vs IPD patient analytics
- Responsive chart container
- Clean dashboard visualization

---

### 🔔 Notifications (Web API)
- Browser notifications (Web Notification API)
- Service Worker integration
- Login success/failure notifications
- Google login feedback alerts

---

### ⚙️ Progressive Web App (PWA Foundation)
- Service Worker registered successfully
- Basic offline-ready setup
- Ready for future upgrades:
  - Push notifications (FCM)
  - Offline caching strategy
  - Installable PWA support

---

### 📱 Responsive UI
- Fully responsive SaaS layout
- Mobile + desktop optimized
- Smooth transitions and hover effects
- Modern gradient + glassmorphism design

---

## 🛠️ Tech Stack

- React 18 + TypeScript  
- Vite (build tool)  
- TanStack Router (core routing system)  
- Firebase Authentication  
- shadcn/ui (UI components)  
- TailwindCSS (styling)  
- Recharts (data visualization)  
- Lucide-react (icons)  

---

## 📦 Installation

```bash
git clone https://github.com/your-username/healthcare-saas.git
cd healthcare-saas
npm install
npm run dev