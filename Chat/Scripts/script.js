var ViewModel = function () {
    var self = this;
    self.msg = ko.observableArray();
    self.error = ko.observable();
    self.lengthMsg = 0;
    
    self.currentUser = sessionStorage.getItem("user");

    self.newMsg = {
        Name: ko.observable(),
        Content: ko.observable()
    }    

    var msgUri = '/api/Messages/';

    function ajaxHelper(uri, method, data) {
        self.error('');
        return $.ajax({
            type: method,
            url: uri,
            dataType: 'json',
            contentType: 'application/json',
            data: data ? JSON.stringify(data):null
        }).fail(function (jqXHR, textStatus, errorThrown) {
            self.error(errorThrown);
        });
    }

    function getAllMsg() {
        ajaxHelper(msgUri, 'GET').done(function (data) {
            self.lengthMsg = data.length;
            self.msg(data);
        });
        
    }

    self.addMsg = function (formElement) {
        var msg = {
            Name: self.currentUser,
            Content: self.newMsg.Content()
        };
        
        ajaxHelper(msgUri, 'POST', msg).done(function (item) {
            self.msg.push(item);
        });
        self.newMsg.Content("");
    }

    getAllMsg();

    
}
var viewModel =new ViewModel();
ko.applyBindings(viewModel);

function autoScroll() {
    setTimeout(function scroll() {
        var block = document.getElementById("chat");
        block.scrollTop = block.scrollHeight;
    }, 1000);
    
}



$(document).ready( function(){
    autoScroll();
    var startLength = viewModel.lengthMsg;
    setInterval(function reload() {
        $.ajax({
            type: 'GET',
            url: '/api/Messages/'
        }).done(function (data) {
            if (startLength < data.length) {
                viewModel.msg(data);
                autoScroll();
                startLength = data.length;
            }
        });
    }, 2000);
}
    
)