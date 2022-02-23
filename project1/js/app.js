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
    // (homeless twirls when she's very excited)
    console.log('homeless twirls!')
    // return the object so it can be manipulated outside of the function
    return food
}

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

// const spawnProjectiles = () => {
//     setInterval(randomFood, 3000)
//     setInterval(randomHairbrush, 5000)
//     setInterval(randomVacuum, 7000)
// }

// create unit collision/hit detection

// link up and down arrow keys to homeless

// grab score display (100 points to win)
// its content start at 0 and increase by however much with each food hit
pointsDisplay.innerText = 0

// create homeless's desired food type display

// create patience display
// may only be a numerical value to start to assure MVP at deadline

// function for randomly spawning projectiles
// setInterval inside or outside??
// BUG - PROJECTILES SPAWN IN PLACE EVERY 5 SECONDS INSTEAD OF SPAWNING AT A RANDOM Y COORDINATE
//       IT IS ONLY RENDERING, NOT ACTUALLY CREATING A NEW PROJECTILE
//       WRITE A FUNCTION THAT ACTUALLY CREATES A NEW PROJECTILE AND RENDERS IT
// const spawnProjectiles = () => {
//     hairbrush.render()
//     vacuum.render()
//     console.log('pew pew')
// }

// setInterval(spawnProjectiles, 5000)

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