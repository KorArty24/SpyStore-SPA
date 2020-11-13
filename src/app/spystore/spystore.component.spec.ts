import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpystoreComponent } from './spystore.component';

describe('SpystoreComponent', () => {
  let component: SpystoreComponent;
  let fixture: ComponentFixture<SpystoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpystoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpystoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
