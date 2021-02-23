import { Button, CircularProgress, Grid, TextField } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import Section from "../../containers/section";
import Card from "../../elements/card";
import { IoPersonCircleSharp } from "react-icons/io5";
import { getLogin } from "../../api";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  function onUserNameChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setUsername(e.target.value);
  }
  function onPasswordChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setPassword(e.target.value);
  }

  async function onClickEntrar() {
    setLoading(true);
    await getLogin({ username, password });
    setLoading(false);
  }

  return (
    <Section justifyContent="center" alignItems="center">
      <Card width="400px" height="auto" borderRadius="5px" padding="20px">
        <Grid container spacing={5} justify="center">
          <Grid item>
            <IoPersonCircleSharp size={"180px"} />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="username"
              label="Usuario"
              required={true}
              variant="outlined"
              value={username}
              onChange={(e) => onUserNameChange(e)}
              size="small"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="Contraseña"
              label="Contraseña"
              required={true}
              variant="outlined"
              type="password"
              value={password}
              onChange={(e) => onPasswordChange(e)}
              size="small"
              fullWidth
            />
          </Grid>
          <Grid container item spacing={3} alignItems="flex-end">
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={() => onClickEntrar()}
                disabled={username.length === 0 || password.length === 0}
              >
                {loading ? <CircularProgress size={"25px"} /> : "Entrar"}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </Section>
  );
}

export default Login;