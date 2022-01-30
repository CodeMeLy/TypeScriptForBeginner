"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buyPet = exports.isDog = exports.isCat = exports.isBird = void 0;
function isBird(pet) {
    return pet.species === 'bird';
}
exports.isBird = isBird;
function isCat(pet) {
    return pet.species === 'cat';
}
exports.isCat = isCat;
function isDog(pet) {
    return pet.species === 'dog';
}
exports.isDog = isDog;
function buyPet(species, name) {
    if (species === 'cat') {
        return {
            species: species,
            name: name,
            eat: function () {
                console.log(`${name} eat`);
            }
        };
    }
    else if (species === 'dog') {
        return {
            species: species,
            name: name,
            eat: function () {
                console.log(`${name} eat `);
            }
        };
    }
    else if (species === 'bird') {
        return {
            species: species,
            name: name,
            eat: function () {
                console.log(`${name} eat`);
            },
            sleep: function () {
                console.log(`${name} sleep`);
            },
            sing: function () {
                console.log(`${name} sing`);
            }
        };
    }
    else {
        throw `Sorry, we don't have a ${species}. Would you like buy dog?'`;
    }
}
exports.buyPet = buyPet;
