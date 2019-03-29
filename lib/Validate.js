/**
 *
 * @param opts
 * @constructor
 */
$.validator.addMethod("isMobile", function(value, element) {
    var length = value.length;
    var mobile = /^(13[0-9]{9})|(18[0-9]{9})|(14[0-9]{9})|(17[0-9]{9})|(15[0-9]{9})$/;
    return this.optional(element) || (length == 11 && mobile.test(value));
}, "请输入有效的手机号码!!");
$.validator.addMethod("isValid", function(value, element) {
    var valid = /^[a-zA-Z0-9_]{1,10}$/;
    return this.optional(element) || (valid.test(value));
}, "请输入有效用户名!!");


MyValidate = function (opts) {
    var me = this;
    // console.log(regisdlg._dlg.html());
    $('#loginform').validate({
        rules:{
            username:{
                required:true,
                isValid:true
            },
            password:{
                required:true,
                rangelength:[6,18]
            }
        },
        messages:{
            username:{
                required: "请输入您的用户名",
                isValid:"用户名只能由字母、数字、下划线组成！"
            },
            password: {
                required: '请输入您的密码',
                rangelength: '密码长度应该是6-18位'
            },
        },
        errorPlacement: function (error, element) {
            error.appendTo(element.parent());


            error.css('position','relative');
            error.css('color','#F00')
            // error.css('right','-500px');
        },
    });
    $('#regisform').validate({
        rules: {
            username: {
                required: true,
                isValid:true
            },
            password: {
                required: true,
                rangelength: [6, 18]
            },
            conpassword: {equalTo: '#'+regisdlg._regispwdID},

            realname: {
                required: true,
                maxlength: 10,
            },
            email: {
                required: true,
                email: true
            },

            mobile: {
                required: true,
                digits: true,
                isMobile:true

            }
        },

        messages: {
            username: {
                required: "请给一个账户名",
                maxlength: "请输入不超过10个字符",
                isValid:"用户名只能由数字、字母和下划线组成"
            },
            password: {
                required: '请设置账号密码',
                rangelength: '密码长度应该是6-18位哦'
            },
            conpassword: {
                equalTo: '两次密码不匹配！'
            },
            realname: {
                required: "请输入您的真实姓名",
                maxlength: "请输入不超过10个字符",
            },
            email: {
                required: "请提供您的邮箱地址",
                email: "此邮箱地址无效"
            },

            mobile: {
                required: '请输入您的手机号码',
                digits: '请输入有效的手机号码',
                isMobile:'请输入有效的手机号码!'

            }
        },

        errorPlacement: function (error, element) {
            error.appendTo(element.parent());
            error.css('position','relative');
            error.css('color','#F00')

            // error.css('center',);
            // $('#registerbtn').attr('disabled',true);
        },
    });

}