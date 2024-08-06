import { Component } from '@angular/core';
import { Student } from './Model/Student';
import { StudentService} from './student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'student';
  student : Student;
  result : string;
  studentArr:Student[];
  flag:boolean;

  constructor(private service : StudentService){
    this.student = new Student();
    this.result =" ";
    this.studentArr=[];
    this.flag=false;
  }

  insertStudent(data : any) {
    this.student.id = data.stuId;
    this.student.stuName = data.stuName;
    this.student.stuDays = data.stuDays;
    //alert(data.stuId+" "+data.stuName+" "+data.stuDays);
    this.result = this.service.insertstudent(this.student);
  }

  updateStudent(data:any){
    this.student.id = data.stuId;
    this.student.stuName = data.stuName;
    this.student.stuDays = data.stuDays;
    //alert(data.stuId+" "+data.stuName+" "+data.stuDays);
    this.result = this.service.updatestudent(this.student);
  }

  deleteStudent(data:any){
    this.result = this.service.deleteStudent(data.stuId);
  }

  findStudent(data:any){
    this.student=this.service.findStudent(data.stuId);
    this.result=this.student.stuName+" "+this.student.stuDays;
  }

  findallStudent(){
    this.studentArr=this.service.findallStudent();
    this.flag=true;
  }
}