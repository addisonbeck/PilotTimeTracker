import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-request",
  templateUrl: "./request.component.html",
  styleUrls: ["./request.component.css"],
})
export class RequestComponent implements OnInit {
  startDate = new FormControl({ value: "", disabled: true }, [
    Validators.required,
  ]);
  endDate = new FormControl({ value: "", disabled: true });
  endDateDisabled: boolean = true;

  constructor() {}

  ngOnInit(): void {
    this.startDate.valueChanges.subscribe(() => {
      this.endDateDisabled = this.startDate.errors != null;
      console.log(this.endDateDisabled);
    });
  }
}
