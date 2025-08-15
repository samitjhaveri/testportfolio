# Personal Portfolio Website

A modern, responsive personal portfolio website built with Next.js, TypeScript, and Tailwind CSS. This site showcases projects, skills, experience, and provides multiple ways to get in touch.

## 🚀 Features

- **Homepage:** Hero section with introduction, featured skills, and project previews
- **About Me:** Comprehensive bio, skills breakdown, education, and experience
- **Projects:** Detailed project showcase with technologies used and links
- **Resume:** Downloadable PDF resume
- **Contact:** Contact form with mailto integration and social links
- **Responsive Design:** Mobile, tablet, and desktop optimized
- **Modern UI:** Clean, professional design with smooth transitions

## 🛠️ Tech Stack

- **Framework:** Next.js 15.4.6 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Heroicons (via SVG)
- **Deployment:** Ready for Vercel, Netlify, or GitHub Pages

## 📦 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/samitjhaveri/testportfolio.git
   cd testportfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📝 Customization

### Content Updates
- Edit personal information in each page component
- Update project data in `/src/app/projects/page.tsx`
- Modify skills and experience in `/src/app/about/page.tsx`
- Replace contact information in `/src/app/contact/page.tsx`

### Resume
- Replace `/public/resume.pdf` with your actual PDF resume
- The download link in navigation will automatically serve the updated file

### Styling
- Colors and theme: Update Tailwind configuration in `tailwind.config.ts`
- Global styles: Modify `/src/app/globals.css`
- Component styles: Each component uses Tailwind utility classes

### Images
- Add your profile photo to `/public/assets/` and update image references
- Replace project placeholder images with actual screenshots

## 📤 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect repository to Vercel
3. Deploy automatically with each push

### Netlify
1. Build the project: `npm run build`
2. Deploy the `.next` folder to Netlify

### GitHub Pages
1. Use a static export: Add `output: 'export'` to `next.config.ts`
2. Build and deploy to GitHub Pages

## 🎨 Design Features

- **Color Scheme:** Professional blue and gray palette
- **Typography:** System fonts for optimal performance
- **Layout:** Clean, grid-based responsive design
- **Animations:** Smooth hover effects and transitions
- **Icons:** Consistent icon usage throughout

## 📱 Responsive Breakpoints

- **Mobile:** < 768px (single column layout)
- **Tablet:** 768px - 1024px (adapted grid layouts)
- **Desktop:** > 1024px (full multi-column layouts)

## 🔍 SEO Features

- Optimized metadata and titles
- Semantic HTML structure
- Fast loading performance
- Mobile-friendly design

## 📧 Contact Integration

The contact form uses mailto integration, which:
- Opens the user's default email client
- Pre-fills subject and message content
- Provides fallback to direct email contact
- Works without backend server requirements

## 🙏 Credits

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Heroicons](https://heroicons.com/)
- Deployed on [Vercel](https://vercel.com/)

---

**Built by:** [Your Name] | **Portfolio:** [Live Demo Link] | **GitHub:** [Repository Link]