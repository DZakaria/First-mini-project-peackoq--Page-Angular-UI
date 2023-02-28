import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
// import {FormGroup} from "@angular/forms";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  constructor(private  http:HttpClient) {}


  /*
  onSubmit(data){
    this.http('http:localhost:27017/cre',data)
      .subscribe((result)=>{
        console.log("result" , result)
    });

    console.log(data);
  }
*/








  ngOnInit(): void {

  }

}




