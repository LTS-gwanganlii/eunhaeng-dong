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
    window.location.href = "https://www.instagram.com/lts.eh/";
})