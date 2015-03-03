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
        console.log(global);
        if (!(animation instanceof global.AnimatedAnimation)) {
            throw new global.AnimatedAnimationError('Invalid animation. Parameter must be an instanceof Animation');
        }

        this.animations[animation.name] = animation;

        return this;
    };


    global.Animated = Animated;
}(window));