# Let's Help The Next (LHTN) - Official Website

![Let's Help The Next Logo](public/logo192.png)

**A modern, accessible React SPA for a nonprofit organization supporting international students.**

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB.svg)](https://reactjs.org/)
[![Styled Components](https://img.shields.io/badge/Styled--Components-6.1.12-DB7093.svg)](https://styled-components.com/)
[![Accessibility](https://img.shields.io/badge/Accessibility-WCAG%202.1%20AA-green.svg)](https://www.w3.org/WAI/WCAG21/AA/)

## 🌟 About Let's Help The Next

Let's Help The Next (LHTN) is a nonprofit organization dedicated to providing financial assistance, scholarships, and mentorship to international students studying in the U.S. who face financial difficulties. Our mission is to make education accessible through love, support, and lifting others up.

### 🎯 Our Mission
- **Mentorship**: Providing guidance from volunteers who have navigated similar journeys
- **Financial Aid**: Scholarships for tuition, books, housing, and living expenses
- **Self-Reliance**: Teaching students employment skills, budgeting, and life management
- **Community**: Creating a home away from home for international students

## 🚀 Features

### ✨ Modern Design & UX
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop
- **Modern UI**: Clean, welcoming interface with intuitive navigation
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Design System**: Consistent spacing, typography, and color scheme

### ♿ Accessibility (WCAG 2.1 AA Compliant)
- **Semantic HTML**: Proper heading hierarchy and landmark elements
- **Keyboard Navigation**: Full keyboard accessibility for all interactive elements
- **Screen Reader Support**: ARIA labels and descriptive alt text
- **Color Contrast**: Meeting accessibility standards for readability
- **Focus Management**: Clear focus indicators and logical tab order

### 🔍 SEO Optimized
- **Meta Tags**: Comprehensive Open Graph and Twitter Card support
- **Structured Data**: JSON-LD schema for search engines
- **Sitemap**: XML sitemap for better crawling
- **Performance**: Optimized images and lazy loading

### 📝 Forms & Communication
- **Contact Form**: Accessible contact form with validation
- **Newsletter Signup**: Email subscription with EmailJS integration
- **Form Validation**: Real-time validation with clear error messages
- **Loading States**: Visual feedback during form submissions

## 🛠️ Technology Stack

- **Frontend**: React 18.3.1 with functional components and hooks
- **Styling**: Styled Components with design tokens
- **Routing**: React Router 6 for SPA navigation
- **Animations**: Framer Motion for smooth transitions
- **Email**: EmailJS for contact forms and newsletter
- **SEO**: React Helmet for meta tag management
- **Code Quality**: ESLint, Prettier, and accessibility linting

## 📦 Project Structure

```
src/
├── components/
│   ├── About-Us/           # About Us section
│   ├── ContactForm/        # Contact form component
│   ├── Footer/             # Site footer
│   ├── Header/             # Navigation header
│   ├── Hero/               # Hero section wrapper
│   ├── Layout/             # Page layout wrapper
│   ├── NewsLetterSignUp/   # Newsletter subscription
│   ├── Our-Story/          # Organization story
│   └── TeamMember/         # Team member cards
├── screens/
│   ├── Home/               # Homepage
│   ├── Get-Involved/       # Get involved page
│   ├── Our-Work/           # Our work page
│   ├── Our-Mission/        # Mission page
│   └── Welcome/            # Landing page
├── styles/
│   ├── tokens.js           # Design tokens
│   └── global.css          # Global styles
├── assets/                 # Images and static files
└── utilities/              # Helper functions
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-org/pay-it-forward.git
   cd pay-it-forward
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   REACT_APP_SERVICE_ID=your_emailjs_service_id
   REACT_APP_TEMPLATE_ID=your_emailjs_template_id
   REACT_APP_NEWSLETTER_TEMPLATE_ID=your_newsletter_template_id
   REACT_APP_PUBLIC_KEY=your_emailjs_public_key
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

   Open [http://localhost:3000](http://localhost:3000) to view the app.

## 📋 Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start development server |
| `npm build` | Build for production |
| `npm test` | Run test suite |
| `npm run lint` | Check code quality |
| `npm run lint:fix` | Fix linting issues |
| `npm run format` | Format code with Prettier |
| `npm run format:check` | Check code formatting |

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes following our code standards
4. Run tests and linting (`npm test && npm run lint`)
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

### Code Standards
- Follow ESLint and Prettier configurations
- Write accessible components with proper ARIA labels
- Include comprehensive PropTypes for components
- Add JSDoc comments for complex functions
- Maintain responsive design across all screen sizes

## 🌐 Deployment

### Build for Production
```bash
npm run build
```

The build folder contains optimized files ready for deployment to any static hosting service.

### Deployment Platforms
- **Netlify**: Drag and drop the build folder or connect your Git repository
- **Vercel**: Import your GitHub repository for automatic deployments
- **GitHub Pages**: Use the build folder with GitHub Pages action

## 📱 Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Let's Help The Next**
- Email: letshelpthenext@gmail.com
- Website: [https://letshelpthenext.org](https://letshelpthenext.org)

## 🙏 Acknowledgments

- **Mishma Buisson** - Founder and visionary behind LHTN
- **Development Team** - Kwaku Appau-Nkansah and contributors
- **International Students** - The heart of our mission
- **Volunteers and Donors** - Making our work possible

---

**"Education is the most powerful weapon which you can use to change the world." - Nelson Mandela**

*Supporting international students, one scholarship at a time.* 💙

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
