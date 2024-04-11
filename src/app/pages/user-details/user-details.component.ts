import { Component, OnInit } from '@angular/core';
import { User, UserService } from '../../services/user.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';


@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [MatIconModule,RouterLink,MatProgressBarModule],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent implements OnInit{
  user!:User;
  constructor(private userService: UserService , private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if(params['id'] && !isNaN(params['id'])){
        this.userService.getUserById(params['id']).subscribe((user:any) => {
          this.user = user.data;
        });
      }

    });

  }
}
