/**
     * [log description] 打印log日志
     * @param  {[type]} callName [description] 功能
     * @param  {[type]} str      [description] 字符串或者object
     * @return {[type]}          [description]
     */
    function log(callName, str){   
         str = Object.prototype.toString.call(str) === "[object String]" ? str : JSON.stringify(str); 
         $('<p onclick="document.body.removeChild(this)"><span>'+ new Date() +'</span><br/>'+ callName +'<br/>打印数据：'+ str +'</p>').css({width:'100%','background':'#fff', 'position':'relative','z-index':'100',wordBreak:'break-all','borderBottom':'1px solid red','padding':'3px'}).insertBefore('#js-scroll');
    }
