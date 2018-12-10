/*
import Component
Component class used to create the Building Block 
of Angular Application

import ViewChildren
ViewChildren used to get the Reference of 
childComponent to parentComponent

import QueryList
QueryList picks the all the occurances and makes the 
map object
*/
import { Component,ViewChildren,QueryList } 
                                from "@angular/core";
import { childComponent } from "./child.component";
//use Component
@Component({
    selector:"parent",
    templateUrl:"./parent.component.html"
})
//export the class
export class parentComponent{
    @ViewChildren(childComponent)
    private _child:QueryList<childComponent> = 
                                        new QueryList();
    /*
        - in above code we have the following flow

        @QueryList picks childComponent occurances 
         from external template
        @QueryList makes the map object
        @QueryList stores the "map object" into 
         "reference"
        @_child is the Reference contain map object
    */
    /*
        - as a angular developer we can't 
          work with map
        - so, we must convert map to Array
        - to convert above data structure we must 
          use below life cycle hook
    */
    private my_array:Array<any>=[];
    ngAfterViewInit(){
        this.my_array = this._child.toArray();
    };
    public clickMe():any{
        for(var i:number=0;i<this.my_array.length;i++){
            this.my_array[i].var_one = 
                "Message From Parent Component...!";
            this.my_array[i].var_two = 
                "Marquee Text Feom Parent Component...!";
        };
    };
};