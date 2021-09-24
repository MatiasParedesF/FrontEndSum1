import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
    `
    .margin-t{
      margin-top: 60px;
      margin-bottom: 60px;
    }

    .margin-b{
      margin-top: 20px;
      margin-bottom: 20px;
    }
    `
  ]
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
