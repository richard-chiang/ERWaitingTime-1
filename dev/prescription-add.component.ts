/**
 * Created by Joy on 2016-04-01.
 */
import {Component, OnInit} from 'angular2/core';
import {HTTPService} from './http.service';
import {Prescription} from "./prescription";
import {CanActivate} from "angular2/router";
import {isLoggedin} from "./is-loggedin";

@Component({
    selector:'prescription',
    templateUrl: 'templates/prescription.component.html',
    providers:[HTTPService]
})

@CanActivate(() => isLoggedin())
export class PrescriptionAddComponent{

    prescriptions: Prescription[] = [];
    reportIds: number[];

    constructor(private httpService: HTTPService){
    }

    ngOnInit() {
        this.getReportIds();
    }

    parsePrescription(json){
        json.forEach( item => {
            this.addPrescription(item.pname,
                item.amount,
                item.rid);
        })
    }

    addPrescription(pname: string, amount: number, rid:number){
        let prescription = new Prescription(pname,amount,rid);
        this.prescriptions.push(prescription);
    }

    removePrescription(prescription:Prescription){
        var index = this.prescriptions.indexOf(prescription);
        this.prescriptions.splice(index,1);
    }

    postPrescription(pname, amount, rid){
        this.httpService.post(
            {
                pname: pname,
                amount: amount,
                rid: rid
            },
            'prescription'
        ).subscribe(
            data => console.log(data),
            err => alert(err),
            () => console.log("complete")
        );
    }
    getReportIds() {
        this.reportIds = [];
        this.httpService.getRQuery().subscribe(
            data => this.parseReportIds(data),
            err => alert(err),
            () => console.log("complete")
        );
    }

    parseReportIds(json){
        json.forEach( item => {this.reportIds.push(item.rid)})
    }
}