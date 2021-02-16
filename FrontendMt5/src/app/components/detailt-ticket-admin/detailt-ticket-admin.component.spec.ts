import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailtTicketAdminComponent } from './detailt-ticket-admin.component';

describe('DetailtTicketAdminComponent', () => {
  let component: DetailtTicketAdminComponent;
  let fixture: ComponentFixture<DetailtTicketAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailtTicketAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailtTicketAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
