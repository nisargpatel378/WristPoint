"use client"

import { useFormState } from "react-dom"
import Image from "next/image"

import Input from "@modules/common/components/input"
import { LOGIN_VIEW } from "@modules/account/templates/login-template"
import { signUp } from "@modules/account/actions"
import ErrorMessage from "@modules/checkout/components/error-message"
import { SubmitButton } from "@modules/checkout/components/submit-button"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

type Props = {
  setCurrentView: (view: LOGIN_VIEW) => void
}

const Register = ({ setCurrentView }: Props) => {
  const [message, formAction] = useFormState(signUp, null)

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
          className="max-w-sm flex flex-col items-center"
          data-testid="register-page"
        >
          <h1 className="text-large-semi uppercase mb-6">
            Become a WristPoint Store Member
          </h1>
          <p className="text-center text-base-regular text-ui-fg-base mb-4">
            Create your WristPoint Store Member profile, and get access to an
            enhanced watch shopping experience.
          </p>
          <form className="w-full flex flex-col" action={formAction}>
            <div className="flex flex-col w-full gap-y-2">
              <Input
                label="First name"
                name="first_name"
                required
                autoComplete="given-name"
                data-testid="first-name-input"
              />
              <Input
                label="Last name"
                name="last_name"
                required
                autoComplete="family-name"
                data-testid="last-name-input"
              />
              <Input
                label="Email"
                name="email"
                required
                type="email"
                autoComplete="email"
                data-testid="email-input"
              />
              <Input
                label="Phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                data-testid="phone-input"
              />
              <Input
                label="Password"
                name="password"
                required
                type="password"
                autoComplete="new-password"
                data-testid="password-input"
              />
            </div>
            <ErrorMessage error={message} data-testid="register-error" />
            <span className="text-center text-ui-fg-base text-small-regular mt-6">
              By creating an account, you agree to WristPoint Store&apos;s{" "} Privacy and Terms of Use.
              {/* <LocalizedClientLink
                href="/content/privacy-policy"
                className="underline"
              >
                Privacy Policy
              </LocalizedClientLink>{" "}
              and{" "}
              <LocalizedClientLink
                href="/content/terms-of-use"
                className="underline"
              >
                Terms of Use
              </LocalizedClientLink> */}
              .
            </span>
            <SubmitButton className="w-full mt-6" data-testid="register-button">
              Register
            </SubmitButton>
          </form>
          <span className="text-center text-ui-fg-base text-small-regular mt-6">
            Already a member?{" "}
            <button
              onClick={() => setCurrentView(LOGIN_VIEW.SIGN_IN)}
              className="underline"
            >
              Sign in
            </button>
            .
          </span>
        </div>
      </div>
    </>
  )
}

export default Register
