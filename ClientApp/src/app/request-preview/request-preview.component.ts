import { Component, OnInit, Input } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { RequestGroup } from "../models/request-group";
import { RequestStatus } from "../models/request-status.enum";
import { AppService } from "../app.service";

@Component({
  selector: "app-request-preview",
  templateUrl: "./request-preview.component.html",
  styleUrls: ["./request-preview.component.scss"],
})
export class RequestPreviewComponent implements OnInit {
  @Input() requestGroup: RequestGroup;
  @Input() managerView: boolean = false;
  public form: FormGroup;

  get requestStatuses() {
    return RequestStatus;
  }

  get sortedRequests() {
    return this.requestGroup.requests.sort((a, b) => {
      return <any>new Date(a.date) - <any>new Date(b.date);
    });
  }

  public onSubmit() {
    this.requestGroup.status = this.form.value.status;
    this.appService.patchRequestGroup(this.requestGroup).subscribe();
  }

  constructor(private fb: FormBuilder, private appService: AppService) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      status: [this.requestGroup.status, [Validators.required]],
    });
  }
}
