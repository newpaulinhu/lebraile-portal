import { Component, OnInit } from '@angular/core';
import { EquipamentoComponent } from './equipamento.component';
import { MatDialogRef } from '@angular/material';
import { EquipamentoService } from '../../../services/equipamento.service';
import { Equipamento } from '../../../models/equipamento';

@Component({
  selector: 'app-lista-equipamento',
  templateUrl: './lista-equipamento.component.html',
  styleUrls: ['./lista-equipamento.component.scss']
})
export class ListaEquipamentoComponent implements OnInit {

  public equipamentos = new Array<Equipamento>();
  
  constructor(
    private dialogRef: MatDialogRef<ListaEquipamentoComponent>,
    private equipamentoService: EquipamentoService) { }

  ngOnInit() {
    this.equipamentoService.listarEquipamentos().subscribe( equipamentos => {
      this.equipamentos = equipamentos;
    });
  }

  removerEquipamento(id: number){
    this.equipamentoService.removerEquipamento(id).subscribe(res => {
      console.log('Equipamento removido com sucesso!')
      this.equipamentoService.listarEquipamentos().subscribe( equipamentos => {
        this.equipamentos = equipamentos;
      });
    });
  }

  close() {
    this.dialogRef.close();
  }
  

}
