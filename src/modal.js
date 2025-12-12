const dialog = document.getElementById("FightingDialog");
const showFightingBtn = document.getElementById("showFightingBtn");
const closeBtn = document.getElementById("closeBtn");

// 모달 열기
showFightingBtn.addEventListener("click", () => {
  dialog.showModal();
});

// 모달 닫기
closeBtn.addEventListener("click", () => {
  dialog.close();
});
