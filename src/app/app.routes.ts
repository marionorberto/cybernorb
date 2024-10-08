import { Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { RegisterComponent } from './register/components/register/register.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { CommunityComponent } from './components/community/community.component';
import { SettingsComponent } from './components/settings/settings.component';
import { AboutComponent } from './components/about/about.component';
import { privateDecrypt } from 'crypto';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { AdviceUsageComponent } from './components/advice-usage/advice-usage.component';
import { MostReadComponent } from './components/most-read/most-read.component';
import { NewsComponent } from './components/news/news.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { ActivitiesComponent } from './components/activities/activities.component';
import { EventsComponent } from './components/events/events.component';
import { SinglePostComponent } from './components/single-post/single-post.component';
import { SupportComponent } from './components/support/support.component';
import { MyPostsComponent } from './components/my-posts/my-posts.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent
  },
  {
    path: 'news',
    component: NewsComponent, 
  },
  {
    path: 'resources',
    component: ResourcesComponent, 
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'notifications',
    component: NotificationsComponent
  },
  {
    path: 'ativities',
    component: ActivitiesComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'regiter',
    component: RegisterComponent
  },
  {
    path:'my-posts',
    component: MyPostsComponent
  },
   {
    path: 'privacy',
    component: PrivacyComponent
  },
  {
    path: 'usage',
    component: AdviceUsageComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  },
  {
    path: 'community',
    component: CommunityComponent
  },
  {
    path: 'most-read',
    component: MostReadComponent
  },
  {
    path: 'events',
    component: EventsComponent
  },
   {
    path: 'single-post',
    component: SinglePostComponent
  },
   {
    path: 'support',
    component: SupportComponent
  },
  {
    path: '**',
    component: NotFoundComponent,
  }
];
