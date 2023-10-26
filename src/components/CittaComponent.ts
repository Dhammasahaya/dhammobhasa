import { Citta } from "../entities/Citta";
import { VedanaType } from "../entities/types";
import { CircleGraphicsConfig } from "./CircleGraphics";
import { NamaComponent, NamaComponentFromEntityOption } from "./NamaComponent";

export class CittaComponent extends NamaComponent {
  readonly hetu: number = 0;
  _hetuRenderFactor: number = 0.2;
  sahetuka: boolean = false;
  vedana: VedanaType = "upekkha";

  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    radius: number,
    config: CircleGraphicsConfig = {}
  ) {
    super(scene, x, y, radius, {
      ...config,
      strokeAlpha: config.strokeAlpha ?? 1,
      fillAlpha: config.fillAlpha ?? 0.2,
      fill: config.fill ?? 0x777777,
    });
    super.updateState();
  }

  setHetu(num: number): void {
    this.hetu = num;
    this.sahetuka = num > 0;
    this.updateRenderState();
  }

  setVedana(vedana: VedanaType) {
    this.vedana = vedana;

    switch (this.vedana) {
      case "somanassa":
        this._stroke = 0xffff00;
        break;
      case "domanassa":
        this._stroke = 0xff0000;
        break;
      case "upekkha":
        this._stroke = 0xaaaaaa;
        break;
      case "dukkha":
        this._stroke = 0xaa00ff;
        break;
      case "sukha":
        this._stroke = 0xff8800;
        break;
    }

    this.updateRenderState();
  }

  updateRenderState() {
    super.updateState();

    // update hetu render
    if (this.hetu) {
      this.fillStyle(0xffffff);
      if (this.hetu === 1) {
        this.fillCircle(0, 0, this._radius * this._hetuRenderFactor);
      } else if (this.hetu === 2) {
        this.fillCircle(
          0,
          -this._radius / 3,
          this._radius * this._hetuRenderFactor
        );
        this.fillCircle(
          0,
          this._radius / 3,
          this._radius * this._hetuRenderFactor
        );
      } else if (this.hetu === 3) {
        this.fillCircle(
          0,
          -this._radius / 3,
          this._radius * this._hetuRenderFactor
        );
        this.fillCircle(
          -this._radius / 3,
          this._radius / 4,
          this._radius * this._hetuRenderFactor
        );
        this.fillCircle(
          this._radius / 3,
          this._radius / 4,
          this._radius * this._hetuRenderFactor
        );
      }
    }
  }

  static fromEntity(
    citta: Citta,
    option: NamaComponentFromEntityOption
  ): CittaComponent {
    const component = new CittaComponent(
      option.scene,
      option.x,
      option.y,
      option.radius,
      option.config
    );
    component.setHetu(citta.numOfHetu);
    component.setVedana(citta.vedana);
    return component;
  }
}
