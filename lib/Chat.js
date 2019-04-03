ChatDlg = function (opts) {
    var me = this;
    me._dlg = opts.chatdiv;
    me._chatdiv = opts.chatdiv;
    me._friends = opts.friends;
    me._profile = opts.profiles;
    // me._getFriendsList();
    me._onInitFriends();
    // me._onInitProfile();
    me._dlg = $('#' + me._chatdiv).html(
        "<div id='tabs'>"
        + "        <ul>"
        + "        <li><a href='#friendlists'>好友列表</a></li>"
        + "  <li><a href='#userprofile'>用户简介</a></li>"
        + " <li><a href='#filemanager'>文件管理</a></li>"
        + " </ul>"
        + " <div id='friendlists'>"
        +me._friendlists
        + " </div>"
        + " <div id='userprofile'>"//user profile
        + me._profilelists
        + "</div>"
        + "<div id ='filemanager'>"
        + "<p>"
        + "</p>"
        + "</div>"
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
                // me._dlg.dialog("close");// close the dialog when the user click the "取消" button
                //show more detail about user
            }
        },
            {
                text: "退出登录",
                click: function () {
                    me._dlg.dialog("close");// close the dialog when the user click the "取消" button
                    $.session.clear();
                    logindlg._dlg.dialog("open");

                    // regisdlg._registerdlg.dialog("open");
                }
            },

        ]
    });

    $('#tabs').tabs();
};
// get friends lsit
ChatDlg.prototype._getFriendsList = function () {
    Connector({
        data: {
            type: "USER_GET_FRIEND",
        },
        success: function (json) {

        },
        failure: function (json) {
        }
    });
};
// init the friendship lists
ChatDlg.prototype._onInitFriends = function () {
    var me = this;
    let unum = me._friends.length;
    // get friends list from server
    // init the frontend lists
    // me._friendlists = "<ul>";
    // for (var i = 0; i < unum; i++) {
    //     me._friendlists = me._friendlists +
    //         "<li>" + me._friends[i].user2
    //         + "</li>";
    // }
    // me._friendlists += "</ul>";
    // me._addFriend(unum);
    // me._friendlists = $("<div>");
    me._addFriend(unum);
    // me._friendlists.append($('#friendlists'));
    // me._friendlists.html("<ul>"
    //     + "" + me._addFriend(unum)
    //     + "</ul>").append($('#friendlists'));
};
ChatDlg.prototype._addFriend = function (unum) {
    var me = this;
    // for(let i=0;i<unum;i++){
    //     $("<div>").html(
    //         "<div>"
    //         + me._friends[i].FNAME
    //         +"</div>"
    //     ).append(me._friendlists);
    // }
    me._friendlists = "<ul>";

    for (var i = 0; i < unum; i++) {
        me._friendlists = me._friendlists +
            "<li>" + me._friends[i].FNAME
            + "</li>";
    }
    me._friendlists += "</ul>";

};
// init the user profile
ChatDlg.prototype._onInitProfile = function () {
    var me = this;
    me._profilelists = "<div>"
        + "<label>昵称:</label><input disabled='disabled' value='" + me._profile[4] + "'><br>"
        + "<label>电话:</label><input disabled='disabled' value='" + me._profile[0] + "'><br>"
        + "<label>邮箱:</label><input disabled='disabled' value='" + me._profile[1] + "'><br>"
        + "<label>行业:</label><input disabled='disabled' value='" + me._profile[2] + "'><br>"
        + "<label>职业:</label><input disabled='disabled' value='" + me._profile[3] + "'><br>"
        + "</div>"
};