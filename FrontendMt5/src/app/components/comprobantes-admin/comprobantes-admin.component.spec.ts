import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprobantesAdminComponent } from './comprobantes-admin.component';

describe('ComprobantesAdminComponent', () => {
  let component: ComprobantesAdminComponent;
  let fixture: ComponentFixture<ComprobantesAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComprobantesAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComprobantesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
