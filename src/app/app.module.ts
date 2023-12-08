import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EventComponent } from './event/event.component';
import { LucideAngularModule, Search, Instagram, Facebook, Youtube, ArrowLeftCircle, Plus} from 'lucide-angular';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { EventByIdComponent } from './event-by-id/event-by-id.component';
import { RouterModule } from '@angular/router';
import { AdminEventByIdComponent } from './admin-event-by-id/admin-event-by-id.component';
import { AddEventComponent } from './add-event/add-event.component';
import { EditEventComponent } from './edit-event/edit-event.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EventComponent,
    FooterComponent,
    AdminComponent,
    EventByIdComponent,
    AdminEventByIdComponent,
    AddEventComponent,
    EditEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LucideAngularModule.pick({ Search, Instagram, Facebook, Youtube, ArrowLeftCircle, Plus }),
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
