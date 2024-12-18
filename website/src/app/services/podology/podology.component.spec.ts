import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PodologyComponent } from './podology.component';

describe('PodologyComponent', () => {
  let component: PodologyComponent;
  let fixture: ComponentFixture<PodologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PodologyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PodologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
