import { Component, OnInit } from '@angular/core';
import {ApplicantService} from "../../../../_service/applicant.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {


  chartOptions;
  application;

  deliveryItemDetails = [];
  days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  weeklyDeliveries = []

  obj= {
    pd:{
      deliveries:0,
      completed: 0,
      cancelled: 0
    },
    id:{
      deliveries:0,
      completed: 0,
      cancelled: 0
    },
    pid: {
      deliveries: 0,
      completed: 0,
      cancelled: 0
    }
  }

  total={
    name:'Total',
    data: [],
    color: '#0c8dc0'
  }
  total2={
    name:'Completed',
    data: [],
    color: '#018002'
  }
  total3={
    name:'Cancelled',
    data: [],
    color: '#ff0a03'
  }


  constructor(private applicantService: ApplicantService, private router: Router) {
    this.fillChart();

  }

  getAllApplication() {
    this.applicantService.getAllApplication().subscribe((application) => {
      this.application = application;

      this.setvalues(application)
    })
  }

  applicationdata=[]
  setvalues(application){
  //  console.log(application)
    this.applicationdata=application
    //console.log(this.applicationdata)

    let ApplicationReq;
    let itemReq=0;
    let itemcountCom=0;
    let passcount=0;
    let passcountCom=0;
    let itemPass=0;
    let itempasscountCom=0;

    for(let x=0; x<=this.applicationdata.length-1; x++){
      ApplicationReq=this.applicationdata[x]
      if(ApplicationReq.type=="P")
      {
        passcount++
        //console.log(ApplicationReq)
        if(ApplicationReq.tokenDTO==null){

            passcountCom++

        }
      }
      if(ApplicationReq.type=="I")
      {
        itemReq++
        if(ApplicationReq.tokenDTO==null){
            itemcountCom++
        }
      }
      if(ApplicationReq.type=="IP"){
        itemPass++
        if(ApplicationReq.tokenDTO==null){
          itempasscountCom++
        }
      }


    }
    console.log(passcountCom)
    console.log(itemcountCom)
    console.log(itempasscountCom)
     this.obj.pd.deliveries=passcount
    this.obj.pd.completed=passcountCom
    this.obj.pd.cancelled=passcount-passcountCom
    this.obj.id.deliveries=itemReq
    this.obj.id.completed=itemcountCom
    this.obj.id.cancelled=itemReq-itemcountCom
    this.obj.pid.deliveries=itemPass
    this.obj.pid.completed=itempasscountCom
    this.obj.pid.cancelled=itemPass-itempasscountCom



    //console.log(this.obj.pd.deliveries)
    this.weeklyDeliveries.push(this.obj)
    this.total.data.push(passcount,itemReq,itemPass)
    this.total2.data.push(passcount-passcountCom,itemReq-itemcountCom,itemPass-itempasscountCom)
    this.total3.data.push(passcountCom,itemcountCom,itempasscountCom)
    this.chartOptions.series.push(this.total,this.total2,this.total3)
    // console.log(this.total)
   // console.log(this.chartOptions)
  }

  ngOnInit(): void {
    this.fillChart();
    this.getAllApplication();
  }

  fillChart() {
    this.chartOptions = {
      series: [

      ],
      chart: {
        type: "bar",
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "35%",
          endingShape: "rounded"
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      xaxis: {
        categories: [
          "Passenger Reequests",
          "Item Reequests",
          "Item Passenger Reequests",
        ]
      },
      yaxis: {
        title: {
          text: "Requests"
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + " thousands";
          }
        }
      }
    };
  }
}
