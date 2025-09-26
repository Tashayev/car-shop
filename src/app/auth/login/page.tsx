"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import "./login.scss";
import Eye from "/public/pass/eye.svg";
import Noeye from "/public/pass/noeye.svg";
export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
const [visible, setVisible] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (res.ok) {
        router.push("/dashboard"); 
      } else {
        const data = await res.json();
        setError(data.error || "Ошибка входа");
      }
    } catch (err) {
      setError("Что-то пошло не так");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">      
      <h1>логотип</h1>
      <h3>Вход</h3>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Пароль</label>
        <div className="pass">
          <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /><span onClick={() => setVisible(!visible)} className="eye">
              {visible ? (
                <Noeye width={24} height={18} />
              ) : (
                <Eye width={24} height={15} />
              )}
            </span>
            {error && <p className="error">{error}</p>}
        </div>

        
        <button className="sub-btn" type="submit" disabled={loading}>
          {loading ? "Входим..." : "Войти"}
        </button>
      </form>
      <div className="other">
          <div className="or-wrapper">
            <div className="line"></div>
            <p className="or">или</p>
            <div className="line"></div>
          </div>
          <div className="log-btn">
            <span onClick={()=>router.push("/auth/registration")}>Регистрация</span>
          </div>
        </div>
    </div>
  );
}
