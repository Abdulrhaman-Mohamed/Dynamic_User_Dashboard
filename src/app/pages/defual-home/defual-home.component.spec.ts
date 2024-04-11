import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefualHomeComponent } from './defual-home.component';

describe('DefualHomeComponent', () => {
  let component: DefualHomeComponent;
  let fixture: ComponentFixture<DefualHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefualHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DefualHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
