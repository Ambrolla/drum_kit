
// Long way of writing this: 
// document.querySelector("button").addEventListener("click", handleClick);

// function handleClick () {
//     alert("I got clicked!");
// }
// Shorter way (What it does when the click is detected): 


var numberOfDrums = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrums; ++i) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
  
        // this.style.color = "white"; <- example of this statement

        var buttonInnerHTML = this.innerHTML;
        // makeSound (buttonInnerHTML);
        // buttonAnimation (buttonInnerHTML);

        switch (buttonInnerHTML) {
            case "w":
                var tom4 = new Audio('sounds/tom-4.mp3');
                tom4.play();
                break;


                case "a":
                    var tom3 = new Audio('sounds/tom-3.mp3');
                    tom3.play();
                break;

                case "s":
                    var tom2 = new Audio('sounds/tom-2.mp3');
                    tom2.play();
                break;

                case "d":
                    var tom1 = new Audio('sounds/tom-1.mp3');
                    tom1.play();
                break;


                case "j":
                    var snare = new Audio('sounds/snare.mp3');
                    snare.play();
                break;

                case "k":
                    var kickBass = new Audio('sounds/kick-bass.mp3');
                    kickBass.play();
                break;

                case "l":
                    var crash = new Audio('sounds/crash.mp3');
                    crash.play();
                break;


        
            default: console.log(buttonInnerHTML);
                break;
        }


    });


}

///If you pressed keys (on keyboard), the function is below:

document.addEventListener("keydown", function(event) {
   

    switch (event.key) {
    
    case "w":
    
        var tom4 = new Audio('sounds/tom-4.mp3');
    
        tom4.play();
    
      break;
    
    
    case "a":
    
        var tom3 = new Audio('sounds/tom-3.mp3');
    
        tom3.play();
    
        break;
    
    
      case "s":
    
          var tom2 = new Audio('sounds/tom-2.mp3');
    
          tom2.play();
    
        break;
    
    
      case "d":
    
          var tom1 = new Audio('sounds/tom-1.mp3');
    
          tom1.play();
    
          break;
    
    
      case "j":
    
          var snare = new Audio('sounds/snare.mp3');
    
          snare.play();
    
          break;
    
    
      case "k":
    
          var kick = new Audio('sounds/kick-bass.mp3');
    
          kick.play();
    
          break;
    
    
      case "l":
    
          var crash = new Audio('sounds/crash.mp3');
    
          crash.play();
    
          break;
    
    
    default:
    
          console.log(innerHTML);
    
    }
    
    }
    
    );


// //Animation for pressed buttons <- Couldn't do it! Couldn't complete it. might fix it later! When it's active, then keys when pressed on keyboard don't work. Needs deeper research.

// function buttonAnimation(currentKey) {
//     var activeButton = document.querySelector('.' + currentKey);
//     activeButton.classList.add('pressed');
//     setTimeout(function() {
//       activeButton.classList.remove('pressed');
//     }, 100);
//   }




// Sound code:
// var audio = new Audio('sounds/tom-1.mp3');
// audio.play();

// command this - identity of the button that triggered (in our case) listener

// //Notes about different subject, not on the code above: 
// function add(num1, num2) {
//     return num1 + num2;
//   }
  
//   function subtract(num1, numb2) {
//     return num1 - num2;
//   }
  
//   function multiply(num1, num2) {
//     return num1 * num2;
//   }
  
//   function divide(num1, num2) {
//     return num1 / num2;
//   }
  
//   function calculator(num1, num2, operator) {
//       return operator(num1, num2);
//   }
  
//   calculator (20,5, divide);
//debugger: 
// calculator (4,5, multiply);
/// to debug or above function is to show how operator function works; Look at higher order functions


//Higher order function is the function that's able to take functions as input. Code example( it responds to key press as  an input)
//Callback function is when function is called to respond to something. 

// Callback Function notes:
// function anotherAddEventListener(typeOfEvent, callback) {
//     ///detect event code... (it detects when event will happen)
//     var eventThatHappened = {
//       eventType: "keypress";
//       key: "p";
//       durationOfKeyPress: 2;
//     }
//     if (eventThatHappened.eventType === typeOfEvent) {
//     callbacl=k(eventThatHappened);
//     }
//   }
  
//   anotherAddEventListener("keypresskh", function(event) {
//     console.log(event);
//   });

// Contstructor function or in other words a "factory" (just an example) to give out, for example bellboys if we need them, the function is as follows:
// function BellBoy (name, age, hasWorkPermit, languages) {
//     this.name = name;
//     this.age = age;
//     this. hasWorkPermit = hadWorkPermit;
//     this.languages = languages; 
// }
// var bellBoy1 = new BellBoy("Tim", 19, true, ["French", "English"]); and can be repeated for all of the other bellboys

// Method function notes (a function that's associated with the object):
// to function bellBoy1 can add:
// moveSuitCase: function() {
//     alert("May I take your suitcase?");
//     pickUpSuitcase();
//     move();
// }
//later can be written:
// this.movesuitCase = function () <- and copy the code above