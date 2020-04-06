import { Component, OnInit, Input } from "@angular/core";
import { RequestGroup } from "src/app/models/request";

@Component({
  selector: "app-request-grid",
  templateUrl: "./request-grid.component.html",
  styleUrls: ["./request-grid.component.scss"],
})
export class RequestGridComponent implements OnInit {
  @Input() requestGroups: RequestGroup[];

  constructor() {}

  ngOnInit(): void {
    console.log(this.requestGroups);
  }
}
