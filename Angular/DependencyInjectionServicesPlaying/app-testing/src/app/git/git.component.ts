import { Component, OnInit, Injectable } from '@angular/core';
import { GitService } from './../git-service.service'

@Component({
  selector: 'app-git',
  templateUrl: './git.component.html',
  styleUrls: ['./git.component.css']
})


export class GitComponent implements OnInit {

  profileData : Object;

  constructor(
    private gitService : GitService
  ) { }

  ngOnInit(): void {

    this.gitService.getProfileInfo()
    .subscribe(data =>{
      this.profileData = data;
    },err=>{
     console.log(`Something went wrong: ${JSON.stringify(err)}`) 
    })
  }


}
