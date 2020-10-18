import { Component, OnInit } from '@angular/core';
import { GetFieldModel } from 'src/app/Models/FieldModel';
import { FormPostModel } from 'src/app/Models/FormModel';
import { PostFormService } from 'src/app/Services/post-form.service';
@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  formModel: FormPostModel;
  field8: string = "";
  field9: string = "";
  field10: string = "";
  field11: string = "";
  field12: string = "";
  field13: string = "";
  field14: string = "";
  field15: string = "";
  field16: string = "";
  field17: string = "";
  field18: string = "";
  field19: string = "";
  field20: string = "";
  field21: string = "";
  field22: string = "";
  field23: string = "";
  field24: string = "";
  field25: string = "";
  constructor(private postForm: PostFormService) { }
  ngOnInit(): void {
  }
  postFormValue() {
    this.formModel = {
      Field8: this.field8,
      Field9: this.field9,
      Field10: this.field10,
      Field11: this.field11,
      Field12: this.field12,
      Field13: this.field13,
      Field14: this.field14,
      Field15: this.field15,
      Field16: this.field16,
      Field17: this.field17,
      Field18: this.field18,
      Field19: this.field19,
      Field20: this.field20,
      Field21: this.field21,
      Field22: this.field22,
      Field23: this.field23,
      Field24: this.field24,
      Field25: this.field25
    }
    this.postForm.postData(this.formModel).subscribe(data =>
      alert("Data Submitted")
    )
  }
}
