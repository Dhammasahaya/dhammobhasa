import { Citta, CittaEnt } from "../entities/Citta";
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

    const citta = new CittaEnt({ numOfHetu: 2, vedana: "somanassa" });
    const cittaObject = CittaComponent.fromEntity(citta, {
      scene: this,
      x: 200,
      y: 200,
      radius: 50,
      config: {},
    });
    this.add.existing(cittaObject);

    const cittaList: Citta[] = [
      { numOfHetu: 2, vedana: "somanassa" },
      { numOfHetu: 2, vedana: "upekkha" },
      { numOfHetu: 2, vedana: "domanassa" },
      { numOfHetu: 1, vedana: "upekkha" },
      { numOfHetu: 0, vedana: "dukkha" },
      { numOfHetu: 0, vedana: "sukha" },
      { numOfHetu: 3, vedana: "somanassa" },
      { numOfHetu: 3, vedana: "upekkha" },
      { numOfHetu: 2, vedana: "somanassa" },
      { numOfHetu: 2, vedana: "upekkha" },
    ];

    for (let j = 0; j < 2; j++) {
      for (const i in cittaList) {
        const citta = cittaList[i];
        const component = CittaComponent.fromEntity(citta, {
          scene: this,
          radius: 20 - 10 * j,
          x: 40 * (j + 1),
          y: 40 + 60 * Number(i),
        });
        this.add.existing(component);
      }
    }

    const button = new Button(this, 200, 280, "Increment hetu");
    this.add.existing(button);

    button.on("pointerdown", () => {
      const newCittaHetu = (cittaObject.hetu + 1) % 4;
      cittaObject.setHetu(newCittaHetu);
    });
  }
}

export default SandboxScene;
