import { Component } from "@angular/core";
@Component({
    selector:"child",
    templateUrl:"./child.component.html"
})
export class childComponent{
    public var_one:string;
    public var_two:string;
    constructor(){
        this.var_one = "Message From Child Component !!!";
        this.var_two = "Marquee Text From Child Component !!!";
    };
};