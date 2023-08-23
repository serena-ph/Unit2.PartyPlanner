const parList = document.querySelector('.party_list');
let groupParty= [];
let groupDelete =[];


async function list(){
    const response = await fetch("https://fsa-crud-2aa9294fe819.herokuapp.com/api/2307-FSA-ET-WEB-FT-SF/events");
    const data = await response.json();
    return data;
}


function createElement(data) {
    const elem = document.createElement("li");
    eventL.appendChild(elem);
    const newElem = {
        name: data.name,
        description: data.description,
        date: data.date,
        location: data.location
    }
    console.log(newElem);
    elem.append(newElem.name, " ---- ", newElem.description, " ---- ", newElem.date, " ---- ", newElem.location);

}

list().then((response) => {
      response.data.forEach((i) => createElement(i));

})    


