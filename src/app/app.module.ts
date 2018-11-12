import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FabComponent } from './components/fab/fab.component';
import { CalButtonComponent } from './components/button/cal-button.component';
import { PillboxComponent } from './components/pillbox/pillbox.component';
import { TagComponent } from './components/tag/tag.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { BarComponent } from './components/navigation/bar/bar.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { ComponentComponent } from './routes/component/component.component';
import { SectionComponent } from './components/section/section.component';

const appRoutes: Routes = [
  { path: '', component: AppComponent },
  { path: 'components', component: ComponentComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    FabComponent,
    CalButtonComponent,
    PillboxComponent,
    TagComponent,
    ProductCardComponent,
    BarComponent,
    DropdownComponent,
    ComponentComponent,
    SectionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
