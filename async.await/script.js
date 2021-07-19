async function getData() {
    const res = await fetch('https://api.themoviedb.org/3/genre/movie/list');