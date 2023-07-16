import Express from "express";
import produtoRouter from "../../module/produto/routes/produto.routes";
const App = Express();

App.use(Express.urlencoded({ extended : true}))
App.use(Express.json())

App.use(produtoRouter)

const PORT = process.env.PORT || 3003;
App.listen(PORT, () => {
  console.log(`server produto is running on port:${PORT}`);
});
