
const stateData1 = [

    { id: "CA", name: "California" },
    { id: "FL", name: "Florida" },
    { id: "KY", name: "Kentucky" },
    { id: "TX", name: "Texas" },
]

// C#
// foreach (var state in stateData1){

// }


for (let state of stateData1) {
    console.log(state.id)
}


for (let i = 10; i <= 15; i++) {
    console.log(i)
}


function adderaTal(x, y) {
    return x + y
}

const adderaTal2 = (x, y) => {
    return x + y
}

const adderaTal3 = (x, y) => x + y

// double adderaTal(double x, double y){
//     return x+y
// }

function skrivUtMassaSaker() {
    console.log("aaaaaaaaaaa")
    console.log("bbbbbbbbbbb")
    console.log("ccccccccccc")
}

// Samma sak

const skrivUtMassaSaker2 = () => {
    console.log("aaaaaaaaaaa")
    console.log("bbbbbbbbbbb")
    console.log("ccccccccccc")
}


const stateData2 = [

    { id: "CA", name: "California", cities: [{ id: "LO", population: 3898747, name: "Los Angeles" }, { id: "SA", population: 1386932, name: "San Diego" }, { id: "OA", population: 440646, name: "Oakland" }] },
    { id: "FL", name: "Florida", cities: [{ id: "JA", population: 949611, name: "Jacksonville" }, { id: "MI", population: 442241, name: "Miami" }, { id: "OR", population: 307573, name: "Orlando" }] },
    { id: "KY", name: "Kentucky", cities: [{ id: "LO", population: 633045, name: "Louisville" }, { id: "BO", population: 72294, name: "Bowling Green" }, { id: "GE", population: 33660, name: "Georgetown" }] },
    { id: "TX", name: "Texas", cities: [{ id: "HO", population: 2320268, name: "Houston" }, { id: "DA", population: 1343573, name: "Dallas" }, { id: "AU", population: 978908, name: "Austin" }] },
]


