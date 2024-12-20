import { CommonModule } from '@angular/common';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PostSectionComponent } from "../post-section/post-section.component";
import { Router } from '@angular/router';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-create-post',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    PostSectionComponent
],
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.css'
})
export class CreatePostComponent implements OnChanges {
  postTags: string[] = [
    'angular',
    'frontend', 
    'react',
    'cybersecurity',
    'Javascript',
    'Typescript',
    'nodejs',
    'nestjs',
    'kalilinux',
    'pentesting'
  ];
  title: string = '';
  poster: string = '';
  uploadMessage: string = '';
  tag: string = '';
  tagsCollection: string[] = [];
  postSectionsCollection: number[] = [1];
  showPostSection: boolean = false;
  error: string = '';
  tagsErrors: string = '';


  constructor(private router: Router, private modalService: ModalService) {}
  ngOnChanges(changes: SimpleChanges): void {
    
  }

  addTagsToPost() {
    if (!this.tag) {
      if(this.tagsErrors) return;
      this.tagsErrors = 'field is empty';
      setTimeout(() => {
        this.tagsErrors = '';
      }, 1000);
      return;
    }
    
    if (this.tagsCollection.length >= 2) {
      this.tagsErrors = '2 at most allowed';
      setTimeout(() => {
        this.tagsErrors = '';
      }, 1000);
      return;
    }

    if (this.tagsCollection.find(val => val == this.tag)) {
      this.tagsErrors = 'tag already added';
      setTimeout(() => {
        this.tagsErrors = '';
      }, 1000);
      return;
    } 

    this.tagsCollection.push(this.tag);
    console.log(this.tagsCollection);
  }

  addPostSection() {
    if (this.postSectionsCollection.length >= 4) {
      this.error = 'only 4 sections at most allowed';
      return
    }
    this.postSectionsCollection.push(this.postSectionsCollection.length + 1);
  }

  deleteTag(tag: string) {
    this.tagsCollection = this.tagsCollection.filter((item) => item !== tag)

  }

  

  onSubmit() {
    if(this.error) return;
    
  }

  cancel() {
    this.modalService.onChangeModalVisibilityToFalse();  
  }

}
