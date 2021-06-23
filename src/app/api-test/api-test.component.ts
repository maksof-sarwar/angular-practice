import { Output } from '@angular/core';
import { Component, Input, OnInit,EventEmitter } from '@angular/core';
import {ApiService} from '../api.service';
@Component({
  selector: 'app-api-test',
  templateUrl: './api-test.component.html',
  styleUrls: ['./api-test.component.scss']
})
export class ApiTestComponent implements OnInit {

  constructor( private api: ApiService) { }
    @Input() value :any;
    message :string = 'hello'
    @Output() messageEvent = new EventEmitter<string>();;
    ngOnInit(): void {
    }

  async getpersonDetail(){
      try{
            var res = await this.api.get(`http://localhost:3000/api/person/detail`,'','')
            console.log(res)
      }catch(err){
          console.log(err);
      }
  }
    sendMessage(){
        this.messageEvent.emit(this.message)
    }
}
