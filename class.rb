class SpaceInvadersGame
  def initialize
    @player_x = 10
    @enemies = []
    @lasers = []
    @score = 0
    @health = 100
    @level = 1
  end

  def start
    puts "Space Invaders"
    
    loop do
      display_game_state
      handle_input
      move_enemies
      check_collisions
      
      break if game_over?
      
      sleep(0.1)
    end

    game_over_screen
  end

  private

  def display_game_state
    system('clear') || system('cls')
    puts "Score: #{@score} | Health: #{@health} | Level: #{@level}"
    
    # Draw game field
    20.times do |y|
      line = ""
class SpaceInvadersGame
  def initialize
    @player_x = 10
    @enemies = []
    @lasers = []
    @score = 0
    @health = 100
    @level = 2
  end

  def start
    puts "Space Invaders"
    
    loop do
      display_game_state
      handle_input
      move_enemies
      check_collisions
      
      break if game_over?
      
      sleep(0.1)
    end

    game_over_screen
  end

  private

  def display_game_state
    system('clear') || system('cls')
    puts "Score: #{@score} | Health: #{@health} | Level: #{@level}"
    
    # Draw game field
    20.times do |y|
      line = ""
      20.times do |x|
        if x == @player_x && y == 19
          line += "A"
        elsif enemy_at?(x, y)
          line += "E"
        elsif laser_at?(x, y)
          line += "|"
        else
          line += "."
        end
      end
      puts line
    end
  end

  def handle_input
    require 'io/console'
    
    case IO.console.getch
    when 'a'
      @player_x = [@player_x - 1, 0].max
    when 'd'
      @player_x = [@player_x + 1, 19].min
    when ' '
      shoot_laser
    end
  end

  def shoot_laser
    @lasers << { x: @player_x, y: 18 }
  end

  def move_enemies
    # Spawn new enemies
    @enemies << { x: rand(20), y: 0 } if @enemies.length < 5
    
    # Move existing enemies
    @enemies.each { |enemy| enemy[:y] += 1 }
    @enemies.reject! { |enemy| enemy[:y] > 20 }
  end

  def check_collisions
    # Laser hitting enemies
    @lasers.each do |laser|
      @enemies.reject! do |enemy|
        if laser[:x] == enemy[:x] && laser[:y] == enemy[:y]
          @score += 50
          true
        end
      end
    end

    # Enemies reaching bottom
    @enemies.each do |enemy|
      @health -= 10 if enemy[:y] == 19
    end
  end

  def enemy_at?(x, y)
    @enemies.any? { |enemy| enemy[:x] == x && enemy[:y] == y }
  end

  def laser_at?(x, y)
    @lasers.any? { |laser| laser[:x] == x && laser[:y] == y }
  end

  def game_over?
    @health <= 0
  end

  def game_over_screen
    puts "Game Over!"
    puts "Final Score: #{@score}"
  end
end

# Start the game
game = SpaceInvadersGame.new
game.start￼Enter      20.times do |x|
        if x == @player_x && y == 19
          line += "A"
        elsif enemy_at?(x, y)
          line += "E"
        elsif laser_at?(x, y)
          line += "|"
        else
          line += "."
        end
      end
      puts line
    end
  end

  def handle_input
    require 'io/console'
    
    case IO.console.getch
    when 'a'
      @player_x = [@player_x - 1, 0].max
    when 'd'
      @player_x = [@player_x + 1, 19].min
    when ' '
      shoot_laser
    end

  def shoot_laser
    @lasers << { x: @player_x, y: 18 }
  end

  def move_enemies
    # Spawn new enemies
    @enemies << { x: rand(20), y: 0 } if @enemies.length < 5
    
    # Move existing enemies
    @enemies.each { |enemy| enemy[:y] += 1 }
    @enemies.reject! { |enemy| enemy[:y] > 20 }
  end

  def check_collisions
    # Laser hitting enemies
    @lasers.each do |laser|
      @enemies.reject! do |enemy|
        if laser[:x] == enemy[:x] && laser[:y] == enemy[:y]
          @score += 50
          true
        end
      end
    end
