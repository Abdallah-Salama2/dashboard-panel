# 🚀 Modern Dashboard Panel

## A responsive and dynamic admin dashboard built with React, Vite, and Context API, featuring a mock backend powered by JSON Server.

## 🚀 Live Demo

- Frontend (Vercel): https://dashboard-panel-zeta.vercel.app/

- Backend API (Railway): https://dashboard-panel-production-e50c.up.railway.app/

-Test Credentials (UserName:Alas21,Pass:123)

## 📂 Project Structure

The project follows a modular architecture for scalability and clean code management:

- **src/components/**
  Reusable UI components such as Cards, Tables, Navigation Bar, and SideBar.

- **src/context/**
  Global state management using React Context API:
  - `AuthContext` for handling user sessions
  - `DashboardContext` for sharing dashboard data across components

- **src/pages/**
  Main application views:
  - **Dashboard**: Includes sections like `StatsSection` and `StoresSection`
  - **Login**: Secure entry point for authentication
  - **Settings**: User configuration page

- **src/services/**
  Contains `api.js` for handling all asynchronous HTTP requests using Axios.

- **db.json**
  Acts as the local database for JSON Server.

---

## 🛠️ How to Run Locally

Follow these steps to set up and run the project:

### 1. Clone the repository

```bash
git clone https://github.com/Abdallah-Salama2/dashboard-panel.git
cd dashboard-panel
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the Mock Server (JSON Server)

In a separate terminal:

```bash
npx json-server --watch db.json --port 5000
```

### 4. Start the Development Server

```bash
npm run dev
```

Open your browser and visit:

```
http://localhost:5173
```

---

## 🏗️ How to Build & Deploy

### Build for Production

```bash
npm run build
```

This will generate a `dist` folder containing optimized static files.

### Deployment

- **Frontend**: Deploy the `dist` folder using platforms like:
  - Vercel
  - Netlify
  - GitHub Pages

- **Backend**: Since this project uses JSON Server, you can deploy `db.json` using:
  - Railway
  - Render
  - My JSON Server

---

## 💻 Tech Stack

- **Frontend**: React.js (Vite)
- **Styling**: CSS Modules / Bootstrap
- **State Management**: Context API
- **Data Fetching**: Axios
- **Mock Backend**: JSON Server

---

## 📌 Notes

- Ensure the JSON Server is running before using the dashboard to avoid API errors.
- You can modify `db.json` to simulate different datasets for testing.

---

## 📄 License

This project is open-source and available under the MIT License.
