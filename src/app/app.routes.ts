import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UsersComponent } from './pages/users/users.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';
import { DefualHomeComponent } from './pages/defual-home/defual-home.component';


export const routes: Routes = [
    
        { path: 'home', component: HomeComponent , children:[
            { path: 'users', component: UsersComponent },
            { path: 'userdetail/:id', component: UserDetailsComponent },
            { path: 'defualt', component: DefualHomeComponent  },
            { path: '',   redirectTo: '/home/defualt', pathMatch: 'full' },
        ] },
        { path: '',   redirectTo: '/home/defualt', pathMatch: 'full' },
        

];
