import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFavsButtonComponent } from './add-favs-button.component';

describe('AddFavsButtonComponent', () => {
  let component: AddFavsButtonComponent;
  let fixture: ComponentFixture<AddFavsButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFavsButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFavsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
