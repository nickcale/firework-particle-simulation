class FireParticle extends Particle {
    constructor (x, y, colorHue, alpha) {
        super(x, y, p5.Vector.random2D().mult(random(0.5, 6)), colorHue, 255, 2);
    };

    fadeOut = function() {
        this.vel.mult(0.96);
        this.alpha -= 4;
    };

    particleIsDone = function() {
        return (this.alpha <= 0) ? true : false;
    };
};