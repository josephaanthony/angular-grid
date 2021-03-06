import { Component, ViewChild, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { VirtualScrollComponent } from 'angular2-virtual-scroll';

declare var make_sticky;

@Component({
    selector: 'my-virtual-grid',
    templateUrl: `virtual-grid.component.html`,
    styleUrls: ['virtual-grid.component.css']
  })
export class VirtualGridComponent implements OnInit {
    public model = {
        id: 1,
        name: 'Test',
        alterEgo: 'Ego'
    };
    public models = [];
    public idCounter: number;
    
    @ViewChild(VirtualScrollComponent)
    private virtualScroll: VirtualScrollComponent;

    constructor() {
        for (let index = 0; index < 2000; index++) {
            this.models.push({... this.model,
                id: index, name: this.model.name + ' ' + index, alterEgo: this.model.alterEgo + ' ' + index,
                power: 'Power' + ((index % 3) + 1) + ( Math.floor(Math.random() * 3) + 1) } );
        }
        this.idCounter = this.models.length;
    }

    public ngOnInit() {
        make_sticky('#sticky-header');
    }

    public incrementCounter() {
        return this.idCounter ++;
    }

    public findIndex(model) {
        return this.models.findIndex(m => m.id === model.id);
    }

    public findModel(id) {
        return this.models.find(m => m.id === +id);
    }

    public scrollTo(id) {
        //this.virtualScroll.items = this.models;
        this.virtualScroll.scrollInto(this.findModel(id));
    }
}
