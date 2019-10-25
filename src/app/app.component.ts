
import { Component } from '@angular/core';
import { HelperService } from './api.service';
import {Branch} from './Branch'
import {HttpClient} from '@angular/common/http';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[HelperService]
})
export class AppComponent {
  title = 'swagger';
  branches : Branch[];
 
  constructor(public http: HttpClient, private helperService: HelperService){
  }
 
  ngOnInit(): void {
    this.getBranch();
  }
  getBranch() {
    this.helperService
    .getBranch()
    .subscribe((data:Branch[]) => {
      console.log(data);
      this.branches = data;
    });
  }
}