import { Component, signal, Input,SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from './../../../shared/models/product.model';
import { ProductComponent } from '../../../products/components/product/product.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  hideSideMenu = signal(true);
  @Input({ required: true }) cart: Product[] = [];
  total=signal(0);

  toggleSideMenu() {
    this.hideSideMenu.update((prevState) => !prevState);
  }

  ngOnChanges(changes: SimpleChanges) {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    const cart = changes['cart'];
    if (cart){
      this.total.set(this.calcTotal());
    }
  }

  calcTotal(){
    return this.cart.reduce((total, product)=> total+product.price, 0);
  }
}
