/**
 * To control the dialog
 **/
LoginDlg = function (opts) {
    var me = this;
    me._userID = getUUID();
    me._passwdID = getUUID();
    me._logindiv = opts.logindiv;

    me._dlg = $('#' + me._logindiv).html(
        "<form id='loginform'>"
        + "   <label for='username'>用户名</label><br>"
        + " <input id='" + me._userID + "' class='ui-corner-all' name='username' type='text' placeholder='请输入您的用户名'/><br>"
        + " <label for='password'>密码</label><br>"
        + " <input id='" + me._passwdID + "' class='ui-corner-all' name='password' type='password' placeholder='请输入您的密码'/>"
        + "</form>"
    ).dialog({
        autoOpen: true,
        height: 290.95,
        width: 400,
        modal: true,
        hide: 'clip',
        resizable: false,
        draggable: false,
        buttons: [{
            text: "登录",
            click: function () {
                me._onLogin();
            }
        },
            {
                text: "注册",
                click: function () {
                    me._dlg.dialog("close");// close the dialog when the user click the "取消" button
                    regisdlg._registerdlg.dialog("open");
                }
            },

        ]
    });

};

/**
 * to deal with the login interaction
 * @private
 */
LoginDlg.prototype._onLogin = function () {
    var me = this;
    Connector({
        data: {
            type: "USER_LOGIN",
            params: {
                username: $("#" + me._userID).val(),
                password: $("#" + me._passwdID).val()
            }
        },
        success: function (json) {
            alert("登录成功！");

            me._dlg.dialog("close");
            me._initChatDlg();

            // show friends list
        },
        failure: function (json) {
            alert("登录失败,用户名或密码错误！");

            // me._failTipsDlg.dialog("open");
        }
    });
};

LoginDlg.prototype._initChatDlg = function () {
    chatdlg = new ChatDlg({
        chatdiv: "chatdlg",
    })
    ;
    alert('开始聊天' + chatdlg);
};

LoginDlg.prototype._initFailDlg = function () {
    // var me = this;
    return $(div).html(
        "<p>错误哦</p>"
    ).dialog(
        {
            autoOpen: false,
            height: 120,
            width: 200,
            text: "账户名或密码错误，请小心检查哦！",
            modal: true,
            buttons: {
                text: "确认",
                click: function () {
                    $(this).dialog("close");
                }
            }
        }
    );
}