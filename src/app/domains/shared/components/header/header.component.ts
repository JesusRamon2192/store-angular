import { Component, signal, Input, SimpleChanges, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from './../../../shared/models/product.model';
import { ProductComponent } from '../../../products/components/product/product.component';
import { CartService } from '../../services/cart.service';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  hideSideMenu = signal(true);
  private cartService = inject(CartService);
  cart = this.cartService.cart;
  total = this.cartService.total;

  toggleSideMenu() {
    this.hideSideMenu.update((prevState) => !prevState);
  }
}
