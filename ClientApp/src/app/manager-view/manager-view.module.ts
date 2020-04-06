import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ManagerViewComponent } from "src/app/manager-view/manager-view.component";

@NgModule({
  declarations: [ManagerViewComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: "", component: ManagerViewComponent, pathMatch: "full" },
    ]),
  ],
  providers: [],
})
export class ManagerViewModule {}
