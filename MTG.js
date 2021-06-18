
const div = document.querySelector("#cards")

axios.get("https://api.magicthegathering.io/v1/cards")
.then((response)=>{
    console.log(response);
    for(let singLeRecord of response.data.cards){
        printToScreen(singLeRecord)
    }
})
.catch((err)=>{
    console.log(err);
})

const printToScreen =(record)=>{
    const {name,number,imageUrl} = record
    
    const Magic = document.createElement("Magic");
    Magic.number=number;
    Magic.className="btn btn-black"
    
    const buttonToImageUrl = document.createElement("button");
    buttonToImageUrl.innerHTML="view ImageUrl"
    buttonToImageUrl.href=`singLeRecord.html?imageUrl=${imageUrl}`
    buttonToImageUrl.className="btn btn-primary"

    const text = document.createTextNode(`${name} ${number} `)

    Magic.appendChild(text)
    Magic.appendChild(buttonToImageUrl)
    div.appendChild(Magic)
}