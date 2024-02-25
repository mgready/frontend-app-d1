import React, { useState } from 'react';
import './App.css'; // Подключаем файл стилей

function App() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:2000/data?quantity=5');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="container">
      <h1>Sensor Data</h1>
      <button onClick={fetchData}>Load data</button>
      <ul className="data-list">
        {Array.isArray(data) &&
          data.map((item) => (
            <li key={item._id} className="data-item">
              <p>Humidity: {item.humidity}</p>
              <p>Temperature: {item.temperature}</p>
              <p>Time: {item.timestamp}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default App;
