import Express from "express";
import userRouter from "../../module/User/routes/user.routes";
const App = Express();

import './../provider/rabbitmq/consumerQueue/index'
App.use(Express.urlencoded({ extended : true}))
App.use(Express.json())

App.use(userRouter)

const PORT = process.env.PORT || 3001;
App.listen(PORT, () => {
  console.log(`server client is running on port:${PORT}`);
});
