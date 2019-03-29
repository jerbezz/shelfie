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
    create: (req, res => {
        
    })
}