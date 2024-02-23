const form = document.querySelector(".form");
const resultdiv=document.querySelector(".result");
const btn=document.querySelector(".btn");
var footer=document.querySelector(".f_footer");



    // resultdiv.style.height>="100vh" ? footer.style.position="sticky" : footer.style.position="fixed"; 
    resultdiv.style.display="none"; 

form.addEventListener('submit',(e)=>{
    e.preventDefault(); 
    getwordinfo(form.elements[0].value);
});

const getwordinfo=async (word)=>{
    try {
   
    const api=`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    const response=await fetch(api);
    const data=await response.json();
    let definition=data[0].meanings[0].definitions[0];
    let syns=data[0].meanings[0];
    resultdiv.style.display="block";
    resultdiv.innerHTML=`
        <h2><strong>Word: </strong>${data[0].word}</h2>
        <p class="partofspeech">${data[0].meanings[0].partOfSpeech}</p>  
        <p><strong>meaning: </strong>${definition.definition === undefined ? "word not found": definition.definition}</p>
        <p><strong>examples: </strong>${definition.example === undefined ? "Not found": definition.example}</p>
        <p class="syns"><strong>Synonyms</strong></p>
      
     `
    if(syns.synonyms.length===0){
        resultdiv.innerHTML+=`<p>Synonyms Not Found<P>`
    }
    else{
        for(let i=0;i<syns.synonyms.length;i++)
        {
            resultdiv.innerHTML +=`
            <li>${syns.synonyms[i]}</li>
            
            `    
        }
    }
   resultdiv.innerHTML+=`  <button><a href="${data[0].sourceUrls}" target="_blank">Read more</a></button>`
        
} 
catch (error) {
    resultdiv.style.display="block";
   resultdiv.innerHTML=`<p>Sorry,the word couldnot be  found</p >`;
}

}

