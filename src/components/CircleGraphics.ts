export interface CircleGraphicsConfig {
  stroke?: number;
  fill?: number;
  fillAlpha?: number;
  strokeThickness?: number;
  strokeAlpha?: number;
}

export class CircleGraphics extends Phaser.GameObjects.Graphics {
  _radius: number;
  _stroke: number = 16777215;

  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    radius: number,
    config: CircleGraphicsConfig = {}
  ) {
    super(scene, { x, y });
    this._radius = radius;
    this._stroke = config.stroke ?? this._stroke;
  }

  updateState() {
    this.lineStyle(2, this._stroke);
    this.strokeCircle(0, 0, this._radius);
  }
}
