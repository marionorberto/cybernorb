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
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'cybernorb/login',
    pathMatch: 'full'
  },
  {
    path: 'cybernorb/news',
    component: NewsComponent, 
  },
  {
    path: 'cybernorb',
    component: MainLayoutComponent,
    canActivate: [authGuard]
  },
  {
    path: 'cybernorb/resources',
    component: ResourcesComponent, 
  },
  {
    path: 'cybernorb/login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'cybernorb/notifications',
    component: NotificationsComponent
  },
  {
    path: 'cybernorb/ativities',
    component: ActivitiesComponent
  },
  {
    path: 'cybernorb/about',
    component: AboutComponent
  },
  {
    path: 'cybernorb/regiter',
    component: RegisterComponent
  },
  {
    path:'cybernorb/my-posts',
    component: MyPostsComponent
  },
   {
    path: 'cybernorb/privacy',
    component: PrivacyComponent
  },
  {
    path: 'cybernorb/usage',
    component: AdviceUsageComponent
  },
  {
    path: 'cybernorb/settings',
    component: SettingsComponent
  },
  {
    path: 'cybernorb/community',
    component: CommunityComponent
  },
  {
    path: 'cybernorb/most-read',
    component: MostReadComponent
  },
  {
    path: 'cybernorb/events',
    component: EventsComponent
  },
   {
    path: 'cybernorb/single-post',
    component: SinglePostComponent
  },
   {
    path: 'cybernorb/support',
    component: SupportComponent
  },
  {
    path: '**',
    component: NotFoundComponent,
  }
];
