import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentDataService } from '../Services/student-data.service';
import { Student } from '../student-list/student-list.component';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  id:number

  student:Student

  updateMessege: string

 
  constructor(private studentDataService: StudentDataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id= this.route.snapshot.params['id'];
    this.student= new Student(this.id,'','','','');
    if(this.id!=-1)
    {
    this.studentDataService.retriveStudent(this.id)
    .subscribe (
      data => this.student= data
    )
    }
    
      
  }

  saveTodo()
  {

    if(this.id == -1) { 
      this.studentDataService.createStudent(this.student)
          .subscribe (
            data => {
              console.log(data)
              this.router.navigate(['liststudents'])
            }
          )
    } 

    else {
      this.studentDataService.updateStudent(this.id,this.student).subscribe(
        data => {
          console.log(data);
          this.updateMessege = `update of Student ${this.id} Successful!`;
          this.router.navigate(['liststudents']);
  
        }
        
          
        
        )
    }
  }
  



}
