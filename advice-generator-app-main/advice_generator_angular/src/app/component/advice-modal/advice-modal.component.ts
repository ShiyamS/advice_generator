import { Component, OnInit, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ApiService } from '../../service/api.service';

declare interface AdviceData {
  slip: {
    id: number;
    advice: string
  }
}

@Component({
  selector: 'app-advice-modal',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './advice-modal.component.html',
  styleUrl: './advice-modal.component.css'
})
export default class AdviceModalComponent implements OnInit {
  advice_id!: number;
  advice_message!: string;
  api = inject(ApiService)
  data!: AdviceData;

  ngOnInit(): void {
    this.gettingAdvice();
  }



  gettingAdvice() {
    this.api.getAdvice().subscribe({
      next: (res: AdviceData) => {
        console.log(res.slip);
        this.advice_id = res.slip.id;
        this.advice_message = res.slip.advice;
      }, error: (err: any) => {
        console.log("Faild to fetch Advice", err);
      }
    });
  }
}
