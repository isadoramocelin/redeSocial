document.addEventListener("DOMContentLoaded", () => {
   
 const likeBtn =  document.querySelector(".like-btn");
const likeBtn= document.querySelector(".like-bnt");
const postMedia= document.querySelector("post-media");

const likesCountSpan= LikeBnt.querySelector("likes-count")
const boomarkBnt= document.querySelector(".bookmark-bnt")

let isLiked= false;
let baseLikes= 0;

//texto inicial

if(likesCountSpan){ 
    likesCountSpan.textCntent= "0";
}

//numeros acima de mil

function formatLikes (num){
    if(num <=1000){
        return (num/1000).toFixed(1)+"k";
    }
    return num.toString();
}




})