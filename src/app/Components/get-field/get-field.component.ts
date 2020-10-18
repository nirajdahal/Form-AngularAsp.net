import { Component, OnInit } from '@angular/core';
import { GetFieldModel } from 'src/app/Models/FieldModel';
import { GetFieldService } from 'src/app/Services/get-field.service';
@Component({
  selector: 'app-get-field',
  templateUrl: './get-field.component.html',
  styleUrls: ['./get-field.component.css']
})
export class GetFieldComponent implements OnInit {
  getValue: GetFieldModel;
  field1: string = "";
  field2: string = "";
  field3: string = "";
  field4: string = "";
  field5: string = "";
  field6: string = "";
  field7: string = "";
  gettingValue = false;
  constructor(private getFieldVal: GetFieldService) { }
  ngOnInit(): void {
    setTimeout(() => {
      this.getFieldValues();
      this.gettingValue = true;
    }, 1000);
  }
  getFieldValues() {
    this.getFieldVal.getData().subscribe(data => {
      this.field1 = data.field1;
      this.field2 = data.field2
      this.field3 = data.field3;
      this.field4 = data.field4;
      this.field5 = data.field5;
      this.field6 = data.field6;
      this.field7 = data.field7;
    }
    );
  }
}
