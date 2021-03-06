game.ai = {
    player : null,
    ball : null,
   
    setPlayerAndBall : function(player, ball) {
      this.player = player;
      this.ball = ball;
    },
    move : function() {
        if ( this.ball.directionX == 1 ) {
          switch(this.player.originalPosition){
              case "right" : this.followBall();
              case "left" : this.goCenter();
          }
        } else {
          if ( this.ball.directionX == 1 ) {
            switch(this.player.originalPosition){
                case "right" : this.goCenter();
                case "left" : this.followBall();
            }
        }
        }},
   
    followBall : function() {
        if ( this.ball.posY < this.player.posY + this.player.height/2 ) {
       
          this.player.posY=this.player.posY-4;
        } else if ( this.ball.posY > this.player.posY + this.player.height/2 ) {
      
          this.player.posY=this.player.posY+4;
        }
      },
   
      goCenter : function() {
        if ( this.player.posY + this.player.height/2 > game.groundHeight / 2 ) {
          this.player.posY--;
        } else if ( this.player.posY + this.player.height/2 < game.groundHeight / 2 ) {
          this.player.posY++;
        }
      },

      startBall : function() {
        if ( this.player.originalPosition == "right" ) {
          this.ball.inGame = true;
          this.ball.posX = this.player.posX;
          this.ball.posY = this.player.posY;
          this.ball.directionX = -1;
          this.ball.directionY = 1;
        } else {
          this.ball.inGame = true;
          this.ball.posX = this.player.posX + this.player.width;
          this.ball.posY = this.player.posY;
          this.ball.directionX = 1;
          this.ball.directionY = 1;
        }
      }
  }