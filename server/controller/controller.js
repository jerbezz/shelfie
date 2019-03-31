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
        const db = req.app.get('db')
        db.createProduct(product_name, product_price, product_img)
        .then((resp) => {
            console.log(resp,"--------------")
            res.status(200).send(resp)
        }).catch((err)=> {
            console.log(err)
            res.status(500).send({errorMessage: 'create error'})
        })

            
    },
    delete: (req, res) => {
        const {id} = req.params
        const db = req.app.get('db')
        db.deleteProduct(id)
        .then(() => {
            // const products = db.getAllProducts().then(resp=>{
            //     console.log(resp,',================')
            //     res.status(200).send(resp)
            //     return products
            res.status(200).send(id)
            // }).catch(err => {
            //     return err
            // })
        }).catch(err => {
            console.log(err)
            res.status(500).send({errorMessage: err})
        })
    },
    update: (req, res) => {
        const {id} = req.params
        const {product_id, product_name, product_img, product_price} = req.body
        console.log(req.body)
        console.log(req.params,'=========---params')
        const db = req.app.get('db')
        db.updateProduct(id, product_name, product_price, product_img)
        .then((resp) => {
            res.status(200).send(resp)
        }).catch((err)=>{
            res.status(500).send(err)
        })

    }
}