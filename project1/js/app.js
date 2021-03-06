console.log('script linked')
// variables we can grab
const game = document.getElementById('canvas')
const foodTypeDisplay = document.getElementById('food-type-display')
const pointsDisplay = document.getElementById('score-display')
const patienceDisplay = document.getElementById('patience-display')
const ctx = game.getContext('2d')

// create homeless & projectiles using a class constructor
// used the class constructor code from canvas crawler as a template
class MovingThings {
    constructor(x, y, color, width, height){
        this.x = x,
        this.y = y,
        this.color = color,
        this.width = width,
        this.height = height,
        this.alive = true,
        this.render = function () {
            ctx.fillStyle = this.color
            ctx.fillRect(this.x, this.y, this.width, this.height)
        }
        // a scroll left function within our class constructor allows for each piece created to have a
        // function that we can call to have that individual piece move
        // this function will have to erase and replace each piece to simulate movement
        this.scrollLeft = function () {
                 // function to simulate the projectile being removed on a hit
                 if (!this.alive){
                    this.x = 500
                    this.y = 500
                }
                // eliminate each piece before the stats are changed
                ctx.clearRect(this.x, this.y, this.width, this.height)
                // change each relevant stat by a fixed amount
                this.x -= 5
                this.width - 5
                this.render()
                return
        }
    }
}

// declaring these variables globally so certain functions can run when we need them to
let homeless = new MovingThings(10, 10, 'goldenrod', 10, 10)
let food = new MovingThings (275, Math.floor(Math.random() * 145), 'brown', 5, 5)
let hairbrush = new MovingThings (275, Math.floor(Math.random() * 130), 'greenyellow', 20, 30)
let vacuum = new MovingThings(275, Math.floor(Math.random() * 110), 'grey', 30, 50)

// create unit collision/hit detection
// used canvas crawler as a template
const detectHit = () => {
    // functions to increment/decrement points and patience displays
    const pointsUp = () => {
        pointsDisplay.innerHTML++
    }
    const patienceDown = () => {
        patienceDisplay.innerHTML--
    }
    if (homeless.x < food.x + food.width
        && homeless.x + homeless.width > food.x
        && homeless.y < food.y + food.height
        && homeless.y + homeless.height > food.y){
            // change type for possible usage later on
            food.alive = false
            pointsUp()
            // add some text to upper left area to add some liveliness to the game
            // homeless's favorite flavor of kibble is a salmon flavor
            foodTypeDisplay.innerText = 'Pom/s favorite flavor of kibble!'
            // clear the rectangle on hit
            ctx.clearRect(food.x, food.y, food.width, food.height)
            console.log('food hit')
    } else if (homeless.x < hairbrush.x + hairbrush.width
        && homeless.x + homeless.width > hairbrush.x
        && homeless.y < hairbrush.y + hairbrush.height
        && homeless.y + homeless.height > hairbrush.y){
            hairbrush.alive = false
            patienceDown()
            foodTypeDisplay.innerText = 'Pom is not in the mood for a brushing.'
            ctx.clearRect(hairbrush.x, hairbrush.y, hairbrush.width, hairbrush.height)
            console.log('hairbrush hit')
    } else if (homeless.x < vacuum.x + vacuum.width
        && homeless.x + homeless.width > vacuum.x
        && homeless.y < vacuum.y + vacuum.height
        && homeless.y + homeless.height > vacuum.y){
            vacuum.alive = false
            patienceDown()
            foodTypeDisplay.innerText = 'Pom\'s arch nemesis .. the vacuum!'
            ctx.clearRect(vacuum.x, vacuum.y, vacuum.width, vacuum.height)
            console.log('vacuum hit')
    }
}

// game loop to control most of game flow
// used canvas crawler game loop as a template
let gameLoop = () => {
    ctx.clearRect(0, 0, game.width, game.height)
    // calling the scrollLeft functions here so they and hit detection can be on
    // the same timer
    detectHit()
    vacuum.scrollLeft()
    hairbrush.scrollLeft()
    food.scrollLeft()
    detectHit()
    // we want pom to be rendered nearly always
    // so we're adding her render function to the game loop towards the end
    homeless.render()
    // tie a clearInterval to the game loop to go off when certain conditions are met
    if (pointsDisplay.innerHTML === '5' || patienceDisplay.innerHTML === '0'){
        clearInterval(gameLoopInterval)
        ctx.clearRect(0, 0, game.width, game.height)
        if (pointsDisplay.innerHTML === '5'){
            ctx.fillText('You won! Pom finished all her food!', 100, 50)
        } else if (patienceDisplay.innerHTML === '0'){
            ctx.fillText('Game over! Pom lost her patience!', 100, 50)
        }
    }
}

// variable for clearInterval
let gameLoopInterval = setInterval(gameLoop, 30)

// functions to create different elements at random points on the y axis
const randomFood = () => {
    // use class to create each object
    food = new MovingThings (275, Math.floor(Math.random() * 145), 'brown', 5, 5)
    // since projectile spawning isn't tied to the game loop, have to add code
    // to make these stop spawning on win/loss
    if (pointsDisplay.innerHTML === '5' || patienceDisplay.innerHTML === '0'){
        clearInterval(foodSpawn)
    }
    // (homeless twirls when she's very excited)
    console.log('homeless twirls!')
}

const randomHairbrush = () => {
    hairbrush = new MovingThings (275, Math.floor(Math.random() * 130), 'greenyellow', 10, 30)
    if (pointsDisplay.innerHTML === '5' || patienceDisplay.innerHTML === '0'){
        clearInterval(hairbrushSpawn)
    }
    console.log('pew pew')
}

const randomVacuum = () => {
    vacuum = new MovingThings(275, Math.floor(Math.random() * 110), 'grey', 30, 50)
    if (pointsDisplay.innerHTML === '5' || patienceDisplay.innerHTML === '0'){
        clearInterval(vacuumSpawn)
    }
    console.log('boom')
}

let spawnProjectiles = () => {
    let vacuumSpawn = setInterval(randomVacuum, 9000)
    let hairbrushSpawn = setInterval(randomHairbrush, 6000)
    let foodSpawn = setInterval(randomFood, 4000)
}

// link up and down arrow keys to homeless
// used canvas crawler as a template for this
const movementHandler = (e) => {
    switch (e.keyCode) {
        case (38):
            ctx.clearRect(homeless.x, homeless.y, homeless.width, homeless.height)
            homeless.y -= 5
            console.log('homeless pressed the up key')
            break
        case (40):
            ctx.clearRect(homeless.x, homeless.y, homeless.width, homeless.height)
            homeless.y += 5
            console.log('homeless pressed the down key')
            break
    }
}

// events we want to happen on page load
document.addEventListener('DOMContentLoaded', () => {
    foodTypeDisplay.innerText = 'Pom is so happy to see you!'
    pointsDisplay.innerHTML = 0
    patienceDisplay.innerHTML = 3
    document.addEventListener('keydown', movementHandler)
    spawnProjectiles()
    }
)
