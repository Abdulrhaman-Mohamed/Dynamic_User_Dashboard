import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserListComponent } from '../../components/user-list/user-list.component';
import {  UserService } from '../../services/user.service';
import { PageEvent } from '@angular/material/paginator';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CachingRequestService } from '../../services/caching-request.service';
import {MatProgressBarModule} from '@angular/material/progress-bar';


@Component({
  selector: 'app-users',
  standalone: true,
  imports: [UserListComponent,MatProgressBarModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: CachingRequestService, multi: true }
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit , OnDestroy{
  data: any;
  dataSubscription!: any;
  page!:number;

  constructor(private userService:UserService) { }



  ngOnInit() {
    this.fetchUsers();
  }

  getPageEvent(event: PageEvent) {    
    this.page = ++ event.pageIndex;
    this.fetchUsers();
  }

  fetchUsers() {
    this.dataSubscription = this.userService.getUsers(this.page).subscribe({
      next: (users:any) => {
        this.data = users;                
      },
      error: (error) => {
        console.error(error);
      }
    });
  }


  ngOnDestroy(): void {
    if(this.dataSubscription) this.dataSubscription.unsubscribe();
  }
}
