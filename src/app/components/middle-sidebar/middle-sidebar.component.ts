import { Component } from '@angular/core';
import { CardPostComponent } from "../card-post/card-post.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-middle-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CardPostComponent,
  ],
  templateUrl: './middle-sidebar.component.html',
  styleUrl: './middle-sidebar.component.css'
})
export class MiddleSidebarComponent {
  posts: any[] = [
    {
      user: {
        username: 'marionorberto',
        stack: 'Software Developer',
        profileImgLink: '',
      },
      title: 'How to install extensions on vs code? ',
      linkPosterFile: '../../../assets/images/how-to-install-images-on-vscode.png',
      tags: [
        {
          tag: 'Frontend'
        },
        {
          tag: 'Angular'
        }
      ],
      sections: [
        {
          subtitle: 'Searching for new extensions',
          linkFileSection: '',
          sectionOrder: 1,
          contents: [
            {
              content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed excepturi assumenda beatae recusandae eligendi, consectetur nisi molestiae molestias perferendis ut, voluptas inventore debitis aut officiis velit, veniam illum nulla dolor. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed excepturi assumenda beatae recusandae eligendi, consectetur nisi molestiae molestias perferendis ut, voluptas inventore debitis aut officiis velit, veniam illum nulla dolor. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed excepturi assumenda beatae recusandae eligendi, consectetur nisi molestiae molestias perferendis ut, voluptas inventore debitis aut officiis velit, veniam illum nulla dolor. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed excepturi assumenda beatae recusandae eligendi, consectetur nisi molestiae molestias perferendis ut, voluptas inventore debitis aut officiis velit,veniam illum nulla dolor.'
            }
          ],
        },
        {
          subtitle: 'Installing the chosen extension',
          linkFileSection: '',
          sectionOrder: 2,
          contents: [
            {
              content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed excepturi assumenda beatae recusandae eligendi, consectetur nisi molestiae molestias perferendis ut, voluptas inventore debitis aut officiis velit, veniam illum nulla dolor. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed excepturi assumenda beatae recusandae eligendi, consectetur nisi molestiae molestias perferendis ut, voluptas inventore debitis aut officiis velit, veniam illum nulla dolor. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed excepturi assumenda beatae recusandae eligendi, consectetur nisi molestiae molestias perferendis ut, voluptas inventore debitis aut officiis velit, veniam illum nulla dolor. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed excepturi assumenda beatae recusandae eligendi, consectetur nisi molestiae molestias perferendis ut, voluptas inventore debitis aut officiis velit,veniam illum nulla dolor.'
            }
          ],
        }

      ],
      createdAt: new Date(),
    }
  ];

}
