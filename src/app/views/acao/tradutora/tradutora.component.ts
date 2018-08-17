import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '../../../../../node_modules/@angular/forms';

@Component({
  selector: 'app-tradutora',
  templateUrl: './tradutora.component.html',
  styleUrls: ['./tradutora.component.scss']
})
export class TradutoraComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  traduzir(event) {
    if (new RegExp('^[a-zA-Z\u00C0-\u00FF ]').test(event.key)){
      console.log(event.key)
    }
  }

}
