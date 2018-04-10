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
	this.speed = random(1,7);
	this.maxSymbolsPerStream = height/(this.symbolSize+this.charSpacing);
	this.charCount = round(random(10,this.maxSymbolsPerStream));
	//console.log(this.maxSymbolsPerStream + ":=" + this.charCount);


	this.symbolStream = [];
	for (var i = 0 ; i< this.charCount; i++ ){
		this.symbolStream.push ( new Symbol(charSet_ ,this.xoff,this.yoff,this.speed, this.symbolSize, (i==(this.charCount-1))/*put bright char at start*/ ));
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
var Symbol = function ( whichCharset_, x_, y_ , speed_ , symbolSize_, isFirst_) {
	this.useCharsetOf = whichCharset_;
	this.x = x_;
	this.y = y_;
	this.speed = speed_;
	this.symbolSize = symbolSize_
	this.charValue = this.useCharsetOf.getRandomChar();
	this.charChangeInterval = round(random(10,60));
	this.isFirst = isFirst_;
};

Symbol.prototype.update = function(){
	this.y += this.speed;
	if ( this.y >= height ) { //wrap around
		this.y = 0;
	}
	this.charValue = ( frameCount % this.charChangeInterval == 0 ? this.useCharsetOf.getRandomChar() : this.charValue);
};

Symbol.prototype.draw = function(){
	//push();//indented to highlight transactional behaviour of push and pop.
		stroke(255,255,255);
		if ( this.isFirst){
			fill(100,255,200);
		} else {
			fill(0,255,100);
		}
		textSize(this.symbolSize);
		text(this.charValue, this.x, this.y);
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
	//var cPos  =round( random(0, this.range));
	//console.log(cPos);
	//console.log( this.firstChar);
	//var tChar = this.firstChar + cPos;
	//console.log( tChar );
	//var c = String.fromCharCode( tChar );
	//console.log(c);
	return ( String.fromCharCode ( this.firstChar + round( random (0,this.range))));
};

var katakana = new SymbolSet(0x30A0, 96);

