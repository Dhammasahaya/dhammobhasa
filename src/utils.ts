export function degToRad(deg: number): number {
  return (deg * Math.PI) / 180;
}

type ColorType = number;

type PaletteConfig = Record<string, ColorType>;

interface ThemeConfig<PConf extends PaletteConfig> {
  palette?: PConf;
  spacing?: number;
}

export function createTheme<C extends ThemeConfig<P>, P extends PaletteConfig>(
  config?: C
) {
  const { palette: _p, spacing = 8, ...otherConfig } = config ?? {};

  const palette = {
    primary: 0x002130,
    background: 0x272628,
    ...config?.palette,
  };

  return {
    ...otherConfig,
    palette: palette as unknown as P,
    spacing: (multiplier: number) => spacing * multiplier,
  };
}
