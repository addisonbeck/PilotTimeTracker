import { Component, OnInit } from "@angular/core";
import { RequestGroup } from "../models/request-group";
import { AppService } from "../app.service";

@Component({
  selector: "app-manager-queue",
  templateUrl: "./manager-queue.component.html",
  styleUrls: ["./manager-queue.component.scss"],
})
export class ManagerQueueComponent implements OnInit {
  public requestGroups: RequestGroup[];

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.appService.getManagedRequests().subscribe((x) => {
      this.requestGroups = x;
    });
  }
}
