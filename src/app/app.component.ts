import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AbdoAli';
  products = [
    {
      name: 'Product 1',
      description: 'Description for product 1',
      imageUrl: 'src/assets/chalo-garcia-c-iuqzssYbg-unsplash.jpg'
    },
    {
      name: 'Product 2',
      description: 'Description for product 2',
      imageUrl: 'src/assets/jean-jacobs-RPVspeDIxXI-unsplash.jpg'
    },
    {
      name: 'Product 3',
      description: 'Description for product 3',
      imageUrl: 'src/assets/omer-haktan-bulut-e2F2dYhraIQ-unsplash.jpg'
    }
  ];
}
