import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prod-edit',
  imports: [FormsModule,HttpClientModule],
  templateUrl: './prod-edit.html',
  styleUrl: './prod-edit.css'
})
export class ProdEdit implements OnInit{
  id="";
  product ={
    name:"",
    price:0,
    description:""
  };
  constructor(private http:HttpClient, private route:Router, private router:ActivatedRoute){}
  ngOnInit(): void {
    this.id=this.router.snapshot.params['id'];
    this.http.get("https://hoodie-1026e-default-rtdb.firebaseio.com/products/"+this.id+".json")
    .subscribe((res:any)=>{
      this.product = res;
      console.log(this.product);
    })
  }

  updateProd(){
    this.http.put("https://hoodie-1026e-default-rtdb.firebaseio.com/products/"+this.id+".json",this.product)
    .subscribe(() =>{
      alert("Product updated successfully");
      this.route.navigate(["/list"]);
    })
  }

}
