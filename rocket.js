class Rocket extends Particle {
    constructor (colorHue, alpha) {
        super(random(width), height, createVector(0, random(-14, -10)), colorHue, alpha, 6);
        this.exploded = false;
        this.particles = [];
    };

    moveRocket = function() {
        this.applyForce(gravity);
        this.update();
        if (this.vel.y >= 0) {
            this.explodeIfAtPeak();
        };
    };

    moveParticles = function() {
        for (var i = this.particles.length-1; i >= 0; i--) {
            this.particles[i].applyForce(gravity);
            this.particles[i].fadeOut();
            this.particles[i].update();

            if (this.particles[i].particleIsDone()) {
                this.particles.splice(i, 1);
            };
        };
    };

    updateFirework = function() {
        if (this.exploded) {
            this.moveParticles();
        } else {
            this.moveRocket();
        };
    };

    isAtPeak = function() {
        return (this.vel.y >= 0) ? true : false;        
    };

    explodeIfAtPeak = function() {
        if (this.isAtPeak()) {
            this.exploded = true;
            for (var i = 0; i < 100; i++) {
                this.particles.push(new FireParticle(this.pos.x, this.pos.y, this.colorHue));
            };
        };
    };

    showFirework = function() {
        if (this.exploded) {
            for (var i = 0; i < this.particles.length; i++) {
                this.particles[i].show();
            }
        } else {
            this.show();
        };
    };

    fireworkIsDone = function() {
        return (this.exploded && this.particles.length == 0) ? true : false;
    };

};