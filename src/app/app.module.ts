import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {IntroComponent} from './Layout/intro/intro.component';
import {BioComponent} from './Layout/bio/bio.component';
import {ResumeComponent} from './Layout/resume/resume.component';
import {SkillsComponent} from './Layout/skills/skills.component';
import {PortfolioComponent} from './Layout/portfolio/portfolio.component';
import {ContactComponent} from './Layout/contact/contact.component';
import {TextGlitchComponent} from './Animations/text-glitch/text-glitch.component';
import {MakeObservablePipe} from './pipes/make-observable.pipe';
import {ShatterComponent} from './Animations/shatter/shatter.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    BioComponent,
    ResumeComponent,
    SkillsComponent,
    PortfolioComponent,
    ContactComponent,
    TextGlitchComponent,
    MakeObservablePipe,
    ShatterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
