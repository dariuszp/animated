'use strict';

(function (global) {

    function AnimatedAnimationError(message) {
        this.name = 'AnimatedAnimationError';
        this.message = message || 'Error';
    }
    AnimatedAnimationError.prototype = Object.create(Error.prototype);
    AnimatedAnimationError.prototype.constructor = AnimatedAnimationError;


    function AnimatedSpriteError(message) {
        this.name = 'AnimatedAnimationError';
        this.message = message || 'Error';
    }
    AnimatedSpriteError.prototype = Object.create(Error.prototype);
    AnimatedSpriteError.prototype.constructor = AnimatedSpriteError;


    function Animated() {
    };


    Animated.prototype.sprites = {};

    Animated.prototype.addSprite = function (name, imgSrc) {
        name = String(name || '');
        imgSrc = String(imgSrc || '');

        if (!name) {
            throw new AnimatedSpriteError('Invalid name');
        }

        if (!imgSrc) {
            throw new AnimatedSpriteError('Invalid img src');
        }

        this.sprites[name] = new Image();
        this.sprites[name].src = imgSrc;
        this.sprites[name].addEventListener('error', function () {
            throw new AnimatedSpriteError('Unable to load sprite "' + String(name) + '" from location: "' + String(imgSrc) + '"');
        });

        return this;
    };


    Animated.prototype.animations = {};

    Animated.prototype.addAnimation = function(name, spriteName, x, y, frameWidth, frameHeight, frames, vertivalOrientation, runBackward) {
        name = String(name || '');
        x = parseInt(x);
        y = parseInt(y);
        frameWidth = parseInt(frameWidth);
        frameHeight = parseInt(frameHeight);
        frames = parseInt(frames);
        vertivalOrientation = vertivalOrientation ? true : false;
        runBackward = runBackward ? true : false;

        if (!name) {
            throw new AnimatedAnimationError('Invalid name');
        }

        if (!this.sprites[spriteName]) {
            throw new AnimatedAnimationError('Invalid sprite: ' + String(spriteName));
        }

        if (frameWidth === 0 || frameHeight === 0) {
            throw new AnimatedAnimationError('Invalid frame size');
        }

        this.animations[name] = {
            name: name,
            sprite: this.sprites[spriteName],
            x: x,
            y: y,
            frameWidth: frameWidth,
            frameHeight: frameHeight,
            frames: frames,
            vertivalOrientation: vertivalOrientation,
            runBackward: runBackward
        };

        return this;
    };


    global.Animated = Animated;

})(window);