import { Component, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-practice';
  a =true;
constructor(private vcr : ViewContainerRef , private cfr : ComponentFactoryResolver ){}
async load(){
    this.vcr.clear();
    const {ApiTestComponent} = await import ('./api-test/api-test.component')
    var component = this.vcr.createComponent(
        this.cfr.resolveComponentFactory(ApiTestComponent) 
    )
    component.instance.message 
    console.log(component.instance.message)   
}

// load(){
//     this.router.navigate(['/apiTest'])
// }
    message:any;

    receiveMessage($event:any) {
        this.message = $event
    }
}
