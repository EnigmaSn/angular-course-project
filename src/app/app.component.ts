import { Component } from '@angular/core';
import { IProduct } from './interface/product';
import { productsMock } from './mocks/products.mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'angular-homework';

  public products: IProduct[] = productsMock;
}
