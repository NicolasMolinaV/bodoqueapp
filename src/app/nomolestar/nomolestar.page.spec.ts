import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NomolestarPage } from './nomolestar.page';

describe('NomolestarPage', () => {
  let component: NomolestarPage;
  let fixture: ComponentFixture<NomolestarPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NomolestarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
