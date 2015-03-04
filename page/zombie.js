'use strict';

var zombie = new Animated();
zombie.addSprite('zombie_0', 'page/zombie.png');

zombie.addAnimation(zombie.createAnimation('walk.left', 'zombie_0', {
    x: 512,
    y: 0,
    frameWidth: 128,
    frameHeight: 128,
    frames: 8
}));

zombie.addAnimation(zombie.createAnimation('walk.top_left', 'zombie_0', {
    x: 512,
    y: 128,
    frameWidth: 128,
    frameHeight: 128,
    frames: 8
}));

zombie.addAnimation(zombie.createAnimation('walk.top', 'zombie_0', {
    x: 512,
    y: 256,
    frameWidth: 128,
    frameHeight: 128,
    frames: 8
}));

zombie.addAnimation(zombie.createAnimation('walk.top_right', 'zombie_0', {
    x: 512,
    y: 384,
    frameWidth: 128,
    frameHeight: 128,
    frames: 8
}));

zombie.addAnimation(zombie.createAnimation('walk.right', 'zombie_0', {
    x: 512,
    y: 512,
    frameWidth: 128,
    frameHeight: 128,
    frames: 8
}));

zombie.addAnimation(zombie.createAnimation('walk.bottom_right', 'zombie_0', {
    x: 512,
    y: 640,
    frameWidth: 128,
    frameHeight: 128,
    frames: 8
}));

zombie.addAnimation(zombie.createAnimation('walk.bottom', 'zombie_0', {
    x: 512,
    y: 768,
    frameWidth: 128,
    frameHeight: 128,
    frames: 8
}));

zombie.addAnimation(zombie.createAnimation('walk.bottom_left', 'zombie_0', {
    x: 512,
    y: 896,
    frameWidth: 128,
    frameHeight: 128,
    frames: 8
}));