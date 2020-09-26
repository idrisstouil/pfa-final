import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { GererBacklogComponent } from './pages/gerer-backlog/gerer-backlog.component';
import { GererTachesComponent } from './pages/gerer-taches/gerer-taches.component';
import { BurtdownChartComponent } from './pages/burtdown-chart/burtdown-chart.component';
import { AvancementProjetComponent } from './pages/avancement-projet/avancement-projet.component';
import { InboxComponent } from './pages/inbox/inbox.component';
import { ChatComponent } from './pages/chat/chat.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { GererProjetComponent } from './pages/gerer-projet/gerer-projet.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: '', component: MainComponent,
    children: [{
      path: '', component: HomeComponent
    }, {
      path: 'contacts', component: ContactsComponent
    }, {
      path: 'backlog', component: GererBacklogComponent
    }, {
      path: 'taches', component: GererTachesComponent
    }, {
      path: 'burtdown-chart', component: BurtdownChartComponent
    }, {
      path: 'avancement', component: AvancementProjetComponent
    }, {
      path: 'inbox', component: InboxComponent
    }, {
      path: 'chat', component: ChatComponent
    }, {
      path: 'profile', component: ProfileComponent
    }, {
      path: 'projets', component: GererProjetComponent
    },
     //{
    //   path: '**', component: PageNotFoundComponent
    // },
     {
      path: '**', component: PageNotFoundComponent
    }],canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
