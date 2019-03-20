class Matrix {
  constructor({ canvas, context, text }) {
    this.canvas = canvas;
    this.context = context;
    this.unit = canvas.width / 36;
    this.length = this.unit * 24;
    this.generate(text);
    this.animate = this.animate.bind(this);
    requestAnimationFrame(this.animate);
  }

  generate(text) {
    const { canvas, unit, length } = this;
    const { width, height } = canvas;
    this.chars = [];
    for (let j = 0; j < width; j += unit) {
      const base = Math.floor(Math.random() * (height + 2 * length));
      const scale = Math.random() + 1;
      for (let i = 0; i < height; i += unit) {
        const content = text[Math.floor(Math.random() * text.length)];
        this.chars.push({
          x: j, y: i, scale, base, content,
        });
      }
    }
  }

  paint() {
    const { canvas, context, chars, unit, length } = this;
    const { width, height } = canvas;
    context.clearRect(0, 0, width, height);
    context.save();
    chars.map((char) => {
      char.base += unit / 2;
      if (char.base > height + length) char.base = 0 - length;
      context.font = `bold ${unit}px arial`;
      context.fillStyle = `rgba(0, 255, 0, ${1 - Math.abs(char.y - char.base) / length})`;
      // context.scale(char.scale, char.scale);
      context.fillText(char.content, char.x, char.y);
    });
    context.restore();
  }

  animate() {
    this.paint();
    requestAnimationFrame(this.animate);
  }

  destroy() {
    this.animate = null;
  }
}

export default Matrix;
