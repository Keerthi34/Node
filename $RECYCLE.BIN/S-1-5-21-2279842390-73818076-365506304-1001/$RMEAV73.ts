import { Component, OnInit } from '@angular/core';
//import { MyDatePickerModule } from 'mydatepicker';
import { Http } from '@angular/http';
@Component({
  selector: 'app-newteacher',
  templateUrl: './newteacher.component.html',
  styleUrls: ['./newteacher.component.css']
})
export class NewteacherComponent implements OnInit {

constructor(private http: Http) { }
  /*private myDatePickerOptions: IMyOptions = {
          dateFormat: 'd.m.yyyy',
          height: '34px',
          width: '210px',
          inline: false
      };*/
      private teachers: Array<any> = [];
      private newAttribute: any = {};

      addValue() {
          this.teachers.push(this.newAttribute)
          this.newAttribute = {};
      }

      deleteValue(index) {
          this.teachers.splice(index, 1);
      }



  ngOnInit() {
  }

}
