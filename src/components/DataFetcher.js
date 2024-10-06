// src/components/DataFetcher.js

import React, { useEffect, useState } from 'react';

const DataFetcher = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://dummyjson.com/products');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setData(result); // Set the fetched data
            } catch (error) {
                setError(error.message); // Set error message if any
            } finally {
                setLoading(false); // Set loading to false after fetching
            }
        };

        fetchData();
    }, []); // Empty dependency array means this runs once after the component mounts

    if (loading) return <p>Loading...</p>; // Show loading message
    if (error) return <p>Error: {error}</p>; // Show error message if any

    return (
        <pre>{JSON.stringify(data, null, 2)}</pre> // Display the fetched data
    );
};

export default DataFetcher;
