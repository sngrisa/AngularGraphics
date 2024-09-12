import { Component, Directive } from '@angular/core';
import { ChartOptions } from 'chart.js';

@Component({
  selector: 'app-bars',
  templateUrl: './bars.component.html',
  styleUrls: ['./bars.component.scss'],
  standalone: false,
  imports:[]
})
  
export class BarsComponent {


  charLabels: string[] = ["Intel", "Nvidia", "AMD"];

  data = {
  labels: this.charLabels,
  datasets: [{
    label: `Acciones de las 3 grandes empresas al año del ${new Date().getFullYear()}`,
    data: [65, 59, 80, 81, 56, 55, 40],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(201, 203, 207, 0.2)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ],
    borderWidth: 1
  }]
};

  chartOptions: ChartOptions = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  
 }
}
