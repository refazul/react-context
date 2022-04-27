import React from "react";
import { login } from "./api";
import { UserConsumer } from "./UserContext";

class LoginPage extends React.Component {
  state = {
    error: null,
    loading: false,
    user: "",
    pass: ""
  };
  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = (e, onLogin) => {
    e.preventDefault();
    this.setState({ loading: true, error: null });
    login(this.state.user, this.state.pass)
      .then((user) => {
        this.setState({ loading: false });
        onLogin(user);
      })
      .catch((error) => this.setState({ error, loading: false }));
  };
  render() {
    const { user, pass, error, loading } = this.state;
    return (
      <UserConsumer>
        {({ onLogin }) => (
          <div className="LoginPage">
            <form onSubmit={(e) => this.handleSubmit(e, onLogin)}>
              <label>
                User
                <input
                  name="user"
                  value={user}
                  onChange={this.handleInputChange}
                />
              </label>
              <label>
                Pass
                <input
                  name="pass"
                  value={pass}
                  onChange={this.handleInputChange}
                />
              </label>
              {error && <div className="error">{error.message}</div>}
              <button type="submit" disabled={loading}>
                Sign In
              </button>
            </form>
          </div>
        )}
      </UserConsumer>
    );
  }
}

export default LoginPage;
