const form = document.querySelector("form");
const resultSection = document.querySelector(".result");

// 1. 초기 상태: 결과 섹션 숨기기
resultSection.classList.add("hidden");

// 2. 폼 제출(계산) 로직
form.addEventListener("submit", (event) => {
  event.preventDefault(); // 새로고침 방지

  const fieldInput = document.getElementById("field");
  const hourInput = document.getElementById("hour");

  const fieldValue = fieldInput.value.trim();
  const hourValue = hourInput.value.trim();

  // 유효성 검사: 값이 비어있으면 경고
  if (fieldValue === "") {
    alert("어떤 분야의 전문가가 되고 싶으신가요?");
    fieldInput.focus();
    return;
  }
  if (hourValue === "") {
    alert("하루에 몇 시간씩 훈련하실 건가요?");
    hourInput.focus();
    return;
  }
  if (isNaN(hourValue) || hourValue <= 0 || hourValue > 24) {
    alert("시간은 0보다 크고 24 이하의 숫자로 입력해 주세요.");
    hourInput.focus();
    return;
  }

  // 1만 시간의 법칙 계산 (10000시간 / 하루 훈련 시간 = 필요한 일수)
  const trainingTime = Math.ceil(10000 / Number(hourValue));

  // 결과 데이터 매핑 (클래스 선택자 활용)
  const fieldResult = resultSection.querySelector(".field-result");
  const timeResult = resultSection.querySelector(".time-result");

  fieldResult.textContent = fieldValue;
  timeResult.textContent = trainingTime;

  // 결과 보여주기
  resultSection.classList.remove("hidden");
});
