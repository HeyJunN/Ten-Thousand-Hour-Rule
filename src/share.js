const shareBtn = document.querySelector(".share-btn");
const shareResultSection = document.querySelector(".result");

shareBtn.addEventListener("click", async () => {
  if (shareResultSection.classList.contains("hidden")) {
    alert("먼저 훈련 시간을 계산해 주세요!");
    return;
  }

  // 공유할 텍스트 가져오기
  const field = document.querySelector(".field-result").textContent;
  const time = document.querySelector(".time-result").textContent;

  const shareTitle = "1만 시간의 법칙";
  const shareText = `당신은 ${field} 전문가가 되기 위해서 대략 ${time}일 이상 훈련하셔야 합니다!`;
  const shareUrl = window.location.origin + window.location.pathname;

  // Web Share API (모바일) 또는 클립보드 복사 (PC)
  if (navigator.share) {
    try {
      await navigator.share({
        title: shareTitle,
        text: shareText,
        url: shareUrl,
      });
    } catch (err) {
      console.log("공유 취소 또는 에러:", err);
    }
  } else {
    try {
      await navigator.clipboard.writeText(
        `${shareTitle}\n${shareText}\n${shareUrl}`
      );
      alert("결과가 클립보드에 복사되었습니다. 원하는 곳에 붙여넣기 하세요!");
    } catch (err) {
      alert("이 브라우저에서는 공유 기능을 지원하지 않습니다.");
    }
  }
});
