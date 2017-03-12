
  var mongoose = require('mongoose');
  require('mongoose-type-email');
  var taskDescriptionSchema = new mongoose.Schema(
    {
        taskname : String ,
        date : Date ,
        priority : Number ,
        color : String ,
        description : String ,
        attendees : [{
          type: mongoose.SchemaTypes.Email
        }]
    }
  );

  module.exports = mongoose.model('TaskToDoList', taskDescriptionSchema );
