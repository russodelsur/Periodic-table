// Compulsory Task 1

// I created a Javascript element to avoid typing all information manually in HTML.
// Got the content from here: https://gist.github.com/robertwb/22aa4dbfb6bcecd94f2176caa912b952
// Some of the content I counted out manually - the indexes.

const elementList = ["Hydrogen", "Helium", "Lithium", "Beryllium", "Boron", "Carbon", "Nitrogen", "Oxygen", "Fluorine", "Neon", "Sodium", "Magnesium", "Aluminum", "Silicon", "Phosphorus", "Sulfur", "Chlorine", "Argon", "Potassium", "Calcium", "Scandium", "Titanium", "Vanadium", "Chromium", "Manganese", "Iron", "Cobalt", "Nickel", "Copper", "Zinc", "Gallium", "Germanium", "Arsenic", "Selenium", "Bromine", "Krypton", "Rubidium", "Strontium", "Yttrium", "Zirconium", "Niobium", "Molybdenum", "Technetium", "Ruthenium", "Rhodium", "Palladium", "Silver", "Cadmium", "Indium", "Tin", "Antimony", "Tellurium", "Iodine", "Xenon", "Cesium", "Barium", "Hafnium", "Tantalum", "Tungsten", "Rhenium", "Osmium", "Iridium", "Platinum", "Gold", "Mercury", "Thallium", "Lead", "Bismuth", "Polonium", "Astatine", "Radon", "Francium", "Radium", "Rutherfordium", "Dubnium", "Seaborgium", "Bohrium", "Hassium", "Meitnerium", "Darmstadtium", "Roentgenium", "Copernicium", "Nihonium", "Flerovium", "Moscovium", "Livermorium", "Tennessine", "Oganesson", "Lanthanum", "Cerium", "Praseodymium", "Neodymium", "Promethium", "Samarium", "Europium", "Gadolinium", "Terbium", "Dysprosium", "Holmium", "Erbium", "Thulium", "Ytterbium", "Lutetium", "Actinium", "Thorium", "Protactinium", "Uranium", "Neptunium", "Plutonium", "Americium", "Curium", "Berkelium", "Californium", "Einsteinium", "Fermium", "Mendelevium", "Nobelium", "Lawrencium"];

const elementNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103];

const elementSymbol = ["H", "He", "Li", "Be", "B", "C", "N", "O", "F", "Ne", "Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar", "K", "Ca", "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As", "Se", "Br", "Kr", "Rb", "Sr", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Sb", "Te", "I", "Xe", "Cs", "Ba", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg", "Tl", "Pb", "Bi", "Po", "At", "Rn", "Fr", "Ra", "Rf", "Db", "Sg", "Bh", "Hs", "Mt", "Ds", "Rg", "Cn", "Nh", "Fl", "Mc", "Lv", "Ts", "Og", "La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu", "Ac", "Th", "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No", "Lr"]

const chemicalGroup = ["Nonmetal", "Noble Gas", "Alkali Metal", "Alkaline Earth Metal", "Metalloid", "Nonmetal", "Nonmetal", "Nonmetal", "Halogen", "Noble Gas", "Alkali Metal", "Alkaline Earth Metal", "Post-Transition Metal", "Metalloid", "Nonmetal", "Nonmetal", "Halogen", "Noble Gas", "Alkali Metal", "Alkaline Earth Metal", "Transition Metal", "Transition Metal", "Transition Metal", "Transition Metal", "Transition Metal", "Transition Metal", "Transition Metal", "Transition Metal", "Transition Metal", "Transition Metal", "Post-Transition Metal", "Metalloid", "Metalloid", "Nonmetal", "Halogen", "Noble Gas", "Alkali Metal", "Alkaline Earth Metal", "Transition Metal", "Transition Metal", "Transition Metal", "Transition Metal", "Transition Metal", "Transition Metal", "Transition Metal", "Transition Metal", "Transition Metal", "Transition Metal", "Post-Transition Metal", "Post-Transition Metal", "Metalloid", "Metalloid", "Halogen", "Noble Gas", "Alkali Metal", "Alkaline Earth Metal", "Transition Metal", "Transition Metal", "Transition Metal", "Transition Metal", "Transition Metal", "Transition Metal", "Transition Metal", "Transition Metal", "Transition Metal", "Post-Transition Metal", "Post-Transition Metal", "Post-Transition Metal", "Metalloid", "Halogen", "Noble Gas", "Alkali Metal", "Alkaline Earth Metal", "Transition Metal", "Transition Metal", "Transition Metal", "Transition Metal", "Transition Metal", "Transition Metal", "Transition Metal", "Transition Metal", "Transition Metal", "Post-Transition Metal", "Post-Transition Metal", "Post-Transition Metal", "Post-Transition Metal", "Halogen", "Noble Gas", "Lanthanide", "Lanthanide", "Lanthanide", "Lanthanide", "Lanthanide", "Lanthanide", "Lanthanide", "Lanthanide", "Lanthanide", "Lanthanide", "Lanthanide", "Lanthanide", "Lanthanide", "Lanthanide", "Lanthanide", "Actinide", "Actinide", "Actinide", "Actinide", "Actinide", "Actinide", "Actinide", "Actinide", "Actinide", "Actinide", "Actinide", "Actinide", "Actinide", "Actinide", "Actinide"];

const totalBoxes = 126;

const emptyBoxes = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 93, 111];

const boxesNumbers = [2, 13, 14, 15, 16, 17, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48];

const emptyLat = [1, 2, 3, 19, 20, 21];

// Created an object element with my properties.
class Element{
    constructor(elementName, number, symbol, chemGroup){
    this.elementName = elementName;
    this.number = number;
    this.symbol = symbol;
    this.chemGroup = chemGroup;
    }

    // getters for fetching properties
    get Name(){
        return this.elementName;
    }
    get Number(){
        return this.number;
    }
    get Symbol(){
        return this.symbol;
    }
    get Group(){
        return this.chemGroup;
    }
}

// Creating array of elements.
function createElement(){
    let array = [];
    let element;
    for (let i = 0; i < elementNumber.length; i++) {
        element = new Element(elementList[i], elementNumber[i], elementSymbol[i], chemicalGroup[i]);
        array.push(element);
    }
    return array;
}

let array = createElement();

// splitting the elements in two tables
let table1 = array.slice(0, 88);
let table2 = array.slice(88, 118);

let empty;

// Adding empty boxes as need using index variable
for (let i = 0; i < emptyBoxes.length; i++) {
    let index = emptyBoxes[i]-1;
    table1.splice(index, 0, new Element(empty,empty,empty,empty))
}

// Adding empty boxes as need using index variable. Same for table2
for (let i = 0; i < emptyLat.length; i++) {
    let index = emptyLat[i]-1;
    table2.splice(index, 0, new Element(empty,empty,empty,empty));
}

// Creating my card for each box with DOM manipulation.
const periodicTable1 = document.querySelector('.table1');
for (let i = 0; i < table1.length; i++) {
    const h3 = document.createElement('h3');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');
    const p2 = document.createElement('p');
    const div = document.createElement('div');

    h3.textContent = table1[i].Number;
    h2.textContent = table1[i].Symbol;
    p.textContent = table1[i].Name;
    p2.textContent = table1[i].Group;

    let groupName = table1[i].Group;

    // Adding id to divs so I can manipulate box by type
    if (table1[i].Group != undefined) {
        div.id = groupName.replace(/ /g, "-");  
    }

    // Adding content to boxes that require numbering
    for (let x = 0; x < boxesNumbers.length; x++) {
        if (boxesNumbers[x]-1 === i) {
        h3.id = "h3-number";
        div.id = "number";
    
    // Not all boxes display numbers matching indexed, solving this below
        if (boxesNumbers[x] < 18) {
            h3.textContent = String(boxesNumbers[x]);   
        } else {
            h3.textContent = String(boxesNumbers[x]-36);  
        }
    }
}

    // Solving the two boxes that have the * symbols
    if (92 === i ) {
        h3.textContent = "*";
        h3.id = "h3-stars"
        div.id = "number";
    }

    if (110 === i) {
        h3.textContent = "**";
        h3.id = "h3-stars"
        div.id = "number";
    }
    div.append(h3, h2, p, p2);

    // Appending result to DOM element
    periodicTable1.append(div);
}

// Same process for the second table of lanthanide & actinide
const periodicTable2 = document.querySelector('.table2');
for (let i = 0; i < table2.length; i++) {
    const h3 = document.createElement('h3');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');
    const p2 = document.createElement('p');
    const div = document.createElement('div');

    h3.textContent = table2[i].Number;
    h2.textContent = table2[i].Symbol;
    p.textContent = table2[i].Name;
    p2.textContent = table2[i].Group;

    let groupName = table2[i].Group;

    if (table2[i].Group != undefined) {
        div.id = groupName.replace(/ /g, "-");  
    }

    if (2 === i ) {
        h3.textContent = "*";
        h3.id = "h3-stars"
        div.id = "number";
    }

    if (20 === i) {
        h3.textContent = "**";
        h3.id = "h3-stars"
        div.id = "number";
    }

    div.append(h3, h2, p, p2);

    // Appending result to DOM element
    periodicTable2.append(div);
}

// I learned about DOM manipulation here: https://www.w3schools.com/js/js_htmldom.asp