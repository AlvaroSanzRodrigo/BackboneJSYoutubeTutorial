TheView = Backbone.View.extend({
    defaults: {el: $("#unique")},
    initialize: function () {
        console.log('This now initializes');
        console.log(this.el);
        console.log(this.$el);
        this.$el.append("Hello I'm appended");
    }
});

$(document).ready(function () {
   let aView = new TheView();
});