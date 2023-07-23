const mercadopago = require("mercadopago");
require("dotenv").config();
const {ACCESS_TOKEN} = process.env;

mercadopago.configure({
  access_token: ACCESS_TOKEN,
});

const placeOrder = async (req, res) => {
  try {
    const {id, title, description, image, stock, condition, price, quantity} =
      req.body;

    let preference = {
      items: [
        {
          id,
          title,
          quantity,
          currency_id: "ARS",
          unit_price: price,
          description,
          picture_url: image,
        },
      ],

      back_urls: {
        success: "http://localhost:3001/payment/success",
        failure: "http://localhost:3001/payment/failure",
        pending: "http://localhost:3001/payment/pending",
      },
    };

    const response = await mercadopago.preferences.create(preference);
    res.status(200).json({response});
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};

module.exports = placeOrder;
