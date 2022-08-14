import React from "react";
import axios from "axios";

const USER_API = "https://fakestoreapi.com/auth/login";

class AuthService {
  async login(username: any, password: any) {
    let response = await axios.post(USER_API, { username, password });
    return response.data;
  }
}

export default new AuthService();
