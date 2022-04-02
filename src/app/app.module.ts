import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CardComponent } from './components/card/card.component';
import { MatCardModule } from '@angular/material/card';
import { RatePipe } from './pipes/rate.pipe';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MenuComponent } from './components/header/menu/menu.component';
import { ProductComponent } from './components/product/product.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent,
		CardComponent,
		RatePipe,
		NavbarComponent,
		MenuComponent,
  ProductComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		MatToolbarModule,
		MatIconModule,
		BrowserAnimationsModule,
		MatButtonModule,
		MatInputModule,
		MatSidenavModule,
		MatListModule,
		MatProgressSpinnerModule,
		MatCardModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
