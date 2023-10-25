import { CircleGraphics } from "./CircleGraphics";
import { CircleGraphicsConfig } from "./CircleGraphics";
import { Entity } from "../entities/Entity";

export interface NamaComponentFromEntityOption {
  scene: Phaser.Scene;
  x: number;
  y: number;
  radius: number;
  config?: CircleGraphicsConfig;
}
export class NamaComponent extends CircleGraphics {
  static fromEntity(
    _entity: Entity,
    option: NamaComponentFromEntityOption
  ): NamaComponent {
    return new NamaComponent(
      option.scene,
      option.x,
      option.y,
      option.radius,
      option.config
    );
  }
}
