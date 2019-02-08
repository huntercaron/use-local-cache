import { useState } from 'react';

// a hook wrapper for useState & localStorage
function useLocalCache(key) {
    const cache = localStorage.getItem(key);
    const cachedData = cache ? JSON.parse(cache) : null;
    const [data, setData] = useState(cachedData);

    return [data, (newData) => {
        localStorage.setItem(key, JSON.stringify(newData))
        setData(newData);
    }]
}

export { useLocalCache };