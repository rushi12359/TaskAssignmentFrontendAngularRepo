import { Component, OnInit } from '@angular/core';
import { BasicAuthenticationService } from '../Services/basic-authentication-service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

 

  constructor(private basicAuthenticationService
    : BasicAuthenticationService) { }

  ngOnInit() {
    
  }
}
