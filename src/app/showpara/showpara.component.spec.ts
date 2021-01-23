import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowparaComponent } from './showpara.component';

describe('ShowparaComponent', () => {
  let component: ShowparaComponent;
  let fixture: ComponentFixture<ShowparaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowparaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowparaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
