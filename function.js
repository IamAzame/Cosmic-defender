
let score = 0;
let health = 100;
let level = 1;


let playerX = window.innerWidth / 2; 

function gameLoop() {
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    
    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowLeft') {
            playerX = Math.max(playerX - 10, 0);
        } else if (event.key === 'ArrowRight') {
            playerX = Math.min(playerX + 10, canvas.width);
        }
    });

   
let score = 0;
let health = 100;
let level = 1;

 Player Ship
let playerX = window.innerWidth / 2; 

 Game Loop
function gameLoop() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

     Move the players
    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowLeft') {
            playerX = Math.max(playerX - 10, 0);
        } else if (event.key === 'ArrowRight') {
            playerX = Math.min(playerX + 10, canvas.width);
        }
    });

    
    drawPlayer(playerX);

    
    updateEnemies();

    
    checkCollisions();

    
    updateUI();

    
    if (health <= 0) {
        endGame();
    } else {
        requestAnimationFrame(gameLoop);
    }
}


function drawPlayer(x) {
    ctx.fillStyle = 'blue';
    ctx.fillRect(x, canvas.height - 30, 50, 20);
}

 
function updateEnemies() {
    
}


function checkCollisions() {
    if (Math.random() < 0.05) 
        let enemy = { y: canvas.height, destroyed: false };
        if (!enemy.destroyed) {
            if (enemy.y >= canvas.height) {
                health -= 10; 
            } else {
                 Simulate player shooting down enemy
                score += 50;
                if (score % 500 === 0) {
                    levelUp();
                }
            }
        }
    }
}

 Level Up
function levelUp() {
    level++;
    
    console.log(`Level Up! Now at level ${level}`);
}

 Update UI
function updateUI() {
    document.getElementById('score').textContent = `Score: ${score}`;
    document.getElementById('health').textContent = `Health: ${health}`;
    document.getElementById('level').textContent = `Level: ${level}`;
}

 End Game
function endGame() {
    alert(`Game Over! Your Score: ${score}`);
     Reset game or show game over screen
    score = 0;
    health = 100;
    level = 1;
}

 Start the game
gameLoop();

￼Enter    drawPlayer(playerX);

    
    updateEnemies();

    
    checkCollisions();

     Update UI
    updateUI();

    Check game over condition
    if (health <= 0) {
        endGame();
    } else {
        requestAnimationFrame(gameLoop);
    }
}

function drawPlayer(x) {
    ctx.fillStyle = 'blue';
    ctx.fillRect(x, canvas.height - 30, 50, 20);
}

on updateEnemies() {
}

Collision Detection
function checkCollisions() {
    if (Math.random() < 0.05) { 
        let enemy = { y: canvas.height, destroyed: false };
        if (!enemy.destroyed) {
            if (enemy.y >= canvas.height) {
                health -= 10;  Enemy reached bottom of screen
            } else {
                 Simulate player shooting down enemy
                score += 50;
                if (score % 500 === 0) {
                    levelUp();
                }
            }
        }
    }
}

Level Up
function levelUp() {
