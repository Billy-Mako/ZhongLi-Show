function play() {
    //获取ID
    var music = document.getElementById("music");
    //判断是否播放
    if (music.paused) {
        //没有就播放
        music.paused = false; 
        music.play();
    }
}
setInterval("play()", 1);


var skill_hover = document.getElementById('skill_hover');
var skill1 = document.getElementById('skill1');
console.log(skill1); //null
// 鼠标经过技能图标,边框显示
skill1.addEventListener('mouseenter', function() {
        //Cannot read property 'addEventListener' of null-----[不能读取空对象的[addEventListener]属性?]
        skill_hover.style.display = 'block';
    })
    // 鼠标离开技能图标,边框隐藏
skill1.addEventListener('mouseleave', function() {
    skill_hover.style.display = 'none';
})