$(function() {
    initCate()

    function initCate() {
        console.log('ok');
        $.ajax({
            type: 'GET',
            url: '/my/article/cates',
            success(res) {
                if (res.status !== 0) {
                    layui.layer.msg('获取文章分类列表失败')
                }
                let htmlStr = template('tpl-cate',res);
                $('[name=cate_id]').html(htmlStr);
                layui.form.render()
            }
        })
    }
})