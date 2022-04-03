import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {DataInterface} from "../data.interface";
import {DataService} from "../data.service";

import {cloneDeep, forEach} from 'lodash-es';
import {animate, animation, style, transition, trigger, useAnimation} from "@angular/animations";

export const fadeIn = animation([
    style({opacity: 0}),
    animate('500ms', style({opacity: 1}))
])
/*export const translateIn = animation([
    style({opacity: 0, transform: "translate(0, 0)"}),
    animate('2s', style({opacity: 1, transform: "translate(0, 0)"}))
])*/

@Component({
    selector: 'app-slider-carousel',
    templateUrl: './slider-carousel.component.html',
    styleUrls: ['./slider-carousel.component.scss'],
    animations : [
        trigger('carouselAnimation', [
            transition('void=>*' , [
                useAnimation(fadeIn)
            ])
        ])
    ]
})
export class SliderCarouselComponent implements OnInit {
    sliderList: DataInterface[] = [];
    newData: any;
    //@ViewChild('slider') slider: ElementRef;
    currentIndex = 0;
    items='items';

    constructor(private data: DataService) {
    }

    ngOnInit(): void {
        this.data.getList().subscribe((data: any) => {
            this.sliderList = data.carouselData;
            this.newData = cloneDeep(this.sliderList);
        });

         setInterval(() => {
           this.nextClick()
         }, 2000)
    }


    prevClick() {
        //this.items = 'items next';
        if (this.currentIndex > 0) {
            this.newData.unshift(this.newData[this.newData.length - 1]);
            this.newData.pop();
            this.currentIndex--;
        } else {
            this.currentIndex = this.sliderList.length - 1;
            this.prevClick()
        }
    }

    nextClick() {
        //this.items = 'items prev';
        if (this.currentIndex <= this.sliderList.length - 1) {
            this.newData.push(this.newData[0]);
            this.newData.shift();
            this.newData[0];
            this.currentIndex++;

        } else {
            this.currentIndex = 0;
            this.nextClick();
        }
    }


}
