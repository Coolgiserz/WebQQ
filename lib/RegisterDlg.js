RegisterDlg = function (opts) {
    var me = this;
    me._logindlg = logindlg;
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
        "<form id='regisform'>"
        + " <label>用户名</label><br>"
        + " <input id='" + me._regisuserID + "' name='username' class='ui-corner-all' type='text'/><br>"
        + " <label>密码</label><br>"
        + " <input id='" + me._regispwdID + "' name='password' class='ui-corner-all' type='password'/>"
        + " <label>确认密码</label><br>"
        + " <input id='" + me._regisconfirpwdID + "' name='conpassword' class='ui-corner-all' type='password'/>"
        + " <label>真实姓名</label><br>"
        + " <input id='" + me._regisrnameID + "' name='realname' class='ui-corner-all' type='text'/><br>"
        + " <label for='gender'>性别</label><br>"
        + " <select name='gender' id='" + me._regisgenderID + "' class='ui-corner-all'><br>"
        + "<option>男</option>"
        + "<option>女</option>"
        + "</select>"
        + " <label>邮箱</label><br>"
        + " <input name='email' id='" + me._regisemailID + "' class='ui-corner-all' type='email'/><br>"
        + " <label>电话号码</label><br>"
        + " <input name='mobile' id='" + me._regismobileID + "' class='ui-corner-all' type='text'/><br>"
        + " <label>行业</label><br>"
        + "<select name='industry' id='" + me._regisindustryID + "' class='ui-corner-all' >\n"
        // + "  <option disabled='disabled'>行业</option>\n"
        + "  <option value='高新科技' disabled='disabled'>高新科技</option>\n" +
        "  <option value='互联网'>&nbsp;&nbsp;&nbsp;互联网</option>\n" +
        "  <option value='电子商务'>&nbsp;&nbsp;&nbsp;电子商务</option>\n" +
        "  <option value=\"电子游戏\">&nbsp;&nbsp;&nbsp;电子游戏</option>\n" +
        "  <option value=\"计算机软件\">&nbsp;&nbsp;&nbsp;计算机软件</option>\n" +
        "  <option value=\"计算机硬件\">&nbsp;&nbsp;&nbsp;计算机硬件</option>\n" +
        "  <option value=\"信息传媒\" disabled='disabled'>信息传媒</option>\n" +
        "  <option value=\"出版业\">&nbsp;&nbsp;&nbsp;出版业</option>\n" +
        "  <option value=\"电影录音\">&nbsp;&nbsp;&nbsp;电影录音</option>\n" +
        "  <option value=\"广播电视\">&nbsp;&nbsp;&nbsp;广播电视</option>\n" +
        "  <option value=\"通信\">&nbsp;&nbsp;&nbsp;通信</option>\n" +
        "  <option value=\"金融\" disabled='disabled'>金融</option>\n" +
        "  <option value=\"银行\">&nbsp;&nbsp;&nbsp;银行</option>\n" +
        "  <option value=\"资本投资\">&nbsp;&nbsp;&nbsp;资本投资</option>\n" +
        "  <option value=\"证券投资\">&nbsp;&nbsp;&nbsp;证券投资</option>\n" +
        "  <option value=\"保险\">&nbsp;&nbsp;&nbsp;保险</option>\n" +
        "  <option value=\"信贷\">&nbsp;&nbsp;&nbsp;信贷</option>\n" +
        "  <option value=\"财务\">&nbsp;&nbsp;&nbsp;财务</option>\n" +
        "  <option value=\"审计\">&nbsp;&nbsp;&nbsp;审计</option>\n" +
        "  <option value=\"服务业\" disabled='disabled'>服务业</option>\n" +
        "  <option value=\"法律\">&nbsp;&nbsp;&nbsp;法律</option>\n" +
        "  <option value=\"餐饮\">&nbsp;&nbsp;&nbsp;餐饮</option>\n" +
        "  <option value=\"酒店\">&nbsp;&nbsp;&nbsp;酒店</option>\n" +
        "  <option value=\"旅游\">&nbsp;&nbsp;&nbsp;旅游</option>\n" +
        "  <option value=\"广告\">&nbsp;&nbsp;&nbsp;广告</option>\n" +
        "  <option value=\"公关\">&nbsp;&nbsp;&nbsp;公关</option>\n" +
        "  <option value=\"景观\">&nbsp;&nbsp;&nbsp;景观</option>\n" +
        "  <option value=\"咨询分析\">&nbsp;&nbsp;&nbsp;咨询分析</option>\n" +
        "  <option value=\"市场推广\">&nbsp;&nbsp;&nbsp;市场推广</option>\n" +
        "  <option value=\"人力资源\">&nbsp;&nbsp;&nbsp;人力资源</option>\n" +
        "  <option value=\"社工服务\">&nbsp;&nbsp;&nbsp;社工服务</option>\n" +
        "  <option value=\"养老服务\">&nbsp;&nbsp;&nbsp;养老服务</option>\n" +
        "  <option value=\"教育\" disabled='disabled'>教育</option>\n" +
        "  <option value=\"高等教育\">&nbsp;&nbsp;&nbsp;高等教育</option>\n" +
        "  <option value=\"基础教育\">&nbsp;&nbsp;&nbsp;基础教育</option>\n" +
        "  <option value=\"职业教育\">&nbsp;&nbsp;&nbsp;职业教育</option>\n" +
        "  <option value=\"幼儿教育\">&nbsp;&nbsp;&nbsp;幼儿教育</option>\n" +
        "  <option value=\"特殊教育\">&nbsp;&nbsp;&nbsp;特殊教育</option>\n" +
        "  <option value=\"培训\">&nbsp;&nbsp;&nbsp;培训</option>\n" +
        "  <option value=\"医疗服务\" disabled='disabled'>医疗服务</option>\n" +
        "  <option value=\"临床医疗\">&nbsp;&nbsp;&nbsp;临床医疗</option>\n" +
        "  <option value=\"制药\">&nbsp;&nbsp;&nbsp;制药</option>\n" +
        "  <option value=\"保健\">&nbsp;&nbsp;&nbsp;保健</option>\n" +
        "  <option value=\"美容\">&nbsp;&nbsp;&nbsp;美容</option>\n" +
        "  <option value=\"医疗器材\">&nbsp;&nbsp;&nbsp;医疗器材</option>\n" +
        "  <option value=\"生物工程\">&nbsp;&nbsp;&nbsp;生物工程</option>\n" +
        "  <option value=\"疗养服务\">&nbsp;&nbsp;&nbsp;疗养服务</option>\n" +
        "  <option value=\"护理服务\">&nbsp;&nbsp;&nbsp;护理服务</option>\n" +
        "  <option value=\"艺术娱乐\" disabled='disabled'>艺术娱乐</option>\n" +
        "  <option value=\"创意艺术\">&nbsp;&nbsp;&nbsp;创意艺术</option>\n" +
        "  <option value=\"体育健身\">&nbsp;&nbsp;&nbsp;体育健身</option>\n" +
        "  <option value=\"娱乐休闲\">&nbsp;&nbsp;&nbsp;娱乐休闲</option>\n" +
        "  <option value=\"图书馆\">&nbsp;&nbsp;&nbsp;图书馆</option>\n" +
        "  <option value=\"博物馆\">&nbsp;&nbsp;&nbsp;博物馆</option>\n" +
        "  <option value=\"策展\">&nbsp;&nbsp;&nbsp;策展</option>\n" +
        "  <option value=\"博彩\">&nbsp;&nbsp;&nbsp;博彩</option>\n" +
        "  <option value=\"制造加工\" disabled='disabled'>制造加工</option>\n" +
        "  <option value=\"食品饮料业\">&nbsp;&nbsp;&nbsp;食品饮料业</option>\n" +
        "  <option value=\"纺织皮革业\">&nbsp;&nbsp;&nbsp;纺织皮革业</option>\n" +
        "  <option value=\"服装业\">&nbsp;&nbsp;&nbsp;服装业</option>\n" +
        "  <option value=\"烟草业\">&nbsp;&nbsp;&nbsp;烟草业</option>\n" +
        "  <option value=\"造纸业\">&nbsp;&nbsp;&nbsp;造纸业</option>\n" +
        "  <option value=\"印刷业\">&nbsp;&nbsp;&nbsp;印刷业</option>\n" +
        "  <option value=\"化工业\">&nbsp;&nbsp;&nbsp;化工业</option>\n" +
        "  <option value=\"汽车\">&nbsp;&nbsp;&nbsp;汽车</option>\n" +
        "  <option value=\"家具\">&nbsp;&nbsp;&nbsp;家具</option>\n" +
        "  <option value=\"电子电器\">&nbsp;&nbsp;&nbsp;电子电器</option>\n" +
        "  <option value=\"机械设备\">&nbsp;&nbsp;&nbsp;机械设备</option>\n" +
        "  <option value=\"塑料工业\">&nbsp;&nbsp;&nbsp;塑料工业</option>\n" +
        "  <option value=\"金属加工\">&nbsp;&nbsp;&nbsp;金属加工</option>\n" +
        "  <option value=\"军火\">&nbsp;&nbsp;&nbsp;军火</option>\n" +
        "  <option value=\"地产建筑\" disabled='disabled'>地产建筑</option>\n" +
        "  <option value=\"房地产\">&nbsp;&nbsp;&nbsp;房地产</option>\n" +
        "  <option value=\"装饰装潢\">&nbsp;&nbsp;&nbsp;装饰装潢</option>\n" +
        "  <option value=\"物业服务\">&nbsp;&nbsp;&nbsp;物业服务</option>\n" +
        "  <option value=\"特殊建造\">&nbsp;&nbsp;&nbsp;特殊建造</option>\n" +
        "  <option value=\"建筑设备\">&nbsp;&nbsp;&nbsp;建筑设备</option>\n" +
        "  <option value=\"贸易零售\" disabled='disabled'>贸易零售</option>\n" +
        "  <option value=\"零售\">&nbsp;&nbsp;&nbsp;零售</option>\n" +
        "  <option value=\"大宗交易\">&nbsp;&nbsp;&nbsp;大宗交易</option>\n" +
        "  <option value=\"进出口贸易\">&nbsp;&nbsp;&nbsp;进出口贸易</option>\n" +
        "  <option value=\"公共服务\" disabled='disabled'>公共服务</option>\n" +
        "  <option value=\"政府\">&nbsp;&nbsp;&nbsp;政府</option>\n" +
        "  <option value=\"国防军事\">&nbsp;&nbsp;&nbsp;国防军事</option>\n" +
        "  <option value=\"航天\">&nbsp;&nbsp;&nbsp;航天</option>\n" +
        "  <option value=\"科研\">&nbsp;&nbsp;&nbsp;科研</option>\n" +
        "  <option value=\"给排水\">&nbsp;&nbsp;&nbsp;给排水</option>\n" +
        "  <option value=\"水利能源\">&nbsp;&nbsp;&nbsp;水利能源</option>\n" +
        "  <option value=\"电力电网\">&nbsp;&nbsp;&nbsp;电力电网</option>\n" +
        "  <option value=\"公共管理\">&nbsp;&nbsp;&nbsp;公共管理</option>\n" +
        "  <option value=\"环境保护\">&nbsp;&nbsp;&nbsp;环境保护</option>\n" +
        "  <option value=\"非盈利组织\">&nbsp;&nbsp;&nbsp;非盈利组织</option>\n" +
        "  <option value=\"开采冶金\" disabled='disabled'>开采冶金</option>\n" +
        "  <option value=\"煤炭工业\">&nbsp;&nbsp;&nbsp;煤炭工业</option>\n" +
        "  <option value=\"石油工业\">&nbsp;&nbsp;&nbsp;石油工业</option>\n" +
        "  <option value=\"黑色金属\">&nbsp;&nbsp;&nbsp;黑色金属</option>\n" +
        "  <option value=\"有色金属\">&nbsp;&nbsp;&nbsp;有色金属</option>\n" +
        "  <option value=\"土砂石开采\">&nbsp;&nbsp;&nbsp;土砂石开采</option>\n" +
        "  <option value=\"地热开采\">&nbsp;&nbsp;&nbsp;地热开采</option>\n" +
        "  <option value=\"交通仓储\" disabled='disabled'>交通仓储</option>\n" +
        "  <option value=\"邮政\">&nbsp;&nbsp;&nbsp;邮政</option>\n" +
        "  <option value=\"物流递送\">&nbsp;&nbsp;&nbsp;物流递送</option>\n" +
        "  <option value=\"地面运输\">&nbsp;&nbsp;&nbsp;地面运输</option>\n" +
        "  <option value=\"铁路运输\">&nbsp;&nbsp;&nbsp;铁路运输</option>\n" +
        "  <option value='管线运输'>&nbsp;&nbsp;&nbsp;管线运输</option>\n" +
        "  <option value='航运业'>&nbsp;&nbsp;&nbsp;航运业</option>\n" +
        "  <option value=\"民用航空业\">&nbsp;&nbsp;&nbsp;民用航空业</option>\n" +
        "  <option value=\"农林牧渔\" disabled='disabled'>农林牧渔</option>\n" +
        "  <option value=\"种植业\">&nbsp;&nbsp;&nbsp;种植业</option>\n" +
        "  <option value=\"畜牧养殖业\">&nbsp;&nbsp;&nbsp;畜牧养殖业</option>\n"
        + "  <option value=\"林业\">&nbsp;&nbsp;&nbsp;林业</option>\n"
        + "  <option value=\"渔业\">&nbsp;&nbsp;&nbsp;渔业</option>\n"
        + "</select>"
        + "</form>"
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
                    me._initLoginDlg();

                    // me._logindlg._dlg.dialog("open");
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
    var me = this;
    Connector({

        data: {
            type: "USER_REGISTER",
            params: {
                username: $("#" + me._regisuserID).val(),
                password: $("#" + me._regispwdID).val(),
                confirmpwd: $("#" + me._regisconfirpwdID).val(),
                realname: $("#" + me._regisrnameID).val(),
                gender: $("#" + me._regisgenderID).val(),
                email: $("#" + me._regisemailID).val(),
                mobile: $("#" + me._regismobileID).val(),
                industry: $("#" + me._regisindustryID).val(),
            }
        },
        success: function (json) {
            alert("注册成功！");

            me._registerdlg.dialog("close");
            me._initLoginDlg();
            // me._logindlg._dlg.dialog("open");
            // show friends list
        },
        failure: function (json) {
            alert("注册失败,请重新填写表单！");

            // me._failTipsDlg.dialog("open");
        }
    });
}
RegisterDlg.prototype._initLoginDlg = function () {
    var me = this;
    me._logindlg = new LoginDlg({
        logindiv: "logindlg",
    })
    ;
};
