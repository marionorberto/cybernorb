import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { KnobModule } from 'primeng/knob'

import { TopNavbarComponent } from "../top-navbar/top-navbar.component";
import { FooterComponent } from "../footer/footer.component";
import { ModalLargeComponent } from "../modal-large/modal-large.component";
import { SinglePostComponent } from "../single-post/single-post.component";
import { CardCommunityPostsComponent } from "../card-community-posts/card-community-posts.component";

@Component({
  selector: 'app-community',
  standalone: true,
  imports: [
    TopNavbarComponent,
    FooterComponent,
    FormsModule,
    CommonModule,
    TagModule,
    ButtonModule,
    CarouselModule,
    ModalLargeComponent,
    SinglePostComponent,
    KnobModule,
    CardCommunityPostsComponent
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
  testimonyData: any[] = [
   {
      name: 'Mário Norberto',
      urlImg: '../../../assets/images/testimony-3.jpg',
      job: 'Fullstack Developer',
      testimony: 'Cybernorb is a great platform for sharing knowledge and learn by reading post. Its been very usefull for me.'
   },
   {
      name: 'Elisa José',
      urlImg: '../../../assets/images/testimony-1.jpg',
      job: 'UI|UX',
      testimony: 'Interacting with different people of others countries and also learnin with them is  easier when you have website like cybernorb.'
   },
   {
      name: 'Diego Fernandes',
      urlImg: '../../../assets/images/testimony-2.jpg',
      job: 'Senior Software Deloper',
      testimony: 'I use cybernorb for sharing my experience with people that are at entry level and i just realize i have learn from them than i ever imagine.'
   },
  ];

  postUsers: any[] = [
     {
        username: 'marionorberto',
        content: 'Costumize you linux pc using this new features.',
        image: 'https://randomuser.me/api/portraits/thumb/men/22.jpg'
     },
     {
        username: 'filipelukebana',
        content: 'How to solve issues properly while coding',
        image: 'https://randomuser.me/api/portraits/thumb/men/65.jpg',
        bgColor: '#'
     },
     {
        username: 'helderfrancisco',
        content: 'UX and UI tips for angular development',
        image: 'https://randomuser.me/api/portraits/thumb/men/35.jpg'
     },
     {
        username: 'neidesilva',
        content: 'frontend tools for javascript development',
        image: 'https://randomuser.me/api/portraits/thumb/women/89.jpg'
     },
      {
        username: 'diego3g',
        content: 'Angular-cli new features has been released',
        image: 'https://randomuser.me/api/portraits/thumb/men/24.jpg'
     },
     {
        username: 'filipelukebana',
        content: 'Configure your linkedin profile this way',
        image: 'https://randomuser.me/api/portraits/thumb/men/45.jpg'
     },
     {
        username: 'cristinavicente',
        content: 'How to configure the dockerfile and docker-compose on vscode with php8',
        image: 'https://randomuser.me/api/portraits/thumb/women/95.jpg'
     },
     {
        username: 'carlaview',
        content: 'Installing vscode new version on manjaro linux',
        image: 'https://randomuser.me/api/portraits/thumb/women/72.jpg'
     }
  ];

  frontPosition: {
      name: string;
      urlImg: string;
      job: string;
      testimony: string;
   } = this.testimonyData[0];

   activeTestimony: string = 'center';
   urlImgLeft: string = '../../../assets/images/testimony-1.jpg';
   urlImgCenter: string = '../../../assets/images/testimony-3.jpg';
   urlImgRight: string = '../../../assets/images/testimony-2.jpg';
   likesNumber: number = 24;
   like: boolean = false;
   saved: boolean = false;
   follow: boolean = false;
   isInputFocused: boolean = false;
   showVisitPageFirstAd: boolean = false;
   showVisitPageSecondAd: boolean = false;
   commnunityPost = [
      {
         id: 'asd23',
         title: 'Configure Typeorm and PostGreSQL on NestJS aplications.',
         content: 'Learn the best way for nestjs configuration and setup your dev enviroment properly with very used orm along with the most used database in 2024.',
         date: 'March 23, 2024',
         tag: 'nestjs',
         user: {
            username: 'marionorberto',
            stack: 'backend developer',
            urlImg: 'https://randomuser.me/api/portraits/thumb/men/27.jpg',
         }
      },
            {
         id: 'asd23',
         title: 'Frontend Developer Tips for beginners',
         content: 'See whats the best tips for frontend developer and market feedback for 2025. Stay up to date for new professional perpective. ',
         date: 'Agost 30, 2024',
         tag: 'frontend',
         user: {
            username: 'abelfuit',
            stack: 'frontend developer',
            urlImg: 'https://randomuser.me/api/portraits/thumb/men/17.jpg',
         }
      },
            {
         id: 'asd23',
         title: 'Best command on bash script for beginners',
         content: 'Learn the most important and userfull commands to use on basj script, the most used and usefull command that hackers use.',
         date: 'May 13, 2024',
         tag: 'cybersecurity',
         user: {
            username: 'helderrui',
            stack: 'Hacker Enthusiast',
            urlImg: 'https://randomuser.me/api/portraits/thumb/men/57.jpg',
         }
      },
            {
         id: 'asd22',
         title: 'Whats new on nodejs release v.20',
         content: 'See whats nodejs new release is offering for javascript developer, and how it can speed your developer experience at all.',
         date: 'July 22, 2024',
         tag: 'nodejs',
         user: {
            username: 'eliseiriben',
            stack: 'Fullstack Developer',
            urlImg: 'https://randomuser.me/api/portraits/thumb/men/47.jpg',
         }
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

   onInputCommentFocus() {
    this.isInputFocused = true;
   }
   
   onInputCommentBlur() {
    this.isInputFocused = false;
   }

   onShowCardDialog(visible: boolean) {
      this.dataToCardProfile.position = 'bottom';
      this.dataToCardProfile.visible = visible;
   }

   handlePostHover() {
      this.isPostHover = true;
   }

   handlePostBlur() {
      this.isPostHover = false;
   }

   handleChosenTestimony(value: string) {
      switch(value) {
         case 'left':
            this.frontPosition = this.testimonyData[1];
            this.activeTestimony = value;
            this.getUrlImgs(value);
            break;
         case 'center':
            this.frontPosition = this.testimonyData[0];
            this.activeTestimony = value;
            this.getUrlImgs(value);
            break;
         case 'right':
            this.frontPosition = this.testimonyData[2];
            this.activeTestimony = value;
            this.getUrlImgs(value);
            break;
          default:
            this.frontPosition = this.testimonyData[0];  
            this.activeTestimony = 'center';
      }
   }

   getUrlImgs(value: string) {
      if(value == 'center') {
         this.urlImgLeft = '../../../assets/images/testimony-1.jpg';
         this.urlImgCenter = '../../../assets/images/testimony-3.jpg';
         this.urlImgRight = '../../../assets/images/testimony-2.jpg';
      } else if (value == 'left') {
         this.urlImgLeft = '../../../assets/images/testimony-3.jpg';
         this.urlImgCenter = '../../../assets/images/testimony-1.jpg';
         this.urlImgRight = '../../../assets/images/testimony-2.jpg';
      } else if (value == 'right') {
         this.urlImgLeft = '../../../assets/images/testimony-1.jpg';
         this.urlImgCenter = '../../../assets/images/testimony-2.jpg';
         this.urlImgRight = '../../../assets/images/testimony-3.jpg';
      }
      
   }

   onShowVisitPageFirstAdEnter() {
      this.showVisitPageFirstAd = true;
   }

   onShowVisitPageFirstAdLeave() {
      this.showVisitPageFirstAd = false;
   }
}
