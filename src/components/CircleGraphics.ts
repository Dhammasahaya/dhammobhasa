export interface CircleGraphicsConfig {
  stroke?: number;
  fill?: number;
  fillAlpha?: number;
  strokeThickness?: number;
  strokeAlpha?: number;
}

export class CircleGraphics extends Phaser.GameObjects.Graphics {
  _radius: number;
  _stroke: number = 0xffffff;
  _strokeAlpha: number = 0;
  _strokeThickness: number = 2;
  _fill: number = 0xffffff;
  _fillAlpha: number = 0;

  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    radius: number,
    config: CircleGraphicsConfig = {}
  ) {
    super(scene, { x, y });
    this._radius = radius;
    this._fill = config.fill ?? this._fill;
    this._stroke = config.stroke ?? this._stroke;
    this._fillAlpha = config.fillAlpha ?? this._fillAlpha;
    this._strokeThickness = config.strokeThickness ?? this._strokeThickness;
    this._strokeAlpha =
      config.strokeAlpha ?? config.stroke !== undefined ? 1 : this._strokeAlpha;

    this.updateState();
  }

  updateState() {
    this.clear()
    this.lineStyle(2, this._stroke, this._strokeAlpha);
    this.strokeCircle(0, 0, this._radius);

    this.fillStyle(this._fill, this._fillAlpha);
    this.fillCircle(0, 0, this._radius);
  }
}
