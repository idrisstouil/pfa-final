import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './main/header/header.component';
import { FooterComponent } from './main/footer/footer.component';
import { MainSidebarComponent } from './main/main-sidebar/main-sidebar.component';
import { ControlSidebarComponent } from './main/control-sidebar/control-sidebar.component';
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
import { ProjetCardComponent } from './pages/partials/projet-card/projet-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { CreerUserstoryComponent } from './pages/dialog/creer-userstory/creer-userstory.component';
import { CreerSprintComponent } from './pages/dialog/creer-sprint/creer-sprint.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    MainSidebarComponent,
    ControlSidebarComponent,
    HomeComponent,
    ContactsComponent,
    PageNotFoundComponent,
    GererBacklogComponent,
    GererTachesComponent,
    BurtdownChartComponent,
    AvancementProjetComponent,
    InboxComponent,
    ChatComponent,
    ProfileComponent,
    GererProjetComponent,
    ProjetCardComponent,
    CreerUserstoryComponent,
    CreerSprintComponent
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
