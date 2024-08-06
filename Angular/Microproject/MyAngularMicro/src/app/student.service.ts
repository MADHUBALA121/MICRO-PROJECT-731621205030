import { Injectable } from '@angular/core';
import { Student } from './Model/Student';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  url : string;
  student:Student;
  studentArr:Student[];

  constructor(private http:HttpClient) {
    this.url = "http://localhost:3100/student1";
    this.student=new Student();
    this.studentArr=[];

   }
   insertstudent( student: Student){
    this.http.post<Student>(this.url,student).subscribe();
    return "Students Details Added";
   }

   updatestudent(student : Student){
    this.http.put<Student>(this.url+"/"+student.id,student).subscribe();
    return "Student Details Updated";

   }

   deleteStudent(stuId:number){
    this.http.delete<Student>(this.url+"/"+stuId).subscribe();
    return "Student Details deleted";

   }

   findStudent(stuId:number){
    this.http.get<Student>(this.url+"/"+stuId).subscribe(data=>this.student = data);
    return this.student;

   }
   findallStudent(){
    this.http.get<Student[]>(this.url).subscribe(data=>this.studentArr = data);
    return this.studentArr;

   }
}