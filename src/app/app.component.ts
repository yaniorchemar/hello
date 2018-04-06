import { Component } from '@angular/core';
import { Http } from "@angular/http";//NUEVO
import { Observable } from 'rxjs/observable'; //IMPORTANTE+
import 'rxjs/add/operator/catch'; //IMPORTANTE++
import 'rxjs/add/observable/throw'; //IMPORTANTE++
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  spaceScreens: Array<any>;

  constructor(private http: Http){
    this.http.get('/assets/data.json')
      .map(response=>response.json().screenshots)
      .subscribe(res=>this.spaceScreens=res);
  }

  likeMe(i){
    if (this.spaceScreens[i].liked==0) 
      this.spaceScreens[i].liked=1;
    else 
      this.spaceScreens[i].liked=0;
  }

  deleteMe(i){
    this.spaceScreens.splice(i,1);
    console.log(i);
  }

  /*
  colors= [
    {id:1, name:'Red'},
    {id:2, name:'Green'},
    {id:3, name:'Blue'}
  ];

  color = 2;

  title = 'Angular home page';
  isChecked= true;

  onChange($event){
    console.log($event);
  }*/
}
