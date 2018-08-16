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
    photo: 'assets/images/face-1.jpg',
    text: `Eu sempre tive vontade de ter um equipamento de tradução de conteudo digital para braile, 
    porém o custo elevado dos equipamentos disponiveis sempre foi uma barreira para mim. 
    Quando conheci o Lebraile foi amor a primeira vista ”`,
    title: 'Jhone Doe',
    subtitle: 'Deficiente Visual'
  }, {
    photo: 'assets/images/face-2.jpg',
    text: `Nossa escola estava buscando algum equipamento para uma nova sala exclusiva para deficientes visuais.
    Porém o custo elevado era realmente um limitador, o Lebraile foi a solução ideal para montarmos nossa sala.
    Agora podemos alfabetizar nossas crianças. `,
    title: 'Adam Smith',
    subtitle: 'Escola para PCD'
  }, {
    photo: 'assets/images/face-4.jpg',
    text: `Meu filho nasceu com uma deficiencia visual e sempre gostou muito de ler. 
    Porém os livros mais novos nem sempre são lançados para braile. 
    Graças ao lebraile meu filho agora está lendo todos livros possiveis da sessão infanto juvenil `,
    title: 'Jessica Hiche',
    subtitle: 'Mãe'
  }, {
    photo: 'assets/images/face-4.jpg',
    text: `"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit modi voluptas vero iusto fuga quos totam eius,
    atis magnam tempora doloribus ducimus dolorem culpa animi beatae tenetur! Sapiente, quia tempora."`,
    title: 'Jessica Hiche',
    subtitle: 'CEO'
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
