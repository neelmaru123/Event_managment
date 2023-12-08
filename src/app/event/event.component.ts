import { Component } from '@angular/core';
import { ApiEventService } from '../api-event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrl: './event.component.css'
})
export class EventComponent {

  constructor(private _api:ApiEventService, private _router:Router){}

  // ngOnInit(){
  //   this._api.getAll().subscribe((res:any)=>{
  //     this.laptops = res;
  //   });
  // }

  eventById(id:any){
    this._router.navigate(['/',id]);
  }

  
}
