const Product = require('./productSchema');

exports.createProduct = (req, res)  =>  {

  Product.exists({  name: req.body.name },  (err, result) =>  {

    if(err){
      return  res.status(500).json(err)
    }

    if(result)  {
      return  res.status(400).json({
        statusCode: 400,
        status: false,
        message:  'Product name already taken, please change the name to create your product'
      })
    }

    Product.create({
      name:         req.body.name,
      desc:         req.body.desc,  
      price:        req.body.price,
      imageURL:     req.body.imageURL
    })
    .then(data  =>  {
        res.status(201).json({
          statusCode: 201,
          status: true,
          message:  'Product  created successfully',
          data
        })
    })
    .catch(err  =>  {
      res.status(500).json({
        statusCode: 500,
        status: false,
        message:  'Failed to create product',
        err
      })
    })


  })

}