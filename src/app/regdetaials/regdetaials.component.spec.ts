import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegdetaialsComponent } from './regdetaials.component';

describe('RegdetaialsComponent', () => {
  let component: RegdetaialsComponent;
  let fixture: ComponentFixture<RegdetaialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegdetaialsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegdetaialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
