import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { ProductsSectionComponent } from './components/products-section/products-section.component';
import { CaSectionComponent } from './components/ca-section/ca-section.component';
import { TeamSectionComponent } from './components/team-section/team-section.component';
import { NewsletterSectionComponent } from './components/newsletter-section/newsletter-section.component';
import { RouterModule, Routes } from '@angular/router';
import { TeamCardComponent } from './components/team-section/components/team-card/team-card.component';
import { ProductCardModule } from 'src/app/shared/components/product-card/product-card.module';
import { ModalModule } from 'src/app/shared/components/modal/modal.module';

const routes: Routes = [{ path: '', component: HomePageComponent }];

@NgModule({
  declarations: [
    HomePageComponent,
    HeroSectionComponent,
    ProductsSectionComponent,
    CaSectionComponent,
    TeamSectionComponent,
    NewsletterSectionComponent,
    TeamCardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ProductCardModule,
    ModalModule,
  ],
})
export class HomePageModule {}
