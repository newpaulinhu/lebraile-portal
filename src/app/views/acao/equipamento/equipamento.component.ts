import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '../../../../../node_modules/@angular/forms';

@Component({
  selector: 'app-equipamento',
  templateUrl: './equipamento.component.html',
  styleUrls: ['./equipamento.component.scss']
})
export class EquipamentoComponent implements OnInit {
  @Input('backgroundGray') public backgroundGray;
  equipamentoForm: FormGroup;
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.equipamentoForm = this.fb.group({
      ip: ['', [Validators.required]],
      nome: ['', [Validators.required]],
      tempo: ['', [Validators.required]]
    })
  }

}
