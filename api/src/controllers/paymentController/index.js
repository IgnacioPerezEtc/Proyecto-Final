const mercadopago = require("mercadopago");

mercadopago.configure({
    access_token: "APP_USR-4369187746014268-012422-f3a135242a8379a64e05e9923805376f-1294141359",
});

const payment = async (req, res) => {
    
    try {
        const { products } = req.body;
    
        let preference = {
            items: products,
    
            back_urls: {
                success: 'http://127.0.0.1:5173/payApproved'
            }
        }
    
        await mercadopago.preferences
            .create(preference)
            .then( response => {
                res.json({ link:response.body.init_point });
            })
        
    } catch (error) {
        return res.status(404).json({ error: error.message });
    }

}

module.exports = {
    payment
}