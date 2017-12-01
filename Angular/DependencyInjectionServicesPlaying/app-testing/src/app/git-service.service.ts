import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import { GitProfile } from './git.profile'
import 'rxjs/add/operator/toPromise'

const url = 'https://api.github.com/users/nakov';


@Injectable()

export class GitService{
  
  
  constructor(private http : HttpClient) { 
      
    }
    
    getProfileInfo() : Observable<GitProfile>{
      
      return this.http.get<GitProfile>(url);
  }

  getProfileInfoPromise(): Promise<GitProfile>{
    return this.http.get<GitProfile>(url)
    .toPromise();
  }
 

}
