import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICategory } from 'src/app/interface/category';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent {
  @Input()
	public categories: ICategory[] = [];

	@Output()
	public categoryChange: EventEmitter<string> = new EventEmitter<string>();

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
