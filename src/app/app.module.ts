import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {ConfirmationPopoverModule} from 'angular-confirmation-popover';
import { ErrorComponent } from './error/error.component';
import { LogoutComponent } from './logout/logout.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentsComponent } from './students/students.component';
import { HttpIntercepterBasicAuthService } from './Services/http-intercepter-basic-auth-service.service';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LoginComponent,
    MenuComponent,
    WelcomeComponent,
    ErrorComponent,
    LogoutComponent,
    StudentListComponent,
    StudentsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ConfirmationPopoverModule.forRoot(
      {
        confirmButtonType:'danger' // set defaults here
      }
    )
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: HttpIntercepterBasicAuthService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
