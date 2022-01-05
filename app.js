console.log('hi')


const $div = $('<div>').attr('id', 'HamNCheese').addClass("HamNCheese")

const $div1 = () => {
    for (i=0; i<ingredients.HamNCheese.length; i++) {
        div2 = $('<div>').append(i).text(ingredients.HamNCheese[i]).addClass('HM').addClass(ingredients.HamNCheese[i])
        $div.append(div2)
    }
}

const $div3 = $('<div>').attr('id', 'pbj').addClass('pbj')

const $div4 = () => {
    for (i=0; i<ingredients.PBJ.length; i++) {
        div4= $('<div>').append(i).text(ingredients.PBJ[i]).addClass('PBJ').addClass(ingredients.PBJ[i])
        $div3.append(div4)
    }
}

const $div2 = $('<div>').attr('id', 'prepBoard').addClass('Board').text('Board')

const $div6 = $('<div>').attr('id', 'prepDone').addClass('prepDone')

const $div5 = $('<div>').attr('id', 'OrderTicket').addClass('OrderTicket')

const $div7 = $('<div>').attr('id', 'Bill').addClass('Bill').text('$').hide()

const $div8 = $('<div>').attr('id', 'Cash').addClass('Cash')

const $div9 = $('<div>').attr('id', 'OT').addClass('OT')

const $div10 = $('<div>').attr('id', 'HMSandwich').addClass('HMSandwich').hide()

const $div11 = $('<div>').attr('id', 'PBJSandwich').addClass('PBJSandwich').hide()

const $div12 = $('<div>').attr('id','gameTime').addClass('gameTime')

const $div13 = $('<div>').attr('id', 'shopClosed').addClass('shopClosed').text('Shop Closed').hide()
 
const $div14 = $('<div>').attr('id', 'HamIMG').addClass('HamIMG').text('HM').hide()

const $div15 = $('<div>').attr('id', 'pbjIMG').addClass('pbjIMG').text('PBJ').hide()


const computer = {
    order: ''
}

const player = {
    prepare: null
}

const menu = ["HamNCheese", "PBJ"]

const ingredients = {
    HamNCheese: ['brioche', 'ham', 'gouda'],
    PBJ: ["whole wheat", "peanut butter", "blueberry jam"]
}

const price = {
    HamNCheese: 6,
    PBJ: 5
}

const computerChoice = () => {
    const randomChoice = Math.floor(Math.random() * menu.length)
    computer.order = menu[randomChoice]
    //alert(computer.order)
    $('.OT').text(computer.order)
}

let list = []
const makeSandwich = () => {
    computerChoice()
    
    if(computer.order === menu[0]) {
            $('.HM').on('click', (event)=>{  
                const $target = $(event.target) 
                list.push($target.text())
                 console.log(list)
                 if (list.length === 3 && list[0] === a[0] && list[1] === a[1] && list[2] === a[2]) {
                     $('.Board').on('click', ()=> {
                        $('.HamIMG').show()
            
                     }) 
                     } 

            })
         
 
    }

   
    if (computer.order === menu[1]) {
        $('.PBJ').on('click', (event)=>{
            const $target1 = $(event.target)
            list.push($target1.text())
                 console.log(list)
                 if (list.length === 3 &&  list[0] === b[0] && list[1] === b[1] && list[2]===b[2] ) {
                     $('.Board').on('click', ()=> {
                        $('.pbjIMG').show()
                     }) 
                     } 
        
        })
   
    }
    
    
    
}



const packSandwich = () => {
}


// let result =
//   (ingredients.HamNCheese).every(function (element) {
//     return list.includes(element);
//   });


const a = ingredients.HamNCheese
const b = ingredients.PBJ
// let result =
//   (a).every(function (i) {
//     return list.includes(i);
//     });
        
//  const compareH = () => {
//     list[0] === a[0] && list[1] === a[1] && list[2] === a[2]  
//  }


//  const compareP = () => {
//     list[0] === b[0] && list[1] === b[1] && list[2]===b[2]
//  }


 const emptylist = () => {
    list = []
    console.log(list)

}
  
const giveOrder = () => {
        //$('.prepDone').empty() 
        emptylist()
        $('.HamIMG').hide()
        $('.pbjIMG').hide()
    }
    


const completeOrder = () => {
   
        sandwichOrder()
        $('.Bill').show()
    
        
    
}

const collectMoney = () => {
        earnCash()
        $('.Bill').hide()
        $('.HMSandwich').hide()
        $('.PBJSandwich').hide()
        
}

const sandwichOrder = () => {

        if(computer.order === menu[0])  {
            $('.HMSandwich').show()
    }
    
    

    if(computer.order === menu[1]) {
        $('.PBJSandwich').show()
    }

}



let cash = 0
const earnCash = () => {
    if(computer.order === menu[0]) {
        const cashIncrement = price.HamNCheese
        cash = cash + cashIncrement
    }

   else if(computer.order === menu[1]) {
        const cashIncrement = price.PBJ
        cash = cash + cashIncrement
    }
    $div8.text(cash)
    
    makeSandwich()
   
    
   
}


//const myInterval = setInterval(earnCash, 10000)

// const myStop = () => {
//     clearInterval(myInterval)
// }
const counter = 0
let time = 60

const gameTime = () => {

    const minutes = Math.floor(time/60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds: seconds
    $('.gameTime').text(`${minutes}:${seconds}`)
    
    time --

    if (time===0)  {
        clearInterval(start)
        $('.shopClosed').show()
    }
}




 




// const endGame = () => {
//     if (time <= 0) {
//         clearInterval(startGame)
//     }
    
// }

const main = () => {

$('body').append($div5)
$('body').append($div7)
$('body').append($div12)
$('body').append($div)
$('body').append($div3)
$('body').append($div2)
$('body').append($div8)
$('body').append($div13)

$div2.append($div6)

$div5.append($div9)
$div5.append($div10)
$div5.append($div11)
$div2.append($div14)
$div2.append($div15)




$div1()
$div4()


makeSandwich()

$('.OT').on('click',giveOrder)
emptylist()
$('.OrderTicket').on('click', completeOrder)
$('.Bill').on('click',collectMoney)



//startGame()

//start = setInterval(gameTime, 1000)


//console.log(console.log(list) === console.log(ingredients.HamNCheese))



//console.log(result); // true


}
$(main)


