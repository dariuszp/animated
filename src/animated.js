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


    Animated.prototype.removeAnimation = function (animationName) {
        if (!this.animations[animationName]) {
            return false;
        }
        delete this.animations[animationName];
        return true;
    };


    Animated.prototype.canvasDrawFrame = function (ctx, animationName, frame, x, y, width, height) {
        var animation = this.animations[animationName];
        if (!animation) {
            throw new Error('Invalid animation name');
        }
        x = parseInt(x, 10);
        y = parseInt(y, 10);
        frame = parseInt(frame, 10) || 1;
        width = parseInt(width, 10) || animation.frameWidth;
        height = parseInt(height, 10) || animation.frameHeight;

        frame = frame % animation.frames;
        if (animation.runBackward) {
            frame = animation.frames - (frame + 1);
        }

        var sx = animation.x,
            sy = animation.y;
        if (animation.vertivalOrientation) {
            sy = animation.y + (frame * animation.frameHeight);
        } else {
            sx = animation.x + (frame * animation.frameWidth);
        }
        ctx.drawImage(animation.sprite, sx, sy, animation.frameWidth, animation.frameHeight, x, y, width, height);
    };


    global.Animated = Animated;
}(window));