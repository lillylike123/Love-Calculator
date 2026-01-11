const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// Love calculator algorithm
function calculateLovePercentage(name1, name2) {
    const combined = (name1 + name2).toLowerCase();
    let hash = 0;
    
    for (let i = 0; i < combined.length; i++) {
        const char = combined.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
    
    const percentage = Math.abs(hash % 100) + 1;
    
    return {
        percentage,
        message: getMatchMessage(percentage),
        description: getMatchDescription(percentage)
    };
}

function getMatchMessage(percentage) {
    if (percentage >= 90) return "🔥 MATCH MADE IN HEAVEN! 🔥";
    if (percentage >= 80) return "❤️ TRUE LOVE! ❤️";
    if (percentage >= 70) return "💕 GREAT CHEMISTRY! 💕";
    if (percentage >= 60) return "💖 GOOD POTENTIAL! 💖";
    if (percentage >= 50) return "💗 COULD WORK! 💗";
    if (percentage >= 40) return "💓 MAYBE... 💓";
    if (percentage >= 30) return "💞 TAKE A CHANCE! 💞";
    if (percentage >= 20) return "😊 IT'S POSSIBLE... 😊";
    if (percentage >= 10) return "😅 PERHAPS NOT... 😅";
    return "😬 PROBABLY NOT 😬";
}

function getMatchDescription(percentage) {
    if (percentage >= 90) return "You two are absolutely perfect for each other! Destiny clearly brought you together. Don't waste another moment!";
    if (percentage >= 80) return "Wow! This is a genuinely strong connection. You have all the ingredients for a beautiful relationship!";
    if (percentage >= 70) return "Excellent compatibility! You share many qualities that could lead to a wonderful romance.";
    if (percentage >= 60) return "Good news! There's solid potential here. With effort and understanding, this could really blossom.";
    if (percentage >= 50) return "The stars are moderately aligned. There's potential, but you'll need to work on understanding each other.";
    if (percentage >= 40) return "It could go either way. Love requires work, but who knows? Miracles happen!";
    if (percentage >= 30) return "There are some challenges ahead, but love conquers all. Give it a try!";
    if (percentage >= 20) return "It's unlikely, but stranger things have happened. Never say never!";
    if (percentage >= 10) return "This might be an uphill battle, but if you believe, anything is possible!";
    return "The odds are not in your favor, but maybe you're each other's exception to the rule!";
}

// API Routes
app.post('/api/calculate-love', (req, res) => {
    try {
        const { name1, name2 } = req.body;
        
        // Validation
        if (!name1 || !name2) {
            return res.status(400).json({
                error: 'Both names are required'
            });
        }
        
        if (typeof name1 !== 'string' || typeof name2 !== 'string') {
            return res.status(400).json({
                error: 'Names must be strings'
            });
        }
        
        if (name1.length < 2 || name2.length < 2) {
            return res.status(400).json({
                error: 'Names must be at least 2 characters long'
            });
        }
        
        if (name1.length > 50 || name2.length > 50) {
            return res.status(400).json({
                error: 'Names must be less than 50 characters'
            });
        }
        
        const result = calculateLovePercentage(name1.trim(), name2.trim());
        res.json(result);
        
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({
            error: 'An error occurred while calculating love percentage'
        });
    }
});

// Serve index.html for root path
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({
        error: 'Route not found'
    });
});

// Error handler
app.use((err, req, res, next) => {
    console.error('Error:', err);
    res.status(500).json({
        error: 'An error occurred'
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`\n❤️  Love Calculator Server Running ❤️`);
    console.log(`\n✨ Server is running at http://localhost:${PORT}`);
    console.log(`\n🌟 Open your browser and navigate to http://localhost:${PORT} to start calculating love!\n`);
});

module.exports = app;
