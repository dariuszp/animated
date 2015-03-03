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
'use strict';

(function (global) {

    function AnimatedSpriteError(message) {
        this.name = 'AnimatedAnimationError';
        this.message = message || 'Error';
    }


    AnimatedSpriteError.prototype = Object.create(Error.prototype);
    AnimatedSpriteError.prototype.constructor = AnimatedSpriteError;


    global.AnimatedSpriteError = AnimatedSpriteError;
}(window));
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
    AnimatedAnimation.prototype.frames              = 1;
    AnimatedAnimation.prototype.vertivalOrientation = false;
    AnimatedAnimation.prototype.runBackward         = false;
    AnimatedAnimation.prototype.framePaddingTop     = 0;
    AnimatedAnimation.prototype.framePaddingRight   = 0;
    AnimatedAnimation.prototype.framePaddingBottom  = 0;
    AnimatedAnimation.prototype.framePaddingLeft    = 0;


    global.AnimatedAnimation = AnimatedAnimation;
}(window));
'use strict';

(function (global) {

    function Animated() {
    };


    Animated.prototype.sprites = {};
    Animated.prototype.animations = {};


    Animated.prototype.addSprite = function (name, imgSrc) {
        name = String(name || '');
        imgSrc = String(imgSrc || '');

        if (!name) {
            throw new global.AnimatedSpriteError('Invalid name');
        }

        if (!imgSrc) {
            throw new global.AnimatedSpriteError('Invalid img src');
        }

        this.sprites[name] = new Image();
        this.sprites[name].src = imgSrc;
        this.sprites[name].addEventListener('error', function () {
            throw new global.AnimatedSpriteError('Unable to load sprite "' + String(name) + '" from location: "' + String(imgSrc) + '"');
        });

        return this;
    };


    Animated.prototype.createAnimation = function (name, spriteName, options) {
        spriteName = String(spriteName || '');
        if (!this.sprites[spriteName]) {
            throw new global.AnimatedSpriteError('Invalid sprite name');
        }
        return new global.AnimatedAnimation(name, this.sprites[spriteName], options);
    };


    Animated.prototype.addAnimation = function (animation) {
        if (!(animation instanceof global.AnimatedAnimation)) {
            throw new global.AnimatedAnimationError('Invalid animation. Parameter must be an instanceof Animation');
        }

        this.animations[animation.name] = animation;

        return this;
    };


    global.Animated = Animated;
}(window));