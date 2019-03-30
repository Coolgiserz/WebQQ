ChatDlg = function (opts) {
    var me = this;
    me._dlg = opts.chatdiv;
    me._chatdiv = opts.chatdiv;
    me._friends = opts.friends;
    me._onInitFriends();
    // me._friendlists = "<ul>" +
    //     "<li></li>" +
    //     "</ul>";
    me._dlg = $('#' + me._chatdiv).html(
        "<div id='tabs'>"
        + "        <ul>"
        + "        <li><a href='#friendlists'>好友列表</a></li>"
        + "  <li><a href='#userprofile'>用户简介</a></li>"
        + " <li><a href='#filemanager'>文件管理</a></li>"
        + " </ul>"
        + " <div id='friendlists'>"
        + me._friendlists
        + " </div>"
        + " <div id='userprofile'> "
        + "< /div>"
        + "<div id ='filemanager'>"
        + "< p > Mauriseleifeneseturpis.Duiierat.Suspendisspotenti.Aliquavulputate, pedvelvehiculaaccumsan, minequerutrumerat, eucongueorciloremegetlorem.Vestibulumnonante.Classaptenttacitisociosquadlitoratorquentperconubianostra, perinceptoshimenaeos.Fuscesodales.Quisqueeuurnavelenimcommodopellentesque.Praesenteurisushendreritligulatempuspretium.Curabiturloremenim, pretiumnec, feugiatnec, luctusa, lacus. < /p> < p > Duiscursus.Maecenasligulaeros, blanditnec, pharetraat, semperat, magna.Nullamaclacus.Nullafacilisi.Praesentviverrajustovitaeneque.Praesentblanditadipiscingvelit.Suspendissepotenti.Donecmattis, pedevelpharetrablandit, magnaligulafaucibuseros, ideuismodlacusdoloregetodio.Namscelerisque.Donecnonliberosednullamattiscommodo.Utsagittis.Donecnisilectus, feugiatporttitor, temporac, temporvitae, pede.Aeneanvehiculaveliteutellusinterdumrutrum.Maecenascommodo.Pellentesquenecelit.Fusce in lacus.Vivamusaliberovitaelectushendrerithendrerit."
        + "< /p>"
        + "< /div>"
    ).dialog({
        autoOpen: false,
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
// init the friendship lists
ChatDlg.prototype._onInitFriends = function () {
    var me = this;
    /**test data
     // let u[0] = 'zhu';
     // let u2 = 'haha';
     let u=['zhu','haha'];
     let unum = 2;
     **/
    let unum = me._friends.length;
    // get friends list from server
    // init the frontend lists
    me._friendlists = "<ul>";
    for (var i = 0; i < unum; i++) {
        me._friendlists = me._friendlists +
            "<li>" + me._friends[i].user2
            + "</li>";
    }
    me._friendlists += "</ul>";
};
