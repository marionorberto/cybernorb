import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { KnobModule } from 'primeng/knob'

import { AboutComponent } from "../about/about.component";
import { TopNavbarComponent } from "../top-navbar/top-navbar.component";
import { FooterComponent } from "../footer/footer.component";
import { ModalLargeComponent } from "../modal-large/modal-large.component";
import { SinglePostComponent } from "../single-post/single-post.component";

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
    SinglePostComponent,
    KnobModule
],
  templateUrl: './community.component.html',
  styleUrl: './community.component.css'
})
export class CommunityComponent {

  dataToCardProfile: { visible: boolean, position: string } = { visible: false, position: '' };
  responsiveOptions: any[] = [];
  chartWeeklyPostIncreasing: any;
  knockValue: number = 76;
  isPostHover: boolean =  false;

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

    handlePostHover() {
      this.isPostHover = true;
    }

    handlePostBlur() {
      this.isPostHover = false;
    }
}
