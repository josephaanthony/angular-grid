import { Component, ViewChild } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import "ag-grid-enterprise";
import { ParamsRendererComponent } from "./params-renderer.component";
import { DropDownRendererComponent } from "./dropdown-renderer.component";
declare var MockServer;
declare var ViewportDatasource;

@Component({
  selector: "ag-grid",
  template: `Test Me: <div style="height: 600px; padding-top: 26px; box-sizing: border-box;">
  <ag-grid-angular
  #agGrid
  style="width: 100%; height: 100%;"
  id="myGrid"
  [rowData]="rowData"
  class="ag-theme-balham"
  [columnDefs]="columnDefs"
  [defaultColDef]="defaultColDef"
  [enableColResize]="true"
  [rowModelType]="rowModelType"
  [toolPanelSuppressPivotMode]="true"
  [toolPanelSuppressValues]="true"
  [toolPanelSuppressRowGroups]="true"
  [toolPanelSuppressSideButtons]="true"
  [cacheBlockSize]="cacheBlockSize"
  [getRowNodeId]="getRowNodeId"
  [frameworkComponents]="frameworkComponents"
  [animateRows]="true"
  [icons]="icons"
  [singleClickEdit]="true"
  (gridReady)="onGridReady($event)"
  ></ag-grid-angular>
</div>
`
})
export class AgGridComponent {

  private gridApi;
  private gridColumnApi;
  private rowData: any[];

  private columnDefs;
  private defaultColDef;
  private rowModelType;
  private cacheBlockSize;
  private maxBlocksInCache;
  private getRowNodeId;
  private icons;
  private frameworkComponents;

  constructor(private http: HttpClient) {
    this.frameworkComponents = {
      paramsRenderer: ParamsRendererComponent,
      dropDownRenderer: DropDownRendererComponent
    }

    this.columnDefs = [
      { field: "id" },
      {
        field: "athlete",
        width: 150
      },
      { field: "age" },
      { field: "country", cellRenderer: "paramsRenderer"},
      { field: "year", cellRenderer: "dropDownRenderer", autoHeight: true },
      { field: "sport" },
      { field: "gold" },
      { field: "silver" },
      { field: "bronze" }
    ];
    this.defaultColDef = {
      width: 100,
      suppressFilter: true,
      //editable: true
    };
    this.rowModelType = "serverSide";
    this.cacheBlockSize = 100;
    this.maxBlocksInCache = 2;
    this.getRowNodeId = function(item) {
      return item.id;
    };
    this.icons = {
      groupLoading:
        '<img src="https://raw.githubusercontent.com/ag-grid/ag-grid-docs/master/src/javascript-grid-server-side-model/spinner.gif" style="width:22px;height:22px;">'
    };
  }


  onGridReady(params) {
    // this.gridApi = params.api;
    // this.gridColumnApi = params.columnApi;
    let data: any = [];

    // params.api.gridOptionsWrapper.gridOptions.getRowHeight = function(params) {
    //     if (params.data.year === "2018" ) {
    //         return 69;
    //     } else {
    //         return 49;
    //     }
    // }

    for (let index = 0; index < 200; index++) {
      data.push({id: index, "athlete":"Michael Phelps","age":23,"country":"United States","year":2008,"date":"24/08/2008","sport":"Swimming","gold":8,"silver":0,"bronze":0,"total":8})
    }

    var dataSource = {
      getRows: function(params) {
        var startRow = params.request.startRow;
        var endRow = params.request.endRow;
        console.log("asking for " + startRow + " to " + endRow);

        var rowsThisPage = data.slice(startRow, endRow);
        var lastRow = -1;
        if (data.length <= params.request.endRow) {
          lastRow = data.length;
        }
        params.successCallback(rowsThisPage, lastRow);
      }
    };
    params.api.setServerSideDatasource(dataSource);
    //this.rowData = data;
  }
}
