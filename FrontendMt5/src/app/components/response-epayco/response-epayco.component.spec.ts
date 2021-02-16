import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponseEpaycoComponent } from './response-epayco.component';

describe('ResponseEpaycoComponent', () => {
  let component: ResponseEpaycoComponent;
  let fixture: ComponentFixture<ResponseEpaycoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponseEpaycoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponseEpaycoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
