# Satine Couture - Luxury Fashion Website

A stunning, modern website for Satine Couture, a luxury women's wear brand specializing in bridal, bespoke, and ready-to-wear fashion.

![Satine Couture](public/images/hero-bg.jpg)

## ✨ Features

- 🎨 **Premium Dark Theme** with gold accents
- 📱 **Fully Responsive** design for all devices
- ⚡ **Fast Performance** with Next.js 14
- 🎬 **Smooth Animations** and transitions
- 🖼️ **Image Galleries** with hover effects
- 📝 **Contact Form** for appointment booking
- 🔍 **SEO Optimized** with meta tags
- 🎯 **Category Filtering** for collections

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open browser to
http://localhost:3000
```

### Build for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
fashion/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── collections/       # Collections page
│   ├── about/            # About page
│   └── contact/          # Contact page
├── components/            # Reusable components
│   ├── Header.tsx        # Navigation
│   ├── Footer.tsx        # Footer
│   ├── Hero.tsx          # Hero section
│   ├── CollectionGrid.tsx # Collection grid
│   └── ContactForm.tsx   # Contact form
├── public/
│   └── images/           # Image assets
└── styles/               # Global styles
```

## 🎨 Pages

### Home (`/`)
- Hero section with full-screen background
- Featured collections grid
- Brand story
- Services overview
- Call-to-action section

### Collections (`/collections`)
- Filterable collection grid
- Category filters (Bridal, Traditional, Bespoke, RTW)
- Hover effects on collection cards

### About (`/about`)
- Brand story and mission
- Services overview
- Company values

### Contact (`/contact`)
- Contact information
- Appointment booking form
- Social media links

## 🛠️ Customization

### Replace Placeholder Images

Navigate to `/public/images/` and replace:
- `hero-bg.jpg` - Hero background
- `bridal-1.jpg` - Bridal collection
- `traditional-1.jpg`, `traditional-2.jpg` - Traditional wear
- `bespoke-1.jpg`, `bespoke-2.jpg` - Bespoke designs
- `rtw-1.jpg`, `rtw-2.jpg` - Ready-to-wear

### Update Brand Colors

Edit `app/globals.css`:

```css
:root {
  --color-primary: #d4af37;        /* Gold */
  --color-primary-light: #f4e4c1;  /* Champagne */
  --color-bg-dark: #0a0a0a;        /* Deep Black */
  /* ... */
}
```

### Update Contact Information

Edit:
- `components/Footer.tsx` - Footer contact info
- `app/contact/page.tsx` - Contact page details

## 📦 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: CSS Modules
- **Fonts**: Google Fonts (Playfair Display, Inter)
- **Deployment**: Vercel-ready

## 🌐 Deployment

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

### Deploy to Netlify

```bash
# Build the project
npm run build

# Deploy the .next folder
```

## 📝 Environment Variables

No environment variables required for basic functionality.

For contact form integration with email services, add:

```env
NEXT_PUBLIC_EMAIL_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAIL_TEMPLATE_ID=your_template_id
```

## 🎯 SEO

The website includes:
- Meta tags for all pages
- Open Graph tags for social sharing
- Twitter Card tags
- Semantic HTML structure
- Optimized images with alt text

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🤝 Contributing

This is a custom website for Satine Couture. For modifications or enhancements, please contact the development team.

## 📄 License

© 2026 Satine Couture. All rights reserved.

## 📞 Contact

- **Email**: info.satinecouture@gmail.com
- **Instagram**: [@satine_couture](https://instagram.com/satine_couture)
- **WhatsApp**: [Message us](https://wa.me/message/M3VJPERGFUAPN1)

---

**Built with ❤️ for Satine Couture** - *Luxe Women's Wear Brand*
