import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaithComponent } from './laith.component';

describe('LaithComponent', () => {
  let component: LaithComponent;
  let fixture: ComponentFixture<LaithComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaithComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
