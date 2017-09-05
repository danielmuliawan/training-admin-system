import { Component, Input, OnInit, AfterViewChecked } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {FormControl, Validators} from '@angular/forms';
import { MdDatepickerModule } from '@angular/material';

import * as $ from 'jquery';
@Component({
    selector: 'period-form',
    templateUrl: 'period.component.html',
    styleUrls: ['../app.component.css']
})

export class PeriodComponent {

    waktu: any={
        "start":"",
        "end":""
    };

    ngAfterViewChecked(){
        
    }
}
