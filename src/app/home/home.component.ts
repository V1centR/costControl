import { Component } from '@angular/core';
import { ControlServiceService } from '../services/control-service.service';
import { Daterange } from '../model/daterange';
import { Message } from 'primeng/api/message';
import { Consolidated } from '../model/consolidated';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  date:any;
  alertMessage:Message[] | undefined;
  showElements:boolean = false;
  dailyCost:any[];
  consolidatedObj = new Consolidated;

  selectedDate: Date;

  constructor(private service: ControlServiceService){}

  ngOnInit() {

    // Check if localStorage has set 'selectedDate'
    const storedDate = localStorage.getItem('selectedDate');

    if (storedDate) {
      this.selectedDate = new Date(storedDate);
      this.getDate(storedDate.slice(0, 10));
    } else {
      this.selectedDate = new Date();
      this.saveDate();
    }
    
  }

  saveDate() {
    // Format the date to "yyyy-mm-dd"
    const formattedDate = this.formatDate(this.selectedDate);
    localStorage.setItem('selectedDate', formattedDate);

    this.getDate(formattedDate.slice(0, 10));
  }

  onDateSelect(event: any) {
    // Update the selected date when a date is selected in p-calendar
    this.selectedDate = event;
    this.saveDate();
  }

//TODO Move to ultils module
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
//TODO Move to ultils module
padTo2Digits(num: number) {
    return num.toString().padStart(2, '0');
}

getDate(dateSelected:string){

    let dateRange = new Daterange;

    dateRange.startDate = dateSelected;
    dateRange.consolidated = "true";

    this.service.getAllByDate(dateRange).subscribe(data => {
      
      this.consolidatedObj.enter = data['enter'].toFixed(2);
      this.consolidatedObj.exit = data['exit'].toFixed(2);
      this.consolidatedObj.dailyLimit = data['dailyLimit'].toFixed(2);

      console.log(this.consolidatedObj);

      if(this.consolidatedObj.enter == 0.00) {
        this.showElements = false;
        this.alertMessage = [{ severity: 'info', summary: 'OBS:', detail: 'Sem lançamentos no período.' }];
      }

      if(this.consolidatedObj.enter > 0){
        this.alertMessage = [];
        this.showElements = true;
        console.log("SHOW ITEMS");
      }
     
      
    });

    console.log(this.date);
}



}
