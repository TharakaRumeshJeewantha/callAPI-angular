
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
 
@Injectable({providedIn: 'root'})
export class HelperService {
 
  url = "http://172.20.10.63:8085/v1.0/MasterData";
 
  constructor(private http: HttpClient) {
    
  }
  getBranch() {
    return this.http.get(this.url+'/BranchTypes')
  }
}