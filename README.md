# 🏆 PrizeArena – Contest Management Platform

PrizeArena is a high-performance multi-vendor contest management platform. It allows creators to host competitions, users to participate via secure payments, and admins to regulate the ecosystem.  
Built with the **MERN stack**, powered by **React 19** and **Vite**.

🌐 **Live Site:** https://prize-arena-9d7de.web.app/

---

## 📖 Project Overview

PrizeArena is a dynamic platform designed for organizing and winning contests. It features a robust **role-based dashboard system** (User, Creator, Admin) and a centralized **Leaderboard**.

The platform manages the entire contest lifecycle:

- Contest creation
- Admin approval
- User registration & payment
- Task submission
- Winner selection

---

## 🚀 Key Features

- **Role-Based Dashboards**

  - Separate dashboards for Admins, Creators, and Users

- **Contest Lifecycle Management**

  - Creators add contests → Admins approve/reject → Users register & pay → Users submit tasks

- **Integrated Leaderboard**

  - Global “Common Dashboard” showing winners ranked by total win count

- **Secure Authentication**

  - Firebase Authentication for login and registration

- **Secure Payments & Registration**

  - Users must register and pay to unlock the task submission (glass icon) button

- **Task Submission System**

  - Eligible participants can submit contest work

- **Manual Winner Selection**

  - Creators select winners after deadline; contest closes permanently

- **Creator Verification**

  - Users can request Creator status, pending Admin approval

- **User Management**

  - Admins can promote/demote user roles and manage users

- **Modern UI/UX**
  - Built with Tailwind CSS 4.0 and DaisyUI 5

---

## 🛠️ Tech Stack & Dependencies

### Frontend (Client)

**Core**

- React 19
- Vite
- React Router 7

**State & Data**

- TanStack Query (React Query) v5
- Axios

**Forms**

- React Hook Form

**Styling**

- Tailwind CSS v4
- DaisyUI v5

**UI & Animations**

- Lucide React
- React Icons
- Lottie React
- Swiper

**Dates & Alerts**

- Date-fns
- React Datepicker
- SweetAlert2
- React Toastify

**Backend Services**

- Firebase Authentication
- ImgBB (Image Hosting)

---

### Backend (Server)

- Node.js
- Express.js
- MongoDB

---

## 📦 Installation & Setup (Client)

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/prize-arena-client.git
cd prize-arena-client
```

## 📦 Installation & Setup (Client)

### 2️⃣ Install Dependencies

```bash
npm install
```

### 🔐 Environment Variables Example

```env
VITE_FIREBASE_API_KEY=your_key
VITE_IMGBB_API_KEY=your_key
```

### ▶️ Run the Development Server

```bash
npm run dev
```

## 📋 Dashboard Structures

### 🏆 Common Dashboard (Leaderboard)

- Accessible to everyone
- Displays winners ranked by total win count

### 👤 User Dashboard

- My Profile
- My Winning Contests
- My Participated Contests

### 🎨 Creator Dashboard

- Add Contest
- My Contests (edit/delete drafts, manage approved contests, pick winners)

### 🔑 Admin Dashboard

- User Management (role control)
- Creator Approval
- Contest Management (approve, reject, delete)

## 📄 License

This project is free for educational and portfolio purposes.
