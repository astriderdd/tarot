# 🔮 Tarot Card Reader

A beautiful, interactive tarot card reading app built with Vue.js! This project lets you select three tarot cards and get personalized readings with crystal suggestions. Perfect for beginners who want to explore tarot in a modern, digital way.

## ✨ What This App Does

- **Card Selection**: Choose 3 cards from a deck of 78 tarot cards
- **Personal Readings**: Get meaningful interpretations for each card you select
- **Crystal Guidance**: Discover which crystals work best with your chosen cards
- **Beautiful UI**: Clean, responsive design that works on any device
- **Reset & Restart**: Start fresh anytime with the reset button

## 🚀 Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed (version 20.19.0 or higher). You can check your version by running:

```bash
node --version
```

### Installation

1. **Clone this repository** (if you haven't already):

   ```bash
   git clone <your-repo-url>
   cd tarot
   ```

2. **Install the dependencies**:

   ```bash
   npm install
   ```

3. **Start the development server**:

   ```bash
   npm run dev
   ```

4. **Open your browser** and go to `http://localhost:5173`

That's it! You should see the tarot card reader running locally. 🎉

## 🛠️ Available Scripts

- `npm run dev` - Start the development server with hot reload
- `npm run build` - Build the app for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Check and fix code style issues
- `npm run format` - Format code with Prettier

## 🏗️ Project Structure

```
src/
├── components/          # Vue components
│   ├── Card.vue        # Individual tarot card component
│   └── CardPicker.vue  # Main card selection interface
├── models/             # TypeScript type definitions
│   └── Card.ts         # Card data structure
├── copy/               # Card data and content
│   └── cards_en.ts     # All 78 tarot card definitions
├── utils/              # Helper functions
│   └── cardMessage.ts  # Card reading logic
├── assets/             # Images and static files
│   └── cards/          # SVG tarot card images (0.svg - 77.svg)
└── css/                # Styles
    └── tailwind.css    # Tailwind CSS configuration
```

## 🎨 Tech Stack

- **Vue 3** - Modern JavaScript framework
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and dev server
- **Pinia** - State management (ready for future features)

## 🔧 Development Tips

### Recommended IDE Setup

For the best development experience, use:

- [VS Code](https://code.visualstudio.com/)

## 🌟 Features

- **78 Tarot Cards**: Complete deck with beautiful SVG illustrations
- **Smart Card Selection**: Prevents duplicate card selection
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Type Safety**: Full TypeScript support for better development experience
- **Modern UI**: Clean, intuitive interface with smooth animations

## 🤝 Contributing

This is a personal project, but if you have ideas for improvements, feel free to:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📝 License

This project is for personal use. Feel free to use it as inspiration for your own tarot apps!

## 🙏 Acknowledgments

- Tarot card meanings and interpretations are based on traditional tarot wisdom
- Crystal suggestions are inspired by crystal healing practices
- Built with love for the tarot community ✨

---

_May your cards guide you wisely!_ 🔮
