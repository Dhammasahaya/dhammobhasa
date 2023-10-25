import { Citta } from "../entities/Citta";
import { VedanaType } from "../entities/types";
import { NamaComponent, NamaComponentFromEntityOption } from "./NamaComponent";

export class CittaComponent extends NamaComponent {
  _numOfHetu: number = 0;
  sahetuka: boolean = false;
  vedana: VedanaType = "upekkha";

  setHetu(num: number): void {
    this._numOfHetu = num;
    this.sahetuka = num > 0;
    this.updateRenderState();
  }

  setVedana(vedana: VedanaType) {
    this.vedana = vedana;
    this.updateRenderState();
  }

  updateRenderState() {
    // update hetu render
    this.fillStyle(16777215);
    this.fillCircle(0, 0, this._radius * 0.2);

    // update vedana render
    switch (this.vedana) {
      case "somanassa":
        this._stroke = 16776960;
        break;
      case "domanassa":
        this._stroke = 16711680;
        break;
    }
    super.updateState();
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
