import { Component, OnInit, Input, ViewEncapsulation } from "@angular/core";
import { RequestGroup } from "../models/request-group";
import { RequestStatus } from "../models/request-status.enum";
import { RequestType } from "../models/request-type.enum";

@Component({
  selector: "app-request-grid",
  templateUrl: "./request-grid.component.html",
  styleUrls: ["./request-grid.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class RequestGridComponent implements OnInit {
  @Input() requestGroups: RequestGroup[];
  @Input() managerView: boolean = false;
  public statusTypes: RequestStatus;
  public selectedStatusTypes: RequestStatus[];

  get requestStatus() {
    return RequestStatus;
  }

  get requestTypes() {
    return RequestType;
  }

  get shownRequests() {
    if (!this.selectedStatusTypes || this.selectedStatusTypes.length < 1) {
      return this.sortedRequestGroups;
    }

    return this.sortedRequestGroups.filter(
      (requestGroup) =>
        this.selectedStatusTypes.indexOf(requestGroup.status) > -1
    );
  }

  get sortedRequestGroups() {
    return this.requestGroups.sort((a, b) => {
      return <any>new Date(b.dateRequested) - <any>new Date(a.dateRequested);
    });
  }

  public calculateRequestTotalHours(requestGroup: RequestGroup): number {
    let total: number = 0;
    requestGroup.requests.forEach(request => {total += request.hours})
    return total;
  }

  public calculateRequestedDate(requestGroup: RequestGroup): string {
    const dates = requestGroup.requests.map((x) => x.date).sort();
    const start = new Date(dates[0]);
    const end = new Date(dates[dates.length - 1]);

    return `${start.getMonth()}/${start.getDate()}/${start.getFullYear()}  -  ${end.getMonth()}/${end.getDate()}/${end.getFullYear()}`;
  }

  constructor() {}

  ngOnInit(): void {}
}
