
const author = document.getElementById('author')
const quote = document.getElementById('text');
let jsonData = "";

const getNewQuote = () =>{
    let randomNum = Math.floor(Math.random() * jsonData.length);
    quote.innerText = `"${jsonData[randomNum].text}"`
    author.innerText = `- ${jsonData[randomNum].author}`
}


 const getQuotes = async() => {
    const api = "https://type.fit/api/quotes"
    try{
        let data = await fetch(api)
        jsonData = await data.json();
        getNewQuote();


    }catch(error){

        }
};
getQuotes();