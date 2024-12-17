// Game State
let score = 0;
let health = 100;
let level = 1;

// Player Ship
let playerX = window.innerWidth / 2; // Starting position for the player at the center of the screen

// Game Loop
function gameLoop() {
    // Clear the canvas (assuming there's a canvas context named ctx)
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Move the player
    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowLeft') {
            playerX = Math.max(playerX - 10, 0);
        } else if (event.key === 'ArrowRight') {
            playerX = Math.min(playerX + 10, canvas.width);
        }
    });

    // Draw player
// Game State
let score = 0;
let health = 100;
let level = 1;

// Player Ship
let playerX = window.innerWidth / 2; // Starting position for the player at the center of the screen

// Game Loop
function gameLoop() {
    // Clear the canvas (assuming there's a canvas context named ctx)
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Move the player
    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowLeft') {
            playerX = Math.max(playerX - 10, 0);
        } else if (event.key === 'ArrowRight') {
            playerX = Math.min(playerX + 10, canvas.width);
        }
    });

    // Draw player
    drawPlayer(playerX);

    // Handle enemy logic (assuming enemies are managed elsewhere)
    updateEnemies();

    // Check collisions and update score/health
    checkCollisions();

    // Update UI
    updateUI();

    // Check game over condition
    if (health <= 0) {
        endGame();
    } else {
        requestAnimationFrame(gameLoop);
    }
}

// Draw Player Function
function drawPlayer(x) {
    ctx.fillStyle = 'blue';
    ctx.fillRect(x, canvas.height - 30, 50, 20);
}

// Update Enemies Function (placeholder - you need to implement based on your enemy system)
function updateEnemies() {
    // This would handle moving and drawing enemies
}

// Collision Detection
function checkCollisions() {
    // Here you'd check if any enemy collides with the player or reaches the bottom
    // For simplicity, let's just simulate:
    if (Math.random() < 0.05) { // 5% chance each frame for an event
        let enemy = { y: canvas.height, destroyed: false };
        if (!enemy.destroyed) {
            if (enemy.y >= canvas.height) {
                health -= 10; // Enemy reached bottom of screen
            } else {
                // Simulate player shooting down enemy
                score += 50;
                if (score % 500 === 0) {
                    levelUp();
                }
            }
        }
    }
}

// Level Up
function levelUp() {
    level++;
    // Here you could increase difficulty, like enemy speed or spawn rate
    console.log(`Level Up! Now at level ${level}`);
}

// Update UI
function updateUI() {
    document.getElementById('score').textContent = `Score: ${score}`;
    document.getElementById('health').textContent = `Health: ${health}`;
    document.getElementById('level').textContent = `Level: ${level}`;
}

// End Game
function endGame() {
    alert(`Game Over! Your Score: ${score}`);
    // Reset game or show game over screen
    score = 0;
    health = 100;
    level = 1;
}

// Start the game
gameLoop();

￼Enter    drawPlayer(playerX);

    // Handle enemy logic (assuming enemies are managed elsewhere)
    updateEnemies();

    // Check collisions and update score/health
    checkCollisions();

    // Update UI
    updateUI();

    // Check game over condition
    if (health <= 0) {
        endGame();
    } else {
        requestAnimationFrame(gameLoop);
    }
}

// Draw Player Function
function drawPlayer(x) {
    ctx.fillStyle = 'blue';
    ctx.fillRect(x, canvas.height - 30, 50, 20);
}

// Update Enemies Function (placeholder - you need to implement based on your enemy system)
on updateEnemies() {
    // This would handle moving and drawing enemies
}

// Collision Detection
function checkCollisions() {
    // Here you'd check if any enemy collides with the player or reaches the bottom
    // For simplicity, let's just simulate:
    if (Math.random() < 0.05) { // 5% chance each frame for an event
        let enemy = { y: canvas.height, destroyed: false };
        if (!enemy.destroyed) {
            if (enemy.y >= canvas.height) {
                health -= 10; // Enemy reached bottom of screen
            } else {
                // Simulate player shooting down enemy
                score += 50;
                if (score % 500 === 0) {
                    levelUp();
                }
            }
        }
    }
}

// Level Up
function levelUp() {
