let StudentModel = Backbone.Model.extend({
    default: {
        name: 'unknown'
    }
});

let StudentCollection = Backbone.Collection.extend({
    model: StudentModel,
    initialize: function () {}
});

$(document).ready(function () {
    let pepe = new StudentModel({name: 'Pepe', id: 0});
    let luis = new StudentModel({name: 'Luis', id: 1});
    let studentCollection = new StudentCollection([pepe, luis]);
    console.log('studentCollection size: ' + studentCollection.size());
    displayCollectionContent('Before ', studentCollection);
    let student = studentCollection.get(0);
    studentCollection.set({name: 'Pepe Ruiz'});
    displayCollectionContent('After', studentCollection);

});

function displayCollectionContent(string, collection) {
    console.log(string + " " + JSON.stringify(collection.toJSON()));
}