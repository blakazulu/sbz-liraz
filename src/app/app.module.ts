import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {IntroComponent} from './layout/intro/intro.component';
import {BioComponent} from './layout/bio/bio.component';
import {ResumeComponent} from './layout/resume/resume.component';
import {SkillsComponent} from './layout/skills/skills.component';
import {PortfolioComponent} from './layout/portfolio/portfolio.component';
import {ContactComponent} from './layout/contact/contact.component';
import {TextGlitchComponent} from './animations/text-glitch/text-glitch.component';
import {MakeObservablePipe} from './pipes/make-observable.pipe';
import {ShatterComponent} from './animations/shatter/shatter.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {LayoutModule} from '@angular/cdk/layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxSbzTextAnimationModule} from 'ngx-sbz-text-animation';
import {ExplodeComponent} from './animations/explode/explode.component';
import {InfiniteTypeDeleteModule} from 'ngx-sbz-type-delete';

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
    ShatterComponent,
    ExplodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    LayoutModule,
    NgxSbzTextAnimationModule,
    InfiniteTypeDeleteModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
