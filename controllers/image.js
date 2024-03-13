const handleImage = (req, res, db) => {
    const { id } = req.body;
    db('users').where('id', '=', id)
      .increment('entries', 1)
      .returning('entries')
      .then(entries => {
        res.json(entries[0]);
      })
      .catch(err => res.status(400).json('unable to get entries'));
  };
  
  // If you are calling an external API for image processing
  const handleApiCall = (req, res) => {
    // external API logic
  };
  
  module.exports = {
    handleImage,
    handleApiCall
  };
  