# Anime Vault 🎌

A modern anime discovery platform where you can explore thousands of anime titles with smooth animations and an intuitive interface. Browse, discover, and learn about your favorite anime series and movies.

> One of my first **Next.js** learning projects — it fetches anime data from a public API (Jikan / MyAnimeList) and visualizes it with infinite scroll and animations.

## 🎯 What Does It Do?

Anime Vault is your gateway to discovering anime. The platform provides:

- **Discover Anime**: Browse through a vast collection of anime titles with detailed information
- **Infinite Scrolling**: Seamlessly explore more anime as you scroll - no pagination needed
- **Anime Details**: View comprehensive information including:
  - Title and alternative titles
  - Synopsis and description
  - Episode count
  - Rating and popularity
  - Genres and categories
  - Release year
  - Studio information
- **Smooth Experience**: Enjoy delightful animations and transitions as you browse
- **Responsive Design**: Perfect viewing experience on desktop, tablet, and mobile devices
- **Real-Time Data**: Always up-to-date information from MyAnimeList via Jikan API

## 👤 Who Is It For?

- Anime fans looking to discover new series
- People new to anime seeking recommendations
- Anime enthusiasts building watchlists
- Developers learning modern web development
- Anyone wanting to explore the world of anime

## 🚀 How to Use

### For Users

1. **Visit the Website**: Open the application in your browser
2. **Browse Anime**: Scroll through the homepage to see featured anime
3. **Keep Scrolling**: More anime automatically load as you reach the bottom
4. **View Details**: Click on any anime card to see more information
5. **Enjoy Animations**: Experience smooth transitions and hover effects

### For Developers

#### Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

#### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd anime-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

#### Build for Production

```bash
npm run build
npm start
```

The production build will be optimized for performance with server-side rendering.

## ✨ Key Features

### Infinite Scroll
- Automatically loads more anime as you scroll
- No need to click "next page" buttons
- Smooth loading experience with visual indicators
- Efficient data fetching to minimize load times

### Beautiful Animations
- Smooth fade-in effects when anime cards appear
- Hover animations on cards
- Staggered animations for visual appeal
- Powered by Framer Motion for 60fps performance

### Responsive Design
- **Desktop**: Multi-column grid layout for maximum content
- **Tablet**: Optimized 2-column layout
- **Mobile**: Single-column layout for easy browsing
- Touch-friendly interface on mobile devices

### Rich Anime Information
Each anime card displays:
- High-quality cover image
- Title (English and Japanese)
- Episode count
- Rating score
- Brief synopsis
- Genres and tags

## 🛠️ Technical Stack

- **[Next.js 14](https://nextjs.org/)** - React framework with App Router for server-side rendering and static generation
- **[React 18](https://react.dev/)** - JavaScript library for building user interfaces
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript superset
- **[Framer Motion](https://www.framer.com/motion/)** - Production-ready animation library for React
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Jikan API](https://jikan.moe/)** - Unofficial MyAnimeList API for anime data
- **[React Intersection Observer](https://www.npmjs.com/package/react-intersection-observer)** - React hook for detecting element visibility

## 📁 Project Structure

```
anime-website/
├── app/
│   ├── action.ts          # Server actions for fetching anime data
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Home page
├── components/
│   ├── AnimeCard.tsx      # Individual anime card component
│   ├── Footer.tsx         # Footer component
│   ├── Hero.tsx           # Hero section component
│   ├── LoadMore.tsx       # Infinite scroll component
│   └── MotionDiv.tsx      # Framer Motion wrapper component
├── public/                # Static assets (images, icons, etc.)
└── package.json           # Project dependencies and scripts
```

## 🎨 Component Overview

### Hero Component
- Eye-catching landing section
- Animated title and description
- Call-to-action to start exploring
- Responsive background and layout

### AnimeCard Component
- Displays anime cover image
- Shows title, episodes, and rating
- Hover effects for interactivity
- Click to view more details
- Smooth animations on appearance

### LoadMore Component
- Detects when user scrolls to bottom
- Automatically fetches next page of anime
- Shows loading spinner during fetch
- Handles errors gracefully
- Uses Intersection Observer API

### MotionDiv Component
- Reusable wrapper for Framer Motion animations
- Consistent animation timing across the app
- Staggered animations for lists
- Fade-in and slide-up effects

## 📝 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build optimized production bundle
- `npm start` - Start production server
- `npm run lint` - Run ESLint for code quality checks

## 🌐 API Integration

### Jikan API v4

This project uses the [Jikan API](https://docs.api.jikan.moe/) to fetch anime data from MyAnimeList.

**Features:**
- No API key required
- Free to use
- Comprehensive anime database
- Regular updates
- Rate limiting: 3 requests per second, 60 per minute

**Endpoints Used:**
- `GET /v4/anime` - Fetch paginated anime list
- Includes filters for genres, ratings, and more

## 🚀 Performance Optimizations

- **Server-Side Rendering**: Initial page loads instantly with pre-rendered content
- **Image Optimization**: Next.js automatically optimizes images
- **Code Splitting**: Only load JavaScript needed for current page
- **Lazy Loading**: Images load as they enter viewport
- **Caching**: API responses cached for faster subsequent loads
- **Prefetching**: Next.js prefetches linked pages in background

## 🎯 Future Enhancements

- [ ] Search functionality to find specific anime
- [ ] Filter by genre, year, rating, and status
- [ ] Sort options (popularity, rating, newest)
- [ ] Detailed anime pages with full information
- [ ] User accounts and watchlists
- [ ] Favorites and bookmarks
- [ ] Recommendations based on preferences
- [ ] Dark/light theme toggle
- [ ] Share anime on social media

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [Jikan API Documentation](https://docs.api.jikan.moe/) - Explore available endpoints
- [Framer Motion](https://www.framer.com/motion/) - Learn about animations
- [Tailwind CSS](https://tailwindcss.com/docs) - Utility-first CSS framework

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Anime data provided by [MyAnimeList](https://myanimelist.net/)
- API access via [Jikan](https://jikan.moe/)
- Built with [Next.js](https://nextjs.org/) and [React](https://react.dev/)

