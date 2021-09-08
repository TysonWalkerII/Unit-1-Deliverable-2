let name = prompt("Name your pet.")
let Happiness = 0;
let Energy=0;

for ( i = 0; i<6; i++){

    let action = prompt("Feed, pet or walk?")
        if (action.toLowerCase()=== "feed"){
            Energy = Energy + 2;
        }
    
        else if(action.toLowerCase()==="pet"){
        Happiness = Happiness + 1;}

        else if (action.toLowerCase()==="walk"){
            Happiness = Happiness + 2
            Energy = Energy - 1
            if (Energy<0){
                alert("There isn't enough energy for a walk.")
            }
        }
}
console.log(""+name+" has "+Happiness+" and "+Energy+" energy.")