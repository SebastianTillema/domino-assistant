export const MAX_PIPS = 6

export class Tile {
  num_pips_1: number
  num_pips_2: number

  constructor(num_pips_1, num_pips_2) {
    this.num_pips_1 = num_pips_1
    this.num_pips_2 = num_pips_2
  }

  public sum(): number {
    return this.num_pips_1 + this.num_pips_2
  }

  public toString = (): string => {
    return `(${this.num_pips_1} - ${this.num_pips_2})`;
  }
}

export function generateTiles(): Tile[] {
  let tiles: Tile[] = []
  for (let num_pips_1 = 0; num_pips_1 <= MAX_PIPS; num_pips_1++) {
    for (let num_pips_2 = num_pips_1; num_pips_2 <= MAX_PIPS; num_pips_2++) {
      tiles.push(new Tile(num_pips_1, num_pips_2))
    }
  }
  return tiles
}
