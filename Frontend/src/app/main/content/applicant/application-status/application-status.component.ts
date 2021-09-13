import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {ApplicantService} from "../../../../_service/applicant.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-application-status',
  templateUrl: './application-status.component.html',
  styleUrls: ['./application-status.component.css']
})
export class ApplicationStatusComponent implements OnInit {

  @ViewChild('applicantFrom', {static: true}) public applicantFrom: NgForm;
  @ViewChild('passengerForm', {static: true}) public passengerForm: NgForm;
  @ViewChild('applicationStatus', {static: true}) public applicationStatus: NgForm;


  ItemApp= {

    applicationID: "",
    approval: "",
    arrivaleDate: "",
    depatureDate: "",
    reason: "",
    vehicleType: "",
    destination: "",
    type:'I',
    itemApplication: {
      itemItemApplications: []
    }
  }

  Pass={
    item:{
      itemID:'',
      itemName:'',
      qty:''
    }
  };

  tblIndex;
  plus:boolean=true; //plus button
  pen:boolean=false;//pen button


  constructor(private applicant: ApplicantService, private router: Router) {
    //this.Pass = this.getNewPassenger();
  }

  ngOnInit(): void {

  }

  onSubmit() {
    console.log(this.ItemApp);
    this.applicant.addItem(this.ItemApp).subscribe((deliveryDetail) => {
      this.router.navigate(['/main/available_transports'])
    })
  }

  btnText = '';
  flag;
  onSubmitPassenger() {
    if (this.plus == true) {
     let check=this.Pass;
      this.flag=1;

      console.log(check);
      for (let x=0; x<=this.ItemApp.itemApplication.itemItemApplications.length-1; x++)
      {
        let a=this.ItemApp.itemApplication.itemItemApplications[x];
        console.log(a);
        if(a.item.itemID==check.item.itemID){
           this.flag=0;
           break;
        }
        else {
          this.flag=1;
        }

      }
      if(this.flag==1)
      {
        this.ItemApp.itemApplication.itemItemApplications.push(this.Pass);
      }

      //this.passengerForm.resetForm();
    }
    else if(this.pen==true){
      this.ItemApp.itemApplication.itemItemApplications[this.tblIndex] = this.Pass
    }

    this.setNewPassenger();
  }

  setNewPassenger() {
    this.Pass = this.getNewPassenger();
    this.passengerForm.resetForm(this.Pass.item);
    this.plus=true;
    this.pen=false;
  }

  chkPassengerId() {
    if (this.Pass.item.itemID != '') {
       this.flag = 1;
    }
  }

  setPassenger(item,i) {
    this.tblIndex = i;
    this.Pass.item.itemID = item.itemID;
    this.Pass.item.itemName=item.itemName;
    this.Pass.item.qty=item.qty;
    this.btnText = 'Update';
    this.pen=true;
    this.plus=false;
  }

  getNewPassenger() {
    return {
      item: {
        itemID:'',
        itemName:'',
        qty:''
      }
    };
  }


}
