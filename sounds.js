var number=document.querySelectorAll("button").length;

document.querySelectorAll("button")[0].addEventListener("click",function()
{
   var audio=new Audio("/sounds/tom-1.mp3");
    audio.play();
});

document.querySelectorAll("button")[1].addEventListener("click",function()
{
   var audio=new Audio("/sounds/tom-2.mp3");
    audio.play();
});

document.querySelectorAll("button")[2].addEventListener("click",function()
{
   var audio=new Audio("/sounds/tom-3.mp3");
    audio.play();
});

document.querySelectorAll("button")[3].addEventListener("click",function()
{
   var audio=new Audio("/sounds/tom-4.mp3");
    audio.play();
});

document.querySelectorAll("button")[4].addEventListener("click",function()
{
   var audio=new Audio("/sounds/crash.mp3");
    audio.play();
});

document.querySelectorAll("button")[5].addEventListener("click",function()
{
   var audio=new Audio("/sounds/kick-bass.mp3");
    audio.play();
});

document.querySelectorAll("button")[6].addEventListener("click",function()
{
   var audio=new Audio("/sounds/snare.mp3");
    audio.play();
});

