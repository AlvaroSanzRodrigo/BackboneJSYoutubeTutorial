let TheView;

TheView = Backbone.View.extend({
    tagName: 'span',
    className: "prettycake",
    id: 'span1',
    initialize: function () {
        console.log(this.el);
        console.log(this.$el);
        $("#unique").append(this.el);
    }
});

$(document).ready(function () {
    var aView = new TheView();
});

