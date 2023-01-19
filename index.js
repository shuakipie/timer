

const durationInput = document.querySelector('#duration')
const startButton = document.querySelector('#start')
const pauseButton = document.querySelector('#pause')
const circle = document.querySelector('circle')
const perimeter = circle.getAttribute('r') * 2 * Math.PI
circle.setAttribute('stroke-dasharray', perimeter)
let duration
const time = new Timer(durationInput, startButton, pauseButton, {
    onStart(totalDuartion) {
   duration =totalDuartion
    },
    OnTick(timeRemaining) {
     
      circle.setAttribute('stroke-dashoffset',  perimeter * timeRemaining / duration - perimeter)
      
    },

    onComplete() {
        console.log('Timer is completed')

    }
})
// // time.start()
// console.log(this)
// const printThis = () =>{
//     console.log(this)
// } 

// printThis()

// const colors = {
//     printColor() {
//         console.log(this)
//         const printThis = () => {
//             console.log(this)
//         }
//         printThis()
//     }

// }
// colors.printColor()

// const printThis = function() {
//     console.log(this)
// }

// printThis.call({color: 'red'})
// const colors = {
//     printColor() {
//         console.log(this)
//     }
// }

// const randomObject = {
//     a: 1
// }

// randomObject.printColor = colors.printColor
// randomObject.printColor()