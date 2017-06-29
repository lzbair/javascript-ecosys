import { Injectable } from '@angular/core';

@Injectable()
export class ProductCatalogService {

  constructor() { }

  loadAll() : any[]{
    return ["p1", "p2", "p3"];
  }

}
