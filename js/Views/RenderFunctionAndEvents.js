let TheView;

TheView = Backbone.View.extend({
    render: function () {
        let template = _.template($("#ourTemplate").html(), {});
        this.$el.html(template);
    },
    initialize: function () {
        this.render();
    },
    events: {
        "click" : "clicked",
        "mouseover .hello": "mousedOver"
    },
    clicked: function () {
        alert("You click it!");
    },
    mousedOver: function () {
        alert("moused over!")
    }
});

$(document).ready(function () {
    var aView = new TheView({el: $("#unique")});
});