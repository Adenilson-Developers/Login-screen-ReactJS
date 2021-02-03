import styled from "styled-components";

export const AreaLogin = styled.div`
  padding: 30px;
  max-width: 300px;
  margin: auto;
  margin-top: 20px;
  text-align: center;
  border: 1px solid #f9f7fa;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 9px #d6dbdf;

  .create_count {
    font-size: 20px;
    color: #0f116e;
    margin: 20px 4px;
  }

  .header_login {
    display: block;

    h1 {
      margin-top: 3px;
      font-size: 25px;
      color: #0f116e;
    }

    .facebook_account {
      display: flex;
      width: 100%;
      font-size: 16px;
      text-align: center;
      color: #6b8fda;
      border-radius: 4px;
      box-shadow: 0px 7px 4px 5px #d6dbdf;

      a {
        text-decoration: none;
      }

      a:hover {
        color: #083fb0;
        text-decoration: none;
        transition: 0.2s;
      }
    }

    .google_account {
      display: flex;
      width: 100%;
      font-size: 16px;
      text-align: center;
      color: #e0c34a;
      margin-top: 15px;
      border-radius: 4px;
      border: 1px solid #f9f7fa;
      box-shadow: 0px 7px 4px 5px #d6dbdf;

      a {
        text-decoration: none;
      }

      a:hover {
        color: #dfb610;
        text-decoration: none;
      }
    }
  }

  p {
    font-size: 13px;
    margin: 20px 0px;
    color: #48434a;
    width: 80%;
    margin: 30px 30px;
    box-shadow: 0px 0px 5px 9px #d6dbdf;
  }

  .form-input {
    text-align: left;

    label {
      display: block;
    }
    input {
      margin-bottom: 20px;
      padding: 10px;
      font-size: 16px;
      border: 1px solid #7d2ae8;
      border-radius: 5px;
      width: 280px;
      background-color: #aeb6bf;
      color: #0f1010;

      &:hover {
        border: 1px solid #7d2ae8;
      }
    }
  }

  .footer-login {
    font-size: 17px;

    a {
      font-weight: bold;
      margin-left: 5px;
      color: #4e129c;
      transition: 0.3s;
      cursor: pointer;
      font-size: 20px;
      text-decoration: none;

      &:hover {
        color: #7d2ae8;
      }
    }
  }
`;
