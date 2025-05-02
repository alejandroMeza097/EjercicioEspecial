
const URLMain = "https://api.escuelajs.co/api/v1/products";



//FUNCION PARA OBTENER DATOS DESDE LA API...
function getData(){
    const options = {"method":"GET"};
    fetch(URLMain)
    .then((response)=>{
        console.log(response);
        response.json().then((res)=>{
           
            ObtenerDatos(res);
        });
    })
    .catch((err) => {
       console.log("err");
    });
}

function ObtenerDatos(respuesta){
    respuesta.forEach(element => {
        console.log(element.category.image);
    });
}

getData();