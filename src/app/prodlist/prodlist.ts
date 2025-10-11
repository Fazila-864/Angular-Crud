import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prodlist',
  imports: [CommonModule,HttpClientModule],
  templateUrl: './prodlist.html',
  styleUrl: './prodlist.css'
})
export class Prodlist implements OnInit{
  ngOnInit(): void {
    this.fetchData();
  }
  Products:any[] =[]
  constructor(private http:HttpClient, private router:Router){}
  fetchData(){
    this.http.get("https://hoodie-1026e-default-rtdb.firebaseio.com/products.json")
    .subscribe((res:any)=>{
      const Prod =[];
      for(const key in res){
        Prod.push({id:key, data:res[key]});
      }
      this.Products = Prod;
      console.log(this.Products);
    })
  }

  editProd(id:string){
    this.router.navigate(["/edit",id])
  }

  deleteProd(id:string){
    this.http.delete("https://hoodie-1026e-default-rtdb.firebaseio.com/products/"+id+".json").subscribe(()=>{
      alert("do you want to delete it?")
      this.fetchData();
    })

  }
}
