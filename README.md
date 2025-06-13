# 나만의 사이트 대시보드 프로젝트

이 저장소는 간단한 방문 통계 대시보드를 제공합니다. 모든 코드는 `dashboard/` 디렉터리 안에 있으며, HTML, CSS, JavaScript만 사용했습니다.

## 파일 구조

```
webwave/
├── AGENTS.md
├── README.md
└── dashboard/
    ├── index.html
    ├── script.js
    └── style.css
```

## 주요 코드

### index.html
```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>나의 사이트 대시보드</title>
  <link rel="stylesheet" href="style.css">
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>
<body>
  <h1>나의 사이트 대시보드</h1>
  <div>
    <canvas id="visitsChart"></canvas>
  </div>
  <script src="script.js"></script>
</body>
</html>
```

### style.css
```css
body {
  font-family: Arial, sans-serif;
  margin: 20px;
}

canvas {
  max-width: 600px;
}
```

### script.js
```javascript
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
```

## 사용 방법

1. 이 저장소를 클론합니다.
2. `dashboard/index.html` 파일을 브라우저에서 열면 방문 통계 차트를 볼 수 있습니다.
