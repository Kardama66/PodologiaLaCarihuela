import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogopediaComponent } from './logopedia.component';

describe('LogopediaComponent', () => {
  let component: LogopediaComponent;
  let fixture: ComponentFixture<LogopediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogopediaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogopediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
