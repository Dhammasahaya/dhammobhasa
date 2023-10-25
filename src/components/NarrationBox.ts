import { palette } from "../palette";

export class NarrationBox extends Phaser.GameObjects.Container {
  constructor(config: {
    scene: Phaser.Scene;
    x: number;
    y: number;
    width: number;
    height: number;
  }) {
    super(config.scene, config.x, config.y);
    const narrationContent = new Phaser.GameObjects.Container(
      config.scene,
      20 - config.width / 2,
      10 - config.height
    );
    const narrationActionBar = new Phaser.GameObjects.Container(
      config.scene,
      0,
      100
    );

    // Narration background fill
    const narrationBg = new Phaser.GameObjects.Graphics(config.scene);
    narrationBg.fillStyle(palette.narrationBoxBg, 0.8);
    narrationBg.lineStyle(1, palette.narrationBoxBorder, 0.3);
    narrationBg.strokeRect(-config.width / 2, -config.height, config.width, config.height);
    narrationBg.fillRect(-config.width / 2, -config.height, config.width, config.height);

    const narrationText = new Phaser.GameObjects.Text(
      config.scene,
      40,
      20,
      [
        "Hallo... 👋🏼",
        "Anggaplah ini Jordi.",
        "Jordi adalah makhluk jenis manusia.",
      ],
      {
        resolution: 4,
        maxLines: 5,
      }
    );

    // const btn1 = this.add.text(0, 0, "< Back");
    // const btn2 = this.add.text(80, 0, "Next >");
    narrationContent.add(narrationText);
    narrationContent.add(narrationActionBar);
    // narrationActionBar.add(btn1);
    // narrationActionBar.add(btn2);
    this.add(narrationBg);
    this.add(narrationContent);
  }
  setText(text: string) { }
}
