
const adminController = {

  notFound: async (req, res) => {
  
    res.status = 404;
    res.json({error : 'page not found'});

},
};

module.exports = adminController;
