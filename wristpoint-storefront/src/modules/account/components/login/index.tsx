import { useFormState } from "react-dom"

import { LOGIN_VIEW } from "@modules/account/templates/login-template"
import Input from "@modules/common/components/input"
import { logCustomerIn } from "@modules/account/actions"
import ErrorMessage from "@modules/checkout/components/error-message"
import { SubmitButton } from "@modules/checkout/components/submit-button"
import Image from "next/image"

type Props = {
  setCurrentView: (view: LOGIN_VIEW) => void
}

const Login = ({ setCurrentView }: Props) => {
  const [message, formAction] = useFormState(logCustomerIn, null)

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-8 lg:flex-row lg:-ml-60">
        <div>
          <Image
            src={require("../../../../../public/undraw_sign_in_re_o58h.svg")}
            height={100}
            width={100}
            quality={100}
            alt="team"
            className="flex-shrink-0 rounded-lg w-full object-cover object-center mb-4 h-60"
            unoptimized
          />
        </div>
        <div
          className="max-w-sm w-full flex flex-col items-center"
          data-testid="login-page"
        >
          <h1 className="text-large-semi uppercase mb-6">Welcome back</h1>
          <p className="text-center text-base-regular text-ui-fg-base mb-8">
            Sign in to access an enhanced Wristpoint watchshopping experience.
          </p>
          <form className="w-full" action={formAction}>
            <div className="flex flex-col w-full gap-y-2">
              <Input
                label="Email"
                name="email"
                type="email"
                title="Enter a valid email address."
                autoComplete="email"
                required
                data-testid="email-input"
              />
              <Input
                label="Password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                data-testid="password-input"
              />
            </div>
            <ErrorMessage error={message} data-testid="login-error-message" />
            <SubmitButton data-testid="sign-in-button" className="w-full mt-6">
              Sign in
            </SubmitButton>
          </form>
          <span className="text-center text-ui-fg-base text-small-regular mt-6">
            Not registered?{" "}
            <button
              onClick={() => setCurrentView(LOGIN_VIEW.REGISTER)}
              className="underline"
              data-testid="register-button"
            >
              Sign up now
            </button>
            .
          </span>
        </div>
      </div>
    </>
  )
}

export default Login
