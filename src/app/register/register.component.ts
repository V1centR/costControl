import { Component } from '@angular/core';
import { MovimentListModel } from '../model/moviment-list';
import { EDirection } from '../enum/edirection';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  valor:number | undefined;
  justification:string | undefined;
  valuesList:string | undefined;

  activityList: MovimentListModel[] = [];
  directionValue:EDirection;
  registerMoney: FormGroup;
  valueRegister:any;
  //item = new MovimentListModel;

  justificationTxt:boolean = false;

  constructor(private fb: FormBuilder){}

  ngOnInit() {

    this.activityList.push(
      {id:1,justtificationTxt:"Salário",dateRegister:"2023-11-01 18:28:18",currencyValue: 18000 ,direction: EDirection.ENTER},
      {id:2,justtificationTxt:"Aluguel",dateRegister:"2023-11-10 12:28:33",currencyValue: 1200 ,direction: EDirection.EXIT}

    );

    console.log(this.activityList);


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

    item.id = searchID[0] + 1;
    item.justtificationTxt = this.registerMoney.value.justification;
    item.dateRegister = this.formatDate(new Date());
    item.currencyValue = this.registerMoney.value.valueRegister;
    item.direction = directionValueEnum;

    this.activityList.push(item);
    this.registerMoney.reset();
  }

  checkInputCurrency(event:any){

    let valueInput = event.target.value;

    if(valueInput =='' || valueInput == undefined || valueInput == "R$ 0,00"){
      console.log("EMPTY VALUE");
      this.registerMoney.controls["valueRegister"].setErrors({'incorrect': true});
    } else {
      console.log(valueInput);
    }
  }

  checkInputJustification(event:any){

    let valueInput = event.target.value;

    if(valueInput =='' || valueInput == undefined){
      console.log("EMPTY VALUE");
      this.registerMoney.controls["justification"].setErrors({'incorrect': true});
      this.justificationTxt = true;
    } else {
      console.log(valueInput);
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
