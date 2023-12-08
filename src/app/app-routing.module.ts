import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventComponent } from './event/event.component';
import { AdminComponent } from './admin/admin.component';
import { EventByIdComponent } from './event-by-id/event-by-id.component';
import { AdminEventByIdComponent } from './admin-event-by-id/admin-event-by-id.component';
import { AddEventComponent } from './add-event/add-event.component';
import { EditEventComponent } from './edit-event/edit-event.component';

const routes: Routes = [
  {path:"", component:EventComponent},
  {path:"add-event", component:AddEventComponent},
  {path:"admin", component:AdminComponent},
  {path:"admin/:id", component:AdminEventByIdComponent},
  {path:"admin/edit/:id", component:EditEventComponent}, 
  {path:":id", component:EventByIdComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
