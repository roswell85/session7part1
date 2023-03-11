import { Component } from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  items: Array<MenuItem> = [
    {label:'home',routerLink:'/authorized/dashboard'}
  ];

}
