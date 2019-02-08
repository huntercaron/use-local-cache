import { useState, useEffect } from 'react';

const hashCode = (string) => {
    let hash = 0
    let i = undefined
    let chr = undefined
    if (string === 0)
        return hash
    i = 0
    while (i < string.length) {
        chr = string.charCodeAt(i)
        hash = (hash << 5) - hash + chr
        hash |= 0
        i++
    }
    return hash
}  

// a fetch wrapper that caches the response to local storage
function useCachedFetch(url, updateOnFirstFetch = false) {
    const keyHash = hashCode(url)
    const cache = localStorage.getItem(keyHash)
    const cachedData = cache ? JSON.parse(cache) : null;
    const [data, setData] = useState(cachedData);

    async function fetchData(updateState = false) {
        try {
        const response = await fetch(url);
        const newData = await response.json();

        if (response.status === 200) {
            if (updateOnFirstFetch || updateState) 
            setData(newData)

            localStorage.setItem(keyHash, JSON.stringify(newData))
        }
        } catch(err) { 
        console.error(err)
        throw err;
        }
    }

    useEffect(() => {
        fetchData(cache === null);
    }, [])

    return [data, () => fetchData(true)]
}

export { useCachedFetch };