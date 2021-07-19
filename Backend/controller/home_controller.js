const List = require('../model/List');

module.exports.home = async function(req,res){

  try {
    let list = await List.find({});
    return res.status(200).json({'todo': list});

  } catch (error) {
     return res.status(400).send('Failed to fetch');
  }

}

