# 🌍 Countries React App

Modern and user-friendly country information application. Provides detailed information about world countries using REST Countries API.

## ✨ Features

-   🔍 **Country Search**: Search by country names
-   📱 **Responsive Design**: Mobile and desktop compatible
-   🌐 **Detailed Information**: Capital, population, currency, language information for each country
-   🗺️ **Google Maps Integration**: View countries on Google Maps
-   ⚡ **Modern React**: React 18, React Router 6, Bootstrap 5
-   🎨 **Beautiful UI**: Modern interface with React Bootstrap
-   🌙 **Dark/Light Theme**: Theme switching capability
-   🎯 **Modern Design**: Gradient buttons, shadows, animations

## 🚀 Installation

1. Clone the project:

```bash
git clone <repository-url>
cd countries-react-app
```

2. Install dependencies:

```bash
npm install
```

3. Start the application:

```bash
npm start
```

4. Open `http://localhost:3000` in your browser.

## 🛠️ Technologies

-   **React 18.2.0** - UI framework
-   **React Router 6.21.3** - Page routing
-   **Bootstrap 5.3.3** - CSS framework
-   **React Bootstrap 2.10.0** - Bootstrap React components
-   **React Icons 5.0.1** - Icons
-   **REST Countries API** - Country data

## 📁 Project Structure

```
src/
├── components/
│   ├── footer/
│   └── navbar/
├── contexts/
│   └── ThemeContext.js
├── pages/
│   ├── home/
│   ├── about/
│   ├── details/
│   └── notFound/
├── styles/
│   └── themes.css
├── App.js
└── index.js
```

## 🔧 API Usage

The application uses [REST Countries API](https://restcountries.com/):

-   All countries: `https://restcountries.com/v3.1/all`
-   Country details: `https://restcountries.com/v3.1/name/{countryName}`

## 🎯 Features

### Home Page

-   List of all countries
-   Search functionality
-   Pagination (250 countries display)
-   Scroll to top button

### Details Page

-   Country flag
-   Turkish translation
-   Population information
-   Currencies
-   Capital
-   Region
-   Spoken languages
-   Google Maps link

## 🎨 Theme System

### Light Theme

-   **Primary**: `#0d6efd` (Blue)
-   **Background**: `#ffffff` (White)
-   **Cards**: `#ffffff` (White)
-   **Text**: `#212529` (Dark gray)

### Dark Theme

-   **Primary**: `#238636` (Green)
-   **Background**: `#0d1117` (Very dark)
-   **Cards**: `#21262d` (Dark gray)
-   **Text**: `#f0f6fc` (Light)

## 🐛 Bug Fixes

### v2.0.0 Updates

-   ✅ Added manifest.json file
-   ✅ Improved API error handling
-   ✅ Added loading and error states
-   ✅ Fixed filter error
-   ✅ Updated dependencies
-   ✅ Improved responsive design
-   ✅ English interface support
-   ✅ Modern color scheme with dark/light theme
-   ✅ Updated to React 18 createRoot API
-   ✅ Fixed React Router v7 warnings
-   ✅ Optimized API requests

## 📱 Responsive Design

The application works perfectly on all devices:

-   📱 Mobile (320px+)
-   📱 Tablet (768px+)
-   💻 Desktop (1024px+)

## 🚀 Deployment

### Netlify

```bash
npm run build
# Upload build folder to Netlify
```

### Vercel

```bash
npm run build
# Deploy with Vercel CLI
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Developer

Fatih Ay - [GitHub](https://github.com/fatih-ay)

---

⭐ If you liked this project, don't forget to give it a star!
