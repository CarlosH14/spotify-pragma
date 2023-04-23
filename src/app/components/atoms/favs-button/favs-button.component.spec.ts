import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavsButtonComponent } from './favs-button.component';

describe('FavsButtonComponent', () => {
  let component: FavsButtonComponent;
  let fixture: ComponentFixture<FavsButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavsButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
