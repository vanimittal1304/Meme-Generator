let generateImage = document.querySelector(".generateImage");
let memeTitle = document.querySelector(".meme-title");
let memeImage = document.querySelector(".meme-image");
let authorOutput = document.querySelector(".author");


function getMeme(){
    fetch('https://meme-api.com/gimme/wholesomememes')
    .then((res) => res.json())
    .then((data) => {
        const {author, title, url} = data

        authorOutput.innerText = author;
        memeTitle.innerText = title;
        memeImage.src = url;
    })
}

getMeme()
generateImage.addEventListener('click', () => {
    getMeme()
})