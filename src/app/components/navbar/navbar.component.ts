import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { ICategory } from 'src/app/interface/category';
import { categories } from 'src/app/mocks/categories.mock';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent {
	@Output()
	drawerEmit = new EventEmitter<MatDrawer>(true);

	@ViewChild('drawer', { static: true, read: MatDrawer })
	public drawer!: MatDrawer ;

	@Output()
	public categoryChange: EventEmitter<string> = new EventEmitter<string>();

	public categories: ICategory[] = categories;

	public currentName: string | null = null;

	public hover(name: string | undefined) {
		if (!name) {
			return;
		}
		this.currentName = name;
	}

	public mouseLeave() {
		this.currentName = null;
	}

	public redirectTo(subCategory: string | undefined): void {
		this.categoryChange.emit(subCategory);
	}
}
