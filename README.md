# 🎬 LB Films - Professional Photography & Videography Platform

A modern, full-featured web application for photography and videography services, built with Next.js 16 and React 19. LB Films provides a complete solution for managing bookings, showcasing portfolios, and handling client interactions.

![Next.js](https://img.shields.io/badge/Next.js-16.1.2-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Features

### 🎯 Client Features
- **Home Page**: Beautiful hero section with service showcase, testimonials, and FAQ
- **Gallery**: Dynamic image gallery with category filtering
- **Video Showcase**: Embedded video player supporting YouTube, Vimeo, and direct video URLs
- **Package Browsing**: Browse and compare photography/videography packages
- **Online Booking**: Easy-to-use booking form with date picker and package selection
- **Contact Form**: Direct communication channel with the studio
- **User Dashboard**: 
  - View and manage orders
  - Track order status
  - Leave reviews
  - Profile management
  - Account settings

### 👨‍💼 Admin Features
- **Dashboard**: Overview of orders, users, and revenue analytics
- **Order Management**: View, update, and track all bookings
- **Project Management**: 
  - Add/edit/delete photography projects
  - Upload images via file or URL
  - Drag-and-drop image upload
  - Category filtering
- **Video Management**: 
  - Upload and manage video content
  - Support for YouTube, Vimeo, and direct video links
  - Date picker for video scheduling
- **Package Management**: Create and manage service packages
- **User Management**: View and manage registered users
- **Review Management**: Moderate and publish client reviews
- **Settings**: Configure site-wide settings

### 🔐 Authentication
- User registration with email verification
- Secure login system
- Password reset with OTP verification
- Protected routes for authenticated users
- Role-based access control (User/Admin)

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 16.1.2 (App Router)
- **UI Library**: React 19.2.0
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **UI Components**: 
  - Radix UI (Dialogs, Dropdowns, Popovers, etc.)
  - shadcn/ui components
  - Lucide React (Icons)
- **Animations**: Framer Motion 12
- **Forms**: React Hook Form + Zod validation
- **Date Handling**: date-fns 4 + react-day-picker 9
- **Charts**: Recharts 3
- **Carousel**: Swiper 11

### Utilities
- **HTTP Client**: Axios
- **Theme**: next-themes (Dark/Light mode)
- **Class Management**: clsx + tailwind-merge
- **Validation**: Zod 4

## 📁 Project Structure

```
lbfilms/
├── app/                          # Next.js App Router
│   ├── (main)/                   # Main public pages
│   │   ├── page.tsx             # Home page
│   │   ├── about/               # About page
│   │   ├── booking/             # Booking page
│   │   ├── contact/             # Contact page
│   │   ├── gallery/             # Gallery page
│   │   ├── packages/            # Packages page
│   │   └── videos/              # Videos page
│   ├── admin/                    # Admin dashboard
│   │   ├── page.tsx             # Admin overview
│   │   ├── orders/              # Order management
│   │   ├── projects/            # Project management
│   │   ├── videos/              # Video management
│   │   ├── packages/            # Package management
│   │   ├── users/               # User management
│   │   ├── reviews/             # Review management
│   │   └── settings/            # Settings
│   ├── auth/                     # Authentication pages
│   │   ├── login/               # Login page
│   │   ├── register/            # Registration page
│   │   ├── forgot-password/     # Password reset
│   │   ├── verify-otp/          # OTP verification
│   │   └── reset-password/      # New password
│   ├── dashboard/                # User dashboard
│   │   ├── page.tsx             # Dashboard home
│   │   ├── orders/              # User orders
│   │   ├── profile/             # Profile management
│   │   ├── reviews/             # User reviews
│   │   └── settings/            # User settings
│   ├── layout.tsx               # Root layout
│   └── globals.css              # Global styles
│
├── components/                   # React components
│   ├── pages/                   # Page-specific components
│   │   ├── main/                # Main site components
│   │   ├── admin/               # Admin components
│   │   ├── auth/                # Auth components
│   │   ├── dashboard/           # Dashboard components
│   │   └── common/              # Shared components (Navbar, Footer)
│   ├── ui/                      # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── calendar.tsx
│   │   ├── date-picker.tsx
│   │   ├── select.tsx
│   │   └── ...
│   └── shared/                  # Reusable components
│
├── lib/                         # Utilities and helpers
│   ├── types.ts                # TypeScript types
│   ├── utils.ts                # Utility functions
│   └── validations.ts          # Zod schemas
│
└── data/                        # Mock data and constants
    └── index.ts                # Data definitions

```

## 🚀 Getting Started

### Prerequisites
- Node.js 18.0 or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/lbfilms.git
cd lbfilms
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Run the development server**
```bash
npm run dev
# or
yarn dev
```

4. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
# Build the application
npm run build

# Start production server
npm start
```

### Linting

```bash
npm run lint
```

## 🎨 Design System

### Color Palette
- **Primary**: Purple gradient (`from-purple-600 to-pink-600`)
- **Background**: Dark theme with glass-morphism effects
- **Text**: White with gray variants for hierarchy
- **Accents**: Purple and pink highlights

### Typography
- **Headings**: Bold, large sizes with gradient text
- **Body**: Clean, readable text with proper contrast
- **Forms**: Medium weight with clear labels

### Components
All UI components follow shadcn/ui patterns with custom dark theme styling:
- Consistent spacing and padding
- Smooth transitions and animations
- Hover effects with purple accents
- Accessible focus states

## 📱 Responsive Design

The application is fully responsive and optimized for:
- 📱 Mobile devices (320px+)
- 📱 Tablets (768px+)
- 💻 Laptops (1024px+)
- 🖥️ Desktops (1280px+)

## 🔒 Security Features

- Form validation with Zod schemas
- Protected routes with authentication checks
- Role-based access control
- Secure password handling
- OTP verification for password reset

## 🎯 Key Components

### DatePicker
Custom date picker with dropdown month/year selection:
- Range: 1900-2100
- Dark theme styling
- Auto-close on selection
- Keyboard navigation

### Video Player
Supports multiple video sources:
- YouTube embedded videos
- Vimeo embedded videos
- Direct video URLs (.mp4, .webm)
- Responsive player

### Image Upload
Flexible image upload system:
- File upload with drag-and-drop
- URL-based upload
- Multiple image support
- Image preview with deletion

## 📊 Data Management

Currently using mock data stored in `/data/index.ts`. The application is structured to easily integrate with a backend API:

- **Users**: User accounts and profiles
- **Packages**: Service packages and pricing
- **Orders**: Booking and order management
- **Projects**: Photography/videography projects
- **Videos**: Video content library
- **Reviews**: Client testimonials and ratings

## 🚧 Future Enhancements

- [ ] Backend API integration
- [ ] Database implementation (PostgreSQL/MongoDB)
- [ ] Real-time notifications
- [ ] Payment gateway integration
- [ ] Image optimization and CDN
- [ ] Advanced search and filtering
- [ ] Email notifications
- [ ] Social media integration
- [ ] Multi-language support
- [ ] Progressive Web App (PWA)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👤 Author

**LB Films**

- Website: [lbfilms.com](https://lbfilms.com)
- Email: contact@lbfilms.com

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)

---

⭐ If you find this project helpful, please give it a star!
