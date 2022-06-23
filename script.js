const gallery$$ = document.querySelector(".gallery");
const buscador$$ = document.querySelectorAll(".personaje_buscado");

const hpUrl = "http://hp-api.herokuapp.com/api/characters";

const getHPInfo = async () => {

  const veinte = [];

  
  const HPInfoAPI = await fetch(hpUrl);
  const HPInfoJSON = await HPInfoAPI.json();

  console.log(HPInfoJSON);

  for (let i = 0; i < 20; i++) {
    veinte.push(HPInfoJSON[i])
   
    
  }
  console.log(veinte)

  const mappedHPInfo = veinte.map((person) => ({
    name: person.name,
    house: person.house,
    symbol: person.patronus,
    photo: person.image,
  }));

  pintarPersonajes(mappedHPInfo);

  //console.log(mappedHPInfo);
};

const pintarPersonajes = (mappedHPInfo) => {
  for (const personaje of mappedHPInfo) {
    //crear carta

    const carta$$ = document.createElement("div");
    const nombre$$ = document.createElement("h2");
    const casa$$ = document.createElement("h3");
    const simbolo$$ = document.createElement("p");
    const imagen$$ = document.createElement("img");

    // asignar variables

    nombre$$.innerText = personaje.name;
    casa$$.innerText = personaje.house;
    simbolo$$.innerText = personaje.symbol;

    //poner valores e imagen

    nombre$$.setAttribute("class", "nombre");
    casa$$.setAttribute("class", "casa");
    simbolo$$.setAttribute("clas", "simbolo");
    imagen$$.src = personaje.photo;
    imagen$$.alt = personaje.name;

    //unificamos

    carta$$.appendChild(nombre$$);
    carta$$.appendChild(casa$$);
    carta$$.appendChild(simbolo$$);
    carta$$.appendChild(imagen$$);

    gallery$$.appendChild(carta$$);
  }
};

getHPInfo();

buscador$$.addEventListener("input", pintarPersonajes);
