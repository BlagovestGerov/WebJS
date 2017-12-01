import { Component, OnInit, Injectable } from '@angular/core';
import { GitService } from './../git-service.service'
import { GitProfile} from './../git.profile'

@Component({
  selector: 'app-git',
  templateUrl: './git.component.html',
  styleUrls: ['./git.component.css'],
  providers: [ GitService]
})


export class GitComponent implements OnInit {

  profileData : GitProfile;

  constructor(
    private gitService : GitService
  ) { }

  ngOnInit(): void {

    // this.gitService.getProfileInfoPromise()
    // .then(data => this.profileData = new GitProfile(data.login, data.avatar_url, data.location))
    // .catch(err => {
    //   console.warn(`ERR: ${err.message}`);
    // })


    this.gitService.getProfileInfo()
    .subscribe(data =>{
      this.profileData = new GitProfile(data.login, data.avatar_url, data.location);
    },err=>{
     console.log(`Something went wrong: ${JSON.stringify(err)}`) 
    })
  }


}
