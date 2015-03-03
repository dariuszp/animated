'use strict';

(function (global) {

    function AnimatedAnimation(name, sprite, options) {
        if (!name) {
            throw new global.AnimatedAnimationError('Invalid name');
        }
        if (!(sprite instanceof Image)) {
            throw new global.AnimatedAnimationError('Invalid sprite');
        }
        options = options || {};

        this.name = name;
        this.sprite = sprite;

        for(var index in options) {
            if (!this.hasOwnProperty(index) || typeof this[index] === 'function') {
                throw new global.AnimatedAnimationError('Invalid option: "' + String(index) + '"');
            }
            this[index] = options[index];
        }
    }


    AnimatedAnimation.prototype.name                = '';
    AnimatedAnimation.prototype.sprite              = undefined;
    AnimatedAnimation.prototype.frames              = 1;
    AnimatedAnimation.prototype.vertivalOrientation = false;
    AnimatedAnimation.prototype.runBackward         = false;
    AnimatedAnimation.prototype.framePaddingTop     = 0;
    AnimatedAnimation.prototype.framePaddingRight   = 0;
    AnimatedAnimation.prototype.framePaddingBottom  = 0;
    AnimatedAnimation.prototype.framePaddingLeft    = 0;


    global.AnimatedAnimation = AnimatedAnimation;
})(window);