const List = require('../model/List');

module.exports.add = async function(req,res){

  try {
    let list = await List.create(req.body);
    return res.status(200).json({'todo': 'todo added successfully'});

  } catch (error) {
     return res.status(400).send('adding new todo failed');
  }

}

