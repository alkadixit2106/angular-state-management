import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems = new BehaviorSubject<any[]>([]);
  cartItems$ = this.cartItems.asObservable(); // Observable for components to subscribe

  addToCart(item: any) {
    const currentItems = this.cartItems.getValue();
    this.cartItems.next([...currentItems, item]);
  }

  removeFromCart(index: number) {
    const currentItems = this.cartItems.getValue();
    currentItems.splice(index, 1);
    this.cartItems.next([...currentItems]);
  }

  getCartItems() {
    return this.cartItems.getValue();
  }
}