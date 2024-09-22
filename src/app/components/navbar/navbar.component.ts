import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    FormsModule,
    CommonModule,
    TagModule,
    ButtonModule,
    CarouselModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  techs: string[];
  techsLength: number;
  responsiveOptions: any[] = [];

  constructor() {
    this.techs = [
      'Breaking News',
      'Hacking',
      'Backend',
      'SOC',
      'News',
      'Javascrip',
      'UX',
      'Pesting',
      'php',
      'laravel',
      'Vunerabilites',
      '.Net',
      'Angular',
       'Javascrip',
      'Vunerabilites',
      'UX',
      'Pesting',
      'php',
      'laravel',
      '.Net',
      'Angular',
    ];

    this.techsLength = this.techs.length;
  }


  ngOnInit() {

        this.responsiveOptions = [
            {
                breakpoint: '1199px',
                numVisible: 1,
                numScroll: 1
            },
            {
                breakpoint: '991px',
                numVisible: 2,
                numScroll: 1
            },
            {
                breakpoint: '767px',
                numVisible: 1,
                numScroll: 1
            }
        ];
    }

    getSeverity(status: string) {
        switch (status) {
            case 'INSTOCK':
                return 'success';
            case 'LOWSTOCK':
                return 'warning';
            case 'OUTOFSTOCK':
                return 'danger';
                default:
                  return 'success';
        }
    }


}
