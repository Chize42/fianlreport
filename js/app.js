$(function () {
  $(".mcat").click(function () {
    $(".mphoto, .mgame").css({
      "text-decoration": "none",
      color: "#bbbbbb",
    });
    $(this).css({
      "text-decoration-line": "underline",
      color: "#efefef",
    });
    $(".cat").css({
      "z-index": 2,
    });
    $(".photo").css({
      "z-index": 0,
    });
    $(".game").css({
      "z-index": 0,
    });
  });
  $(".mphoto").click(function () {
    $(".mcat, .mgame").css({
      "text-decoration": "none",
      color: "#bbbbbb",
    });
    $(this).css({
      "text-decoration-line": "underline",
      color: "#efefef",
    });
    $(".cat").css({
      "z-index": 0,
    });
    $(".photo").css({
      "z-index": 2,
    });
    $(".game").css({
      "z-index": 0,
    });
  });
  $(".mgame").click(function () {
    $(".mphoto, .mcat").css({
      "text-decoration": "none",
      color: "#bbbbbb",
    });
    $(this).css({
      "text-decoration-line": "underline",
      color: "#efefef",
    });
    $(".cat").css({
      "z-index": 0,
    });
    $(".photo").css({
      "z-index": 0,
    });
    $(".game").css({
      "z-index": 2,
    });
  });
  // 스탬프프
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  $(".pstamp").click(async function () {
    $(this).css({
      color: "#181818",
    });
    await sleep(500);
    $(".qp1").hide();
    $(".fa-camera").fadeIn(500);
  });
  $(".pstamp").click(function () {
    // 초기 상태 설정
    $(this).css({
      transform: "rotateY(0deg)",
      transition: "transform 1s ease",
    });

    // Y축 회전 적용
    $(this).css("transform", "rotateY(360deg)");
  });
  $(".cstamp").click(async function () {
    $(this).css({
      color: "#181818",
    });
    await sleep(500);
    $(".qp2").hide();
    $(".fa-cat").fadeIn(500);
  });
  $(".cstamp").click(function () {
    // 초기 상태 설정
    $(this).css({
      transform: "rotateY(0deg)",
      transition: "transform 1s ease",
    });

    // Y축 회전 적용
    $(this).css("transform", "rotateY(360deg)");
  });
  $(".gstamp").click(async function () {
    $(this).css({
      color: "#181818",
    });
    await sleep(500);
    $(".qp3").hide();
    $(".fa-gamepad").fadeIn(500);
  });
  $(".gstamp").click(function () {
    // 초기 상태 설정
    $(this).css({
      transform: "rotateY(0deg)",
      transition: "transform 1s ease",
    });

    // Y축 회전 적용
    $(this).css("transform", "rotateY(360deg)");
  });

  // 고양이 부분
  $(".cat-img").click(function () {
    $(this).css({
      border: "solid 6px #f18149",
    });
  });
  $(".cat button").on("click", function () {
    var images = $(".cat-img");

    // border 초기화
    images.css("border", "");

    // 이미지 크기를 확대
    images.css("transform", "scale(1.2)");

    // 일정 시간 후 원래 크기로 돌아감
    setTimeout(function () {
      images.css("transform", "scale(1)");
    }, 300); // 0.3초 후에 다시 원래 크기
  });
  // 포토팝업
  // 포스트카드 이미지 클릭 시
  $(".postcard img").on("click", function () {
    console.log("이미지 클릭됨"); // 클릭 이벤트 확인
    const originalSrc = $(this).attr("src");
    console.log("원본 경로:", originalSrc);

    const fileName = originalSrc.split("/").pop();
    const newSrc = `img/popup/${fileName}`;
    $("#imagePopup img").attr("src", newSrc); // 팝업 이미지 src 변경
    $("#imagePopup").fadeIn(); // 팝업 열기
  });

  // 닫기 버튼 클릭 시
  $(".close-btn").on("click", function () {
    $("#imagePopup").fadeOut();
  });

  // 배경 클릭 시 팝업 닫기
  $("#imagePopup").on("click", function (e) {
    if (e.target === this) {
      $(this).fadeOut();
    }
  });
  // 게임
  // 슬라이드 기능
  let currentIndex = 0;
  const slideItems = $(".game-main-screen li");
  const totalSlides = slideItems.length;

  function showSlide(index) {
    slideItems.hide();
    $(slideItems[index]).show();
  }

  $(".fa-angle-left").click(function () {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
  });

  $(".fa-angle-right").click(function () {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
  });
});
