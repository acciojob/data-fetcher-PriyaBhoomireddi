// src/components/App.js

import React from 'react';
import DataFetcher from './DataFetcher'; // Import DataFetcher

const App = () => {
    return (
        <div>
            <h1>Data Fetcher</h1>
            <DataFetcher /> {/* Include the DataFetcher component */}
        </div>
    );
};

export default App;
