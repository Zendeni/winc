async function getData() {
    const res = await fetch('https://api.themoviedb.org/3/genre/movie/list');

}


const fetchPosts = async () => {
    const response = await fetch("URL");
    const json = await response.json();
    console.log(json);
}




const createPost = async () => {
    const response = await fetch("URL", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            title: "My post",
            body: "This is a new post",
        }),
    });
    const json = await response.json();
    console.log(json);
}