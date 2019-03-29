module.exports = {
    getAll: (req, res) => {
        req.app.get('db')
        .getAllProducts()
        .then(products => {
            res.status(200).send(products)
        }).catch(err => {
            res.status(500).send({errorMessage: 'get all error'})
            console.log(err)
        })
    },
    create: (req, res) => {
        const{product_img, product_name, product_price} = req.body
        req.app.get('db')
        .createProduct([product_name, product_price, product_img])
        .then((product) => {
            res.status(200).send(product)
        }).catch(err => {
            res.status(500).send({errorMessage: 'create error'})
            console.log(err)
        })
    },
    delete: (req, res) => {
        const {id} = req.params
        req.app.get('db')
        .deleteProduct(id)
        .then(() => {
            res.status(200).send('user deleted')
        }).catch(err => {
            res.status(500).send({errorMessage: 'delete error'})
            console.log(err)
        })
    }
}