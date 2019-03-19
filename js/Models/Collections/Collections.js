let StudentModel = Backbone.Model.extend({
   default: {
       name: 'unknown'
   }
});

let StudentCollection = Backbone.Collection.extend({
    model: StudentModel
});

$(document).ready(function () {
    let pepe = new StudentModel();
    let luis = new StudentModel();
    let studentCollection = new StudentCollection([pepe, luis]);
    console.log('cstudentCollection size: ' + studentCollection.size())
});