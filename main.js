document.addEventListener('DOMContentLoaded', () => {
  const lottoNumbersDiv = document.getElementById('lotto-numbers');
  const generateBtn = document.getElementById('generate-btn');
  const themeToggleBtn = document.getElementById('theme-toggle');
  const body = document.body;

  // 번호 생성 함수
  function generateLottoNumbers() {
    const numbers = [];
    while (numbers.length < 6) {
      const num = Math.floor(Math.random() * 45) + 1;
      if (!numbers.includes(num)) {
        numbers.push(num);
      }
    }
    // 정렬
    numbers.sort((a, b) => a - b);
    return numbers;
  }

  // 색상 클래스 가져오기
  function getColorClass(num) {
    if (num <= 10) return 'color-1';
    if (num <= 20) return 'color-2';
    if (num <= 30) return 'color-3';
    if (num <= 40) return 'color-4';
    return 'color-5';
  }

  // UI 업데이트 함수
  function updateUI() {
    const numbers = generateLottoNumbers();
    lottoNumbersDiv.innerHTML = '';
    
    numbers.forEach((num, index) => {
      const ball = document.createElement('div');
      ball.className = `ball ${getColorClass(num)}`;
      ball.textContent = num;
      
      // 애니메이션 효과를 위해 약간의 지연 추가
      setTimeout(() => {
        lottoNumbersDiv.appendChild(ball);
        ball.classList.add('active');
      }, index * 100);
    });
  }

  // 테마 토글 함수
  function toggleTheme() {
    if (body.classList.contains('light-mode')) {
      body.classList.replace('light-mode', 'dark-mode');
      themeToggleBtn.textContent = '라이트 모드';
    } else {
      body.classList.replace('dark-mode', 'light-mode');
      themeToggleBtn.textContent = '다크 모드';
    }
  }

  // 이벤트 리스너
  generateBtn.addEventListener('click', updateUI);
  themeToggleBtn.addEventListener('click', toggleTheme);
});
