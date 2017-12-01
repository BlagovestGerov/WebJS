import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'

@Injectable()

export class GitService{
  
  
  constructor(private http : HttpClient) { 
      
    }
    
    getProfileInfo() : Observable<Object>{
      const url = 'https://api.github.com/users/nakov';
      
      return this.http.get<GitProfile>(url);

    

      interface GitProfile {
        login : string;
        avatar_url : string;
        location : string
      }
  }
 

}
