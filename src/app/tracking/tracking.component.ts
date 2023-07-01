import { Component } from '@angular/core';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.css']
})

export class TrackingComponent {
 display = "none";
  ngOnInit() {
   }
openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }
  totalData: any[] = [];
  trackingInfo: any ={
      date:"",
      vendor:"",
      companyName:"",
      vendorName:"",
      emailID:"",
      phoneNumber:"",
      implementationPartner:"",
      clientName:"",
      payRateSubmitted:"",
      type:"",
      status:"",
      leadName:""
    }
    filledDetails(){
      this.totalData.push(this.trackingInfo);
      console.log(this.totalData);

      this.display = "none";
}
}
