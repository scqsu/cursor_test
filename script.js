let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.setText("主按钮").show().onClick(function(){
    tg.showAlert("您点击了主按钮！");
});

document.getElementById("username").innerText = tg.initDataUnsafe.user.first_name;

document.getElementById("mainButton").addEventListener("click", function(){
    tg.showAlert("您点击了常规按钮！");
});