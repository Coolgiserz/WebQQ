FriendListDlg = function (opts) {
    var me = this;


    me._options = $.extend({}, opts);

    me._dlg = $("<div>").appendTo($("body")).html("").dialog({
        height: 250,
        width: 350,
        modal: false,
        title: "好友列表"
    });

    me._getFriendList();
};



FriendListDlg.prototype._getFriendList = function () {
    var me = this;
    Connector({
        data: {
            type: "USER_GET_FRIEND"
        },
        success: function (json) {
            var users = json.data;
            for (var i = 0; i < users.length; i++) {
                me._addUser(users[i]);
            }
        }
    });
};


FriendListDlg.prototype._addUser = function (user) {
    var me = this;

    // $().data
    var btn =$("<div>").appendTo(me._dlg).append(
        $("<img>").attr("src", "lib/images/user.jpg").css({
            width: "24px",
            height: "24px"
        })
    ).append(
        $("<div>").html(user.FNAME)
    ).button().css({
        width: '95%'
    }).on("click", function (event) {

        var u = $(event.target).data("user");
        new ChatDlg(u);
    });

    btn.data("user",user);
};








