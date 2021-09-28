import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBySideCompareComponent } from './side-by-side-compare.component';

describe('SideBySideCompareComponent', () => {
  let component: SideBySideCompareComponent;
  let fixture: ComponentFixture<SideBySideCompareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideBySideCompareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBySideCompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
