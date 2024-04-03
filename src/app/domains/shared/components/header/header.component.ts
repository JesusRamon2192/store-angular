import { Component, signal, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from './../../../shared/models/product.model';

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
  toggleSideMenu() {
    this.hideSideMenu.update((prevState) => !prevState);
  }
}
