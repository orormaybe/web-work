var count=0;
var timer;
function Move() {
    var div=document.getElementById("pic");
    var littlebox=document.getElementsByClassName("littleBox");
    var i=count%6;
    for(var k=0;k<littlebox.length;k++){
        littlebox[k].style.backgroundColor="white"; /*把所有的小圈置位白色    */
    }
    littlebox[i].style.backgroundColor="#4eb3d3";/*把图片对应的的小圈置位红色    */
    div.style.left=(0-(640*i))+"px";
    count++;
}
function onload(){
    timer= setInterval("Move()",1000);
}
function stop() {

    clearInterval(timer);
}
function start() {
    timer= setInterval("Move()",1000);
}