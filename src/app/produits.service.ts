import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Produit } from './Produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {

  constructor(private http : HttpClient) { }

getAllProduits(){
return this.http.get<Produit[]>("https://fakestoreapi.com/products") ;

}


getProduitById(id : number){
return this.http.get<Produit>("https://fakestoreapi.com/products/"+id) ;

}


}
