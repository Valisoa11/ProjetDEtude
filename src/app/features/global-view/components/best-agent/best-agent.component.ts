import { Component, OnInit } from '@angular/core';
import { ClassementService } from '../../../../core/services/classement/classement.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-best-agent',
  imports: [CommonModule],
  templateUrl: './best-agent.component.html',
  styleUrl: './best-agent.component.scss'
})
export class BestAgentComponent implements OnInit{
  cards: any[] = [];

  constructor(private cardService: ClassementService) {}

  ngOnInit(): void {
    this.cardService.getCards().subscribe((data) => {
      this.cards = data;
    });
  }

}
