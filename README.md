# Furni - Modern Furniture Website Template

A responsive furniture and interior design website template built with Bootstrap 5. This project has been enhanced with modern features including dark mode, optimized images, and improved accessibility.

## Features

- 📱 **Fully Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- 🌙 **Dark Mode Toggle** - Switch between light and dark themes with preference persistence
- 🚀 **Optimized Performance** - WebP images with lazy loading for faster load times
- ⬆️ **Back to Top Button** - Smooth scroll to top functionality on all pages
- 🛒 **E-commerce Pages** - Shop, cart, checkout, and product pages included
- 📝 **Blog & Content Pages** - About, services, blog, and contact pages
- ♿ **Accessibility** - Proper alt tags, semantic HTML, and keyboard navigation
- 🎨 **Modern Design** - Clean, professional layout with excellent typography

## Pages Included

- **Home** (`index.html`) - Main landing page with hero section and product showcase
- **Shop** (`shop.html`) - Product listing page
- **About** (`about.html`) - Company information and team
- **Services** (`services.html`) - Service offerings
- **Blog** (`blog.html`) - Blog listing page
- **Contact** (`contact.html`) - Contact form and information
- **Cart** (`cart.html`) - Shopping cart page
- **Checkout** (`checkout.html`) - Order checkout process
- **Thank You** (`thankyou.html`) - Order confirmation page

## Quick Start

1. **Download or clone** this repository
2. **Navigate** to the project directory
3. **Start a local server**:
   ```bash
   python3 -m http.server 8000
   ```
4. **Open your browser** and go to `http://localhost:8000`

## File Structure

```
furni-1.0.0/
├── css/
│   ├── bootstrap.min.css
│   ├── style.css
│   └── tiny-slider.css
├── js/
│   ├── bootstrap.bundle.min.js
│   ├── custom.js
│   └── tiny-slider.js
├── images/
│   ├── *.jpg (original images)
│   ├── *.png (original images)
│   ├── *.webp (optimized images)
│   └── *.svg (vector icons)
├── scss/
│   └── style.scss
├── *.html (all page templates)
└── README.md
```

## Customization

### Colors and Styling
- Main stylesheet: `css/style.css`
- SCSS source: `scss/style.scss`
- Primary color: `#3b5d50`
- Accent color: `#f9bf29`

### Dark Mode
The dark mode feature automatically:
- Saves user preference in localStorage
- Switches icon between sun (🌞) and moon (🌙)
- Applies dark theme to all elements
- Works consistently across all pages

### Image Optimization
Images are optimized using WebP format with lazy loading:
- Original images maintained as fallbacks
- WebP versions provide ~30% better compression
- Lazy loading improves initial page load time

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Internet Explorer 11+ (with graceful degradation)

## Dependencies

- **Bootstrap 5** - CSS framework
- **Font Awesome 6** - Icons
- **Tiny Slider** - Product carousel
- **Google Fonts** - Inter font family

## Performance Optimizations

- ✅ WebP image format with fallbacks
- ✅ Lazy loading for images
- ✅ Minified CSS and JavaScript
- ✅ Efficient font loading
- ✅ Semantic HTML structure
- ✅ Proper meta tags for SEO

## Architecture

This section provides visual representations of the project's architecture to help stakeholders and developers understand the system structure, component relationships, and data flow.

### System Architecture Overview

The following diagram shows the overall structure of the Furni website template, including all major components and their relationships:

```mermaid
graph TD
    A[User/Browser] --> B[HTML Pages Layer]
    B --> C[Bootstrap 5 Framework]
    B --> D[Custom JavaScript Layer]
    B --> E[Styling System]
    B --> F[Asset Management]
    
    subgraph "9 HTML Pages"
        B1[index.html - Home]
        B2[shop.html - Product Listing]
        B3[about.html - Company Info]
        B4[services.html - Services]
        B5[blog.html - Blog Posts]
        B6[contact.html - Contact Form]
        B7[cart.html - Shopping Cart]
        B8[checkout.html - Order Process]
        B9[thankyou.html - Confirmation]
    end
    
    subgraph "JavaScript Components"
        D1[Dark Mode Toggle]
        D2[Back to Top Button]
        D3[Product Slider/Carousel]
        D4[Quantity Controls]
        D5[Smooth Scrolling]
    end
    
    subgraph "Styling Architecture"
        E1[SCSS Source Files]
        E2[CSS Compiled Output]
        E3[Bootstrap Variables]
        E4[Custom Variables]
    end
    
    subgraph "Asset Pipeline"
        F1[Original Images]
        F2[WebP Optimization]
        F3[Lazy Loading]
        F4[Font Loading]
    end
    
    B --> B1 & B2 & B3 & B4 & B5 & B6 & B7 & B8 & B9
    D --> D1 & D2 & D3 & D4 & D5
    E --> E1 --> E2
    E --> E3 & E4
    F --> F1 --> F2 --> F3
    F --> F4
    
    G[Prepros Build Tool] --> E1
    G --> F1
    H[localStorage] --> D1
```

### Component Interaction Flow

This diagram illustrates how different JavaScript components interact with the DOM and user actions:

```mermaid
sequenceDiagram
    participant User
    participant DOM
    participant DarkMode
    participant BackToTop
    participant Slider
    participant LocalStorage
    
    User->>DOM: Page Load
    DOM->>DarkMode: Initialize
    DarkMode->>LocalStorage: Check Saved Preference
    LocalStorage-->>DarkMode: Return Theme Setting
    DarkMode->>DOM: Apply Theme
    
    User->>DarkMode: Toggle Dark Mode
    DarkMode->>DOM: Update Classes
    DarkMode->>LocalStorage: Save Preference
    
    User->>DOM: Scroll Page
    DOM->>BackToTop: Check Scroll Position
    BackToTop->>DOM: Show/Hide Button
    
    User->>BackToTop: Click Button
    BackToTop->>DOM: Smooth Scroll to Top
    
    User->>Slider: View Products
    Slider->>DOM: Initialize Carousel
    Slider->>DOM: Handle Navigation
```

### Asset Processing Pipeline

This diagram shows how images and styles are processed and optimized:

```mermaid
flowchart LR
    A[Original Assets] --> B{Asset Type}
    
    B -->|Images| C[Image Processing]
    B -->|Styles| D[SCSS Processing]
    B -->|Scripts| E[JavaScript Processing]
    
    C --> C1[JPG/PNG Files]
    C1 --> C2[WebP Conversion]
    C2 --> C3[Lazy Loading Implementation]
    C3 --> C4[Optimized Images]
    
    D --> D1[SCSS Variables]
    D1 --> D2[Bootstrap Integration]
    D2 --> D3[Custom Styles]
    D3 --> D4[CSS Compilation]
    D4 --> D5[Minified CSS]
    
    E --> E1[Custom JavaScript]
    E1 --> E2[Third-party Libraries]
    E2 --> E3[Bootstrap Bundle]
    E3 --> E4[Optimized Scripts]
    
    F[Prepros Build Tool] --> C & D & E
    
    C4 --> G[Production Assets]
    D5 --> G
    E4 --> G
    
    G --> H[Website Deployment]
```

### Page Navigation Hierarchy

This diagram shows the relationship between different pages and user navigation flows:

```mermaid
graph TD
    A[index.html - Homepage] --> B[shop.html - Product Catalog]
    A --> C[about.html - Company Story]
    A --> D[services.html - Service Offerings]
    A --> E[blog.html - Content Hub]
    A --> F[contact.html - Get in Touch]
    
    B --> G[cart.html - Shopping Cart]
    G --> H[checkout.html - Payment Process]
    H --> I[thankyou.html - Order Confirmation]
    
    subgraph "E-commerce Flow"
        B -.-> G -.-> H -.-> I
    end
    
    subgraph "Information Pages"
        C & D & E & F
    end
    
    subgraph "Main Navigation"
        A -.-> B & C & D & E & F
    end
    
    J[Navigation Bar] --> A & B & C & D & E & F
    K[Footer Links] --> A & B & C & D & E & F
    
    style A fill:#3b5d50,color:#fff
    style G fill:#f9bf29,color:#000
    style H fill:#f9bf29,color:#000
    style I fill:#3b5d50,color:#fff
```

### Technology Stack Overview

This diagram presents the technical foundation and dependencies:

```mermaid
graph TB
    subgraph "Frontend Framework"
        A[Bootstrap 5.3.x]
        A1[Responsive Grid System]
        A2[UI Components]
        A3[JavaScript Plugins]
        A --> A1 & A2 & A3
    end
    
    subgraph "Styling Technology"
        B[SCSS/Sass]
        B1[Variables & Mixins]
        B2[Nested Rules]
        B3[Custom Themes]
        B --> B1 & B2 & B3
    end
    
    subgraph "JavaScript Libraries"
        C[Tiny Slider 2.x]
        C1[Product Carousels]
        C2[Touch/Swipe Support]
        C3[Responsive Breakpoints]
        C --> C1 & C2 & C3
    end
    
    subgraph "Icon System"
        D[Font Awesome 6.x]
        D1[Social Media Icons]
        D2[UI Action Icons]
        D3[Navigation Icons]
        D --> D1 & D2 & D3
    end
    
    subgraph "Build Tools"
        E[Prepros 6.x]
        E1[SCSS Compilation]
        E2[Asset Optimization]
        E3[Live Reload]
        E --> E1 & E2 & E3
    end
    
    subgraph "Performance Features"
        F[Image Optimization]
        F1[WebP Format]
        F2[Lazy Loading]
        F3[Responsive Images]
        F --> F1 & F2 & F3
    end
    
    G[Modern Web Browser] --> A & B & C & D & F
    H[Development Environment] --> E
```

### Business Value & Benefits

Each architectural component delivers specific business value:

- **Responsive Design**: Ensures optimal user experience across all devices, increasing customer engagement
- **Dark Mode**: Modern UX feature that improves accessibility and user preference accommodation  
- **Image Optimization**: Faster page loads lead to better SEO rankings and reduced bounce rates
- **E-commerce Flow**: Streamlined purchase process from product discovery to order confirmation
- **Component Architecture**: Modular design enables easy maintenance and feature additions
- **Performance Optimization**: Fast loading times improve conversion rates and user satisfaction

## Credits

**Original Template**: Furni by Untree.co  
**Enhanced by**: shubhendu for GitHub Demo  
**License**: Creative Commons Attribution 3.0

## License

This project is licensed under the Creative Commons Attribution 3.0 License - see the [license information](https://creativecommons.org/licenses/by/3.0/) for details.

## Contributing

Feel free to submit issues and enhancement requests!

---

**Designed by shubhendu for GitHub Demo**
