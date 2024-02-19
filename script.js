const form = document.querySelector(".form");
const resultdiv=document.querySelector(".result");
const btn=document.querySelector(".btn");

form.addEventListener('submit',(e)=>{
    e.preventDefault(); 
    getwordinfo(form.elements[0].value);
});

const getwordinfo=(word)=>{
    //now work of api is needed
}

