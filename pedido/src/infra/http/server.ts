import Express from "express";
import pedidoRouter from "../../module/User/routes/pedido.routes";
const App = Express();

import '../provider/rabbitmq/consumer/'
App.use(Express.urlencoded({ extended : true}))
App.use(Express.json())


App.use(pedidoRouter)

const PORT = process.env.PORT || 3002;
App.listen(PORT, () => {
  console.log(`server pidido is running on port:${PORT}`);
});
