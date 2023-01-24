import { Component, OnInit } from '@angular/core';
import { Cep } from './cep';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.css']
})

export class CepComponent implements OnInit {
  public cep: Cep | undefined;

  constructor(private http: HttpClient) {
  }

  share() {
    window.alert('The product has been shared!');
  }

  ngOnInit() {
    this.getCep();
  }

   getCep(): void {
    this.http.get('@api-x/obter-cep').subscribe(cep => this.cep = <Cep>cep)
   }
}
