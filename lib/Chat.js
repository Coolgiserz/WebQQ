ChatDlg = function (opts) {
    var me = this;
    me._dlg = opts.chatdiv;
    me._chatdiv = opts.chatdiv;
    me._dlg = $('#' + me._chatdiv).html(
        "   <label for='username'>用户名</label><br>"
        + " <input id='" + me._userID + "' class='ui-corner-all' name='username' type='text'/><br>"
        + " <label for='password'>密码</label><br>"
        + " <input id='" + me._passwdID + "' class='ui-corner-all' name='password' type='password'/>"
    ).dialog({
        autoOpen: true,
        height: 565.95,
        width: 660,
        modal: true,
        hide: 'clip',
        resizable: true,
        draggable: true,
        buttons: [{
            text: "账号管理",
            click: function () {
                me._onLogin();
            }
        },
            {
                text: "退出登录",
                click: function () {
                    me._dlg.dialog("close");// close the dialog when the user click the "取消" button
                    regisdlg._registerdlg.dialog("open");
                }
            },

        ]
    });
}

