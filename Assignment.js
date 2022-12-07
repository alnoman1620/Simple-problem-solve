seerTOMon

function seerTOMon(input){
    let method = input / 40;
    return method;
}
let inputSeer = 80;
let result = seerTOMon(inputSeer);
console.log(result)

totalSales

function totalSale(shirt, pant, shoe ){
let shirtPrice = 200;
let pantPrice = 100;
let shoePrice = 50;

let totalShirtPrice = shirtPrice * shirt;
let totalPantPrice = pantPrice * pant;
let totalShoePrice = shoePrice * shoe;

let totalPrice = totalShirtPrice + totalPantPrice + totalShoePrice;
return totalPrice;
}
let inputShirtQuantity = 1;
let inputPantQuantity = 1;
let inputShoeQuantity = 1;
let totalSaleAmount = totalSale(inputShirtQuantity, inputPantQuantity, inputShoeQuantity);
console.log(totalSaleAmount);

deliveryCost

function animalCount(miles){
    let first10Miles = 10;
    let second10Miles = 50;
    let firstAndSecond10Miles = first10Miles + second10Miles;
    let Thir10Miles = 100;
    if(miles <= 10){
        const count = miles * first10Miles;
        return count;
    }
    else if(miles <= 20){
        const firstDenseAnimal = 10 * first10Miles;
        const restMiles = miles - 10;
        const secondDenseAnimal = restMiles * second10Miles;
    }
    else if(miles > 20){
        const restDenseAnimal = 20 * second10Miles;
        const newRestmiles = miles - firstAndSecond10Miles;
        const restlastMiles = newRestmiles * Thir10Miles;
        const total = firstDenseAnimal +  secondDenseAnimal + restlastMiles;
        return total;
}

}
const animals = animalCount(80)
console.log(animals);

function deliveryCost(shirtQuantity) {
    // Checking if the input is string
    if (typeof shirtQuantity != "number") {
    return "String input can't be accepted. Please give a positive integer input";
    }
    // Checking if the input is negative number
    else if (shirtQuantity < 0) {
    return "Negative input can't be accepted. Please give a positive integer input";
    }
    else if (shirtQuantity <= 100) {
    let totalDeliveryCost = shirtQuantity * 100;
    return totalDeliveryCost;
    }
    else if (shirtQuantity > 100 && shirtQuantity <= 200) {
    let temporary = shirtQuantity - 100;
    let totalDeliveryCost = (100 * 100) + (temporary * 80);
    return totalDeliveryCost;
    }
    else if (shirtQuantity > 200) {
    let temporary = shirtQuantity - 200;
    let totalDeliveryCost = (100 * 100) + (100 * 80) + (temporary * 50);
    return totalDeliveryCost;
    }
    }
    let totalMoney = deliveryCost(250);
    console.log(totalMoney);

function perfectFriend(friends) {
    let danger = 0;
    for (let i = 0; i < friends.length; i++) {
    
    else if (friends[i].length == 5) {
    return friends[i];
    }
    // Checking if there is no perfect friend
    else {
    danger += 1;
    if (danger == friends.length) {
    return "no perfect friend";
    }
    }
    }
    }
    let friendsName = ["Itachi", "Bakugo", "Naruto","Atika","kurosaki"];
    let perfectFriendName = perfectFriend(friendsName);
    console.log(perfectFriendName);

function goodFriend(friends){
    // danger = 0;
    for(let i = 0 ; i < friends.length; i++){
        if(friends[i].length == 5){
            return friends[i];
        }
        else{
            danger ++;
            if (danger == friends.length) {
                return "no perfect friend";
             }
            }
    }
}
let friendsName = ["Itachi", "Bakugo", "Naruto","Mamuna","kurosaki",];
let perfectFriendName = goodFriend(friendsName);
    console.log(perfectFriendName);
