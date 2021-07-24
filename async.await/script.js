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


fetch(URL)
    .then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then((data) => {
        //Do something, show data etc.
    })
    .catch((error) => {
        console.log(error);
    });