import { Component, ViewChild, Inject, Input } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { map } from 'rxjs/operators/map';

@Component({
    selector: 'my-input-comp',
    templateUrl: `input.component.html`,
    styleUrls: ['input.component.css']
  })
export class InputComponent {
    @Input() compValue: string;
    @Input() compCaption: string;
    @Input() index: number;
    
    constructor() {
    }
}
