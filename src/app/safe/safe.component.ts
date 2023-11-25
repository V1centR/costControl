import { Component } from '@angular/core';
import { Message } from 'primeng/api/message';

@Component({
  selector: 'app-safe',
  templateUrl: './safe.component.html',
  styleUrl: './safe.component.css'
})
export class SafeComponent {

  valueSafe:any;
  alertMessage:Message[] | undefined;

  ngOnInit() {
    this.alertMessage = [{ severity: 'info', summary: 'OBS:', detail: 'Valor sendo poupado.' }];
}

}
