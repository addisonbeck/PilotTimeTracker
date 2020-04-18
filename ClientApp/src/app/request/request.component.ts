import { Component, OnInit } from "@angular/core";
import {
  Validators,
  FormBuilder,
  FormGroup,
  ValidatorFn,
  ValidationErrors,
  FormArray,
} from "@angular/forms";

import { Guid } from "guid-typescript";
import { Request } from "../models/request";
import { AppService } from "../app.service";
import { RequestGroup } from "../models/request-group";
import { RequestStatus } from "../models/request-status.enum";

@Component({
  selector: "app-request",
  templateUrl: "./request.component.html",
  styleUrls: ["./request.component.scss"],
})
export class RequestComponent implements OnInit {
  form: FormGroup;
  dateFilter = (date: Date) => date.getDay() == 0;
  private requestGroupGuid: string = Guid.raw();

  get dateRangeGroup() {
    return this.form.get("dateRangeGroup");
  }

  get dateRange() {
    return this.dateRangeGroup.get("dateRange");
  }

  get requestsGroup() {
    return this.form?.controls.requestsGroup;
  }

  get requests() {
    return <FormArray>this.requestsGroup?.get("requests");
  }

  get dateRangeErrorMessage() {
    if (this.dateRange.hasError("required")) {
      return "You must enter a value";
    }

    if (this.dateRange.hasError("minOneWeek")) {
      return "Please select at least one week";
    }

    return this.dateRange.hasError("maxTwoWeeks")
      ? "Please select no more than 2 weeks per request"
      : "";
  }

  get numberOfDays(): Number {
    if (this.form) {
      const startDate = new Date(this.dateRange.value.begin);
      const endDate = new Date(this.dateRange.value.end);
      return (endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24);
    }
  }

  get requestControls() {
    let requestGroups: FormGroup[] = [];

    let i = 0;
    while (i < this.numberOfDays) {
      let request: Request = {
        id: Guid.raw(),
        date: new Date(
          this.dateRange.value.begin.getTime() + 1000 * 60 * 60 * 24 * i
        ),
        hours: 0,
        requestGroupId: this.requestGroupGuid,
      };

      const group = this.fb.group(request);
      requestGroups.push(group);

      i++;
    }

    return requestGroups;
  }

  private maxTwoWeeks: ValidatorFn = (): ValidationErrors | null => {
    return this.numberOfDays > 15 ? { maxTwoWeeks: true } : null;
  };

  private minOneWeek: ValidatorFn = (): ValidationErrors | null => {
    return this.numberOfDays < 7 ? { minOneWeek: true } : null;
  };

  private atLeastOneRequired: ValidatorFn = (): ValidationErrors | null => {
    return this.requests?.controls.filter((x) => x.value.hours > 0).length < 1
      ? { atLeastOneRequired: true }
      : null;
  };

  public rangeChanged(range: any) {
    this.dateRange.patchValue(range);
  }

  public onSubmit() {
    const requestGroup: RequestGroup = {
      id: this.requestGroupGuid,
      dateRequested: new Date(),
      userId: 90650,
      managerId: 90593,
      status: RequestStatus.Pending,
      requests: this.form.value.requestsGroup.requests,
    };

    this.appService.postRequestGroup(requestGroup).subscribe();
  }

  constructor(private fb: FormBuilder, private appService: AppService) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      id: this.requestGroupGuid,
      dateRangeGroup: this.fb.group({
        dateRange: [
          "",
          [Validators.required, this.maxTwoWeeks, this.minOneWeek],
        ],
      }),
      requestsGroup: this.fb.group({
        requests: this.fb.array([], { validators: [this.atLeastOneRequired] }),
      }),
    });

    this.dateRange.valueChanges.subscribe(() => {
      if (this.dateRange.value) {
        this.requests.clear();
        this.requestControls.forEach((requestControl) => {
          this.requests.push(requestControl);
        });
      }
    });
  }
}
