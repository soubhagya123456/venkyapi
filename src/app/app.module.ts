import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FiledataComponent } from './filedata/filedata.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AssignmentComponent } from './assignment/assignment.component';
import { MyapiService} from './Myapi.Service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    AssignmentComponent,
    FiledataComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: ' AIzaSyCSTnVwijjv0CFRA4MEeS-H6PAQc87LEoU	'
    }),
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [MyapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
