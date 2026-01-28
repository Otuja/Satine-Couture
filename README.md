# Satine Couture - Luxury Fashion House Website

A sophisticated, elegant website for Satine Couture, a luxury women's wear brand specializing in bridal, bespoke, and ready-to-wear fashion. This project features a custom "Light Boutique" theme designed to reflect the high-end nature of the brand.

![Satine Couture](public/images/hero-bg.jpg)

## ✨ Key Features

### 🎨 Design & Aesthetics
- **Light Boutique Theme**: A refined palette of Warm Taupe (`#8b7355`), Soft Cream (`#f5f2ef`), and Off-White (`#faf8f6`).
- **Typography**: Elegant pairing of `Cormorant Garamond` (Serif) for headings and `Montserrat` (Sans-serif) for body text.
- **Custom Logo Animation**: Unique "Satine . Couture" split animation with staggered entrance effects.
- **Glassmorphism**: Subtle glass effects on navigation and overlays.

### 📱 Mobile Experience
- **Redesigned Mobile Menu**: Slide-from-right navigation with stylish numbered links (01, 02, 03, 04).
- **Touch-Friendly Carousels**: Swipeable image sliders and testimonials.
- **Mobile-Optimized Cards**: Collection cards automatically show details without needing hover interactions.
- **Smart Navigation**: Bottom-placed social icons for easy thumb access.

### ⚡ Technical Highlights
- **Next.js 14 (App Router)**: Utilizing the latest React Server Components for optimal performance.
- **Local Asset Optimization**: All images and assets are served locally for reliability and speed.
- **Custom SVG Icon System**: Replaced standard emojis with a bespoke set of theme-colored SVG icons.
- **Auto-Play Carousels**: Intelligent sliders that pause on hover for better readability.
- **SEO Optimized**: Semantic HTML structure and meta tags for better search visibility.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Otuja/Satine-Couture.git
   cd Satine-Couture
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
fashion/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page (Hero, Featured, Story)
│   ├── collections/       # Collections page (Grid, Filter)
│   ├── about/            # About page (Mission, Values)
│   ├── contact/          # Contact page (Form, Info)
│   ├── layout.tsx        # Root layout & Font configuration
│   └── globals.css       # Global styles & CSS variables
├── components/            # Reusable UI components
│   ├── Header.tsx        # Navigation & Mobile Menu
│   ├── Footer.tsx        # Site Footer
│   ├── Hero.tsx          # Reusable Hero Section
│   ├── CollectionGrid.tsx # Interactive Image Grid
│   ├── ImageSlider.tsx   # Auto-play Carousel
│   ├── Testimonials.tsx  # Client Reviews Carousel
│   └── ContactForm.tsx   # Appointment Booking Form
├── public/
│   └── images/           # Local image assets
└── styles/               # Component-specific CSS modules
```

## 🛠️ Customization Guide

### Colors
The theme is controlled via CSS variables in `app/globals.css`.

```css
:root {
  /* Elegant Light Boutique Theme */
  --color-primary: #8b7355;        /* Warm taupe */
  --color-primary-light: #a89080;  /* Light taupe */
  --color-primary-dark: #6b5744;   /* Deep taupe */
  
  --color-bg-light: #faf8f6;       /* Warm off-white */
  --color-bg-medium: #f5f2ef;      /* Soft cream */
  --color-bg-dark: #ebe7e3;        /* Light beige */
  
  --color-text-primary: #2c2420;   /* Deep brown */
}
```

### Images
Replace images in `public/images/` to update content:
- `hero-bg.jpg`: Main homepage hero.
- `collection-*.jpg`: Collection grid images.
- `testimonial-*.jpg`: Client photos.

### Content
- **Contact Info**: Update in `app/contact/page.tsx` and `components/Footer.tsx`.
- **Testimonials**: Update the `testimonials` array in `components/Testimonials.tsx`.
- **Services**: Update the services list in `app/page.tsx`.

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub.
2. Import the project into Vercel.
3. Vercel will automatically detect Next.js and deploy.

### Netlify
1. Push to GitHub.
2. New Site from Git > Select Repository.
3. Build command: `npm run build`.
4. Publish directory: `.next`.

## 📄 License
© 2026 Satine Couture. All rights reserved.

## 📞 Contact
- **Email**: info.satinecouture@gmail.com
- **Instagram**: [@satine_couture](https://instagram.com/satine_couture)
- **WhatsApp**: [Message us](https://wa.me/message/M3VJPERGFUAPN1)

---
**Built with ❤️ for Satine Couture**
