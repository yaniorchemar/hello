import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test', //para llamar como un elemento
  //selector: '.app-test', //para llamar como una clase
  //selector: '[app-test]', //para llamar como un atributo
  //
  /* haciendo el html directamente *./
  template: `
    <h2>Welcome {{name.toUpperCase()}}</h2>
    <h2>{{saludar()}}</h2>
  `,*/
  templateUrl: './test.component.html', //se puede escribir asi llamando un html
  styleUrls: ['./test.component.css']
  /* haciendo el css directamente
  styles: [`
    div {
      color: cyan;
    }
  `] */
})
export class TestComponent implements OnInit {

  public name = "Vishwas";
  constructor() { }

  ngOnInit() {
  }

  saludar(){
    return "This is an implemented method. con nombre dinamico: "+this.name;
  }

}
