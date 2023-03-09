
const { Shape, Circle, Triangle, Square } = require('./shapes');

function generateLogoSvg(text, textColor, shape, shapeColor) {
    let svg = '';

    switch (shape) {
        case 'Circle':
            const circle = new Circle(shapeColor, 50);
            svg = `<svg width="300" height="200">
                      ${circle.render()}
                      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="72" fill="${textColor}">${text}</text>
                  </svg>`;
            break;
        case 'Triangle':
            const triangle = new Triangle(shapeColor, '150,50 250,150 50,150');
            svg = `<svg width="300" height="200">
                      ${triangle.render()}
                      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="72" fill="${textColor}">${text}</text>
                  </svg>`;
            break;
        case 'Square':
            const square = new Square(shapeColor, 200, 100);
            svg = `<svg width="300" height="200">
                      ${square.render()}
                      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="72" fill="${textColor}">${text}</text>
                  </svg>`;
            break;
            default:
            break;
    }

    return svg;
}

module.exports = generateLogoSvg;
