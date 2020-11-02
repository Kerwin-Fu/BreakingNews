initArtCateList()

// 获取文章分类的列表
function initArtCateList() {
    $.ajax({
        method: 'GET',
        url: '/my/article/cates',
        success: function (res) {
            var htmlStr = template('tpl-table', res)
            $('tbody').html(htmlStr)
        }
    })
}
let indexAdd = '';
$('#btnAddCate').on('click', function () {
    indexAdd = layui.layer.open({
        type: 1,
        area: ['500px', '250px'],
        title: '添加文章分类',
        content: $('#dialog-add').html()
    })
})

$('body').on('submit', '#form-add', function (e) {
    e.preventDefault();
    $.ajax({
        type: 'POST',
        url: '/my/article/addcates',
        data: $(this).serialize(),
        success(res) {
            if (res.status !== 0) {
                layui.layer.msg('添加分类失败')
            }
            initArtCateList();
            layui.layer.msg('添加分类成功')
            layui.layer.close(indexAdd)

        }
    })
})

$('tbody').on('click', '.btn-edit', function () {
    layui.layer.open({
        type: 1,
        area: ['500px', '250px'],
        title: '修改文章分类',
        content: $('#dialog-edit').html()
    })

    let id = $(this).attr('data-id')
    // 发起请求获取对应分类的数据
    $.ajax({
        method: 'GET',
        url: '/my/article/cates/' + id,
        success: function (res) {
            layui.form.val('form-edit', res.data)
        }
    })
})