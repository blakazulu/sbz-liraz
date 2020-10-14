import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {IntroComponent} from './intro/intro.component';
import {BioComponent} from './bio/bio.component';
import {ResumeComponent} from './resume/resume.component';
import {SkillsComponent} from './skills/skills.component';
import {PortfolioComponent} from './portfolio/portfolio.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    BioComponent,
    ResumeComponent,
    SkillsComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
