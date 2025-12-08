import { IceCreamItem } from '../data/ice-cream-item';
export abstract class StockRepository {
  public abstract items: IceCreamItem[];
}
