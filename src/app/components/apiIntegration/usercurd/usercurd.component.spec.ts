import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsercurdComponent } from './usercurd.component';

describe('UsercurdComponent', () => {
  let component: UsercurdComponent;
  let fixture: ComponentFixture<UsercurdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsercurdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsercurdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
