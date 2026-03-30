import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  requisicao=[
    {
      tecnologia:'HTML',
      descricao:'Imagine que você está escrevendo um documento, mas em vez de apenas digitar, você precisa colocar etiquetas (chamadas de tags) para dizer ao computador o que é cada coisa. Sem o HTML, o seu navegador não saberia o que é um título, o que é um link ou onde deve ficar uma imagem'
     },
    {
      tecnologia:'CSS',
      descricao:'Se o HTML é o esqueleto de uma página, o CSS (Cascading Style Sheets, ou Folhas de Estilo em Cascata) é a aparência dela. É através dele que definimos cores, fontes, espaçamentos e onde cada elemento deve ficar posicionado na tela.'
     },
    {
      tecnologia:'JavaScript',
      descricao:'Se o HTML é o esqueleto e o CSS é a pele e a roupa, o JavaScript (JS) é o cérebro e os músculos. Ele é uma linguagem de programação que permite criar conteúdo dinâmico e interativo nas páginas web.'
     },
  ];
}
