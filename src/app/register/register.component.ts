import { Component } from '@angular/core';
import { MovimentListModel } from '../model/moviment-list';
import { EDirection } from '../enum/edirection';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ControlServiceService } from '../services/control-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  valor:number | undefined;
  justification:string | undefined;
  valuesList:string | undefined;

  activityList: any[] = [];
  directionValue:EDirection;
  registerMoney: FormGroup;
  valueRegister:any;

  justificationTxt:boolean = false;

  constructor(private fb: FormBuilder, private service: ControlServiceService){}

  ngOnInit() {

    this.getAllRegisters();

    this.registerMoney = this.fb.group({
      valueRegister: new FormControl('-',Validators.required),
      justification: new FormControl('',Validators.required),
      directionValue: new FormControl('',Validators.required),
    });

  }

  addValue(){

    let directionValueEnum;
    this.registerMoney.value.directionValue == "EXIT" ?  directionValueEnum = EDirection.EXIT : directionValueEnum = EDirection.ENTER;

    let item = new MovimentListModel;
    let searchID = this.activityList.length - 1;

    item.id = null;
    item.justtificationtxt = this.registerMoney.value.justification;
    item.dateregister = this.formatDate(new Date());
    item.currencyvalue = this.registerMoney.value.valueRegister;
    item.direction = directionValueEnum;

    this.service.postCost(item).subscribe(msg => {
      this.activityList = [];
      this.getAllRegisters();
    });
    this.registerMoney.reset();
  }

  getAllRegisters(){

    this.service.getAll().subscribe(data => {
      data.forEach(item => {
        this.activityList.push(item);
      });
    });
  }

  checkInputCurrency(event:any){

    let valueInput = event.target.value;

    if(valueInput =='' || valueInput == undefined || valueInput == "R$ 0,00"){
      this.registerMoney.controls["valueRegister"].setErrors({'incorrect': true});
    }
  }

  checkInputJustification(event:any){

    let valueInput = event.target.value;

    if(valueInput =='' || valueInput == undefined){
      this.registerMoney.controls["justification"].setErrors({'incorrect': true});
      this.justificationTxt = true;
    } else {
      this.justificationTxt = false;
    }
  }

  padTo2Digits(num: number) {
    return num.toString().padStart(2, '0');
  }
  formatDate(date: Date) {
    return (
      [
        date.getFullYear(),
        this.padTo2Digits(date.getMonth() + 1),
        this.padTo2Digits(date.getDate()),
      ].join('-') +
      ' ' +
      [
        this.padTo2Digits(date.getHours()),
        this.padTo2Digits(date.getMinutes()),
        this.padTo2Digits(date.getSeconds()),
      ].join(':')
    );
  }



}
