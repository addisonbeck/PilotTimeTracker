import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { NavMenuComponent } from "./nav-menu/nav-menu.component";
import { HomeComponent } from "./home/home.component";
import { RequestGridComponent } from "./request-grid/request-grid.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material-module";
import { RequestComponent } from "./request/request.component";
import { ManagerQueueComponent } from "./manager-queue/manager-queue.component";
import { RequestPreviewComponent } from './request-preview/request-preview.component';
import { EnumToArrayPipe } from "./pipes/enum-to-array.pipe";
import { SpacedStringPipe } from "./pipes/space-string.pipe";

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    RequestGridComponent,
    RequestComponent,
    ManagerQueueComponent,
    RequestPreviewComponent,
    EnumToArrayPipe,
    SpacedStringPipe
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: "ng-cli-universal" }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent, pathMatch: "full" },
      {
        path: "request",
        component: RequestComponent,
      },
      {
        path: "manager-queue",
        component: ManagerQueueComponent,
      },
    ]),
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  exports: [RequestGridComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
