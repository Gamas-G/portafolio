import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';

@NgModule({
  imports: [
    HeaderComponent,
    PortafolioComponent,
    FooterComponent
  ],
  exports: [],
  declarations: [
    // AppComponent
  ],
  providers: [],
})
export class AppModule { }
