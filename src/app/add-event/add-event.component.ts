import { Component } from '@angular/core';
import { ApiEventService } from '../api-event.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrl: './add-event.component.css'
})
export class AddEventComponent {
  constructor(private _api:ApiEventService, private _router:Router){}
  eventForm:FormGroup=new FormGroup({
    
  });
  save(){
    this._api.save(this.eventForm.value).subscribe((res:any)=>{
      this._router.navigate(['/admin'])
    });
  }

  click(){
    this._router.navigate(["/admin"])
  }
}
