import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  showSubCat=false;
  currentCategory=[
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
  ];

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

  constructor() { }

  ngOnInit() {

  }

}
