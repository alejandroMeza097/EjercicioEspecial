const btnLoad = document.getElementById("btnLoad");
const URLMain = "https://api.escuelajs.co/api/v1/products";
const contenedorCards = document.getElementById("contenedorCards");
let contador = 0;


btnLoad.addEventListener("click",(event)=>{
    getData()
});



//FUNCION PARA OBTENER DATOS DESDE LA API...
function getData(){
    const options = {"method":"GET"};
    fetch(URLMain)
    .then((response)=>{
        console.log(response);
        response.json().then((res)=>{
            console.log(res);
            //console.log(res[16].title);
            create(res);
        });
    })
    .catch((err) => {
        //main.insertAdjacentHTML("beforeend",`<div class="alert alert-danger" role="alert">${err.message}</div>`)
    });
}




//FUNCION QUE GENERA LOS CARDS CON LA INFORMACION...
function create(res){


  for(let i = 0; i < 9; i++){

    contenedorCards.insertAdjacentHTML("beforeend",
      `
  <div class="col">
    <div class="card shadow-sm">
      
      <img src="${res[i].images[1]}" alt="" referrerpolicy="no-referrer">
      <div class="card-body">
        <p class="card-text">${res[i].id}</p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
            <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
          </div>
          <small class="text-body-secondary">$ price</small>
        </div>
      </div>
    </div>
  </div>
      `);
  }

} 





