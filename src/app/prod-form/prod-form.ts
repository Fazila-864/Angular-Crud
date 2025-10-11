import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prod-form',
  standalone: true,
  imports: [FormsModule,HttpClientModule],
  templateUrl: './prod-form.html',
  styleUrl: './prod-form.css'
})
export class ProdForm {
  product ={
    name:"",
    price:0,
    description :""
  };

  constructor(private http:HttpClient, private route:Router){}

  addProduct(){
    this.http.post("https://hoodie-1026e-default-rtdb.firebaseio.com/products.json",this.product).subscribe(()=>{
      alert("Product Added Successfully");
      this.route.navigate(["/list"]);
      this.product = {
        name:"",
        price:0,
        description:""
      }
    })
  }

}
