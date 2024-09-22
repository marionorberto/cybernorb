import { Component } from '@angular/core';
import { TopNavbarComponent } from "../top-navbar/top-navbar.component";
import { FooterComponent } from "../footer/footer.component";
import { CardMostReadComponent } from "../card-most-read/card-most-read.component";

interface ContentPostInterface {
  content: string
}

interface SectionPostInterface {
  subtitle: string,
  linkFileSection: string,
  contents: ContentPostInterface[]
}

interface PostInterface { 
  userId: string,
  title: string,
  linkPosterFile: string,
  sections: SectionPostInterface[]
}


@Component({
  selector: 'app-single-post',
  standalone: true,
  imports: [TopNavbarComponent, FooterComponent, CardMostReadComponent],
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.css'
})
export class SinglePostComponent {

  posts: PostInterface[] = [
    {
      userId: "adaoopp33930203",
      title: "How to create a github account",
      linkPosterFile: "/upload/postable_k3sd$%dsd.jpg",
      sections: [
        {
          subtitle: "section 1 subtitle",
          linkFileSection: "/upload/postable_k3sd$%dsd.jpg",
          contents: [
            {
              content: "this is the content for the 1 section"
            }
          ]
        },
        {
          subtitle: "section 2 subtitle",
          linkFileSection: "/upload/postable_k3sd$%dsd.jpg",
          contents: [
            {
              content: "this is the content for the 2 section"
            }
          ]
        }
      ]
    }
  ]

}
