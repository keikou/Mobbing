
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { login_message: '', register_message: '' });
};