ChatDlg = function (opts) {
    var me = this;
    me._dlg = opts.chatdiv;
    me._chatdiv = opts.chatdiv;
    me._dlg = $('#' + me._chatdiv).html(
        "<div id='tabs'>"
        + "        <ul>"
        + "        <li><a href='#friendlists'>好友列表</a></li>"
        + "  <li><a href='#userprofile'>用户简介</a></li>"
        + " <li><a href='#filemanager'>文件管理</a></li>"
        + " </ul>"
        + " <div id='friendlists'>"
        + "     <p>Proin elit arcu, rutrum commodo, vehicula tempus, commodo a, risus. Curabitur nec arcu. Donec sollicitudin mi sit amet mauris. Nam elementum quam ullamcorper ante. Etiam aliquet massa et lorem. Mauris dapibus lacus auctor risus. Aenean tempor ullamcorper leo. Vivamus sed magna quis ligula eleifend adipiscing. Duis orci. Aliquam sodales tortor vitae ipsum. Aliquam nulla. Duis aliquam molestie erat. Ut et mauris vel pede varius sollicitudin. Sed ut dolor nec orci tincidunt interdum. Phasellus ipsum. Nunc tristique tempus lectus.</p>"
        + " </div>"
        + " <div id='userprofile'> "
        + "< /div>"
        + "<div id ='filemanager'>"
        + "< p > Mauriseleifeneseturpis.Duiierat.Suspendisspotenti.Aliquavulputate, pedvelvehiculaaccumsan, minequerutrumerat, eucongueorciloremegetlorem.Vestibulumnonante.Classaptenttacitisociosquadlitoratorquentperconubianostra, perinceptoshimenaeos.Fuscesodales.Quisqueeuurnavelenimcommodopellentesque.Praesenteurisushendreritligulatempuspretium.Curabiturloremenim, pretiumnec, feugiatnec, luctusa, lacus. < /p> < p > Duiscursus.Maecenasligulaeros, blanditnec, pharetraat, semperat, magna.Nullamaclacus.Nullafacilisi.Praesentviverrajustovitaeneque.Praesentblanditadipiscingvelit.Suspendissepotenti.Donecmattis, pedevelpharetrablandit, magnaligulafaucibuseros, ideuismodlacusdoloregetodio.Namscelerisque.Donecnonliberosednullamattiscommodo.Utsagittis.Donecnisilectus, feugiatporttitor, temporac, temporvitae, pede.Aeneanvehiculaveliteutellusinterdumrutrum.Maecenascommodo.Pellentesquenecelit.Fusce in lacus.Vivamusaliberovitaelectushendrerithendrerit."
        + "< /p>"
        + "< /div>"
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
                me._dlg.dialog("close");// close the dialog when the user click the "取消" button
                logindlg._dlg.dialog("open");
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

    $('#tabs').tabs();
}
