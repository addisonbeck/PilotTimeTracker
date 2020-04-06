import { Component, OnInit } from "@angular/core";
import { RequestGroup } from "src/app/models/request";
import { mockUser } from "../dummy-data";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  public requestGroups: RequestGroup[];

  ngOnInit() {
    this.requestGroups = mockUser.requestGroups;
    console.log(this.requestGroups);
  }
}
