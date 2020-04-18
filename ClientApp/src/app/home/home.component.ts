import { Component, OnInit } from "@angular/core";
import { RequestGroup } from "../models/request-group";
import { AppService } from "../app.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  public requestGroups: RequestGroup[];

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.appService.getUser().subscribe((x) => {
      this.requestGroups = x.requestGroups;
    });
  }
}
