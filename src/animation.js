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

        var index;
        for (index in options) {
            if (options.hasOwnProperty(index)) {
                if (!this.hasOwnProperty(index) || typeof this[index] === 'function') {
                    throw new global.AnimatedAnimationError('Invalid option: "' + String(index) + '"');
                }
                this[index] = options[index];
            }
        }
    }


    AnimatedAnimation.prototype.name                = '';
    AnimatedAnimation.prototype.sprite              = undefined;
    AnimatedAnimation.prototype.x                   = 0;
    AnimatedAnimation.prototype.y                   = 0;
    AnimatedAnimation.prototype.frameWidth          = 32;
    AnimatedAnimation.prototype.frameHeight         = 64;
    AnimatedAnimation.prototype.frames              = 1;
    AnimatedAnimation.prototype.vertivalOrientation = false;
    AnimatedAnimation.prototype.runBackward         = false;
    AnimatedAnimation.prototype.framePaddingTop     = 0;
    AnimatedAnimation.prototype.framePaddingRight   = 0;
    AnimatedAnimation.prototype.framePaddingBottom  = 0;
    AnimatedAnimation.prototype.framePaddingLeft    = 0;


    global.AnimatedAnimation = AnimatedAnimation;
}(window));