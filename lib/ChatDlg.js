ChatDlg = function (opts) {
    var me = this;
    me._options = $.extend({}, opts);
    me._dlg = $("<div>").appendTo($("body")).dialog({
        height: 465,
        width: 580,
        modal: false,//非模态框
        title: me._options.FNAME
    });

    me._dlg.html(
        "   <div class='chat' style='width:100%;height: 90%;'></div>"
        + " <div class='infe' style='width:100%;height: 10%;color: #121212;'>"
        // + ""
        // + "<input  style='width:80%;'>"
        // + "<button style='width:10%;'>发送</button>"
        + "</div>"
    );
    me._input = $("<input>").appendTo('.infe').css({
        width: "80%",
        height: "80%"
    });
    me._sendbtn = $("<button>").appendTo('.infe').css({
        width: "15%",
        height: "80%"
    }).text("发送").on('click', function () {
        me._onSendMsg();
    });
};

ChatDlg.prototype._onSendMsg = function () {
    var me = this;
    let msg = me._input.val();
    if (msg === "") {
        //空消息不作处理
    } else {
        //filter
        //
        Connector({
            data: {
                type: "USER_SEND_MSG",
                params: {
                    message: msg,
                    toid: me._options.FID
                }
            },
            success: function (json) {
                //把自己发的信息加入对话框
                if (json.success) {
                    me._input.val("");
                    me._addNewMsg(json.data[0]);
                } else {
                    console.log(json.message);
                }
            },
            failure: function (json) {

            }
        });
    }
};

// every 5 second get a msg from server
ChatDlg.prototype._getMsgFromFriends = function () {
    var me = this;

};


ChatDlg.prototype._addNewMsg = function (msg) {
    let tmpli = $("<li>");
    tmpli.text(msg).appendTo('.chat').css({
        float: "right",
        textAlign: "left",
        marginLeft:"50px"
    });
};