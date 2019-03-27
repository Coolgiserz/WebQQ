/**
 * To deal with the webserver connection
 * return {undefined}
 *
 * @param opts
 * {
 *     url:"",
 *     data:{
 *         type:""
 *         param:{
 *             username:"",
 *             password:"",
 *         },
 *
 *     },
 *     success:function,
 *     error:function
 * }
 * @constructor
 */
Connector = function (opts) {
    var me = this;
    me._opts = $.extend({
        url: "php/WebQQServer.php"
    }, opts)
    $.ajax({//send the post request to the server
        url: me._opts.url,
        method: "GET",
        data: {
            request: JSON.stringify(me._opts.data)
        },
        success: function (data) {
            // me._onSuccess(data);
            var json = JSON.parse(data);
            if (json.success) {
                if (me._opts.success) {
                    me._opts.success(json);
                    // alert('登录成功');
                    //处理登录成功逻辑
                } else {

                    alert(json.message);
                }
            } else {
                if (me._opts.failure) {
                    me._opts.failure(json);
                } else {
                    alert(json.message);
                }
            }
        },
        error: function (data) {
            // me._onError(data);
            alert("网络异常");

        }


    });
}

/**
 * deal with the circumstance returning success
 * @private
 */
Connector.prototype._onSuccess = function (data) {
    var me = this;
    var json = JSON.parse(data);
    if (json.success) {
        if (me._opts.success) {
            me._opts.success(json);
        } else {
            alert(json.message);
        }
    } else {
        if (me._opts.failure) {
            me._opts.failure(json);
        } else {
            alert(json.message);
        }
    }
}

/**
 * deal with the circumstance returning error
 * @private
 */
Connector.prototype._onError = function () {
    var me = this;
    alert("网络异常");

}
