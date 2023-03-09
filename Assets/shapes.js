class Shape {
    constructor(color) {
      this.color = color;
    }
  
    render() {
      return '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
    }
  }
  
  class Circle extends Shape {
    constructor(color, radius) {
      super(color);
      this.radius = radius;
    }
  
    render() {
      return `<circle cx="150" cy="100" r="${this.radius}" fill="${this.color}" />`;
    }
  }
  
  class Triangle extends Shape {
    constructor(color, points) {
      super(color);
      this.points = points;
    }
  
    render() {
      return `<polygon points="${this.points}" fill="${this.color}" />`;
    }
  }
  
  class Square extends Shape {
    constructor(color, width, height) {
      super(color);
      this.width = width;
      this.height = height;
    }
  
    render() {
      return `<rect x="50" y="50" width="${this.width}" height="${this.height}" fill="${this.color}" />`;
    }
  }

  module.exports = Shape;