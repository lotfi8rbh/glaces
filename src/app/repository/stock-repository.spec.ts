import { StockRepository } from './stock-repository';

describe('StockRepository', () => {
  it('should create an instance', () => {
    expect(new StockRepository()).toBeTruthy();
  });
});
