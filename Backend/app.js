const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000; 

app.use(cors()); 
app.use(express.json()); 

// Sample menu data 
const menus = {
    hotel1: [
        { name: 'Burger', price: 10 },
        { name: 'Pizza', price: 15 },
        
    ],
    hotel2: [
        { name: 'Pasta', price: 12 },
        { name: 'Salad', price: 8 },
        
    ],
    
};

app.get('/getMenu', (req, res) => {
    const selectedHotel = req.query.hotel;
    const menu = menus[selectedHotel] || [];
    res.json(menu);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
