'use strict';

(function (global) {

    function AnimatedSpriteError(message) {
        this.name = 'AnimatedAnimationError';
        this.message = message || 'Error';
    }


    AnimatedSpriteError.prototype = Object.create(Error.prototype);
    AnimatedSpriteError.prototype.constructor = AnimatedSpriteError;


    global.AnimatedSpriteError = AnimatedSpriteError;
})(window);