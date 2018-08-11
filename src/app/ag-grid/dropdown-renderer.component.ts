import {Component, AfterViewInit, ViewChild, ViewContainerRef} from "@angular/core";

import {ICellRendererAngularComp, ICellEditorAngularComp} from "ag-grid-angular";

@Component({
    selector: 'params-cell',
    template: `<div><select #input [(ngModel)]="value" (change)="updateCellValue()">
            <option>2008</option>
            <option>2011</option>
            <option>2018</option>
        </select>
        <div>{{is2018}}</div>
        <div *ngIf="is2018" style="color:red"> You have chosen 2018 </div> </div>
    `
})
export class DropDownRendererComponent implements ICellEditorAngularComp, ICellRendererAngularComp, AfterViewInit {
    private params: any;
    public value: string;
    public is2018 = false;


    @ViewChild('input', {read: ViewContainerRef}) public container;
    // public happy = '';

    // dont use afterGuiAttached for post gui events - hook into ngAfterViewInit instead for this
    ngAfterViewInit() {
        var KEY_UP = 38;
        var KEY_DOWN = 40;
        var KEY_LEFT = 37;
        var KEY_RIGHT = 39;

        this.params.colDef.suppressKeyboardEvent = function(params) {
            console.log('cell is editing: ' + params.editing);
            console.log('keyboard event:', params.event);
        
            // return true (to suppress) if editing and user hit up/down keys
            var keyCode = params.event.keyCode;
            var gridShouldDoNothing = (keyCode===KEY_UP || keyCode===KEY_DOWN || keyCode===KEY_LEFT || keyCode===KEY_RIGHT);
            return gridShouldDoNothing;
        }


        // setTimeout(() => {
        //     this.container.element.nativeElement.focus();
        // })
    }

    updateCellValue() {
        console.log(this.params.getValue() + " new: " + this.value);
        this.params.setValue(this.value);
    }

    refresh(): boolean {
        return false;
    }

    agInit(params: any): void {
        this.params = params;
        this.value = this.params.value;

        if(this.value === "2018") {
            this.is2018 = true;
            // this.params.node.setRowHeight(79);
            // this.params.api.resetRowHeights();
        }

        setTimeout(() => {
            this.params.api.resetRowHeights();
        })
    }

    getValue(): any {
        return this.value;
    }

    isPopup(): boolean {
        return true;
    }

    // onClick(happy: boolean) {
    //     this.params.api.stopEditing();
    // }

    onKeyDown(event): void {
        let key = event.which || event.keyCode;
        if (key == 37 ||  // left
            key == 39) {  // right
            event.stopPropagation();
        }
    }
}