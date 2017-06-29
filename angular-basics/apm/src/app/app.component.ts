import { Component } from '@angular/core';
import { ProductCatalogService } from './product/product-catalog.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  products : any[];

  constructor(service : ProductCatalogService){
    this.products = service.loadAll();
  }
}
