import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NochePage } from './noche.page';

describe('NochePage', () => {
  let component: NochePage;
  let fixture: ComponentFixture<NochePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NochePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
