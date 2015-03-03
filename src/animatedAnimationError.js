'use strict';

(function (global) {

    function AnimatedAnimationError(message) {
        this.name = 'AnimatedAnimationError';
        this.message = message || 'Error';
    }


    AnimatedAnimationError.prototype = Object.create(Error.prototype);
    AnimatedAnimationError.prototype.constructor = AnimatedAnimationError;


    global.AnimatedAnimationError = AnimatedAnimationError;
}(window));