  /*
    #                         #
          #                         #
          ###########################
          ###########################
          #             ##          #
          #          #####          #
                  ########          #
               ######### #          #
          # #########    ##        ##
          #########      ##       ###
          #####           ########## 
          ###              ######## 
          #                  #### 
          #
             ###
           #######    ##
          #########  #### 
          ##     ##   # ##
          #      ##      #
          ##     #      ##
          ############### 
          ##############
          # 
          
          #              #
          ################    ####
          ################    ####
          ################     ##
          #              #
          ################
          ################
          ################
                        #
                        ##
                        ##
          ################
          ###############
          ############ 
          #####
          #####           ####### 
          ###           ###########
          ##            ####      ##
          #            ####         #
          #           #####         #
          #           #####         #
          #          #####         ##
          ##        #####         ###
           ###    ######        ####
            ###########         #####
              #######
                         #
             #################
          ####################
          ####################
          ##             #
          ##
            #
               ##### 
            ########### 
           ##############
          ##           ## 
          #              #
          #              #
          #             ##
          ####       ####
            ############
              ########
          #              #
          ################
          ################
          ################
                      ## 
                       ## 
                     #####
                    ######
                    ##### 
                        
          #              #
          ################
          ################
          ################
                        #
          ################
          ################
          ##############
                       ##
          #            ###
          ################
          ###############
          #

  */
var RainStorm = function (charSet_, xoff_, symbolSize_) {
	this.symbolSize = symbolSize_;
	this.charSet = charSet_;
	this.xoff = xoff_; 
	this.maxSymbolsStreams = width/this.symbolSize;

	this.symbolStreams = [];
	for (var i = 0 ; i< this.maxSymbolsStreams; i++ ){
		this.symbolStreams.push (  new RainStream ( this.symbolSize , this.xoff_, this.charSet) );
		this.xoff += (this.symbolSize);
	}

};

RainStorm.prototype.update = function () {
	if ( this.symbolStreams != null){
		for ( var i = 0 ; i < this.symbolStreams.length ; i++){
			this.symbolStreams[i].update();
		}
	}
};

RainStorm.prototype.draw = function () {
	if ( this.symbolStreams != null){
		for ( var i = 0 ; i < this.symbolStreams.length ; i++){
			this.symbolStreams[i].draw();
		}
	}
};

  /*
     	  #####
          #####           ####### 
          ###           ###########
          ##            ####      ##
          #            ####         #
          #           #####         #
          #           #####         #
          #          #####         ##
          ##        #####         ###
           ###    ######        ####
            ###########         #####
              #######
                         #
             #################
          ####################
          ####################
          ##             #
          ##
            #
          #              #
          ################
          ################
          ################
                      ## 
                       ## 
                     #####
                    ######
                    ##### 
                        
               ##### 
            ########### 
           ##############
          ##     #     ## 
          #      #       #
          #      #       #
          #      #      ##
           #     ########
            ##   ###### 
                 ### 
             ###
           #######    ##
          #########  #### 
          ##     ##   # ##
          #      ##      #
          ##     #      ##
          ############### 
          ##############
          # 
          
          #              #
          ################
          ################
          ################
                        #
          ################
          ################
          ##############
                       ##
          #            ###
          ################
          ###############
          #

  */
var RainStream = function ( symbolSize_ , xoff_, charSet_){
	this.charSpacing = 2;
	this.symbolSize = symbolSize_;
	this.xoff = xoff_;
	this.yoff = 0;
	this.speed = random(2,10);
	this.maxSymbolsPerStream = height/(this.symbolSize+this.charSpacing);
	this.charCount = round(random(10,this.maxSymbolsPerStream));
	//console.log(this.maxSymbolsPerStream + ":=" + this.charCount);
	this.shimmerPoint = random(height/2, height-100);
  // this.darkStream = floor(random(0,100)) < 90 ? false : true; /* 80% do normal, 20% do dark*/
  this.darkStream = this.speed < 5 ? true : false;
	this.symbolStream = [];
	for (var i = 0 ; i< this.charCount; i++ ){
		var headChars = i === this.charCount.length;
		this.symbolStream.push ( new Symbol(charSet_ ,this.xoff,this.yoff,this.speed, this.symbolSize, (this.charCount-i) ,this.shimmerPoint, this.darkStream));
		this.yoff += (this.symbolSize+this.charSpacing);
	}

}

RainStream.prototype.update = function () {
	//if ( this.symbolStream != null ){
	//	for (var i = 0 ; i<this.symbolStream.length ; i++ ){
	//		this.symbolStream[i].update();
	//	} 	
	//}
}

RainStream.prototype.draw = function () {
	if ( this.symbolStream != null ){
		for (var i = 0 ; i<this.symbolStream.length ; i++ ){
			this.symbolStream[i].update();
			this.symbolStream[i].draw();
		}	
	}
}

  		/*
  		  #####
          #####           ####### 
          ###           ###########
          ##            ####      ##
          #            ####         #
          #           #####         #
          #           #####         #
          #          #####         ##
          ##        #####         ###
           ###    ######        ####
            ###########         #####
              #######
  #                      #
 ###                   ###
 ###               #######
   ###          ##########
       ##############
          ########
              ### 
                  ####   #
                      ####
                         #
          #              #
          ################
          ################
          ################
                        #
          ################
          ################
          ##############
                       ##
          #            ###
          ################
          ###############
          #
          #                         #
          ###########################
          ###########################
          ###########################
          ##            # 
          #             ##
          #             ##
          #####      #### 
           ############# 
             ######### 
               ##### 
            ########### 
           ##############
          ##           ## 
          #              #
          #              #
          #             ##
          ####       ####
            ############
              ########
          #                         #
          ###########################
          ###########################
          ###########################
          */
var Symbol = function ( whichCharset_, x_, y_ , speed_ , symbolSize_, idx_, shimmerPoint_, _dark) {
	this.useCharsetOf = whichCharset_;
	this.x = x_;
	this.y = y_;
	this.speed = speed_;
	this.symbolSize = symbolSize_
	this.charValue = this.useCharsetOf.getRandomChar();
	this.charChangeInterval = round(random(10,30));
	this.charIdx = idx_;
	//console.log(this.charIdx);
	this.decayRate = 10;
	
	this.shimmerPoint = shimmerPoint_;
	
  this.A = 255;

  if (this.speed > 0 && this.speed < 3 ){
    this.G = 80;
    this.R = 0;
    this.B = 0;
  } else if (this.speed > 2 && this.speed < 5 ) {
    this.R = 34;
    this.G = 139;
    this.B = 34;
  } else {
    this.R = 0;
    this.G = 255;
    this.B = 100;
  }
  
  //this.dark = floor(random(0,100)) < 90 ? false : true; /* 80% do normal, 20% do dark*/
  this.dark = _dark;
};

Symbol.prototype.update = function(){
	this.y += this.speed;
	if ( this.y >= height ) { //wrap around
		this.y = 0;
	}
	this.charValue = ( frameCount % this.charChangeInterval == 0 ? this.useCharsetOf.getRandomChar() : this.charValue);
};

Symbol.prototype.draw = function(){
	
		// Note: as the first 5 systems past over 50% of height, they need to shine white.
		// then as they move away, fade back to greed.
	
      if ( this.charIdx>0  && this.charIdx<5 && this.y >= this.shimmerPoint){
        this.A = map( this.y, this.shimmerPoint,this.shimmerPoint+150,255,0)
        if ( this.A > 0 ){
          fill(255,255,255,this.A);
          textSize(this.symbolSize);
          text(this.charValue, this.x, this.y);
        }
      } else {

       fill( this.R, this.G, this.B);
		   textSize(this.symbolSize);
       text(this.charValue, this.x, this.y);
      }
		
	//pop();
};




/*
              ##### 
            ########### 
           ##############
          ##           ## 
          #              #
          #              #
          #             ##
           #          ###
            ##          
          #                         #
          ###########################
          ###########################
          ###########################
                        #
                        ##
                        ##
          ################
          ###############
          ############ 
             ###
           #######    ##
          #########  #### 
          ##     ##   # ##
          #      ##      #
          ##     #      ##
          ############### 
          ##############
          # 
          
          #              #
          ################
          ################
          ################
                      ## 
                       ## 
                     #####
                    ######
                    ##### 
                        
          ####      ## 
          ####    ###### 
          ##     ######## 
          #     ####     #
          #     ####     #
          #     ####    ##
          #    ####    ## 
           ########   ####
            #####
               ##### 
            ########### 
           ##############
          ##     #     ## 
          #      #       #
          #      #       #
          #      #      ##
           #     ########
            ##   ###### 
                 ### 
                         #
             #################
          ####################
          ####################
          ##             #
          ##
            #
*/

var SymbolSet = function (unicodeStartAt_, unicodeRange_) {
	this.firstChar = unicodeStartAt_;
	this.range = unicodeRange_;
};

SymbolSet.prototype.getChar = function( unicodeChar_ ) { 
	return ( String.fromCharCode(unicodeChar_));
};
SymbolSet.prototype.getRandomChar = function ( ) { 
	return ( String.fromCharCode ( this.firstChar + round( random (0,this.range))));
};

var katakana = new SymbolSet(0x30A0, 96);

