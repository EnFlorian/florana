import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { ProductsSectionComponent } from './components/products-section/products-section.component';
import { CaSectionComponent } from './components/ca-section/ca-section.component';
import { TeamSectionComponent } from './components/team-section/team-section.component';
import { NewsletterSectionComponent } from './components/newsletter-section/newsletter-section.component';
import { TestimonialsSectionComponent } from './components/testimonials-section/testimonials-section.component';



@NgModule({
  declarations: [
    HomePageComponent,
    HeroSectionComponent,
    ProductsSectionComponent,
    CaSectionComponent,
    TeamSectionComponent,
    NewsletterSectionComponent,
    TestimonialsSectionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomePageModule { }
