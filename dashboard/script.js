const ctx = document.getElementById('visitsChart');

const visitsData = {
  labels: ['월', '화', '수', '목', '금', '토', '일'],
  datasets: [{
    label: '방문자수',
    data: [10, 20, 15, 30, 25, 40, 35],
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
  }]
};

const config = {
  type: 'line',
  data: visitsData,
  options: {
    scales: {
      y: { beginAtZero: true }
    }
  }
};

new Chart(ctx, config);
