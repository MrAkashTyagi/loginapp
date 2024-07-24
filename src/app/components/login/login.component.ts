import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  constructor(private loginService: LoginService) { }

  credentials = {
    email: "",
    password: ""
  }

  submitForm() {
    //console.log("cliclk submit form");
    if ((this.credentials.email != '' && this.credentials.password != '') && (this.credentials.email != null && this.credentials.password != null)) {

      console.log("we have to submit the form to server");
      //token generate
      this.loginService.generateToken(this.credentials).subscribe(
        //sucess
        (response:any) => {
          console.log(response);
          console.log(response.jwtToken);
          this.loginService.loginUser(response.jwtToken)
          window.location.href="/dashboard"
          

        },
        //error
        error => {
          console.log(error);

        }

      )



    } else {
      console.log("Fields are empty");


    }

  }

}
