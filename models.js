// export Schemas to web.js
module.exports.configureSchema = function(Schema, mongoose) {
    
    //Screen media category
    var Screen = new Schema({
      title	: String
    , year	: String
    , squareImg	: String
    , videoUrl	: String
    , description	: String
    });
    
    //all other media categories - Paper, Photo, Canvas, Tactile 
    var NotScreen = new Schema({
     title : String
    , year	: String
    , squareImg	: String
    , image	: String
    , medium	: String
    , category	: String
    , description	: String
    });

    // add schemas to Mongoose
    mongoose.model('Screen', Screen);
    mongoose.model('NotScreen', NotScreen);

};