import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Iproduct } from 'src/app/models/iproduct';
import { ApiProductService } from 'src/app/services/api-product.service';
import { ModalComponent } from '../modal/modal.component';
import { query } from '@angular/animations';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit  {
  searchResults: Iproduct[] = [];
 constructor( private route:ActivatedRoute , private apiservice:ApiProductService){}
ngOnInit(): void {
   let query = this.route.snapshot.paramMap.get('query');
    query && this.apiservice.Searching(query).subscribe((data:any) =>{
      this.searchResults = data.data;
    })
}

}
