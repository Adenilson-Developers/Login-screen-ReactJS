import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { AreaLogin } from "./styled";
import { BtnIcons } from "../../components/styled";
import { BtnDefoult } from "../../components/styled";

import FacebookIcon from "@material-ui/icons/Facebook";
import EmailIcon from "@material-ui/icons/Email";
import ReplyIcon from "@material-ui/icons/Reply";

function Login() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/register">
          <AreaLogin>
            <h1 className="create_count">
              <Link to="/">
                <ReplyIcon />
              </Link>
              Crie sua conta gratuita!
            </h1>

            <form>
              <div className="form-input">
                <label>Nome</label>
                <input type="text" />
              </div>

              <div className="form-input">
                <label>Email</label>
                <input type="email" />
              </div>

              <div className="form-input">
                <label>Senha</label>
                <input type="password" />
              </div>

              <BtnDefoult>Entrar</BtnDefoult>

              <div className="footer-login">
                Já tem uma conta?
                <Link to="/">Login</Link>
              </div>
            </form>
          </AreaLogin>
        </Route>

        <Route exact path="*">
          <AreaLogin>
            <div className="header_login">
              <h1>Login</h1>

              <BtnIcons>
                <div className="facebook_account">
                  <Link to="#">
                    <FacebookIcon />
                    Entrar com a conta do facebook
                  </Link>
                </div>
              </BtnIcons>

              <BtnIcons>
                <div className="google_account">
                  <Link to="#">
                    <EmailIcon />
                    Entrar com a conta do google
                  </Link>
                </div>
              </BtnIcons>
            </div>
            <p>OU</p>
            <form>
              <div className="form-input">
                <label>Email</label>
                <input type="email" />
              </div>

              <div className="form-input">
                <label>Senha</label>
                <input type="password" />
              </div>

              <BtnDefoult>Entrar</BtnDefoult>

              <div className="footer-login">
                Não tem uma conta?
                <Link to="/register">Registre-se</Link>
              </div>
            </form>
          </AreaLogin>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Login;
