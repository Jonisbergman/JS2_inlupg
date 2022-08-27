const Product = require('./productSchema');

//-------------------------------- SKAPAR EN PRODUKT
    exports.createProduct = (req, res) =>   {

      Product.exists({  name: req.body.name  }, (err, result) =>  {
      
          if(err) {
              return  res.status(500).json(err)
          }
      
          if(result) {
              return res.status(400).json({
                  statusCode:400,
                  status: false,
                  message: 'Product name already taken, please change the name to create your product'
              })
          }      
          
          Product.create({
            name:         req.body.name,
            desc:         req.body.desc,  
            price:        req.body.price,
            imageURL:     req.body.imageURL
          })
          .then(data => {
              res.status(201).json({
                  statusCode: 201,
                  status: true,
                  message: 'Product created successfully',
                  data
              })
          })
          .catch(err => {
              res.status(500).json({
                  statusCode: 500,
                  status: false,
                  message: 'Failed to create product',
                  err
              })
          })
      })
      
      }


//-------------------------------- HÄMTAR ALLA PRODUKTER      
exports.getProducts = async (req, res) =>   {

  try {
   const data = await Product.find()
   res.status(200).json(data)        
  } 
  catch (error) {
      res.status(500).json({
          statusCode:500,
          status: false,
          message: 'Could not get the products',
          err
      })

  }

}

//-------------------------------- HÄMTAR EN PRODUKT MED ID

exports.getProductById = (req, res) => {

  Product.exists({ _id:  req.params.id }, (err, product) => {

      if(err){
          return res.status(400).json({
          statusCode:400,
          status: false,
          message: 'You made a bad request',
          })
      }

      if(!product) {
          return res.status(404).json({
          statusCode:404,
          status: false,
          message: 'No such product exists',
          })
      }

      Product.findById(req.params.id)
          .then(data => res.status(200).json({data}))
          .catch(err => {
              res.status(500).json({
                  statusCode:500,
                  status: false,
                  message: err.message || 'Internal server error',
              })
          })


  })
}

//-------------------------------- UPPDATERAR EN PRODUKT

exports.updateProduct = (req, res) => {

  Product.exists({ _id: req.params.id }, (err, result) => {

      if(err) {
          return res.status(400).json({
              statusCode:400,
              status: false,
              message: 'You made a bad request',
          })
      }

      if(!result){
          return res.status(404).json({
              statusCode:404,
              status: false,
              message: 'No such product exists',
              })
      }        
      
      Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
          .then(data => {
              res.status(200).json({
                  statusCode: 200,
                  status: true,
                  message: 'Product updated successfully',
                  data
              })
          })
          .catch(err => {         

            if(err.code === 11000) {
              return res.status(400).json({
                  statusCode: 400,
                  status: false,
                  message: 'A product with that name already exists',
                  err
              })
            }

          res.status(500).json({
              statusCode: 500,
                  status: false,
                  message: 'Failed to update product',
                   err 
                  })
                         
      })
  })

}

//-------------------------------- RADERAR EN PRODUKT

exports.deleteProduct = (req, res) => {

  Product.exists({ _id: req.params.id }, (err, result) => {
      if(err)
          return res.status(400).json({
              statusCode:400,
              status: false,
              message: 'You made a bad request',
              })

      if(!result){
          return res.status(404).json({
              statusCode:404,
              status: false,
              message: 'No such product exists',
              })
      }           

      Product.deleteOne({ _id: req.params.id })
          .then(() => {
              res.status(200).json({                   
                      statusCode:200,
                      status: true,
                      message: 'Product deleted',                     
              })
          })
          .catch(err => {
              return res.status(500).json({
                  statusCode:500,
                  status: false,
                  message: 'Failed to delete product',
                  err
                  })
          })

})

}
