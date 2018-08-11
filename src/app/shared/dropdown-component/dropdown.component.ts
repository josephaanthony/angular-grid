import { Component, ViewChild, Inject, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { map } from 'rxjs/operators/map';

@Component({
    selector: 'my-dropdown-comp',
    templateUrl: `dropdown.component.html`,
    styleUrls: ['dropdown.component.css']
  })
export class DropDownComponent {
    @Input() compValue: string;
    @Input() compCaption: string;
    @Input() index: number;

    @Output() compValueOut = new EventEmitter<string>();

    public powers = [
        [ 'Power11', 'Power12', 'Power13'],
        [ 'Power21', 'Power22', 'Power23'],
        [ 'Power31', 'Power32', 'Power33']
    ];

    constructor() {
    }
}
