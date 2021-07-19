const List = require('../model/List');

module.exports.delete_list = async function(req,res){

  try {
    let id = req.query.id;  
    let list = await List.deleteMany({_id:id})
    return res.status(200).json({'todo':'list deleted successfully'});

  } catch (error) {
     return res.status(400).send('Failed to delete');
  }

}

