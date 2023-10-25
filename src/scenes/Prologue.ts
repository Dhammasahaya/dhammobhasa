import { Button } from "../components/Button";
import { NarrationBox } from "../components/NarrationBox";
import { palette } from "../palette";

const narrationBoxHeight = 200;

class PrologueScene extends Phaser.Scene {
  constructor() {
    super("prologue-scene");
  }
  preload() {
    this.load.svg("person", "/assets/man-user-svgrepo-com.svg");
  }

  create() {
    const { width, height } = this.sys.game.canvas;
    const displayZone = this.add.zone(width / 2, height / 2, width, height);

    // Add person
    const person = this.add
      .image(0, 0, "person")
      .setTintFill(palette.person)
      .setScale(0.4);
    Phaser.Display.Align.In.Center(person, displayZone);

    const btn1 = new Button(this, 200, 200);
    this.add.existing(btn1);

    const narrationBox = new NarrationBox({
      scene: this,
      x: 0,
      y: 0,
      width: width,
      height: narrationBoxHeight,
    });
    Phaser.Display.Align.In.BottomCenter(narrationBox, displayZone);
    this.add.existing(narrationBox);

    // Button
    const buttonContainer = this.add.container(530, 480);
    const buttonBg = this.add
      .rectangle(0, 0, 180, 50, palette.buttonBg, palette.buttonBgAlpha)
      .setStrokeStyle(1, palette.buttonStroke);
    const buttonText = this.add
      .text(0, 0, "Lewati prolog >>")
      .setOrigin(0.5, 0.5);

    Phaser.Display.Align.In.Center(buttonText, buttonBg);

    buttonContainer.add(buttonBg);
    buttonContainer.add(buttonText);
  }
}

export default PrologueScene;
