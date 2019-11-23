import { Component, OnInit } from '@angular/core';
import { AuthService } from '../authors/services/auth.service';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-blog-website',
  templateUrl: './blog-website.component.html',
  styleUrls: ['./blog-website.component.scss']
})
export class BlogWebsiteComponent implements OnInit {
  showHeader = true ;
  constructor(public auth:AuthService,public router: Router) { }

  ngOnInit() {
    //this.auth.checkLocalStorage();
    this.router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (event['url'] == '/thankyou-author'  ||event['url'] == '/thankyou-employer'||event['url'] == '/onewaterblog/author-reg') {
          this.showHeader = false;
        } else {
          this.showHeader = true;
        }
      }
    });
  }
}
