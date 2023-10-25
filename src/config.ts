import Phaser from "phaser";
import SandboxScene from "./scenes/Sandbox";

const screenSize = {
  width: window.innerWidth,
  height: window.innerHeight,
};
const gameCanvas = document.getElementById("game-canvas") as HTMLCanvasElement;
export const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.WEBGL,
  width: screenSize.width,
  height: screenSize.height,
  canvas: gameCanvas,
  scene: [SandboxScene],
  backgroundColor: 0x272628,
};
