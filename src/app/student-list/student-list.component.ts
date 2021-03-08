import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentDataService } from '../Services/student-data.service';

export class Student {
  constructor(
   
     public id: number,
     public first_name: string,
     public last_name: string,
     public email:string,
     public password:string
     
){

  }
}

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})

export class StudentListComponent implements OnInit {

  students: Student[]

  message: string;

  public popoverTitle:string ='Record Delete Confirmation';
  public popoverMessage:string ='Do you want to delete?';

  constructor(private studentDataService:StudentDataService, private router: Router) { }
  
    ngOnInit() {
      this.refreshStudents();
    }
  
    refreshStudents()
    {
      this.studentDataService.retrieveAllStudents().subscribe(
        response => {
          console.log(response);
          this.students =response;
        })
  
    }
  
    deleteStudent(id) {
      console.log(`delete student ${id}` )
      this.studentDataService.deleteStudent(id).subscribe (
        response => {
          console.log(response);
          this.message = `Delete of Student ${id} Successful!`;
          this.refreshStudents()
        }
      )
    }
  
    updateStudent(id)
    {
      console.log(`update ${id}`)
      this.router.navigate(['students',id]);
    }
  
    addStudent()
    {
      this.router.navigate(['students',-1]);
    }


}
