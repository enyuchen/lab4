
/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('index', {
    "projects": [
      
    { "name": "Waiting in Line",
      "image": "lorempixel.people.1.jpeg",
      "id": "projecdt1"
    },

    { "name": "Needfinding",
    "image": "lorempixel.city.1.jpeg",
    "id": "projecdt2"
    }






    ]
  })
};