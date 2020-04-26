var Retreat = require('./models/retreat');
var check = require('./helpers/middlewares')

exports.createRetreat = function(req, res) { 
    
    var newRetreat = new Retreat(req.body);
    
    var valid = check.checkRequiredFields(req)

    if(valid!=""){
      res.status(400).json()
    console.log("Error: "+valid)
}
    else
    newRetreat.save(function (err, retreat) { 
        if (err) { 
            res.status (400).json(err);
        }

        res.json(retreat); 
});
};

exports.getRetreats = function(req, res) {
  
    Retreat.find({}, function (err, retreats) {
      if (err) {
        res.status(400).json(err); 
      } 
    
       res.json(retreats);
    }); 
  };
  
  exports.getRetreat = function(req, res) {
    Retreat.findOne({_id: req.params.id}, function (err, retreat) {
      if (err) {
        res.status(400).json(err);
      } 
      res.json(retreat);
    }); 
  };
  
  exports.updateRetreat = function(req, res) {
    var valid = check.checkRequiredFields(req)

    if(valid!=""){
      res.status(400).json()
    console.log("Error: "+valid)
}
    else
    Retreat.findOneAndUpdate({_id: req.params.id}, req.body, {new: true},function (err, retreat) {
      if (err) {
        res.status(400).json(err);
      } 
      res.json(retreat);
    }); 
  };
  
  exports.deleteRetreat = function(req, res) {
    Retreat.findByIdAndRemove(req.params.id, function (err, retreat) {
      if (err) {
        res.status(400).json(err);
      } 
      res.json(retreat);
    }); 
  };