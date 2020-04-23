import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  itemcounter: number;
  projecttext: string = "Angular project";
  projects = [];

  constructor() { }

  ngOnInit(): void {
    this.itemcounter = this.projects.length;
  }

  addItem(){
    this.projects.push(this.projecttext);
    this.projecttext = "";
    this.itemcounter = this.projects.length;
  }

  removeItem(i) {
    // this.projects.pop();
    this.projects.splice(i, 1);
    this.itemcounter = this.projects.length;
  }

}
