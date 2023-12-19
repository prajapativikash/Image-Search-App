const accessKey="soyRW8qgMP0kmE1picrQSY-LPx4TZUmpUUum1NTt4IE" // this is take the unsplash website and go to the API staus  and the acces key this our api key
const formEl =  document.querySelector("form")
const inputEl = document.getElementById("search-input")
const searchResult = document.querySelector(".Search-results")
const showMore = document.getElementById("Show-more-button")

let inputData = ""  // search the onject or animal
let page = 1;
 async function searchImage(){
    inputData = inputEl.value;
    const url =` https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;

    const response = await fetch(url)
    const data = await response.json()

    const results = data.results
    if(page === 1){
        searchResult.innerHTML = "" // if not found any image
    }

    results.map((result)=>{

        const imageWrapper = document.createElement('div') // this div is search result class
        imageWrapper.classList.add("search-result")
        const image = document.createElement('img')
        image.src = result.urls.small
        image.alt = result.alt_description

        const imageLink = document.createElement('a')
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.textContent = result.alt_description;


        imageWrapper.appendChild(image)
        imageWrapper.appendChild(imageLink);
        searchResult .appendChild(imageWrapper);




    });

    page++;
    if(page>1){
        showMore.style.display = "block";

    }
}

formEl.addEventListener("submit",(event)=>{
    event.preventDefault();
    page = 1;
    searchImage();

})
showMore .addEventListener("click",()=>{
    searchImage()

})