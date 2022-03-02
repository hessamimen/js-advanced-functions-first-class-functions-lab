// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia']
const returnFirstTwoDrivers = (firstTwoDrivers) =>{
    return firstTwoDrivers.slice(0, 2)
}

const returnLastTwoDrivers = (lastTwoDrivers) => {
    return lastTwoDrivers.slice(-2)
}
let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(a){
    return (a) => a * a
}

function fareDoubler(a){
    return a * 2;
}
function fareTripler(a){
    return a * 3;
}

function selectDifferentDrivers(arrayOfDrivers, returnFunction){
    if (returnFunction === returnFirstTwoDrivers){
        return returnFirstTwoDrivers(arrayOfDrivers)
    } else if (returnFunction === returnLastTwoDrivers){
        return returnLastTwoDrivers(arrayOfDrivers)
    }

}

console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers));