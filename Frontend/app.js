import React, { useState } from 'react';
import ReactDOM from "react-dom/client";

function App() {
    const [selectedHotel, setSelectedHotel] = useState('hotel1');
    const [menuItems, setMenuItems] = useState([]);

    const fetchMenu = () => {
        fetch(`http://localhost:3000/getMenu?hotel=${selectedHotel}`)
            .then(response => response.json())
            .then(data => setMenuItems(data))
            .catch(error => console.error(error));
    };

    return (
        <div className="App">
            <h1>Hotel Menu Fetcher</h1>
            <div>
                <label htmlFor="hotel">Select a Hotel:</label>
                <select
                    id="hotel"
                    name="hotel"
                    value={selectedHotel}
                    onChange={e => setSelectedHotel(e.target.value)}
                >
                    <option value="hotel1">Hotel 1</option>
                    <option value="hotel2">Hotel 2</option>
                    
                </select>
                <button onClick={fetchMenu}>Fetch Menu</button>
            </div>
            <div>
                <h2>Menu:</h2>
                <ul>
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            {item.name}: ${item.price}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);