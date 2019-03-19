
let WebsiteModel = Backbone.Model.extend({
    defaults: {
        name: "Stranger"
    },
    initialize: function () {
        console.log("Is this working?")
    }
});



$(document).ready(function () {
    let websiteModel = new WebsiteModel({name: 'the best website ever'});
    alert('This page name is: ' + websiteModel.get('name'))
});