let btn = document.getElementById("btn");
let dname = document.getElementById("dname");
let type = document.getElementById("type");
let left = document.getElementById("left");
let right = document.getElementById("right");
let type1,type2;
let ti1 = document.getElementById("ti1");
let ti2 = document.getElementById("ti2");
let flag = 0;
let ht1 = document.getElementById("ht1");
let wt1 = document.getElementById("wt1");
let ablist = document.getElementById("ablts");
let mgc = document.querySelector("#mgc");
let nav = document.getElementById("nav1");
let bx = document.getElementById("bx1");
const getPokemon = async() => {
    try{
        const pokemonName = document.getElementById("pokemonName");
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.value.toLowerCase()}`);
        
        if(!response.ok)
            {
                throw new Error("could not fetch data");
            }

        const data = await response.json();
        console.log(data);
        const pokemonSprite = data.sprites.front_default;
        const pimg = document.getElementById("pi");
        const abilities = data.abilities;
        for(let abl of abilities)
        {
            let newEle = document.createElement("li");
            newEle.innerText = abl.ability.name;
            ablist.append(newEle);
        }
        bx1.innerText = data.base_experience;
        nav.style.display="flex";
        mgc.classList.add("megacontainer2");
        mgc.classList.remove("megcontainer");
        ablist.style.display="inline";
        left.style.display="block";
        right.style.display="block";
        pimg.src = pokemonSprite;
        pimg.style.display= "block";
        dname.innerText = data.species.name.toUpperCase();
        ht1.innerText = data.height;
        wt1.innerText = data.weight;
        dname.style.display= "block";
        pokemonName.style.display="none";
        btn.style.display="none";
        type.style.display="block";
        type1 = data.types[0].type.name;
        try{
        type2 = data.types[1].type.name;
        }
        catch(error)
        {
            ti2.src = 'https://wallpapercave.com/wp/wp6903417.jpg';
            ti2.style.display = "block";
            flag += 1;
        }
        console.log(type1);
        console.log(type2);
        ti1.src = displayType(type1);
        ti1.style.display="block";
        if(flag ==  0)
        {
        ti2.src = displayType(type2);
        ti2.style.display="block";
        }
            
    }
    catch(error){
      console.error(error);
    }
};

const displayType = (type) => {
   switch(type)
   {
     case "bug":
        return './imgs/bug.jpg'
        break
     
     case "dark":
        return './imgs/dark.jpg'
        break

     case "dragon":
        return './imgs/dragon.jpg'
        break

     case "electric":
        return './imgs/electric.jpg'
        break
    
     case "fairy":
        return './imgs/fairy.jpg'
        break
     
     case "fighting":
        return './imgs/fighting.jpg'
        break
     
     case "fire":
        return './imgs/fire.jpg'
        break 
     
     case "flying":
        return './imgs/flying.jpg'
        break
     
     case "ghost":
        return './imgs/ghost.jpg'
        break
     
     case "grass":
        return './imgs/grass.jpg'
        break
     
     case "ground":
        return './imgs/ground.jpg'
        break
     
     case "ice":
        return './imgs/ice.jpg'
        break
     
     case "normal":
        return './imgs/normal.jpg'
        break
     
     case "poison":
        return './imgs/poison.jpg'
        break
    
     case "psychic":
        return './imgs/psychic.jpg'
        break
     
     case "rock":
        return './imgs/rock.jpg'
        break
    
     case "steel":
        return './imgs/steel.jpg'
        break

     case "water":
        return './imgs/water.jpg'
        break
    
     default:
        return 'https://tse3.mm.bing.net/th?id=OIP.ls-dZdLfrV_M3rI0sprGrgHaNL&pid=Api&P=0&h=180'
        break   
   }
}


btn.addEventListener("click",getPokemon);