import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-electricitybill',
  templateUrl: './electricitybill.component.html',
  styleUrls: ['./electricitybill.component.css']
})
export class ElectricitybillComponent implements OnInit {
  units:number = 0;
  total:number=0;
  constructor() { }

  ngOnInit(): void {
  }

  calculateBill(): void {
    if(this.units<=100){
      this.total=this.units*1;
    }else if(this.units>100&&this.units<=200){
      this.total=100+(this.units-100)*2;
    }else if(this.units>200 && this.units<=300){
      this.total=300+(this.units-200)*3;
    }else if(this.units>300){
      this.total=600+(this.units-300)*5;
    }
  }

}
