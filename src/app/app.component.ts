import { Component, ViewChild } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import "ag-grid-enterprise";
import { ParamsRendererComponent } from "./ag-grid/params-renderer.component";
import { DropDownRendererComponent } from "./ag-grid/dropdown-renderer.component";
declare var MockServer;
declare var ViewportDatasource;

@Component({
  selector: "app-root",
  templateUrl: 'app.component.html'
})
export class AppComponent {
}
