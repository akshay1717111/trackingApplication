import { Component } from '@angular/core';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.css']
})

export class TrackingComponent {
 display = "none";
  ngOnInit() {
    this.totalData.forEach(item => {
      item.isEditing = false;
    });
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
      companyName:"",
      vendorName:"",
      emailID:"",
      phoneNumber:"",
      implementationPartner:"",
      clientName:"",
      payRateSubmitted:"",
      status:"",
      leadName:""
    }
    filledDetails(){
      this.totalData.push(this.trackingInfo);
      console.log(this.totalData);

      this.display = "none";
}
editItem(index: number) {
  this.totalData[index].isEditing = true;
}

saveItem(index: number) {
  this.totalData[index].isEditing = false;
}


}
