import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {GeneralManagerService} from "../../../../_service/general-manager.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-tv-program',
  templateUrl: './tv-program.component.html',
  styleUrls: ['./tv-program.component.css']
})
export class TvProgramComponent implements OnInit {

  @ViewChild('tvProgramForm', {static: true}) public tvProgramForm: NgForm;
  tvProgram = {
    programID: '',
    programName: '',
    startingDate: '',
    endingDate: '',
    transportCost: '',
    producer: '',

  };

  TvDB;
  program;
  btnText = 'Add';
  tblIndex;

  constructor(private generalManagerService: GeneralManagerService, private router: Router) {
    this.program = this.getNewProgram();
  }

  ngOnInit(): void {
    this.getAll();
  }

  onSubmit() {
    if (this.btnText === 'Add') {
      this.generalManagerService.addTVProgram(this.tvProgram).subscribe((tvProgram) => {
        this.router.navigate(['/main/tv_program'])
        this.getAll();
      })
     // this.tvProgram.push(this.tvProgram);
    } else if (this.btnText === 'Update') {
      this.tvProgram[this.tblIndex] = this.tvProgram
    }
    this.setNewProgram();



  }

  getAll(){
    this.generalManagerService.getTvProgram().subscribe((tvProgram) => {
      this.TvDB = tvProgram;
      console.log(this.TvDB);
    })

  }

  y;
  removeProgram(tvProgram,i) {
    this.y=tvProgram.programID;
    this.generalManagerService.deleteTVProgram(this.y).subscribe((reply) => {
      if (reply) {
        this.router.navigate(['/main/tv_program'])
        console.log(this.y);
        this.getAll();
      }
    })
  }



  // onSubmitItem() {
  //   if (this.btnText === 'Add') {
  //     this.deliveryDetail.deliveryItemDetails.push(this.item);
  //   } else if (this.btnText === 'Update') {
  //     this.deliveryDetail.deliveryItemDetails[this.tblIndex] = this.item
  //   }
  //   this.setNewItem();
  // }

  setProgram(program, i) {
    this.tblIndex = i;
    this.tvProgram.programID= program.programID;
    this.tvProgram.programName = program.programName;
    this.tvProgram.producer = program.producer;
    this.tvProgram.endingDate= program.endingDate;
    this.tvProgram.startingDate = program.startingDate;
    this.tvProgram.transportCost=program.transportCost;
   // this.tvProgram = 'Update';
  }

  setNewProgram() {
    this.program = this.getNewProgram();
    this.tvProgramForm.resetForm(this.program);
    this.btnText = 'Add';
  }

  getNewProgram() {
    return {
      programID: '',
      programName: '',
      startingDate: '',
      endingDate: '',
      transportCost: '',
      producer: ''
    };
  }
}
