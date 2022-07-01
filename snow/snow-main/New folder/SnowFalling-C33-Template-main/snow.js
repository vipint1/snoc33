class snowflake{
    constructor() {
        
        this.posX = random(0,800);
        this.posY =  0 ;
        this.velocityY=0.001
        this.initialangle = random(0, 4 * PI);
        this.size = random(0,2);
        this.image = loadImage("snow5.webp");
        
        this.update = function(time) {
            this.posY += pow(this.size, 0.5);
            // delete snowflake if past end of screen
            if (this.posY > height) {
              let index = snowflakes.indexOf(this);
              snowflakes.splice(index, 1);
            }
          };
          
        World.add(world, this.body);

      }
      display(){
       
       
        for (let i = 0; i < random(0,1); i++) {
            snowflakes.push(new snowflake()); 
        }
        
        push();
        translate(this.posX, this.posY);
        imageMode(CENTER);
        image(this.image,0,0,random(0,50),random(0,50));
        scale(0.05)       
        pop();

       
            
      }
}

