import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms"; // <-- NgModel lives here
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
//import { DialogModule } from '@progress/kendo-angular-dialog';
import { VirtualScrollModule } from 'angular2-virtual-scroll';
import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { ParamsRendererComponent } from './ag-grid/params-renderer.component';
import { DropDownRendererComponent } from './ag-grid/dropdown-renderer.component';
import { AgGridComponent } from './ag-grid/ag-grid.component';
import { KendoGridComponent } from './kendo-grid/kendo-grid.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { EditService } from './kendo-grid/edit.service';
import { InputComponent } from './shared/input-component/input.component';
import { DropDownComponent } from './shared/dropdown-component/dropdown.component';
import { ExtraComponent } from './shared/extra-component/extra.component';
//import 'ag-grid-enterprise';

const appRoutes: Routes = [
  { path: 'ag-grid', component: AgGridComponent },
  { path: 'kendo-grid',      component: KendoGridComponent },
  { path: '', component: AppComponent }
];

@NgModule({
  declarations: [
    ParamsRendererComponent,
    DropDownRendererComponent,
    KendoGridComponent,
    AgGridComponent,
    InputComponent,
    DropDownComponent,
    ExtraComponent,
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    DropDownsModule,
    VirtualScrollModule,
    //DialogModule,
    HttpClientModule,
    GridModule,
    AgGridModule.withComponents([ParamsRendererComponent, DropDownRendererComponent])
  ],
  providers: [EditService],
  bootstrap: [AppComponent]
})
export class AppModule { }


