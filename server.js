const express = require('express');
const app = express();
const port = 4000;

app.get('/assistant/greet', (req, res) => {
    const userName = req.query.name || 'User'; // Default to 'User' if name isn't provided
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDay = new Date().getDay();
    let dayMessage = 'Have a wonderful day!';

    if (currentDay === 1) { // Monday
        dayMessage = 'Happy Monday! Start your week with energy!';
    } else if (currentDay === 5) { // Friday
        dayMessage = "It's Friday! The weekend is near!";
    }

    const response = {
        welcomeMessage: `Hello, ${userName}! Welcome to our assistant app!`,
        dayMessage: dayMessage
    };

    res.json(response);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});