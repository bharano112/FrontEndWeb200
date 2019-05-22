import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnloanComponent } from './onloan.component';

describe('OnloanComponent', () => {
  let component: OnloanComponent;
  let fixture: ComponentFixture<OnloanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnloanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnloanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
