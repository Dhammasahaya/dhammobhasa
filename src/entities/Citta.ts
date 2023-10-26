import { Nama } from "./Nama";
import { VedanaType } from "./types";

export class CittaEnt extends Nama {
  numOfHetu: number = 0;
  vedana: VedanaType = "upekkha";
  constructor(option: { numOfHetu?: number; vedana?: VedanaType } = {}) {
    super();
    this.numOfHetu = option.numOfHetu ?? this.numOfHetu;
    this.vedana = option.vedana ?? this.vedana;
  }
}

export interface Citta extends Nama {
  numOfHetu: number;
  vedana: VedanaType;
}
