import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Http} from '@angular/http';
import { map } from 'rxjs/operators'; 

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public items:any=[];

  constructor(
    public navCtrl: NavController,
    private http:Http
    ) {

  }
  ionViewDidLoad(){
    this.http.get('http://localhost:3000/tasks').pipe(
      map(res=>res.json())
    ).subscribe(response=>{
        this.items = response;
        var data_array = [];

        for(var i=0;i<response.length;i++){
          data_array.push({
            idtarea : response[i].idtarea,
            title : response[i].title,
            priotity : response[i].priotity,
            description : response[i].description,
            name : response[i].name
          })
        }
        console.log(data_array);
    });
    
  }
  form(){
    this.navCtrl.push("FormPage");
  }

}
