import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailTicketUserComponent } from './detail-ticket-user.component';

describe('DetailTicketUserComponent', () => {
  let component: DetailTicketUserComponent;
  let fixture: ComponentFixture<DetailTicketUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailTicketUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailTicketUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
