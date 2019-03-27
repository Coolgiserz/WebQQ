RegisterDlg = function (opts) {
    var me = this;
    me._regisuserID = getUUID();
    me._regispwdID = getUUID();
    me._regisconfirpwdID = getUUID();
    me._regisrnameID = getUUID();
    me._regisgenderID = getUUID();

    me._regisemailID = getUUID();
    me._regismobileID = getUUID();
    me._regisindustryID = getUUID();


    me._registerdiv = opts.regisdiv;
    me._registerdlg = $('#' + me._registerdiv).html(
        "   <label>用户名</label><br>"
        + " <input id='" + me._regisuserID + "' class='ui-corner-all' type='text'/><br>"
        + " <label>密码</label><br>"
        + " <input id='" + me._regispwdID + "' class='ui-corner-all' type='password'/>"
        + " <label>确认密码</label><br>"
        + " <input id='" + me._regisconfirpwdID + "' class='ui-corner-all' type='password'/>"
        + " <label>真实姓名</label><br>"
        + " <input name='realname' id='" + me._regisrnameID + "' class='ui-corner-all' type='text'/><br>"
        + " <label>性别</label><br>"
        + " <input name='gender' id='" + me._regisgenderID + "' class='ui-corner-all' type='text'/><br>"
        + " <label>邮箱</label><br>"
        + " <input name='email' id='" + me._regisemailID + "' class='ui-corner-all' type='email'/><br>"
        + " <label>电话号码</label><br>"
        + " <input name='mobile' id='" + me._regismobileID + "' class='ui-corner-all' type='text'/><br>"
        + " <label>行业</label><br>"
        + " <input name='industry' id='" + me._regisindustryID + "' class='ui-corner-all' type='text'/><br>"
    ).dialog({
        autoOpen: false,
        height: 665.95,
        width: 360,
        modal: true,
        // hide: 'clip',
        resizable: false,
        draggable: false,
        buttons: [{
            text: "注册",
            click: function () {
                me._onRegister();
            }
        },
            {
                text: "返回登录",
                click: function () {
                    me._registerdlg.dialog("close");
                    logindlg._dlg.dialog("open");
                }
            },
            // {
            //     text: "取消",
            //     click: function () {
            //         me._dlg.dialog("close");// close the dialog when the user click the "取消" button
            //     }
            // }
        ]
    });

}

/**
 * to deal with the register logic
 * @private
 */
RegisterDlg.prototype._onRegister = function () {

}