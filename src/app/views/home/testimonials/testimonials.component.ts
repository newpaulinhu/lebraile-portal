import { Component, OnInit, Input } from '@angular/core';
import { NguCarousel } from '@ngu/carousel';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {
  @Input('backgroundGray') public backgroundGray;
  public carouselOptions: NguCarousel;
  public testimonials = [{
    photo: 'assets/images/anderson.png',
    text: `"Eu sempre tive vontade de ter um equipamento de tradução de conteudo digital para braile, 
    porém o custo elevado dos equipamentos disponiveis sempre foi uma barreira para mim. 
    Quando conheci o Lebraile foi amor a primeira vista ”`,
    title: 'Anderson',
    subtitle: 'Deficiente Visual'
  }, {
    photo: 'assets/images/gustavo.png',
    text: `O Lebraile pode ser utilizado em escolas, e para o aprendizado de novas linguas,
    é um projeto que está renovando a forma que se é introduzida o braile.
    Realmente irá facilitar o acesso e o projeto não pode parar`,
    title: 'Gustavo',
    subtitle: 'Deficiente Visual'
  }]
  constructor() { }

  ngOnInit() {
    this.carouselOptions = {
      grid: { xs: 1, sm: 2, md: 3, lg: 3, all: 0 },
      slide: 2,
      speed: 400,
      interval: 4000,
      point: {
        visible: true
      },
      load: 2,
      touch: true,
      loop: true
    }
  }

}
