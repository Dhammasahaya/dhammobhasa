import theme from "../theme";

export class Button extends Phaser.GameObjects.Container {
  label: Phaser.GameObjects.Text;
  background: Phaser.GameObjects.Rectangle;

  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y);

    this.label = new Phaser.GameObjects.Text(scene, 0, 0, "Button", {
      padding: { x: 16, y: 8 },
      resolution: 1,
    });

    const textBound = this.label.getBounds();

    this.background = new Phaser.GameObjects.Rectangle(
      scene,
      textBound.centerX,
      textBound.centerY,
      textBound.width,
      textBound.height
    )
      .setFillStyle(theme.palette.buttonBg, theme.palette.buttonBgAlpha)
      .setStrokeStyle(1, theme.palette.buttonStroke);

    this.add([this.background, this.label]);
  }
}
