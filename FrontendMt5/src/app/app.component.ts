import { Component, OnInit,Inject } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';


declare var $:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[]
})
export class AppComponent implements OnInit {
  faCoffee = faCoffee;
  title = 'copy';

  constructor(

	){
	}
  ngOnInit(): void {

  }
 
}
