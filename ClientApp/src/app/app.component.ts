import { Component, OnInit } from "@angular/core";
import { AppService } from "./app.service";
import { User } from "./models/user";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit {
  user: User;

  constructor(private appService: AppService){}

  ngOnInit(){
    this.appService.getUser().subscribe(user => {
      this.user = user;
    })
  }
}
