import { Component, OnInit } from '@angular/core';
import { Produit } from './Produit';
import { ProduitsService } from './produits.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  produits :Produit[]=[]
  produit! : Produit

  constructor(private servicePrd : ProduitsService){}

  ngOnInit(): void {


    this.servicePrd.getAllProduits().subscribe(data => this.produits = data)



  }




}
