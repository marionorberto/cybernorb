import { Component, NgModule } from '@angular/core';
import { TopNavbarComponent } from '../top-navbar/top-navbar.component';
import { FooterComponent } from "../footer/footer.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-news',
  standalone: true,
  imports: [
    TopNavbarComponent,
    FooterComponent,
    FormsModule,
    CommonModule,
    DialogModule,
    ButtonModule
],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {

  visible: boolean = false;
  position: string = 'center';
  breaknewsData = [
    {
      author: 'marionorberto',
      title: 'Redes Wi-Fi: Mude seu SSID ou Tenha Sua Rede Atacada por Hackers',
      description: 'Aprenda a proteger sua rede Wi-Fi começando pelo SSID. Descubra como personalizar, evitar ataques e fortalecer a segurança da sua rede sem fio.',
      urlImage: 'b1.jpg',
      date: '24, may 2024',
    },
     {
      author: 'carlseagan',
      title: 'Perícia Forense Digital e segurança digital',
      description: 'Perícia forense digital é essencial para investigar crimes e ataques cibernéticos. Descubra suas etapas e habilidades necessárias para essa carreira.',
      urlImage: 'b2.jpg',
      date: '17, ago 2024',
    },
     {
      author: 'diegobrown',
      title: 'Utilização de Filtros no Wireshark para Cibersegurança',
      description: 'Wireshark é uma ferramenta gratuita de código aberto para capturar e analisar tráfego de redes. Aprenda seus principais filtros, configuração e uso.',
      urlImage: 'b3.jpg',
      date: '24, may 2024',
    },
     {
      author: 'narbsill',
      title: 'Modos de Rede em Sistemas virtuais.',
      description: 'Conheça os três principais modos de rede em virtualização, seus benefícios e exemplos de virtualizadores. O artigo ideal para aprender mais sobre o tema.',
      urlImage: 'b4.jpg',
      date: '24, may 2024',
    }
  ];

  hackerAttacksData = [
    {
      id: '23ee2',
      title: 'Warning: Over 2,000 Palo Alto Networks Devices Hacked in Ongoing Attack Campaign'
    },
    {
      id: '23ee2',
      title: 'China-Aligned MirrorFace Hackers Target EU Diplomats with World Expo 2025 Bait'
    },
    {
      id: '23ee23',
      title: 'Winos 4.0 Malware Infects Gamers Through Malicious Game Optimization Apps'
    },
    {
      id: '23ee2vf',
      title: 'AndroxGh0st Malware Integrates Mozi Botnet to Target IoT and Cloud Services'
    },
    {
      id: '23ee2f4',
      title: 'New Android Banking Malware ToxicPanda Targets Users with Fraudulent Money Transfers'
    },
    {
      id: '23ee233',
      title: 'North Korean Group Collaborates with Play Ransomware in Significant Cyber Attack'
    }
  ];

  iaData = [
    {
      id: '23accs',
      title: 'JetBrains 2024.3 release elevates the developer experience'
    },
    {
      id: '23ras',
      title: 'Foundem vs. Google: How one startup’s story shaped big tech regulations'
    },
    {
      id: '12323as',
      title: 'GitHub Copilot now supports multiple LLMs'
    },
    {
      id: '2223as',
      title: 'GitHub Copilot users gain access to Stack Overflow knowledge'
    },
     {
      id: '1223as',
      title: 'JetBrains launches AI model for software development tasks'
    },
    {
      id: '2223as',
      title: 'Holistic’s open-source tools counter AI development risks'
    }
  ]

  showDialog() {
    this.position = "bottom";
    this.visible = true;
  }
}
