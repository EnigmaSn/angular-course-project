import { Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IProduct } from './interface/product';
import { productsMock } from './mocks/products.mock';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.less'],
})
export class AppComponent {
	title = 'angular-homework';

	public products: IProduct[] = productsMock;

	@ViewChild(NavbarComponent, { static: true })
	navbarComponent!: NavbarComponent;

	onMenuToggle() {
		this.navbarComponent.drawer.toggle();
	}
}
