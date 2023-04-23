import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeMoreButtonComponent } from './see-more-button.component';

describe('SeeMoreButtonComponent', () => {
  let component: SeeMoreButtonComponent;
  let fixture: ComponentFixture<SeeMoreButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeMoreButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeeMoreButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
