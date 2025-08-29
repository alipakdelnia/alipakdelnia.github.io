// Language Manager for Multi-language Support
class LanguageManager {
  constructor() {
    this.currentLang = this.getCurrentLanguage();
    this.init();
  }

  // Get current language from URL or localStorage
  getCurrentLanguage() {
    const path = window.location.pathname;
    if (path.includes('/fa/')) return 'fa';
    if (path.includes('/ar/')) return 'ar';
    if (path.includes('/de/')) return 'de';
    return 'en'; // default
  }

  // Initialize language manager
  init() {
    this.updatePageLanguage();
    this.updateContent();
    this.setupLanguageSwitcher();
  }

  // Update page language attributes
  updatePageLanguage() {
    const html = document.documentElement;
    const body = document.body;
    
    switch(this.currentLang) {
      case 'fa':
        html.lang = 'fa';
        html.dir = 'rtl';
        body.classList.add('rtl');
        break;
      case 'ar':
        html.lang = 'ar';
        html.dir = 'rtl';
        body.classList.add('rtl');
        break;
      case 'de':
        html.lang = 'de';
        html.dir = 'ltr';
        body.classList.remove('rtl');
        break;
      default:
        html.lang = 'en';
        html.dir = 'ltr';
        body.classList.remove('rtl');
    }
  }

  // Update all content based on current language
  updateContent() {
    const lang = translations[this.currentLang];
    if (!lang) return;

    // Update navigation
    this.updateElement('[data-translate="nav_home"]', lang.nav_home);
    this.updateElement('[data-translate="nav_about"]', lang.nav_about);
    this.updateElement('[data-translate="nav_resume"]', lang.nav_resume);
    this.updateElement('[data-translate="nav_portfolio"]', lang.nav_portfolio);
    this.updateElement('[data-translate="nav_skills"]', lang.nav_skills);
    this.updateElement('[data-translate="nav_soft_skills"]', lang.nav_soft_skills);
    this.updateElement('[data-translate="nav_languages"]', lang.nav_languages);
    this.updateElement('[data-translate="nav_services"]', lang.nav_services);
    this.updateElement('[data-translate="nav_contact"]', lang.nav_contact);

    // Update hero section
    this.updateElement('[data-translate="hero_title"]', lang.hero_title);
    this.updateElement('[data-translate="hero_subtitle"]', lang.hero_subtitle);
    
    // Update typed.js items
    const typedElement = document.querySelector('.typed');
    if (typedElement) {
      typedElement.setAttribute('data-typed-items', lang.hero_typed_items);
    }

    // Update about section
    this.updateElement('[data-translate="about_title"]', lang.about_title);
    this.updateElement('[data-translate="about_description"]', lang.about_description);
    this.updateElement('[data-translate="about_subtitle"]', lang.about_subtitle);
    this.updateElement('[data-translate="about_intro"]', lang.about_intro);
    this.updateElement('[data-translate="about_details"]', lang.about_details);

    // Update personal info
    this.updateElement('[data-translate="age"]', lang.age);
    this.updateElement('[data-translate="age_value"]', lang.age_value);
    this.updateElement('[data-translate="email"]', lang.email);
    this.updateElement('[data-translate="email_value"]', lang.email_value);
    this.updateElement('[data-translate="phone"]', lang.phone);
    this.updateElement('[data-translate="phone_value"]', lang.phone_value);
    this.updateElement('[data-translate="location"]', lang.location);
    this.updateElement('[data-translate="location_value"]', lang.location_value);
    this.updateElement('[data-translate="website"]', lang.website);
    this.updateElement('[data-translate="website_value"]', lang.website_value);
    this.updateElement('[data-translate="github"]', lang.github);
    this.updateElement('[data-translate="github_value"]', lang.github_value);
    this.updateElement('[data-translate="linkedin"]', lang.linkedin);
    this.updateElement('[data-translate="linkedin_value"]', lang.linkedin_value);
    this.updateElement('[data-translate="status"]', lang.status);
    this.updateElement('[data-translate="status_value"]', lang.status_value);

    // Update stats section
    this.updateElement('[data-translate="stats_happy_clients"]', lang.stats_happy_clients);
    this.updateElement('[data-translate="stats_happy_clients_desc"]', lang.stats_happy_clients_desc);
    this.updateElement('[data-translate="stats_projects"]', lang.stats_projects);
    this.updateElement('[data-translate="stats_projects_desc"]', lang.stats_projects_desc);
    this.updateElement('[data-translate="stats_companies"]', lang.stats_companies);
    this.updateElement('[data-translate="stats_companies_desc"]', lang.stats_companies_desc);
    this.updateElement('[data-translate="stats_years"]', lang.stats_years);
    this.updateElement('[data-translate="stats_years_desc"]', lang.stats_years_desc);

    // Update skills section
    this.updateElement('[data-translate="skills_title"]', lang.skills_title);
    this.updateElement('[data-translate="skills_description"]', lang.skills_description);
    this.updateElement('[data-translate="fullstack_dev"]', lang.fullstack_dev);
    this.updateElement('[data-translate="android_kotlin"]', lang.android_kotlin);
    this.updateElement('[data-translate="web_dev"]', lang.web_dev);
    this.updateElement('[data-translate="js_ts"]', lang.js_ts);
    this.updateElement('[data-translate="react_angular"]', lang.react_angular);
    this.updateElement('[data-translate="database_sql"]', lang.database_sql);

    // Update contact section
    this.updateElement('[data-translate="contact_title"]', lang.contact_title);
    this.updateElement('[data-translate="contact_description"]', lang.contact_description);
    this.updateElement('[data-translate="contact_location"]', lang.contact_location);
    this.updateElement('[data-translate="contact_location_value"]', lang.contact_location_value);
    this.updateElement('[data-translate="contact_phone"]', lang.contact_phone);
    this.updateElement('[data-translate="contact_phone_value"]', lang.contact_phone_value);
    this.updateElement('[data-translate="contact_email"]', lang.contact_email);
    this.updateElement('[data-translate="contact_email_value"]', lang.contact_email_value);
    this.updateElement('[data-translate="contact_achievement"]', lang.contact_achievement);
    this.updateElement('[data-translate="contact_achievement_value"]', lang.contact_achievement_value);
    this.updateElement('[data-translate="contact_availability"]', lang.contact_availability);
    this.updateElement('[data-translate="contact_availability_value"]', lang.contact_availability_value);

    // Update contact form
    this.updateElement('[data-translate="form_name"]', lang.form_name);
    this.updateElement('[data-translate="form_email"]', lang.form_email);
    this.updateElement('[data-translate="form_subject"]', lang.form_subject);
    this.updateElement('[data-translate="form_message"]', lang.form_message);
    this.updateElement('[data-translate="form_loading"]', lang.form_loading);
    this.updateElement('[data-translate="form_error"]', lang.form_error);
    this.updateElement('[data-translate="form_success"]', lang.form_success);
    this.updateElement('[data-translate="form_submit"]', lang.form_submit);

    // Update footer
    this.updateElement('[data-translate="footer_copyright"]', lang.footer_copyright);
    this.updateElement('[data-translate="footer_rights"]', lang.footer_rights);
    this.updateElement('[data-translate="footer_designed"]', lang.footer_designed);
    this.updateElement('[data-translate="footer_distributed"]', lang.footer_distributed);

    // Reinitialize typed.js if it exists
    this.reinitializeTyped();
  }

  // Update individual element
  updateElement(selector, text) {
    const element = document.querySelector(selector);
    if (element) {
      element.textContent = text;
    }
  }

  // Setup language switcher
  setupLanguageSwitcher() {
    const switcher = document.querySelector('.language-switcher');
    if (!switcher) return;

    // Clear existing content
    switcher.innerHTML = '';

    // Add language options
    const languages = [
      { code: 'en', name: 'English', url: '/' },
      { code: 'fa', name: 'فارسی', url: '/fa/' },
      { code: 'ar', name: 'العربية', url: '/ar/' },
      { code: 'de', name: 'Deutsch', url: '/de/' }
    ];

    languages.forEach(lang => {
      const link = document.createElement('a');
      link.href = lang.url;
      link.className = `lang-${lang.code}`;
      if (lang.code === this.currentLang) {
        link.classList.add('active');
      }
      link.textContent = lang.name;
      link.addEventListener('click', (e) => {
        e.preventDefault();
        this.changeLanguage(lang.code);
      });
      switcher.appendChild(link);
    });
  }

  // Change language
  changeLanguage(langCode) {
    const baseUrl = window.location.origin;
    let newUrl;

    switch(langCode) {
      case 'en':
        newUrl = baseUrl + '/';
        break;
      case 'fa':
        newUrl = baseUrl + '/fa/';
        break;
      case 'ar':
        newUrl = baseUrl + '/ar/';
        break;
      case 'de':
        newUrl = baseUrl + '/de/';
        break;
      default:
        newUrl = baseUrl + '/';
    }

    window.location.href = newUrl;
  }

  // Reinitialize typed.js
  reinitializeTyped() {
    const typedElement = document.querySelector('.typed');
    if (typedElement && typeof Typed !== 'undefined') {
      // Destroy existing instance
      if (typedElement.typed) {
        typedElement.typed.destroy();
      }
      
      // Create new instance
      const typedItems = typedElement.getAttribute('data-typed-items');
      if (typedItems) {
        typedElement.typed = new Typed(typedElement, {
          strings: typedItems.split(','),
          typeSpeed: 100,
          backSpeed: 50,
          backDelay: 2000,
          loop: true
        });
      }
    }
  }
}

// Initialize language manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new LanguageManager();
});
