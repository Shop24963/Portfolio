# Karthik Santhosh - Portfolio 2025

A modern, responsive portfolio website built with the MERN stack (MongoDB, Express.js, React, Node.js) and TailwindCSS.

## 🚀 Features

- **Modern UI/UX Design** - Clean, professional design with smooth animations
- **Fully Responsive** - Works perfectly on all devices
- **MERN Stack** - Full-stack JavaScript solution
- **TailwindCSS** - Utility-first CSS framework for rapid styling
- **Contact Form** - Integrated with MongoDB for storing messages
- **Dark Theme** - Easy on the eyes with a modern dark color scheme
- **Performance Optimized** - Fast loading with Vite build tool

## 📁 Project Structure

```
portfolio-2025/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── App.jsx        # Main app component
│   │   └── index.css      # Global styles with Tailwind
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
├── server/                # Node.js backend
│   ├── index.js          # Express server
│   ├── .env              # Environment variables
│   └── package.json
├── package.json           # Root package.json
└── README.md
```

## 🛠️ Tech Stack

### Frontend
- React 19
- Vite
- TailwindCSS 4
- React Hooks (useState, useEffect)

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- CORS

### Tools
- npm
- Nodemon (for development)
- Concurrently (to run multiple commands)

## 🎯 Sections

1. **Hero** - Introduction with typing animation
2. **About** - Personal information and stats
3. **Skills** - Technical skills with progress bars
4. **Projects** - Showcase of work with GitHub links
5. **Contact** - Contact form and social links

## 🚦 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd portfolio-2025
```

2. Install dependencies
```bash
npm install
cd client && npm install
cd ../server && npm install
```

3. Set up environment variables
Create a `.env` file in the server folder:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio
```

4. Run the development servers
```bash
# From root directory
npm run dev
```

This will start both the client (port 3000) and server (port 5000).

### Build for Production

```bash
npm run build
```

## 📱 Customization

### Update Personal Information
- Edit `client/src/components/Hero.jsx` for name and title
- Edit `client/src/components/About.jsx` for bio and details
- Edit `client/src/components/Skills.jsx` for skills
- Edit `client/src/components/Projects.jsx` for projects
- Update social media links throughout the components

### Styling
- Modify colors in `client/tailwind.config.js`
- Add custom animations in the same file
- Edit global styles in `client/src/index.css`

## 🌐 Deployment

### Frontend (Vercel/Netlify)
1. Build the client: `cd client && npm run build`
2. Deploy the `client/dist` folder

### Backend (Railway/Render/Heroku)
1. Push server code to your Git provider
2. Connect to MongoDB Atlas
3. Set environment variables
4. Deploy

## 📧 Contact

- **Email**: karthiksanthosh259@gmail.com
- **GitHub**: https://github.com/karthik2428
- **LinkedIn**: https://www.linkedin.com/in/karthik-santhosh-a52068288/
- **Instagram**: https://www.instagram.com/_ka.rthi.k._/

## 📄 License

This project is open source and available under the MIT License.

---

Built with ❤️ by Karthik Santhosh
