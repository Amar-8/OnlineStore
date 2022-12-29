import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-product-card',
    template: `
    <div class="card" *ngFor="let product of products">
      <img src="{{product.imageUrl}}" alt="{{product.name}}" class="card-img-top">
      <div class="card-body">
        <h5 class="card-title">{{product.name}}</h5>
        <p class="card-text">{{product.description}}</p>
        <a href="#" class="btn btn-primary">Add to Cart</a>
      </div>
    </div>
  `,
    styleUrls: ['./app.component.css']
})
export class ProductCardComponent {
    @Input() products;
}