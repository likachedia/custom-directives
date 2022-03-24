import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { ChangeBackgroundDirective } from './change-background.directive';
import { UserComponent } from './user/user.component';
import { BgByStatusDirective } from './user/shared/bg-by-status.directive';
import { MapNamesPipe } from './user/shared/map-names.pipe';
import { StringToEnumPipe } from './user/string-to-enum.pipe';
import { ChangeColorDirective } from './change-color.directive';
import { FormatDatePipe } from './format-date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    ChangeBackgroundDirective,
    UserComponent,
    BgByStatusDirective,
    MapNamesPipe,
    StringToEnumPipe,
    ChangeColorDirective,
    FormatDatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
