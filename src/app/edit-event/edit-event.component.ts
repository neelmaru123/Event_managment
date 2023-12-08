import { Component } from '@angular/core';
import { ApiEventService } from '../api-event.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrl: './edit-event.component.css'
})
export class EditEventComponent {
  constructor(private _api:ApiEventService, private _router:Router, private _activatedRoute:ActivatedRoute){}
  eventForm:FormGroup=new FormGroup({
    
  });
  id:number=0;
  ngOnInit(){
    this.id = this._activatedRoute.snapshot.params['id'];
    this._api.getById(this.id).subscribe((res:any)=>{
      this.eventForm.patchValue(res);
    });
  }
  save(){
    this._api.edit(this.eventForm.value,this.id).subscribe((res:any)=>{
      this._router.navigate(['/admin'])
    });
  }

  click(){
    this._router.navigate(["admin"])
  }
}
