let StudentModel = Backbone.Model.extend({
    default: {
        name: 'unknown'
    }
});

let StudentCollection = Backbone.Collection.extend({
    model: StudentModel
});

$(document).ready(function () {
    let pepe = new StudentModel({name: 'Pepe', id: 0});
    let luis = new StudentModel({name: 'Luis', id: 1});
    let studentCollection = new StudentCollection([pepe, luis]);
    console.log('cstudentCollection size: ' + studentCollection.size());
    displayCollectionContent("students", studentCollection);
    let sara = new StudentModel({name: 'Sara', id: 2});
    studentCollection.add([sara]);
    displayCollectionContent("students and sara", studentCollection);
    studentCollection.remove(pepe);
    displayCollectionContent("students without pepe", studentCollection);

});

function displayCollectionContent(string, collection) {
    console.log(string + " " + JSON.stringify(collection.toJSON()));
}