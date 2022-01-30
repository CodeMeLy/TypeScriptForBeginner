type Species = 'cat' | 'dog' | 'bird';
export interface Pet{
    species: Species;
    name: string;
    sleep():any;
    eat():any;
}
export interface Dog extends Pet{
    species:'dog';
}
export interface Cat extends Pet{
    species:'cat';
}
export interface Bird extends Pet{
    species:'bird';
    sing():any;
}
export function isBird(pet:Pet){
    return pet.species === 'bird';
}
export function isCat(pet:Pet){
    return pet.species === 'cat';
}
export function isDog(pet:Pet){
    return pet.species === 'dog';
}
export function buyPet(species:Species, name:string):Pet{
    if(species === 'cat'){
        return {
            species: species,
            name: name,
            eat: function(){
                console.log(`${name} eat`);
            }
        } as Cat;
    } else if (species==='dog'){
        return {
            species: species,
            name: name,
            eat: function(){
                console.log(`${name} eat `)
            }
        } as Dog;
    } else if (species==='bird'){
        return {
            species: species,
            name: name,
            eat: function() {
                console.log(`${name} eat`);
            },
            sleep: function(){
                console.log(`${name} sleep`);
            },
            sing: function(){
                console.log(`${name} sing`);
            }
        } as Bird;
    }
    else{
        throw `Sorry, we don't have a ${species}. Would you like buy dog?'`;
    }
}