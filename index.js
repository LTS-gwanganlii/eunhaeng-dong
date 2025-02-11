const naver = document.querySelector(".naver");
const google = document.querySelector(".google");
const insta = document.querySelector(".insta");
naver.addEventListener("click",()=>{
    alert("사진 1장 리뷰 2줄 부탁드립니다!");
    window.location.href = "https://m.place.naver.com/place/1268032816/review/visitor";
});

google.addEventListener("click",()=>{
    alert("사진 1장 리뷰 2줄 부탁드립니다!");
    window.location.href = "https://maps.app.goo.gl/Dmu7Czr2dhBsW7os8";
})

insta.addEventListener("click",()=>{
    alert("스토리로 작성해주시고 매장을 태그 해 주세요!");
    alert("사진1장 리뷰 2줄 부탁드립니다!");
    alert("해시태그를 자동으로 복사하였습니다! 스토리 작성후 붙혀넣기 해주세요");
    const textToCopy = "#은행동놀거리 #대전은행동 #성심당 #대전놀거리 #대전가볼만한곳 #크리스마스 #성심당이벤트 #대전할인 #크리스마스이벤트 #대전광역시 #아이들과함께 #레이저서바이벌 #레이저태그스포츠 #대전중구놀거리 #대전데이트 #대전실내데이트 #실내놀거리 #대전놀거리추천 #레이저태그 #lasertag #대전중구 #성심당근처 #으능정이 #서바이벌 #이벤트 #놀거리 #은행동데이트 #대전태권도 #단체활동";
    navigator.clipboard.writeText(textToCopy)
    window.location.href = "instagram://camera";
})