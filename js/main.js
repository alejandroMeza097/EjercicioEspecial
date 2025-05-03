const btnLoad = document.getElementById("btnLoad");
const URLMain = "https://api.escuelajs.co/api/v1/products";
const elementosCard = document.getElementsByClassName("col");
const album = document.getElementsByClassName("album").item(0);

album.style.display = "none"



async function getData() {
    try {
        const response = await fetch(URLMain);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (err) {
        console.error(err);
        
    }
}


async function loadCards() {
    const res = await getData(); 
    for(let i = 0; i < 9; i++){
        console.log(elementosCard[i]);
        let price = elementosCard[i].getElementsByTagName("small").item(0);
        let description = elementosCard[i].getElementsByClassName("card-text").item(0);
        let cardBody = elementosCard[i].getElementsByClassName("card-body").item(0);
        let svg = elementosCard[i].getElementsByTagName("svg").item(0);

        svg.style.display = "none";
        price.innerText = `Price : ${res[i].id}`;
        description.innerText = res[i].description;
        cardBody.insertAdjacentHTML("afterbegin",`<p> <strong>${res[i].title}</strong></p>`);
        cardBody.insertAdjacentHTML("afterbegin",`<img src=${res[i].images[1]} class="card-img-top" alt="Descripción de la imagen" height="225" style="object-fit: cover;">`);
        
    }

}

btnLoad.addEventListener("click",(event)=> {
    album.style.display = "block"
    loadCards();

})



