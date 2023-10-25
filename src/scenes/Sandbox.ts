import { Citta } from "../entities/Citta";
import { Button } from "../components/Button";
import { GridDebugger } from "../components/GridDebuggerLayer";
import { CittaComponent } from "../components/CittaComponent";

class SandboxScene extends Phaser.Scene {
  create() {
    const { width, height } = this.game.canvas;
    const majorSize = 100;
    const minorSize = 20;

    const debuggerLayer = new GridDebugger(
      this,
      width,
      height,
      majorSize,
      minorSize
    );
    this.add.existing(debuggerLayer);

    const button = new Button(this, 100, 100);
    this.add.existing(button);

    const citta = new Citta({ numOfHetu: 2, vedana: "somanassa" });
    const cittaObject = CittaComponent.fromEntity(citta, {
      scene: this,
      x: 200,
      y: 200,
      radius: 50,
      config: {},
    });
    this.add.existing(cittaObject);

    const cittaList = [
      new Citta({ numOfHetu: 2, vedana: "somanassa" }),
      new Citta({ numOfHetu: 2, vedana: "upekkha" }),
      new Citta({ numOfHetu: 2, vedana: "domanassa" }),
      new Citta({ numOfHetu: 1, vedana: "upekkha" }),
      new Citta({ numOfHetu: 0, vedana: "dukkha" }),
      new Citta({ numOfHetu: 0, vedana: "sukha" }),
      new Citta({ numOfHetu: 3, vedana: "somanassa" }),
      new Citta({ numOfHetu: 3, vedana: "upekkha" }),
      new Citta({ numOfHetu: 2, vedana: "somanassa" }),
      new Citta({ numOfHetu: 2, vedana: "upekkha" }),
    ];

    for (const i in cittaList) {
      const citta = cittaList[i];
      const component = CittaComponent.fromEntity(citta, {
        scene: this,
        radius: 20,
        x: 40,
        y: 40 + 60 * Number(i),
      });
      this.add.existing(component);
    }
  }
}

export default SandboxScene;
