import { selectThemeMode } from "@/app/app-slice"
import { useAppSelector } from "@/common/hooks"
import { getTheme } from "@/common/theme"
import Button from "@mui/material/Button"
import Checkbox from "@mui/material/Checkbox"
import FormControl from "@mui/material/FormControl"
import FormControlLabel from "@mui/material/FormControlLabel"
import FormGroup from "@mui/material/FormGroup"
import FormLabel from "@mui/material/FormLabel"
import Grid from "@mui/material/Grid2"
import TextField from "@mui/material/TextField"
import { SubmitHandler, useForm } from "react-hook-form"
import styles from "./Login.module.css"

type Inputs = {
  email: string
  password: string
  rememberMe: boolean
}

export const Login = () => {
  const themeMode = useAppSelector(selectThemeMode)

  const theme = getTheme(themeMode)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ defaultValues: { email: "", password: "", rememberMe: false } })
  console.log(errors)
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data)
  }
  return (
    <Grid container justifyContent={"center"}>
      <FormControl>
        <FormLabel>
          <p>
            To login get registered
            <a
              style={{ color: theme.palette.primary.main, marginLeft: "5px" }}
              href="https://social-network.samuraijs.com"
              target="_blank"
              rel="noreferrer"
            >
              here
            </a>
          </p>
          <p>or use common test account credentials:</p>
          <p>
            <b>Email:</b> free@samuraijs.com
          </p>
          <p>
            <b>Password:</b> free
          </p>
        </FormLabel>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <TextField
              error={!!errors.email}
              label="Email"
              margin="normal"
              {...register("email", {
                required: true,
                minLength: { value: 3, message: "min length<4" },
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Incorrect email address",
                },
              })}
            />
            {errors.email && <span className={styles.errorMessage}>{errors.email.message}</span>}
            <TextField type="password" label="Password" margin="normal" {...register("password")} />
            <FormControlLabel label="Remember me" control={<Checkbox />} {...register("rememberMe")} />
            <Button type="submit" variant="contained" color="primary">
              Login
            </Button>
          </FormGroup>
        </form>
      </FormControl>
    </Grid>
  )
}
