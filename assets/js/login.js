$('#login-box').on('click', function () {
    $('.login-box').toggle()
    $('.reg-box').toggle()
})

$('#reg-box').on('click', function () {
    $('.login-box').toggle()
    $('.reg-box').toggle()
})

let form = layui.form;
form.verify({
    pwd: [/^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'],
    repwd: function (value) {
        let pwd = $('.reg-box [name=password]').val();
        if (value !== pwd) return '两次密码不一致'
    }
})