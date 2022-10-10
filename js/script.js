
// задача 1
const userWallet = {
    amountUsa: 350,
    amountEuro: 450,
    amountUa: 5500
}

const bank = [
    {
        buy: 41,
        sell: 42,
        name: 'usa'
    },
    {
        buy: 40,
        sell: 41,
        name: 'euro'
    }
];

function buy (wallet, curency){
        for (const obj of curency) { 
            if (obj.name == 'usa' && wallet >= obj.sell){
                console.log(`Вы можете приобрести $ ${(wallet / obj.sell).toFixed()}`)
            }
            else if(obj.name == 'euro' && wallet >= obj.sell){ 
                console.log(`Вы можете приобрести € ${(wallet / obj.sell).toFixed()}`); 
            }
            else{
                console.log('Недостаточно средств в кошельке ')
            }
        }
}
buy(userWallet.amountUa, bank)

function sell (walletUsa, walletEuro, curency){
let allSellCurency = 0;
    for (const obj of curency){
        if (obj.name == 'usa'){
            allSellCurency += walletUsa * obj.buy
        }
        else if (obj.name == 'euro'){
            allSellCurency += walletEuro * obj.buy
        }
    }
    console.log(`Можно получить продав всю валюту: ${allSellCurency} Uah`)
}
sell(userWallet.amountUsa, userWallet.amountEuro, bank);

// задача 2

 let move = (value)=>`на ${value} шагов`; 
 function moveUser(napravlenie, fn, value){ 
     console.log(`Юзер переместился на ${napravlenie} ${fn(value)}`); 
 } 
 moveUser('north', move, 10); 

//  задача 3

let array = ["Keep", "Remove", "Keep", "Remove", "Keep"];
 if(array.length == 0){
    console.log('array is empty')
 }
 else{
    array.forEach(function(item,index){
        array.splice(index+1,1)
      })
}
 console.log(array);

//  задача 4

let figurs = [
    {
        figure:"circle",
        radius: 10
    },
    {
        figure:"Squar",
        sizeA: 4,
        sizeB: 4
    },
    {
        figure:"Rectangle",
        sizeA: 4,
        sizeB: 8
    }
]

function square(arr){
    for (const obj of arr) {
        if (obj.figure == "circle"){
            console.log(`Площадь фигуры: ${obj.figure} равна ${Math.PI*Math.pow(obj.radius, 2)}`);
        }
        else if(obj.figure == "Squar" || obj.figure == "Rectangle"){
          console.log(`Площадь фигуры: ${obj.figure} равна ${obj.sizeA*obj.sizeB}`);
        }
    }
}
square(figurs)

// задача 5

const taskArr5 = [2,3,5,4,8,7,9,10];

const newArr = taskArr5.filter(num => num % 2 == 0).map(num => num*4)
console.log(newArr)

// задача 6

const taskArr6 = [2.5,3.2,5.4,4.6,8.3,7.1,9.5,10.02];

function fun(arr){
        for(let i = 0; i<arr.length; i++){
            arr[i] = Math.ceil(arr[i])
        }
}
fun(taskArr6);
console.log(taskArr6)

// задача 7

function random(){
    let randomArr = [];
    while (randomArr.length<10) {
        randomArr.push(Math.round(Math.random()*100));
    }
    console.log(randomArr)
}
random()
