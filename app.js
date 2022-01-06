console.log("hi");

const computer = {
  order: "",
};

const player = {
  drinkorder: "",
};

const menu = ["HamNCheese", "PBJ", "Baguette"];

const ingredients = {
  HamNCheese: ["brioche", "ham", "gouda"],
  PBJ: ["sourdough", "peanut butter", "blueberry jam"],
  Baguette: ["baguette", "butter", "sea salt"],
};

const drinks = ["cappucino", "matchaLatte"];

const drinkRecipe = {
    cappucino: ["espresso", "milk", "foam"],
    matchaLatte: ["matcha", "soy milk"]

}

const price = {
  HamNCheese: 6,
  PBJ: 5,
  Baguette: 4,
  cappucino: 4,
  matchaLatte: 3,
};

const computerChoice = () => {
  const randomChoice = Math.floor(Math.random() * menu.length);
  computer.order = menu[randomChoice];
  $(".OT").text(computer.order);
};

const playerChoice = () => {
  const randomChoice1 = Math.floor(Math.random() * drinks.length);
  player.drinkorder = drinks[randomChoice1];
  $(".DO").text(player.drinkorder);
};



let list = [];
const makeHMC = (event) => {
    const $target = $(event.target);
    list.push($target.text());
    $(".prepBoard").text(list);
    console.log(list);
  
    if (
      list.length === 3 &&
      list[0] === a[0] &&
      list[1] === a[1] &&
      list[2] === a[2]
    ) {
      $(".prepDone").text("order done");
      $('.sandOC').prop('disabled', false)
    }
  };
  
  const makePBJ = (event) => {
    const $target = $(event.target);
    list.push($target.text());
    $(".prepBoard").text(list);
    console.log(list);
    if (
      list.length === 3 &&
      list[0] === b[0] &&
      list[1] === b[1] &&
      list[2] === b[2]
    ) {
      $(".prepDone").text("order done");
      $('.sandOC').prop('disabled', false)
    }
  };
  
  const makeBaguette = (event) => {
      const $target = $(event.target);
    list.push($target.text());
    $(".prepBoard").text(list);
    console.log(list);
    if (
      list.length === 3 &&
      list[0] === c[0] &&
      list[1] === c[1] &&
      list[2] === c[2]
    ) {
      $(".prepDone").text("order done");
      $('.sandOC').prop('disabled', false)
    }
  
  }


  const makeCap = (event) => {
    const $target = $(event.target);
    list.push($target.text());
    $(".prepBoard").text(list);
    console.log(list);
    if (
      list.length === 3 &&
      list[0] === d[0] &&
      list[1] === d[1] &&
      list[2] === d[2]
    ) {
      $(".prepDone").text("order done");
      $('.drinkOC').prop('disabled', false)
     
    }

}


const makeMatcha = (event) => {
    const $target = $(event.target);
    list.push($target.text());
    $(".prepBoard").text(list);
    console.log(list);
    if (
      list.length === 2 &&
      list[0] === e[0] &&
      list[1] === e[1] 
    ) {
      $(".prepDone").text("order done");
      $('.drinkOC').prop('disabled', false)
    }

}



const a = ingredients.HamNCheese;
const b = ingredients.PBJ;
const c = ingredients.Baguette;
const d = drinkRecipe.cappucino
const e = drinkRecipe.matchaLatte




const completeOrder = () => {
  $(".collectCash").show();
  $(".prepDone").empty();
  
};

const collectMoney = () => {
  earnCash();
  $(".collectCash").hide();
  $(".HMC").hide();
  $(".PBJS").hide();
  $(".BAGS").hide();
  $(".COFFEE").hide();
  $(".TEA").hide();
  $('.sandOC').prop('disabled', true)
  $('.drinkOC').prop('disabled', true)
};

const sandwichOrder = () => {
        if (computer.order === menu[0]) {
            $(".HMC").show();
          }
        
          if (computer.order === menu[1]) {
            $(".PBJS").show();
          }
        
          if (computer.order === menu[2]) {
            $(".BAGS").show();
    }
  

  

};

const drinkPrep = () => {
    if (player.drinkorder === drinks[0]) {
        $(".COFFEE").show();
      }

      if (player.drinkorder === drinks[1]) {
        $(".TEA").show();
      }
}

const sandOrder = () => {
    sandwichOrder()
    $(".prepBoard").empty();
    $(".prepDone").empty();
     list = [];
    
}

const drinkOrder = () => {
    drinkPrep()
    $(".prepBoard").empty();
    $(".prepDone").empty();
    list = [];
}

let cash = 0;
const earnCash = () => {
  if (computer.order === menu[0]) {
    const cashIncrement = price.HamNCheese;
    cash = cash + cashIncrement;
  } else if (computer.order === menu[1]) {
    const cashIncrement = price.PBJ;
    cash = cash + cashIncrement;
  } else if (computer.order === menu[2]) {
    const cashIncrement = price.Baguette;
    cash = cash + cashIncrement;
  }
  if (player.drinkorder === drinks[0]){
    const cashIncrement = price.cappucino;
    cash = cash + cashIncrement;

  }
  if (player.drinkorder === drinks[1]){
    const cashIncrement = price.matchaLatte;
    cash = cash + cashIncrement;

  }


  $(".Earnings").text(` $${cash}`);

  computerChoice();
  playerChoice();
};





//const myInterval = setInterval(earnCash, 10000)

// const myStop = () => {
//     clearInterval(myInterval)
// }
const counter = 0;
let time = 30;

const gameTime = () => {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  seconds = seconds < 10 ? "0" + seconds : seconds;
  $(".gameTime").text(`${minutes}:${seconds}`);

  time--;

  if (time === 0) {
    clearInterval(start);
    $(".shopClosed").show();
  }
};

// const endGame = () => {
//     if (time <= 0) {
//         clearInterval(startGame)
//     }

// }







const $img= $("<img>").attr("src", "HMC.png").addClass("HMC").hide();
const $img1 = $("<img>").attr("src", "PBJ.png").addClass("PBJS").hide();
const $img2 = $("<img>").attr("src", "BSC.png").addClass("BAGS").hide();
const $img3 = $("<img>").attr("src", "Capuccino.png").addClass("COFFEE").hide();
const $img4 = $("<img>").attr("src", "Matcha.png").addClass("TEA").hide();




const bin = () => {
    list =[]
    $('.prepBoard').empty()

}



const main = () => {
  $("#orderComplete").append($img);
  $("#orderComplete").append($img1);
  $("#orderComplete").append($img2);
  $("#orderComplete").append($img3);
  $("#orderComplete").append($img4);

  computerChoice();
  playerChoice();
 

  $(".OC").on("click", completeOrder);
  $(".collectCash").on("click", collectMoney);
  $(".HM").on("click", makeHMC);
  $(".PBJ").on("click", makePBJ);
  $(".BAG").on("click", makeBaguette)

  $(".coffee").on("click", makeCap)
  $(".tea").on("click", makeMatcha)


  $(".drinkOC").on("click", drinkOrder)
  $(".sandOC").on("click",sandOrder)

  //$('.btn').on("click", unclick)
  $('.bin').on("click", bin)

  $('.drinkOC').prop('disabled', true)
  $('.sandOC').prop('disabled', true)

  //startGame()

  start = setInterval(gameTime, 1000)

  //console.log(console.log(list) === console.log(ingredients.HamNCheese))

  //console.log(result); // true
};
$(main);
