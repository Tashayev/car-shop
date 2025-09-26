import "./auth.scss"
import { ReactNode } from "react";


export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="auth-wrapper">
      <div className="auth-page">
        <div className="child">{children}</div>
        <div className="image">
          <img src="/assets/car1.png" alt="car" />
        </div>
      </div>
    </div>
  )
}