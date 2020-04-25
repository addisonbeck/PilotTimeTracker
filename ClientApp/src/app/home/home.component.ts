import { Component, OnInit } from "@angular/core";
import { RequestGroup } from "../models/request-group";
import { AppService } from "../app.service";
import { User } from "../models/user";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  public user: User;

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.appService.getUser().subscribe((x) => {
      this.user = x;
    });
  }
}
