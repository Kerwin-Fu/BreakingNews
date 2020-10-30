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
//注册账号
let layer = layui.layer;
$('#form-reg').on('submit',function(e) {
    e.preventDefault();
    $.ajax({
        type: 'POST',
        url: 'http://ajax.frontend.itheima.net/api/reguser',
        data: {
            username: $('#form-reg [name=username]').val(),
            password: $('#form-reg [name=password]').val()
        },
        success(res) {
            if(res.status !== 0) return layer.msg(res.message);

            layer.msg('注册成功，请登录');

            $('#reg-box').click();

        }
    })
})

$('#form_login').submit(function(e) {
    e.preventDefault()
    $.ajax({
      url: 'http://ajax.frontend.itheima.net/api/login',
      method: 'POST',
      data: $(this).serialize(),
      success: function(res) {
        if (res.status !== 0) {
          return layer.msg('登录失败！')
        }
        layer.msg('登录成功！')
        localStorage.setItem('token', res.token)
        location.href = '/index.html'
      }
    })
})