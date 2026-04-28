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

## ⚠️ Missing / Future Improvements

This project currently does NOT include:

### 🔥 Advanced Features (Planned)
- Firebase Firestore (real backend database)
- Role-based access control (Admin / Doctor / Staff)
- Real-time patient updates
- Appointment booking system
- Push notifications via Firebase Cloud Messaging (FCM)
- Email notifications system
- Audit logs / activity tracking

---

### 📲 PWA Enhancements
- Offline mode support
- Background sync
- Full mobile app-like experience

---

### 🧠 UX Improvements
- Toast notification system (instead of browser alerts)
- Loading skeletons for data fetching
- Better error handling UI
- Dark mode support

---

## 📦 Installation

```bash
git clone https://github.com/your-username/healthcare-saas.git
cd healthcare-saas
npm install
npm run dev