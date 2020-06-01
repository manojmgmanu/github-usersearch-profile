import { Component, OnInit } from '@angular/core';
import { GithubUser } from '../github.user';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {

  username: string;
  userObject: any;
  hide=false;
  constructor(private service: GithubUser) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.service.getUserDetails(this.username).subscribe(data => {
      this.userObject = data;
      
      this.hide=true;
      console.log(this.userObject)
      
    })
  }

}
