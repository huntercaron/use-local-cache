# useLocalCache

A couple React hooks for using local storage as a cache.

> I still have testing to do, so if anything isn't working please let me know or feel free to submit a pr :)

## Installation 
`yarn add use-local-cache`

## Usage
### useCachedFetch
```js
const [data, fetchNewData] = useCachedFetch(url);
```

Fetches data form a url, and stores it in the cache.

`data` is the returned json data from the request. 
It will read as null during the first time it loads while data is fetched, then update when the data is received. All subsequent times will use the cache.

`fetchNewData` function will re-fetch the data from the url & update the data state.

> By default `useCachedFetch` will fetch and update the local storage every time, but not update the data state. To automatically update the state when new data is fetched on page-load, pass `true` as the second parameter. (ex. `const [data, fetchNewData] = useCachedFetch(url, true);`

#### Example Usage
![](https://github.com/huntercaron/use-local-cache/blob/master/assets/useCachedFetch.png)

### useLocalCache
```js
const [cacheValue, setCacheValue] = useLocalCache(key);
```

Essentially a hook wrapper for useState & localStorage. 
Useful for storing state, json or strings in localstorage. Pass it any string to use as a storage key. (ex. `useLocalCache("colors")`.

`cacheValue` is the string that is stored in the local cache.

`setCacheValue` function will update cache and update the cacheValue state.

#### Example Usage
![](https://github.com/huntercaron/use-local-cache/blob/master/assets/useLocalCache.png)



## Thanks
Thanks Henrique Gusso & Koen Bok for the idea and Patrick Burtchaell for  advising.

Inspired from [this fb thread](https://www.facebook.com/groups/framerjs/permalink/1932464396880622/)


## To-do: 
- [ ] useImageCache(arrOfImages)
- [ ] write tests
- [ ] comment the code

> *Disclamer: This was created for prototyping in Framer X, and is most likely not suited for use on the web :)*
