import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getElementDepthCount } from '@angular/core/src/render3/state';
declare var $: any;

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  showSubCat = false;
  currentCategory = '';

  blogcards;
  featuredblog;

  categories = [
    {
      'img': 'assets/img/icons/water.svg',
      'name': 'Water',
      'subcat': [
        {
          'subname': 'Distribution System',
          'subimg': 'assets/img/icons/distribution.svg'
        },
        {
          'subname': 'Water Conservation',
          'subimg': 'assets/img/icons/conserve.svg'
        },
        {
          'subname': 'Drinking Water Quality',
          'subimg': 'assets/img/icons/drink.svg'
        },
        {
          'subname': 'Water Treatment & Opreations',
          'subimg': 'assets/img/icons/treatment.svg'
        },
        {
          'subname': 'Desalination',
          'subimg': 'assets/img/icons/desalination.svg'
        }
      ]
    },
    {
      'img': 'assets/img/icons/waste-water.svg',
      'name': 'Waste Water',
      'subcat': [
        {
          'subname': 'Biosolids',
          'subimg': 'assets/img/icons/lab.svg'
        },
        {
          'subname': 'Collection Systems',
          'subimg': 'assets/img/icons/water-tank.svg'
        },
        {
          'subname': 'Water Reuse and Resource Recovery',
          'subimg': 'assets/img/icons/reuse.svg'
        },
        {
          'subname': 'Odour and Corrosion Management',
          'subimg': 'assets/img/icons/smell.svg'
        },
        {
          'subname': 'Wastewater Treatment & /Operations',
          'subimg': 'assets/img/icons/sewage.svg'
        }

      ]
    },
    {
      'img': 'assets/img/icons/storm.svg',
      'name': 'Storm Water',
      'subcat': [
        {
          'subname': 'Watershed',
          'subimg': 'assets/img/icons/lake.svg'
        },
        {
          'subname': 'Hydrology',
          'subimg': 'assets/img/icons/molecule.svg'
        }
      ]
    },
    {
      'img': 'assets/img/icons/research.svg',
      'name': 'Innovation & Research',
      'subcat': [
        {
          'subname': 'Water Science & Research',
          'subimg': 'assets/img/icons/test.svg'
        },
        {
          'subname': 'Students',
          'subimg': 'assets/img/icons/graduate.svg'
        },
        {
          'subname': 'Young Professionals',
          'subimg': 'assets/img/icons/scientist.svg'
        }

      ]
    },
    {
      'img': 'assets/img/icons/sustainable.svg',
      'name': 'Sustainable Development',
      'subcat': [
        {
          'subname': 'Climate Change',
          'subimg': 'assets/img/icons/climate.svg'
        },
        {
          'subname': 'Resiliency',
          'subimg': 'assets/img/icons/resilent.svg'
        },
        {
          'subname': 'Energy',
          'subimg': 'assets/img/icons/energy.svg'
        },
        {
          'subname': 'Regional Actvities/ Case Studies',
          'subimg': 'assets/img/icons/case.svg'
        }
      ]

    },
    {
      'img': 'assets/img/icons/finance.svg',
      'name': 'Management & Finance',
      'subcat': [
        {
          'subname': 'Workforce Management',
          'subimg': 'assets/img/icons/team.svg'
        },
        {
          'subname': 'Asset Management',
          'subimg': 'assets/img/icons/management.svg'
        },
        {
          'subname': 'Utility Management',
          'subimg': 'assets/img/icons/settings.svg'
        },
        {
          'subname': 'Financing',
          'subimg': 'assets/img/icons/profits.svg'
        }, {
          'subname': 'Construction Management',
          'subimg': 'assets/img/icons/mechanic.svg'
        }, {
          'subname': 'Leadership',
          'subimg': 'assets/img/icons/leadership.svg'
        }
      ]
    },
    {
      'img': 'assets/img/icons/regulatory.svg',
      'name': 'Legistative/ Regulatory',
      'subcat': [
        {
          'subname': 'Goverment Affairs',
          'subimg': 'assets/img/icons/government.svg'
        },
        {
          'subname': 'Safety and Security',
          'subimg': 'assets/img/icons/padlock.svg'
        }
      ]
    },
  ]

  SubCategories = [];
  showSubCategories(index) {
    this.showSubCat = true;
    this.currentCategory = this.categories[index].name;
    this.SubCategories = [];
    this.SubCategories = this.categories[index].subcat;
    console.log(this.SubCategories);
    document.querySelector(".categories-card")['style'].display = "none";
    document.querySelector(".subcategories-card")['style'].display = "block";
  }
  backToCategories() {
    document.querySelector(".categories-card")['style'].display = "block";
    document.querySelector(".subcategories-card")['style'].display = "none";
  }

  //owl carousel settings
  carouselOptions = {
    margin: 25,
    nav: true,
    dots: false,
    stagePadding: 30,
    navText: ['<img src="assets/img/icons/prev.svg" style="width:30px;">', '<img src="assets/img/icons/next.svg" style="width:30px;">'],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
        stagePadding: 50
      },
      1200: {
        items: 3,
      },
      1500: {
        items: 3,
      }
    }
  }

  carouselOptionsAuthors = {
    margin: 25,
    nav: true,
    dots: false,
    stagePadding: 50,

    navText: ['<img src="assets/img/icons/prev.svg" style="width:30px;">', '<img src="assets/img/icons/next.svg" style="width:30px;">'],
    responsiveClass: true,
    responsive: {

      0: {
        items: 1,
        nav: false,
        stagePadding: 10,
      },
      420: {
        items: 2,
        nav: true
      },
      800: {
        items: 3,
        nav: true
      },
      991: {
        items: 3,
        nav: true
      },
      1200: {
        items: 4,
        nav: true
      }

    }
  }

authors;

  constructor(public http: HttpClient) { }

  ngOnInit() {

    
    let el = document.getElementById('sidebar');
    let extraHeight = $(window).height() * 0.8;
    let stickyTop = $(el).offset().top + extraHeight;
    let stickyHeight = $(el).height();
    // let sideBar = document.querySelector(".side-bar");
    // let stickSidebar = $(sideBar).offset().top;
    // let wrapper = document.querySelector(".footer");
    // let wrapperOffset;    
    //wrapperOffset =  $(wrapper).outerHeight() ;
    //console.log(wrapperOffset);
    // $(window).on("scroll",function () {
    //   let limit = $('.footer').offset().top - stickyHeight - 20;
    //   let windowTop = $(window).scrollTop();

    //   if (stickyTop < windowTop) {
    //     $(el).addClass('affix');
    //   }
    //   else{
    //     $(el).removeClass('affix');
    //   }

    //   if(windowTop > limit){
    //     $(el).removeClass('affix');
    //     var diff = limit-windowTop;
    //     el.style.top = diff.toString();
    //   }
    
    //   else if ($(window).scrollTop()>= wrapperOffset + $(wrapper).offset().top ) {
    //     $(sideBar).removeClass('affix'); 
    //     console.log("removeee");
    //   }
    //   else {
    //     $(sideBar).removeClass('affix');
    //   }
    // });
   
   
    this.http.get<{ status: string, msg: string, result: any }>('https://onewater-blog-api.herokuapp.com/approveblogs')
      .subscribe(result => {
        console.log(result);
        this.blogcards = result.result;
        this.featuredblog = result.result.reverse();
        this.featuredblog = this.featuredblog.slice(0, 6);
      })

    this.http.get<{ status: string, msg: string, result: any }>('https://onewater-blog-api.herokuapp.com/approvedauthor')
      .subscribe(result => {
        console.log(result);
        this.authors = result.result;
       
      })


  }

}
