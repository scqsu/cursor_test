let tg = window.Telegram.WebApp;

tg.expand();

// 设置主题颜色
document.documentElement.style.setProperty('--tg-theme-bg-color', tg.themeParams.bg_color);
document.documentElement.style.setProperty('--tg-theme-text-color', tg.themeParams.text_color);
document.documentElement.style.setProperty('--tg-theme-button-color', tg.themeParams.button_color);
document.documentElement.style.setProperty('--tg-theme-button-text-color', tg.themeParams.button_text_color);

// 显示用户信息
document.getElementById("username").innerText = tg.initDataUnsafe.user.first_name;

// 设置主按钮
tg.MainButton.setText("发送消息").show().onClick(function(){
    tg.sendData("用户点击了主按钮");
});

// 添加后退按钮
tg.BackButton.show();
tg.BackButton.onClick(function(){
    tg.showAlert("您点击了后退按钮！");
});

// 常规按钮点击事件
document.getElementById("mainButton").addEventListener("click", function(){
    tg.showPopup({
        title: '弹出窗口',
        message: '这是一个 Telegram 风格的弹出窗口',
        buttons: [{text: "确定"}]
    });
});