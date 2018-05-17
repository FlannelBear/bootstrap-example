console.log( 'JS' );

$( document ).ready(setUp);
let pups = [];
// pup class
class Pup{
    constructor( name, breed, age ){
        this.name = name;
        this.breed = breed;
        this.age = age;
    } // end constructor
} // end pup class

pups.push(new Pup( 'Onyx', 'Black Lab', '12' ));
pups.push(new Pup( 'Shiela', 'Black Lab', '12' ));
pups.push(new Pup( 'Moody', 'Terrier', '2' ));
pups.push(new Pup( 'Buddy', 'Corgi', '14' ));
pups.push(new Pup( 'Charlie', 'Pitbull', '8' ));
pups.push(new Pup( 'Hamms', 'Yorkshire Terrier', '4' ));
pups.push(new Pup( 'Max', 'Husky', '4' ));
pups.push(new Pup( 'Noctis', 'Husky', '2' ));

function setUp(){
    console.log( 'jQuery' );

    // select element by ID
    let el = $( '#gridTest' );
    // test loop
    for( pup of pups ){
    // append to this element
    let outputString = `<div class="col-6">`;
    outputString += `<div class="card">`;
    outputString += `<div class="card-header"><strong>${pup.name}</strong></div>`
    outputString += `<div class="card-body">Breed: ${pup.breed}</div>`
    outputString += `<div class="card-footer">Age: ${pup.age}</div>`    
    outputString += `</div>`; // end of card div
    outputString += `</div>`; // end grid/row div
    el.append( outputString );
    } // end for loop
} // end setUp

