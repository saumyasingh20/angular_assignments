import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricitybillComponent } from './electricitybill.component';

describe('ElectricitybillComponent', () => {
  let component: ElectricitybillComponent;
  let fixture: ComponentFixture<ElectricitybillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectricitybillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectricitybillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
