function Vector2D(x, y) {
    if ( arguments.length > 0 ) {
        this.x = x;
        this.y = y;
    }
}


Vector2D.prototype.length = function() {
    return Math.sqrt(this.x*this.x + this.y*this.y);
};


Vector2D.prototype.dot = function(that) {
    return this.x*that.x + this.y*that.y;
};


Vector2D.prototype.cross = function(that) {
    return this.x*that.y - this.y*that.x;
}


Vector2D.prototype.unit = function() {
    return this.divide( this.length() );
};


Vector2D.prototype.unitEquals = function() {
    this.divideEquals( this.length() );

    return this;
};


Vector2D.prototype.add = function(that) {
    return new Vector2D(this.x + that.x, this.y + that.y);
};


Vector2D.prototype.addEquals = function(that) {
    this.x += that.x;
    this.y += that.y;

    return this;
};


Vector2D.prototype.subtract = function(that) {
    return new Vector2D(this.x - that.x, this.y - that.y);
};


Vector2D.prototype.subtractEquals = function(that) {
    this.x -= that.x;
    this.y -= that.y;

    return this;
};


Vector2D.prototype.multiply = function(scalar) {
  return new Vector2D(this.x * scalar, this.y * scalar);

};


Vector2D.prototype.multiplyEquals = function(scalar) {
    this.x *= scalar;
    this.y *= scalar;

    return this;
};

Vector2D.prototype.divide = function(scalar) {
    return new Vector2D(this.x / scalar, this.y / scalar);
};


Vector2D.prototype.divideEquals = function(scalar) {
    this.x /= scalar;
    this.y /= scalar;

    return this;
};


Vector2D.prototype.perp = function() {
    return new Vector2D(-this.y, this.x);
};


Vector2D.prototype.perpendicular = function(that) {
    return this.subtract(this.project(that));
};


Vector2D.prototype.project = function(that) {
    var percent = this.dot(that) / that.dot(that);

    return that.multiply(percent);
};


Vector2D.prototype.toString = function() {
    return this.x + "," + this.y;
};


Vector2D.fromPoints = function(p1, p2) {
    return new Vector2D(
        p2.x - p1.x,
        p2.y - p1.y
    );
};
