import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Email="";
  Pass = '';

  EmailCheck = false;
  PassCheck = false;

  rx = /^[a-z0-9\\._]+@[a-z0-9\\.-]+\.[a-z]+$/;

  regexOp : boolean = false;

  emailChange() {
    this.regexOp = ! this.rx.test(this.Email)
  }

  checkEmpty () {
    this.EmailCheck = (this.Email == '')
    this.PassCheck = (this.Pass == '')
  }

  constructor() { }

  ngOnInit(): void {
  }

}
