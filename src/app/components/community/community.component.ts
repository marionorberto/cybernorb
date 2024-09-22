import { Component } from '@angular/core';
import { AboutComponent } from "../about/about.component";
import { TopNavbarComponent } from "../top-navbar/top-navbar.component";
import { FooterComponent } from "../footer/footer.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { ModalLargeComponent } from "../modal-large/modal-large.component";
import { SinglePostComponent } from "../single-post/single-post.component";
import { Chart }  from 'chart.js/auto';
@Component({
  selector: 'app-community',
  standalone: true,
  imports: [
    AboutComponent,
    TopNavbarComponent,
    FooterComponent,
    FormsModule,
    CommonModule,
    TagModule,
    ButtonModule,
    CarouselModule,
    ModalLargeComponent,
    SinglePostComponent
],
  templateUrl: './community.component.html',
  styleUrl: './community.component.css'
})
export class CommunityComponent {

  dataToCardProfile: { visible: boolean, position: string } = { visible: false, position: '' };

  responsiveOptions: any[] = [];
  chartWeeklyPostIncreasing: any;

  postUsers: any[] = [
     {
        username: 'marionorberto',
        content: 'How to configure the dockerfile ...',
        image: ''
     },
     {
        username: 'filipelukebana',
        content: 'How to configure the dockerfile ...',
        image: ''
     },
     {
        username: 'helderfrancisco',
        content: 'How to configure the dockerfile ...',
        image: ''
     },
     {
        username: 'luzineide',
        content: 'How to configure the dockerfile ...',
        image: ''
     },
      {
        username: 'marionorberto',
        content: 'How to configure the dockerfile ...',
        image: ''
     },
     {
        username: 'filipelukebana',
        content: 'How to configure the dockerfile ...',
        image: ''
     },
     {
        username: 'helderfrancisco',
        content: 'How to configure the dockerfile ...',
        image: ''
     },
     {
        username: 'luzineide',
        content: 'How to configure the dockerfile ...',
        image: ''
     }
  ];
  
  constructor() {
      this.chartWeeklyPostIncreasing = new Chart("weeklyPostIncreasing",{
      type: 'doughnut',
      data: {
        labels: ['Weekly Post Increasing'],
        datasets: [
          {
            data: ['89'],
            backgroundColor: ['#22c55e'],
            borderRadius: 27,
            circumference: 300,
            borderWidth: 20,
            rotation: 80
          }
        ]
      },
      options: {
          aspectRatio: 2.5,
      plugins: {
        legend: {
          display: false
        }
      }
     }
    })
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

    handleCardDialog(visible: boolean) {
        this.dataToCardProfile.position = 'bottom';
        this.dataToCardProfile.visible = visible;
    }
}
