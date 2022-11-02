import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'my-first-app';
  welcome: string = 'Gran HP';
  isRunning: boolean = true;
  message: string [] = []
  people: {firstName:string, lastName:string, age:number}[] = [
  {firstName: 'Fabian', lastName: 'De Gouveia', age: 26},
  {firstName: 'Wildys', lastName: 'De Gouveia', age: 24},
  {firstName: 'Tayra', lastName: 'De Gouveia', age: 1},
  {firstName: 'Nose', lastName: 'De Gouveia', age: 2}
  ]

  url:string = 'http://localhost:2992/api/getSpecieDetails'
  constructor(private http: HttpClient){}

  ngOnInit(){
    this.http.get<any>(this.url).subscribe(data =>{
      console.log(data);
      
    })
  }
  testFunction(value:string):void{
    console.log(`testing Fabian ${value}`);
    this.message.push('test function called!')
    
  }
}