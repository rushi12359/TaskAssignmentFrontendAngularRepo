import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../student-list/student-list.component';


@Injectable({
  providedIn: 'root'
})
export class StudentDataService {

  constructor(private http:HttpClient) { }

  retrieveAllStudents(): Observable<Student[]>
  {
    return this.http.get<Student[]>('http://localhost:8080/students');
  }

  deleteStudent(id:any): Observable<Student[]>
  {
    return this.http.delete<Student[]>(`http://localhost:8080/student/${id}`);
    
  }

  retriveStudent(id:number): Observable<Student>
  {
    return this.http.get<Student>(`http://localhost:8080//student/${id}`);
    
  }

  updateStudent(id:number,student): Observable<Student>
  {
    return this.http.put<Student>(`http://localhost:8080/student/${id}`,student);
    
  }

  createStudent(student): Observable<Student>
  {
    return this.http.post<Student>('http://localhost:8080/student/create',student);
    
  }

}
