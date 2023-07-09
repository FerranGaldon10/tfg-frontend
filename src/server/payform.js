import express from 'express';
import bodyParser from 'body-parser';
import mailgun from 'mailgun-js';
import cors from 'cors';

const app = express();
const mg = mailgun({ apiKey: "5737fc6e35998bf799e68117cdc9d3d4-70c38fed-7665ed5f", domain: 'sandbox2d5fca84a86847e28a3c1faecd63ce02.mailgun.org' });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors({
  origin: 'http://127.0.0.1:5173',
  methods: ['POST'],
  allowedHeaders: ['Content-Type']
}));

app.post('/payform', (req, res) => {
  const { email, country, name, surnames, street, house, postal, city, state, phone, number, expire, cvv, cartitems } = req.body;


  const data = {
    from: email,
    to: 'ferrangaldon100@gmail.com',
    subject: 'Datos de la compra de un usuario',
    text: `-Datos del comprador-\nEmail: ${email}\nPaís: ${country}\nNombre: ${name}\nApellidos: ${surnames}\nDirección: ${street}\nMas información de la dirección: ${house}\nCódigo Postal: ${postal}\nCiudad: ${city}\nProvíncia o estado: ${state}\nTeléfono: ${phone}\n-Datos bancarios del comprador-\nNúmero de la tarjeta: ${number}\nFecha de caducidad: ${expire}\nCVV/CVC: ${cvv}\n-Productos que ha comprado-\n${cartitems}`
  };

  mg.messages().send(data, (error, body) => {
    if (error) {
      console.log(error);
      res.status(500).json({ success: false, message: 'Error al enviar el mensaje.' });
    } else {
      console.log(body);
      res.status(200).json({ success: true, message: 'Mensaje enviado correctamente.' });
    }
  });
});

const PORT = process.env.PORT || 3005;

app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});
