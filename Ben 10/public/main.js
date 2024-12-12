const myUrl ="http://localhost:3000/characters/";


document.addEventListener("DOMContentLoaded", () => {
    getCharacters();
});

const getCharacters = () => {
    
    const bar = document.getElementById('character-bar');
    bar.innerHTML = ''; //reset the dom to empty

    fetch (myUrl)
        .then( response => response.json())
        .then( result => {

            result.forEach( character => {
                

                let itemContainer = document.createElement("div");    //<div></div>
                itemContainer.classList.add('charStyle');              //<div class="charstyle"></div>
                
                let itemName = document.createElement("h2");   // <h2></h2>
                itemName.textContent = character.name;         // <h2>Ben</h2>
                

                let deleteItem = document.createElement('button');
                deleteItem.textContent = 'Delete';

                itemContainer.append(itemName);     //<div> <h2>Ben</h2> </div>
                itemContainer.append(deleteItem);    //<div> <h2>Ben</h2> <button></button></div>                           
                bar.append(itemContainer);

                itemContainer.addEventListener('click', () => {
                    loadCharacter(character.id)
                })

                deleteItem.addEventListener('click',() => {
                    deleteItemFunction(character.id);
                })
            });
        }).catch( error => {throw error})
}

function loadCharacter (id) { //http://localhost:3000/characters/2
    fetch(myUrl+id)
        .then(response => response.json())
        .then(character => {

            // let name = document.getElementById('name')
            // name.textContent = character.name;

            document.getElementById('name').textContent = character.name;

            document.getElementById('image').src= character.image;
            document.getElementById('description').textContent = character.description;
            // document.getElementById('thoughts').textContent = `What are your thoughts on ${character.name} ?`;

        })
        .catch(error => {throw error})
}


const form = document.getElementById('formId')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let characterName = e.target.nameId.value; //--->Baymax
    let characterImageUrl = e.target.imageUrl.value;
    let characterDescription = e.target.descriptionId.value;

    let characterObj = {
        name : characterName,
        image: characterImageUrl,
        description: characterDescription
    } 
   
    updateAlienList(characterObj);
    form.reset();
})

function updateAlienList (characterObj) {
    fetch(myUrl, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(characterObj)
    })
    .then(res => res.json())
    .then(character => {
        console.log(character)
        getCharacters();
    })
    .catch(error => {throw error})
}

function deleteItemFunction (id) {
    fetch(myUrl+id,{
        method: 'DELETE',
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(id)
    })
    .then(res => res.json())
    .then( () => {
        getCharacters() 
        setDefault()
})
    .catch(error => {throw error})
}

function setDefault() {
    document.getElementById('name').textContent = 'Character Name'
    document.getElementById('image').src= "https://media.tenor.com/JbnLKar05tAAAAAM/anime-girl-light-blue-hair-anime.gif"
    document.getElementById('description').textContent = 'Hello from beyond the wall !!'
    document.getElementById('thoughts').textContent = '';

}
