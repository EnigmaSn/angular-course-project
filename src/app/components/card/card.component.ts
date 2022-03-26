import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interface/product';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.less'],
})
export class CardComponent {
	@Input() product!: IProduct;
}
