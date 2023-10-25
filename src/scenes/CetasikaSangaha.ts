import { degToRad } from "../utils";

function drawRupa(scene: Phaser.Scene, x: number, y: number, radius: number) {
  const skin = scene.add.circle(x, y, radius).setStrokeStyle(3, 0xffffff);

  const minors = scene.add.group();
  Array(4)
    .fill(0)
    .forEach(() => {
      minors.add(scene.add.circle(0, 0, radius / 10, 0xffff00));
    });
  Phaser.Actions.PlaceOnCircle(
    minors.getChildren(),
    new Phaser.Geom.Circle(x, y, (1 * radius) / 3)
  );

  const mahabhutas = scene.add.group();
  Array(4)
    .fill(0)
    .forEach(() => {
      mahabhutas.add(scene.add.circle(0, 0, radius / 7, 0xffff00));
    });
  Phaser.Actions.PlaceOnCircle(
    mahabhutas.getChildren(),
    new Phaser.Geom.Circle(x, y, (2 * radius) / 3),
    degToRad(45),
    degToRad(360 + 45)
  );

  const outer = scene.add.group();
  Array(2)
    .fill(0)
    .forEach(() => {
      outer.add(scene.add.circle(0, 0, radius / 10, 0x00ffff));
    });
  Phaser.Actions.PlaceOnCircle(
    outer.getChildren(),
    new Phaser.Geom.Circle(x, y, (3 * radius) / 4)
  );

  return scene.add.group([
    ...minors.getChildren(),
    ...mahabhutas.getChildren(),
    ...outer.getChildren(),
    skin,
  ]);
}

class CetasikaScene extends Phaser.Scene {
  constructor() {
    super("cetasika-scene");
  }

  create() {
    const cetasikaRadius = 10;

    const citta = this.add.circle(400, 360, 30, 0xffffff);
    // this.add.bitmapText(400, 450, "",  "Citta", 70);

    const vedana = this.add
      .circle(0, 0, cetasikaRadius)
      .setStrokeStyle(2, 0xffff00);
    const group = this.add.group();
    Array(6)
      .fill(0)
      .forEach((_, i) => {
        if (i === 1) return group.add(vedana);
        const circle = this.add.circle(10, 10, cetasikaRadius - 4, 0xaaaaaa);
        circle.postFX.addGlow(0xaaaaaa, 2, 0, false, 0.4);
        group.add(circle);
      });
    Phaser.Actions.PlaceOnCircle(
      group.getChildren(),
      new Phaser.Geom.Circle(400, 360, 200),
      degToRad(180),
      degToRad(270)
    );

    const rupa = drawRupa(this, 500, 500, 40);

    const c = this.add.circle(300, 500, 4, 0xff0000);
    // new Phaser.FX.Glow(c, 0xff00000, 10, 24);
    c.postFX.addGlow(0xff0000, 2, 3, true, 0.5);
  }
}

export default CetasikaScene;
