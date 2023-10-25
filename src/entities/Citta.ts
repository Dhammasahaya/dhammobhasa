import { Nama } from "./Nama";
import { VedanaType } from "./types";

export class Citta extends Nama {
  numOfHetu: number = 0;
  vedana: VedanaType = "upekkha";
  constructor(option: { numOfHetu?: number; vedana?: VedanaType } = {}) {
    super();
    this.numOfHetu = option.numOfHetu ?? this.numOfHetu;
    this.vedana = option.vedana ?? this.vedana;
  }
}
