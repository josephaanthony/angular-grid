import { Component, ViewChild, Inject, Input } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { map } from 'rxjs/operators/map';

@Component({
    selector: 'extra-comp',
    templateUrl: `extra.component.html`,
    styleUrls: ['extra.component.css']
  })
export class ExtraComponent {
    @Input() compValue: string;
    @Input() compCaption: string;
    @Input() index: number;

    public powers = [
        [ 'Power11', 'Power12', 'Power13'],
        [ 'Power21', 'Power22', 'Power23'],
        [ 'Power31', 'Power32', 'Power33']
    ];

    constructor() {
    }
}
