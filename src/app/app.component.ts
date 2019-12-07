import { Component,OnInit } from '@angular/core';
import { Router, NavigationStart,NavigationEnd, ActivatedRoute } from '@angular/router';
import { Location, PopStateEvent } from "@angular/common";
import { NgxUiLoaderService } from 'ngx-ui-loader'; // Import NgxUiLoaderService
<<<<<<< HEAD
import { AuthService } from './auth.service';
=======
import { AuthService } from './authors/services/auth.service';
>>>>>>> c18b37736b56acce381c082e607dcb5581038d32
// import * as $ from "jquery";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'one-water-blog';
  showLogin: boolean = false;
  //videoblog: boolean = true;
  private lastPoppedUrl: string;
  private yScrollStack: number[] = [];

<<<<<<< HEAD
  constructor(public router: Router, private location: Location,public auth:AuthService, public route:ActivatedRoute) {

    var hash = window.location.hash;
    if(hash){
      console.log(hash,'hash value');

      let fetch_token=hash.split('#');

      let access_token=fetch_token[1].split('&');
      console.log(access_token,'access token')
      if(access_token[0]){
          this.auth.isLoggedIn=true;
          this.auth.access_token=access_token[0].split('=')[1];
      }
    }

// this.blogauth.checkLocalStorage();
=======
  constructor(public router: Router, private location: Location, public blogauth:AuthService) {

this.blogauth.checkLocalStorage();
>>>>>>> c18b37736b56acce381c082e607dcb5581038d32
    this.location.subscribe((ev:PopStateEvent) => {
      this.lastPoppedUrl = ev.url;
  });
  this.router.events.subscribe((ev:any) => {
      if (ev instanceof NavigationStart) {
          if (ev.url != this.lastPoppedUrl)
              this.yScrollStack.push(window.scrollY);
      } else if (ev instanceof NavigationEnd) {
          if (ev.url == this.lastPoppedUrl) {
              this.lastPoppedUrl = undefined;
              window.scrollTo(0, this.yScrollStack.pop());
          } else
              window.scrollTo(0, 0);
      }
  });

}
  ngOnInit() {
<<<<<<< HEAD
=======


>>>>>>> c18b37736b56acce381c082e607dcb5581038d32
    this.router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (event['url'] == '/login' || event['url'] == '/dashboard' ||event['url'] == '/thankyou-author'  ||event['url'] == '/thankyou-employer' || event['url'].includes('/onewaterjobs/employer/')  || event['url'].includes('/onewaterblog/author-admin')|| event['url'].includes('/user-admin/')) {
          this.showLogin = false;
        } else {
          this.showLogin = true;
        }
      }
    });
}
}
