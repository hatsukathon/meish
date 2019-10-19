import React from "react";
import { withStyles } from '@material-ui/core';
// import { Redirect } from "react-router-dom";
// import background from "../../static/background.png";

@withStyles(theme => ({
  container: {
    background: 'red',
  },
}))
class Login extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  onClick = () => {
    this.props.history.push("/");
    this.setState({ redirect: true });
  };

  render() {
    const { classes } = this.props;
    // const { redirect } = this.state;
    return (
      <div className={classes.container}>
        <h1 onClick={this.onClick}>Login Page</h1>
        <a href="http://localhost:3000/user/auth/twitter/">Twitter ログイン</a>
      </div>
    );
  }
}
export default Login