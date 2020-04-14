import { Component, OnInit, Input, ViewEncapsulation } from "@angular/core";
import { RequestGroup } from "src/app/models/request";

@Component({
  selector: "app-request-grid",
  templateUrl: "./request-grid.component.html",
  styleUrls: ["./request-grid.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class RequestGridComponent implements OnInit {
  @Input() requestGroups: RequestGroup[];
  @Input() managerView: boolean = false;

  public calculateRequestedDate(requestGroup: RequestGroup): string {
    const dates = requestGroup.requests.map((x) => x.date).sort();
    const start = dates[0];
    const end = dates[dates.length - 1];

    return `${start.getMonth()}/${start.getDate()}/${start.getFullYear()}  -  ${end.getMonth()}/${end.getDate()}/${end.getFullYear()}`;
  }

  constructor() {}

  ngOnInit(): void {
    console.log("hedfadf");
  }
}
