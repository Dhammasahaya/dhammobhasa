import theme from "../theme";

export class Button extends Phaser.GameObjects.Container {
  label: Phaser.GameObjects.Text;
  background: Phaser.GameObjects.Rectangle;

  constructor(scene: Phaser.Scene, x: number, y: number, label?: string) {
    super(scene, x, y);

    this.label = new Phaser.GameObjects.Text(scene, 0, 0, label ?? "Button", {
      padding: { x: 16, y: 8 },
      resolution: 1,
    }).setOrigin(0.5, 0.5);

    const bound = this.label.getBounds();
    this.background = new Phaser.GameObjects.Rectangle(
      scene,
      0,
      0,
      bound.width,
      bound.height
    )
      .setFillStyle(theme.palette.buttonBg, theme.palette.buttonBgAlpha)
      .setStrokeStyle(1, theme.palette.buttonStroke);

    const dot = new Phaser.GameObjects.Arc(
      scene,
      0,
      0,
      10,
      Phaser.Math.DegToRad(0),
      Phaser.Math.DegToRad(360)
    ).setFillStyle(0xffffff, 1);

    this.add([this.background, this.label, dot]);

    const hitArea = new Phaser.Geom.Rectangle(
      bound.x,
      bound.y,
      bound.width,
      bound.height
    );
    this.setInteractive(hitArea, Phaser.Geom.Rectangle.Contains);
    this._setHoverBehavior();
  }

  _setHoverBehavior() {
    const { strokeColor, strokeAlpha, fillColor, fillAlpha } = this.background;
    this.on("pointerover", () => {
      this.background.setStrokeStyle(2, strokeColor, strokeAlpha);
      this.background.setFillStyle(fillColor, 1);
    });
    this.on("pointerout", () => {
      this.background.setStrokeStyle(1, strokeColor);
      this.background.setFillStyle(fillColor, fillAlpha);
    });
  }

  setOrigin(_x: number, _y: number) {
    throw new Error("Set origin not implemented");
  }
}
