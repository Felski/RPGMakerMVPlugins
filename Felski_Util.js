"use strict";
//=============================================================================
// Felski_Util.js
//=============================================================================
/*:
* @plugindesc Utility functions
* @author Felski
* @help Just add it to your list for more utility
*
*
*/


var Felski = Felski || {};	
Felski.Util = {};

(function() {

//************************************************************************************************
//
// Utility
//
//************************************************************************************************

	Felski.Util.getRandomInt = function(min, max){
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	Felski.Util.getRandomFloat = function(min, max){
		return (Math.random() * (max - min) + min).toFixed(4);
	}

//************************************************************************************************
//
// Grid Functions
//
//************************************************************************************************
	
	//Source: https://stackoverflow.com/questions/20916953/get-distance-between-two-points-in-canvas
	Felski.Util.getDistanceBetweenTwoPoints = function(x1, y1, x2, y2){
		var a = x1 - x2;
		var b = y1 - y2;
		return Math.sqrt( a*a + b*b );
	}


//************************************************************************************************
//
// Window_Base
//
//************************************************************************************************

	// Draws text and automatically wraps it to new lines. Returns amount of lines needed.
	Window_Base.prototype.drawTextAutoWrap = function (text, x, y, maxWidth) {
		if (!text) {
			return 0;
		}
		const words = text.split(' ')
		let lines = 1;
		let x2 = x
		let y2 = y
		words.forEach((word) => {
			word = this.convertEscapeCharacters(word)
			const width = this.textWidth(word + ' ')
			// Check for linebreak symbol '/n'
			if (word === `\x1bn`) {
				lines++;
				y2 += this.lineHeight()
				x2 = 0
			}
			if (x2 + width >= maxWidth) {
				lines++;
				y2 += this.lineHeight()
				x2 = 0
			}
			this.drawText(word + ' ', x2, y2)
			x2 += width
		})
		return lines;
	};

})();