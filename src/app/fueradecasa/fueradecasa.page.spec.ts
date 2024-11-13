import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FueradecasaPage } from './fueradecasa.page';

describe('FueradecasaPage', () => {
  let component: FueradecasaPage;
  let fixture: ComponentFixture<FueradecasaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FueradecasaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
