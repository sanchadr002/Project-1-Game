console.log('script linked')
const game = document.getElementById('canvas')
const foodTypeDisplay = document.getElementById('food-type-display')
const pointsDisplay = document.getElementById('score-display')
const patienceDisplay = document.getElementById('patience-display')
const ctx = game.getContext('2d')

// create homeless & projectiles using a class constructor
// used the class constructor code from canvas crawler as a template for this
class MovingThings {
    constructor(x, y, color, height, width){
        this.x = x,
        this.y = y,
        this.color = color,
        this.height = height,
        this.width = width,
        this.alive = true,
        this.render = function () {
            ctx.fillStyle = this.color
            ctx.fillRect(this.x, this.y, this. height, this.width)
        }
    }
}

let homeless = new MovingThings(10, 10, 'goldenrod', 10, 10)

// functions to create different elements at random points on the y axis
const randomFood = () => {
    // use class to create each object
    let food = new MovingThings (100, Math.floor(Math.random() * 145), 'brown', 5, 5)
    // render it to show it on the screen
    food.render()
    setInterval(() => {
        food.x - 10
        food.render()

    }, 500)
    // (homeless twirls when she's very excited)
    console.log('homeless twirls!')
    // return the object so it can be manipulated outside of the function
    return food
}
randomFood()
const randomHairbrush = () => {
    let hairbrush = new MovingThings (100, Math.floor(Math.random() * 130), 'greenyellow', 20, 30)
    hairbrush.render()
    console.log('pew pew')
    return hairbrush
}

const randomVacuum = () => {
    let vacuum = new MovingThings(100, Math.floor(Math.random() * 120), 'grey', 30, 50)
    vacuum.render()
    console.log('boom')
    return vacuum
}

const spawnProjectiles = () => {
    setInterval(randomFood, 3000)
    setInterval(randomHairbrush, 5000)
    setInterval(randomVacuum, 7000)
}

const moveProjectilesLeft = () => {
    randomHairbrush.x - 10
    randomVacuum.x - 15
    console.log('we are moving!', randomHairbrush.x)
}

// document.addEventListener('DOMContentLoaded', () => {
//     randomFood()
//     randomHairbrush()
//     randomVacuum()
//     spawnProjectiles()
//     setInterval(moveProjectilesLeft, 500)
//     }
// )
// create unit collision/hit detection

// link up and down arrow keys to homeless

// grab score display (100 points to win)
// its content start at 0 and increase by however much with each food hit
pointsDisplay.innerText = 0

// create homeless's desired food type display

// create patience display
// may only be a numerical value to start to assure MVP at deadline





// function for increasing score on food catch
// on food hit detection, increase score by 10
// MOVE this function to inside hit detection section
const pointsUp = () => {
    pointsDisplay.innerText += 10
}

// function for decreasing patience on hairbrush/vacuum hit
// may need to push this for later to assure MVP at deadline

// function for game over detection

// function for win detection