import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteFavsButtonComponent } from './delete-favs-button.component';

describe('DeleteFavsButtonComponent', () => {
  let component: DeleteFavsButtonComponent;
  let fixture: ComponentFixture<DeleteFavsButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteFavsButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteFavsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
