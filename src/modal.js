const dialog = document.getElementById("FightingDialog");
const showFightingBtn = document.getElementById("showFightingBtn");
const closeBtn = document.getElementById("closeBtn");

// 모달 열기
showFightingBtn.addEventListener("click", () => {
  dialog.showModal();
});

// 모달 닫기
closeBtn.addEventListener("click", () => {
  // 1. 모달 닫기
  dialog.close();

  // 2. 사용자가 입력한 '분야' 가져오기
  const fieldValue = document.getElementById("field").value;

  // 3. 해당 분야로 구글 검색, 혹은 유튜브 검색 새 탭 열기
  // 예: "프로그래밍 강의" 검색
  const searchUrl = `https://www.google.com/search?q=${fieldValue}+공부+방법`;
  // 유튜브를 원하시면: `https://www.youtube.com/results?search_query=${fieldValue}+강의`

  window.open(searchUrl, "_blank"); // 새 탭에서 열기
});
