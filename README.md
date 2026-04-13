# Clinton Omondi - Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. This portfolio showcases my projects, skills, and professional experience as a software developer.

## 🚀 Live Demo

Visit the live portfolio: [https://clintoke.github.io/Portfolio/](https://clintoke.github.io/Portfolio/)

## 🛠️ Built With

- **React 18** - Modern React with functional components and hooks
- **TypeScript** - Type-safe JavaScript for better development experience
- **Tailwind CSS** - Utility-first CSS framework for rapid styling
- **Vite** - Fast build tool and development server
- **Lucide React** - Beautiful, customizable icons
- **GitHub Pages** - Automated deployment and hosting

## ✨ Features

- 🎨 **Modern Design** - Clean, professional, and responsive layout
- 🌙 **Dark Theme** - Elegant dark color scheme with purple accents
- 📱 **Mobile Responsive** - Optimized for all device sizes
- ⚡ **Fast Performance** - Optimized build with Vite
- 🎯 **Interactive Animations** - Smooth transitions and hover effects throughout
- 💼 **Projects Showcase** - Grid layout with project cards and live demos
- 💬 **Client Testimonials** - Section highlighting client feedback
- 📝 **Blog Section** - Latest posts with categories and read times
- 📧 **Contact Form** - Integrated contact form with Web3Forms
- 🔗 **Social Links** - GitHub, Twitter/X, LinkedIn, Instagram, and email

## 📂 Project Structure

```
src/
├── components/
│   ├── layout/          # Layout components (Navbar, Footer)
│   ├── sections/        # Main sections (Hero, About, Projects, etc.)
│   └── ui/              # Reusable UI components (Button, Card, etc.)
├── context/             # React context for theme management
├── utils/               # Utility functions and constants
└── App.tsx              # Main application component
```

## 🏗️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/ClintoKe/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the portfolio

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## 🎨 Customization

### Theme Configuration
The theme system supports both light and dark modes with automatic system preference detection. Colors are defined in `tailwind.config.js` and can be easily customized.

### Content Updates
- **Personal Information**: Update in `src/utils/constants.ts`
- **Projects**: Modify the projects array in `src/components/sections/Projects.tsx`
- **Testimonials**: Edit testimonials in `src/components/sections/Testimonials.tsx`
- **Blog Posts**: Update blog posts in `src/components/sections/Blog.tsx`
- **Skills**: Update skills in `src/components/sections/Skills.tsx`
- **Experience**: Edit experience data in `src/components/sections/Experience.tsx`

## 🚀 Deployment

This portfolio is automatically deployed to GitHub Pages using GitHub Actions. The deployment workflow:

1. Triggers on push to `master` branch
2. Installs dependencies and builds the project
3. Deploys to GitHub Pages

To deploy to your own GitHub Pages:

1. Fork this repository
2. Enable GitHub Pages in repository settings
3. Set source to "GitHub Actions"
4. Push changes to trigger deployment

## 🤝 Contributing

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

Clinton Omondi - [GitHub](https://github.com/ClintoKe)

Project Link: [https://github.com/ClintoKe/Portfolio](https://github.com/ClintoKe/Portfolio)

---

⭐ Star this repository if you found it helpful!