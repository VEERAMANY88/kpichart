import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Chart, ChartConfiguration, ChartType } from 'chart.js/auto';

@Component({
  selector: 'app-daydashboard',
  standalone: true,
  imports: [],
  templateUrl: './daydashboard.component.html',
  styleUrl: './daydashboard.component.css',
})
export class DaydashboardComponent implements AfterViewInit {
  private jsonData = {
    day_level: [
      {
        achieved: 4,
        achieved_perc: 33,
        color_code: 2.0,
        target: 16,
        trans_date: '2024-11-16',
      },
      {
        achieved: 6,
        achieved_perc: 45,
        color_code: 5.0,
        target: 16,
        trans_date: '2024-11-15',
      },
      {
        achieved: 8,
        achieved_perc: 60,
        color_code: 3.0,
        target: 16,
        trans_date: '2024-11-14',
      },
      {
        achieved: 10,
        achieved_perc: 40,
        color_code: 2.0,
        target: 16,
        trans_date: '2024-11-13',
      },
      {
        achieved: 21,
        achieved_perc: 66,
        color_code: 3.0,
        target: 16,
        trans_date: '2024-11-12',
      },
      {
        achieved: 2,
        achieved_perc: 131,
        color_code: 5.0,
        target: 16,
        trans_date: '2024-11-11',
      },
      {
        achieved: 1,
        achieved_perc: 1,
        color_code: 3.0,
        target: 16,
        trans_date: '2024-11-10',
      },
      {
        achieved: 2,
        achieved_perc: 43,
        color_code: 2.0,
        target: 16,
        trans_date: '2024-11-09',
      },
      {
        achieved: 22,
        achieved_perc: 131,
        color_code: 3.0,
        target: 16,
        trans_date: '2024-11-08',
      },
      {
        achieved: 10,
        achieved_perc: 3,
        color_code: 2.0,
        target: 16,
        trans_date: '2024-11-07',
      },
      {
        achieved: 21,
        achieved_perc: 57,
        color_code: 5.0,
        target: 16,
        trans_date: '2024-11-06',
      },
      {
        achieved: 3,
        achieved_perc: 77,
        color_code: 3.0,
        target: 16,
        trans_date: '2024-11-05',
      },
      {
        achieved: 25,
        achieved_perc: 88,
        color_code: 3.0,
        target: 16,
        trans_date: '2024-11-04',
      },
      {
        achieved: 45,
        achieved_perc: 98,
        color_code: 3.0,
        target: 16,
        trans_date: '2024-11-03',
      },
      {
        achieved: 21,
        achieved_perc: 55,
        color_code: 3.0,
        target: 16,
        trans_date: '2024-10-28',
      },
      {
        achieved: 21,
        achieved_perc: 47,
        color_code: 3.0,
        target: 16,
        trans_date: '2024-10-24',
      },
      {
        achieved: 9,
        achieved_perc: 1,
        color_code: 5.0,
        target: 180,
        trans_date: '2024-10-23',
      },
      {
        achieved: 21,
        achieved_perc: 131,
        color_code: 2.0,
        target: 16,
        trans_date: '2024-10-22',
      },
      {
        achieved: 23.0,
        achieved_perc: 127,
        color_code: 3.0,
        target: 18.0,
        trans_date: '2024-10-21',
      },
    ],
    message: 'Success',
    messagecode: 200,
  };

  ngAfterViewInit(): void {
    const dayLevelData = this.jsonData.day_level;

    const labels = dayLevelData.map((item) => item.trans_date);
    const achievedData = dayLevelData.map((item) => item.achieved);
    const backgroundColors = dayLevelData.map((item) =>
      this.getColorFromCode(item.color_code)
    );

    // Chart data and configuration
    const data = {
      labels: labels,
      datasets: [
        {
          label: 'Achieved',
          data: achievedData,
          backgroundColor: backgroundColors,
          borderWidth: 1,
        },
      ],
    };

    const config: ChartConfiguration<'bar', number[], string> = {
      type: 'bar',
      data: data,
      options: {
        indexAxis: 'y',
        maintainAspectRatio: false,
        responsive: true,
        
        scales: {
          x: {
            title: {
              display: true,
              // text: 'Achieved',
            },
          },
          y: {
            title: {
              display: true,
              // text: 'Date',
            },
          },
        },
      },
    };

    // Create the chart
    new Chart(document.getElementById('myChart') as HTMLCanvasElement, config);
  }

  // Helper to determine bar color based on color code
  private getColorFromCode(colorCode: number): string {
    switch (colorCode) {
      case 2.0:
        return 'rgba(255, 94, 94, 1)';
      case 3.0:
        return 'rgba(255, 170, 0, 1)';
      case 5.0:
        return 'rgba(40, 167, 69, 1)';
      default:
        return 'rgba(201, 203, 207, 0.2)';
    }
  }
}
