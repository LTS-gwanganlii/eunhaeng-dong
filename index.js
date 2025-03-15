window.onload = function () {
  const userLanguage = navigator.language || navigator.languages[0];
  let request, instaRequest1, instaRequest2, hashtag;
  if (userLanguage === "ko-KR") {
    request = "사진 1장 리뷰 2줄 부탁드립니다!";
    instaRequest1 = "스토리로 작성해주시고 매장을 태그 해 주세요!";
    instaRequest2 =
      "해시태그를 자동으로 복사하였습니다! 스토리 작성후 붙혀넣기 해주세요";
    hashtag =
      "#은행동놀거리 #대전은행동 #성심당 #대전놀거리 #대전가볼만한곳 #크리스마스 #성심당이벤트 #대전할인 #크리스마스이벤트 #대전광역시 #아이들과함께 #레이저서바이벌 #레이저태그스포츠 #대전중구놀거리 #대전데이트 #대전실내데이트 #실내놀거리 #대전놀거리추천 #레이저태그 #lasertag #대전중구 #성심당근처 #으능정이 #서바이벌 #이벤트 #놀거리 #은행동데이트 #대전태권도 #단체활동";
  } else if (userLanguage === "en-US") {
    request = "Please take a photo and write a 2-sentence review!";
    instaRequest1 = "Please write a story and tag the store!";
    instaRequest2 =
      "automatically copied the hashtag! Please paste it after writing the story";
    hashtag =
      "#EunhaengdongActivities #DaejeonEunhaengdong #Seongshimdang #DaejeonActivities #ThingsToDoInDaejeon #Christmas #SeongshimdangEvent #DaejeonDiscounts #ChristmasEvent #DaejeonCity #WithKids #LaserSurvival #LaserTagSports #DaejeonJungguActivities #DaejeonDateIdeas #DaejeonIndoorDate #IndoorActivities #DaejeonActivitiesRecommendation #LaserTag #DaejeonJunggu #NearSeongshimdang #Euneungjeongi #Survival #Events #Activities #EunhaengdongDate #DaejeonTaekwondo #GroupActivities";
  }
  const drink = 99;
  console.log(drink);

  const naver = document.querySelector(".naver");
  const google = document.querySelector(".google");
  const insta = document.querySelector(".insta");
  naver.addEventListener("click", () => {
    alert(request);
    window.location.href =
      "https://m.place.naver.com/place/1268032816/review/visitor";
  });

  google.addEventListener("click", () => {
    alert(request);
    window.location.href = "https://maps.app.goo.gl/Dmu7Czr2dhBsW7os8";
  });

  insta.addEventListener("click", () => {
    alert(instaRequest1);
    alert(request);
    alert(instaRequest2);

    navigator.clipboard.writeText(hashtag);
    if (/android/.test(navigator.userAgent.toLowerCase())) {
      window.location.href = "https://www.instagram.com/";
      return;
    } else {
      window.location.href = "instagram://camera";
    }
  });
};
