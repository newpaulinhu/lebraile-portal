import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Equipamento } from '../../../models/equipamento';
import { EquipamentoService } from '../../../services/equipamento.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-equipamento',
  templateUrl: './equipamento.component.html',
  styleUrls: ['./equipamento.component.scss']
})
export class EquipamentoComponent implements OnInit {
  
  public equipamentoForm: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EquipamentoComponent>,
    private equipamentoService: EquipamentoService
  ) { }

  close() {
    this.dialogRef.close();
  }
  
  cadastrarEquipamento(){
    const equipamento = new Equipamento(this.equipamentoForm.value.ip, 
                                      this.equipamentoForm.value.nome, 
                                      this.equipamentoForm.value.tempo);
    
    this.equipamentoService.cadastrarEquipamento(equipamento).subscribe( res => {
      this.dialogRef.close();
    });
  }

  ngOnInit() {
    this.equipamentoForm = this.fb.group({
      ip: ['', [Validators.required]],
      nome: ['', [Validators.required]],
      tempo: ['', [Validators.required]]
    });
  }


}
