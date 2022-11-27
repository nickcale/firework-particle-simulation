class Particle {
    constructor(x, y, velVector, colorHue, alpha, strWeight) {
        this.pos = createVector(x, y);
        this.vel = velVector;
        this.acc = createVector(0, 0);
        this.colorHue = colorHue;
        this.alpha = alpha;
        this.strWeight = strWeight;
    };
    
    applyForce = function (force) {
        this.acc.add(force);
    };

    update = function () {
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);
    };

    show = function () {
        var colors = HSBToRGB(this.colorHue, 255, 255);
        console.log(colors);
        stroke(colors.r, colors.g, colors.b, this.alpha);
        strokeWeight(this.strWeight);

        point(this.pos.x, this.pos.y);
    };
};

const HSBToRGB = (h, s, b) => {
    s /= 100;
    b /= 100;
    const k = (n) => (n + h / 60) % 6;
    const f = (n) => b * (1 - s * Math.max(0, Math.min(k(n), 4 - k(n), 1)));
    return {
        r: Math.round(255 * f(5)),
        g: Math.round(255 * f(3)),
        b: Math.round(255 * f(1))
    };
  };