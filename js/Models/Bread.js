let SandWichModel = Backbone.Model.extend({
    default: {
        bread: 'wheat'
    },
    initialize: function () {
        this.bindEvents();
    },
    bindEvents: function () {
      this.on("change:bread", function (model) {
          let newBread = model.get('bread');
          alert("Bread changed to: " + newBread);
      })
    }
});

$(document).ready(function () {
   let sandwich = new SandWichModel();
   sandwich.set({bread: 'jalapeno'});
});
