import { Component, AfterViewInit, ElementRef } from '@angular/core';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-chartdetails',
  templateUrl: './chartdetails.component.html',
  styleUrls: ['./chartdetails.component.css']
})
export class ChartdetailsComponent implements AfterViewInit {
  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    const canvas = this.elementRef.nativeElement.querySelector('#myChart');
    const ctx = canvas.getContext('2d');

    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [
        {
          label: 'My Dataset',
          data: [10, 20, 30, 40, 50, 60],
          backgroundColor: 'rgba(0, 123, 255, 0.5)',
          borderColor: 'rgba(0, 123, 255, 1)',
          borderWidth: 1,
        },
      ],
    };

    const options = {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };

    new Chart(ctx, {
      type: 'bar',
      data: data,
      options: options,
    });
  }
}
 {

}
