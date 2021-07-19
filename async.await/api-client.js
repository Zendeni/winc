const API_KEY = 194c3fa622251df7adc0c170d5681c6b

try {
    async function getData() {
        const res = await fetch('https://api.themoviedb.org/3/genre/movie/list');
    }
    res.json()
} catch (error) { console.error(error) }
