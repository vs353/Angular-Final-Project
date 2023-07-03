import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LogService } from './services/log.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';

  constructor(private log:LogService,private router:Router,
    private userService: UserService){
          
  }
  ngAfterViewInit(){
    if(this.userService.loggedUserDetails.type == 'admin'){
                
      this.router.navigate(['admin/home'])
   }
   else{
    this.router.navigate(['user/home']);
   }
  }

}
