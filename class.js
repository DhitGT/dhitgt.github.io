class  Player{
    constructor(x,y,image,speed){
        this.x = x
        this.y = y
        this.rl = 0
        this.width = 90
        this.height = 20
        this.image = image[0]
        this.imageleft = image[0]
        this.imageright = image[1]
        this.speed = speed
        this.image.onload = this.draw()
        addEventListener("keydown", (e) =>{
            switch(e.key){
                case 'a':
                    this.left = true
                    break;
                case 'd':
                    this.right = true
                    break;
            }
        })
        addEventListener("keyup", (e) =>{
            switch(e.key){
                case 'a':
                    this.left = false
                    break;
                case 'd':
                    this.right = false
                    break;
            }
        })
        
    }

    draw(){
        // c.fillStyle = "#107040"
        // c.fillRect(this.x,this.y,this.width,this.height)

        c.drawImage(this.image,this.x - 20,this.y - 30,130,60)

    }

    move(){
        if(this.left){
            this.x -= this.speed
            this.image = this.imageleft
            if(this.x <= -20){
                this.x = 590
            }
        }
        if(this.right){
            this.x += this.speed
            this.image = this.imageright
            if(this.x >= 600){
                this.x = -10
            }
        }
    }

    
}

class Egg{
    constructor(size,x,y,image,potion){
        this.x = x
        this.y = y
        this.width = size
        this.height = size
        this.image = image
        this.image.onload = this.draw()
        this.potion = potion
    }

    draw(){
        // c.fillStyle = "#FFFFFF"
        // c.fillRect(this.x,this.y,this.width,this.height)

        c.drawImage(this.image,this.x,this.y,this.width+5,this.height+5)

    }

    move(){
        this.y += 5
    }

    collision(){
        
    }
}