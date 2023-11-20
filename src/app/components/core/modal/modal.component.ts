import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Icartitem } from 'src/app/models/icart';
import { ApiProductService } from 'src/app/services/api-product.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() product: any; // Pass product details to this component
CartItems:Icartitem[] = [];
productQuantity :number = 1;
ShowButton:Boolean = false;
constructor(public modal:NgbActiveModal, private apiservice:ApiProductService){}

AddToCart(): void {
  /// checking the user if _islogged-in Or not
  this.product.quantity = this.productQuantity;
  this.apiservice.addToCart(this.product).subscribe({
    next: (data:any) => {
      console.log(`Added to Cart Successfully ${data.data}`);
      window.alert(`Added to Cart Successfully`);},
      error: (error) => {
        console.error('Error adding item to cart:', error);
      },
      complete: () => {},
    })
}
}
