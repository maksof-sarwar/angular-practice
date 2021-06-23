import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http : HttpClient) { }

  async get(url : any, headers : any, params : any){
      try{
        let res = await this.http.get(url,{headers: headers, params : params}).toPromise()
        return Promise.resolve(res);
      }catch(err){
          return Promise.reject(err);
      }
  }
//   post(url, headers, params, body){

//   }
}
