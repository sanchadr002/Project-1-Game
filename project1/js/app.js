console.log('script linked')
const game = document.getElementById('canvas')
const foodTypeDisplay = document.getElementById('food-type-display')
const pointsDisplay = document.getElementById('score-display')
const patienceDisplay = document.getElementById('patience-display')
const ctx = game.getContext('2d')

// create homeless & projectiles using a class constructor
// used the class constructor code from canvas crawler as a template for this
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
            // setInterval() does exactly what we need for this
            setInterval(() => {
                // eliminate each piece before the stats are changed
                ctx.clearRect(this.x, this.y, this.width, this.height)
                // change each relevant stat by a fixed amount
                this.x -= 2
                // still not sure exactly why it's 
                this.width - 2
                this.render()
            }, 60)
        }
        this.moveHomeless = function () {

        }
    }
}

let homeless = new MovingThings(10, 10, 'goldenrod', 10, 10)

const gameLoop = () => {
    homeless.render()
}
// functions to create different elements at random points on the y axis
const randomFood = () => {
    // use class to create each object
    let food = new MovingThings (200, Math.floor(Math.random() * 145), 'brown', 5, 5)
    // render it to show it on the screen
    food.render()
    // make it scroll left
    food.scrollLeft()
    food.render()
    // (homeless twirls when she's very excited)
    console.log('homeless twirls!')
    return food
}
const randomHairbrush = () => {
    let hairbrush = new MovingThings (200, Math.floor(Math.random() * 130), 'greenyellow', 20, 30)
    hairbrush.render()
    hairbrush.scrollLeft()
    hairbrush.render()
    console.log('pew pew')
    return hairbrush
}

const randomVacuum = () => {
    let vacuum = new MovingThings(200, Math.floor(Math.random() * 110), 'grey', 30, 50)
    vacuum.render()
    vacuum.scrollLeft()
    vacuum.render()
    console.log('boom')
    return vacuum
}

const spawnProjectiles = () => {
    setInterval(randomVacuum, 10000)
    setInterval(randomHairbrush, 5000)
    setInterval(randomFood, 3000)
}


// create unit collision/hit detection

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

document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('keydown', movementHandler)
    spawnProjectiles()
    setInterval(gameLoop, 60)
    }
)
