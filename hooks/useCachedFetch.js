

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
  