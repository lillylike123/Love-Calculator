# Love Calculator Website

A fun and interactive web application that calculates love compatibility between two people!

## Project Structure

```
love-calculator/
├── public/
│   ├── index.html       # Main HTML file
│   ├── styles.css       # Styling
│   └── script.js        # Frontend JavaScript
├── src/
│   └── server.js        # Express backend server
├── package.json         # Node.js dependencies and scripts
└── README.md           # This file
```

## Features

✨ **Beautiful UI** - Modern, responsive design with gradient backgrounds and smooth animations
💕 **Instant Calculation** - Get your love compatibility percentage instantly
🎯 **Personalized Messages** - Different messages based on compatibility percentage
📱 **Mobile Friendly** - Works perfectly on desktop and mobile devices
⚡ **Fast & Reliable** - Built with Express.js for optimal performance

## Installation

1. **Prerequisites**
   - Node.js (v14 or higher)
   - npm (comes with Node.js)

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start the Server**
   ```bash
   npm start
   ```
   
   Or for development with auto-reload:
   ```bash
   npm run dev
   ```

4. **Open in Browser**
   Navigate to `http://localhost:3000` in your web browser

## How It Works

1. Enter your name and your partner's name
2. Click "Calculate Love 💘"
3. Watch as your love percentage is calculated
4. Get a personalized message based on your compatibility score!

## API Endpoint

### POST `/api/calculate-love`

**Request Body:**
```json
{
  "name1": "Your Name",
  "name2": "Partner's Name"
}
```

**Response:**
```json
{
  "percentage": 85,
  "message": "❤️ TRUE LOVE! ❤️",
  "description": "Wow! This is a genuinely strong connection..."
}
```

## Compatibility Scale

- **90-100%**: 🔥 Match made in heaven!
- **80-89%**: ❤️ True love!
- **70-79%**: 💕 Great chemistry!
- **60-69%**: 💖 Good potential!
- **50-59%**: 💗 Could work!
- **40-49%**: 💓 Maybe...
- **30-39%**: 💞 Take a chance!
- **20-29%**: 😊 It's possible...
- **10-19%**: 😅 Perhaps not...
- **1-9%**: 😬 Probably not

## Technologies Used

### Frontend
- HTML5
- CSS3 (with animations and gradients)
- Vanilla JavaScript (ES6+)

### Backend
- Node.js
- Express.js
- CORS for cross-origin requests

## License

MIT License - Feel free to use this project for personal or commercial purposes!

## Disclaimer

This is just for fun! Real love and compatibility depend on so much more than names. This calculator uses a simple hash-based algorithm for entertainment purposes only. 💕

---

Made with ❤️ for love and fun!
