export default class CartItem {
  name!: string; // ! -> nem kell inicializálni
  count!: number;
  basePrice!: number;

  // ? -> opcionális paraméter
  constructor(name?: string, count?: number, basePrice?: number) {
    if (name) this.name = name;
    if (count) this.count = count;
    if (basePrice) this.basePrice = basePrice;
  }

  private GetTotalPrice(): number {
    return this.basePrice * this.count;
  }

  static CanBeConstructed(
    name: string,
    count: number,
    basePrice: number
  ): boolean {
    if (!name || !count || !basePrice) return false;
    else return true;
  }
}
