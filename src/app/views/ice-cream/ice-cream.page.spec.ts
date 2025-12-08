import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IceCreamPage } from './ice-cream.page';

describe('IceCreamPage', () => {
  let component: IceCreamPage;
  let fixture: ComponentFixture<IceCreamPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IceCreamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
