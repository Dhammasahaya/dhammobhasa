export class GridDebugger extends Phaser.GameObjects.Layer {
  constructor(
    scene: Phaser.Scene,
    width: number,
    height: number,
    major: number,
    minor?: number,
    option?: {
      majorColor: number;
      majorAlpha: number;
      minorColor: number;
      minorAlpha: number;
    }
  ) {
    super(scene);
    const {
      majorColor = 12303291,
      majorAlpha = 0.3,
      minorColor = 10526880,
      minorAlpha = 0.1,
    } = option ?? {};

    const majorGrid = new Phaser.GameObjects.Grid(
      scene,
      0,
      0,
      width,
      height,
      major,
      major,
      0,
      0
    )
      .setOrigin(0, 0)
      .setOutlineStyle(majorColor, majorAlpha);

    const minorGrid = new Phaser.GameObjects.Grid(
      scene,
      0,
      0,
      width,
      height,
      minor,
      minor
    )
      .setOrigin(0, 0)
      .setOutlineStyle(minorColor, minorAlpha);

    if (minor) this.add(minorGrid);
    this.add(majorGrid);
  }
}
