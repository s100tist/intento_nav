import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navegator',
  templateUrl: './navegator.component.html',
  styleUrls: ['./navegator.component.css']
})
export class NavegatorComponent implements OnInit {
    busqueda: string = ''
    tokens: string[] = []

    constructor(private http: HttpClient){}
    ngOnInit(){
        this.busqueda = "https://example.com/"
    }

    

    search(): void{
        // this.tokens = this.busqueda.split(/:\/\//g).filter(Boolean)
        // console.log(`Tokens de busqueda: ${this.tokens}`);
    }
}
