import { Component, OnInit } from '@angular/core';
import { MyapiService} from '../Myapi.Service';
import { database } from '../database';
import {post} from '../postal';
@Component({
  selector: 'app-filedata',
  templateUrl: './filedata.component.html',
  styleUrls: ['./filedata.component.css']
})
export class FiledataComponent implements OnInit {

  constructor( private mydata : MyapiService) { }
  
     listdata : database[];
     listpost : post[];
     postdata :post;
  ngOnInit() {
    this.mydata. getdata()
    .subscribe(
       data=>
       {
         this.listdata = data;
       }
    );


    this.mydata. getparam()
    .subscribe(
      data=>
      {
        this.listpost = data;
      }
   );

       var opost = new post();

       opost.body ="soubhagya";
       opost.id=1;
       opost.title="swain";

       this.mydata.postdata(opost)
        .subscribe(
          data=>
          {
            this.postdata = data;
          }
        )       

    
  }

}
