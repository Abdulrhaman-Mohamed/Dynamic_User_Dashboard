import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SideBarComponent } from '../../components/side-bar/side-bar.component';
import { NavHeaderComponent } from '../../components/nav-header/nav-header.component';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, SideBarComponent , RouterLink , RouterLinkActive , NavHeaderComponent , MatIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  ngOnInit(): void {
    console.log('HomeComponent');
    
  }
  
}
