import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductCatalogService } from './product-catalog.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProductDetailComponent],
  exports: [ProductDetailComponent],
  providers: [ProductCatalogService]
})
export class ProductModule { }
