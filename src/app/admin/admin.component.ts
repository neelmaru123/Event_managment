import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

  constructor (private _router : Router){}

  add(){
    this._router.navigate(["/add-event"])
  }

    adminEventById(id:Number){
      this._router.navigate(["/admin/",id])
    }

    setForEdit(id:Number){
      this._router.navigate(["/admin/edit/",id])
    }
}
