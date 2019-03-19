let StudentModel = Backbone.Model.extend({
    default: {
        name: 'unknown'
    }
});

let StudentCollection = Backbone.Collection.extend({
    model: StudentModel,
    initialize: function () {
        this.bindEvents();
    },
    bindEvents: function () {
        this.on('change:name', function (model) {
            alert('Hey, the name changed!' + model.get('name'))
        });
        this.on('add', function (model) {
            alert('Hey, a student had been add!' + model.get('name'))
        });
        this.on('remove', function (model) {
            alert('Hey, a student had been remove!' + model.get('name'))
        });
    }
});

$(document).ready(function () {
    let pepe = new StudentModel({name: 'Pepe', id: 0});
    let luis = new StudentModel({name: 'Luis', id: 1});
    let studentCollection = new StudentCollection([pepe]);
    console.log('studentCollection size: ' + studentCollection.size());
    studentCollection.add([luis]);
    studentCollection.remove([pepe]);
    luis.set({name: 'Lsuis changed'})
});

function displayCollectionContent(string, collection) {
    console.log(string + " " + JSON.stringify(collection.toJSON()));
}