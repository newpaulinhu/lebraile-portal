import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Equipamento } from '../../../models/equipamento';
import { EquipamentoService } from '../../../services/equipamento.service';

@Component({
  selector: 'app-equipamento',
  templateUrl: './equipamento.component.html',
  styleUrls: ['./equipamento.component.scss']
})
export class EquipamentoComponent implements OnInit {
  
  public equipamentoForm: FormGroup;
  public equipamentos = new Array<Equipamento>();
  
  constructor(
    private fb: FormBuilder,
    private equipamentoService: EquipamentoService
  ) { }

  cadastrarEquipamento(){
    let equipamento = new Equipamento(this.equipamentoForm.value.id, this.equipamentoForm.value.ip, this.equipamentoForm.value.nome, this.equipamentoForm.value.tempo);
    this.equipamentoService.cadastrarEquipamento(equipamento).subscribe( res => {
      alert('equipamento cadastrado com sucesso')
      this.listarEquipamentos();
    });
  }

  ngOnInit() {
    this.equipamentoForm = this.fb.group({
      id: ['', [Validators.required]],
      ip: ['', [Validators.required]],
      nome: ['', [Validators.required]],
      tempo: ['', [Validators.required]]
    });

    this.listarEquipamentos();
  }

  listarEquipamentos(){
    this.equipamentoService.listarEquipamentos().subscribe( equipamentos => {
      this.equipamentos = equipamentos;
    });
  }

}
