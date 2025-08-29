# Ali Pakdelnia - Full Stack Developer Portfolio 🚀

A modern, responsive, multi-language portfolio website showcasing my expertise as a Full Stack Developer and Android Developer. Built with cutting-edge technologies and optimized for SEO performance.

## 🌟 Key Features

### ✨ Multi-Language Support
- **4 Languages**: English, Persian (فارسی), Arabic (العربية), German (Deutsch)
- **Dynamic Translation**: Single HTML file with JavaScript-based translation system
- **RTL Support**: Full right-to-left layout support for Persian and Arabic
- **Language Persistence**: Remembers user's language preference

### 🎯 SEO Optimized
- **Enhanced Meta Tags**: Comprehensive SEO meta tags for all languages
- **Structured Data**: Rich schema markup for better search engine understanding
- **Open Graph**: Optimized social media sharing
- **Twitter Cards**: Enhanced Twitter sharing experience
- **Sitemap**: XML sitemap with language alternates
- **Robots.txt**: Optimized crawling directives
- **PWA Ready**: Progressive Web App support

### 📱 Responsive Design
- **Mobile-First**: Optimized for all device sizes
- **Modern UI**: Clean, professional design
- **Fast Loading**: Optimized performance
- **Accessibility**: WCAG compliant

## 🌟 Features

- **Multi-language Support**: English, Persian (Farsi), Arabic, and German
- **Dynamic Translation System**: Single HTML file with JavaScript-based translation
- **Responsive Design**: Works perfectly on all devices
- **Modern UI/UX**: Clean and professional design
- **RTL Support**: Full support for right-to-left languages (Persian & Arabic)
- **SEO Optimized**: Meta tags, structured data, and performance optimized

## 🚀 Technologies Used

- HTML5
- CSS3 (with RTL support)
- JavaScript (ES6+)
- Bootstrap 5.3.3
- AOS (Animate On Scroll)
- Typed.js
- GLightbox
- Isotope.js
- Swiper.js

## 🌍 Language Support

The website supports 4 languages with a dynamic translation system:

- **English (en)**: Default language
- **Persian/Farsi (fa)**: Right-to-left layout
- **Arabic (ar)**: Right-to-left layout  
- **German (de)**: Left-to-right layout

### How Translation Works

1. **Single HTML File**: All content is in one `index.html` file
2. **Translation Keys**: Content uses `data-translate` attributes
3. **JavaScript Translation**: `assets/js/translations.js` contains all translations
4. **Dynamic Switching**: Language changes instantly without page reload
5. **Local Storage**: Selected language is remembered

## 📁 Project Structure

```
myportfolio/
├── index.html                 # Main HTML file
├── assets/
│   ├── css/
│   │   ├── main.css          # Main styles
│   │   └── rtl.css           # RTL support styles
│   ├── js/
│   │   ├── main.js           # Main JavaScript
│   │   └── translations.js   # Translation system
│   └── img/
│       ├── portfolio/        # Portfolio images
│       └── ...               # Other images
├── forms/
│   └── contact.php           # Contact form handler
└── README.md
```

## 🛠️ Setup & Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/alipakdelnia/myportfolio.git
   cd myportfolio
   ```

2. **Open in browser**:
   - Simply open `index.html` in your web browser
   - Or use a local server for better performance

3. **For development**:
   - Use a local server (e.g., Live Server in VS Code)
   - Edit `assets/js/translations.js` to modify translations
   - Edit `assets/css/main.css` for styling changes

## 🎨 Customization

### Adding New Languages

1. Add new language object to `translations` in `assets/js/translations.js`:
   ```javascript
   fr: {
     "hero_title": "Ali Pakdelnia",
     "about_title": "À propos",
     // ... more translations
   }
   ```

2. Add language switcher button in `index.html`:
   ```html
   <a href="#" data-lang="fr" class="lang-fr">Français</a>
   ```

### Modifying Content

1. **Text Content**: Edit the translation keys in `assets/js/translations.js`
2. **Styling**: Modify `assets/css/main.css`
3. **RTL Support**: Edit `assets/css/rtl.css` for RTL languages

## 📱 Responsive Design

The website is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones
- All modern browsers

## 🔧 Technical Features

- **Performance Optimized**: Minified CSS/JS, optimized images
- **SEO Friendly**: Meta tags, structured data, semantic HTML
- **Accessibility**: ARIA labels, keyboard navigation
- **Cross-browser**: Works on Chrome, Firefox, Safari, Edge
- **Progressive Web App**: Can be installed as a PWA

## 📞 Contact

- **Email**: ali.pakdelnia77@gmail.com
- **Phone**: +989909601225
- **Website**: https://alipakdelnia.github.io
- **GitHub**: https://github.com/alipakdelnia
- **LinkedIn**: https://linkedin.com/in/ali-pakdelnia

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **BootstrapMade**: Original template design
- **Bootstrap**: CSS framework
- **Bootstrap Icons**: Icon library
- **AOS**: Scroll animations
- **Typed.js**: Typing animations

---

**Built with ❤️ by Ali Pakdelnia**
