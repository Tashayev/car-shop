"use client";

import "./register.scss";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Eye from "/public/pass/eye.svg";
import Noeye from "/public/pass/noeye.svg";


export default function RegisterPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [confirm, setConfirm] = useState(false);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!form.name.trim()) {
      newErrors.name = "Введите имя";
    }
    if (!form.email.includes("@")) {
      newErrors.email = "Введите корректный email";
    }
    if (form.password.length < 6) {
      newErrors.password = "Пароль должен быть не меньше 6 символов";
    }

    if (!/[0-9]/.test(form.password)) {
      newErrors.password = "Пароль должен содержать хотя бы одну цифру";
    }
    if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Пароли не совпадают";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    
    try {
      console.log("Делаем fetch на /api/auth/registration");
      const res = await fetch("/api/auth/registration", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: form.email,
          password: form.password,
          name: form.name,
        }),
      });

      if (res.ok) {
        router.push("/dashboard");
      } else {
        const data = await res.json();
        alert(data.error || "Ошибка регистрации");
      }
    } finally {
      setLoading(false);
    }
    console.log(" Отправляем:", {
      email: form.email,
      password: form.password,
      name: form.name,
    });

  };

  return (
    <div >
      <div className="register-page">
        <h1>ЛОГОТИП</h1>
        <h3>Регистрация</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Логин</label>
          <input
            type="text"
            name="name"
            placeholder="Имя"
            value={form.name}
            onChange={handleChange}
          />
          {errors.name && <p className="error">{errors.name}</p>}

          <label htmlFor="email">Mail</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}

          <label htmlFor="password">Пароль</label>
          <div className="pass">
            <input
              type={visible ? "text" : "password"}
              name="password"
              placeholder="Пароль"
              value={form.password}
              onChange={handleChange}
            />
            <span onClick={() => setVisible(!visible)} className="eye">
              {visible ? (
                <Noeye width={24} height={18} />
              ) : (
                <Eye width={24} height={15} />
              )}
            </span>
            {errors.password && <p className="error">{errors.password}</p>}
          </div>

          <label htmlFor="confirmPassword">Повторите пароль</label>
          <div className="pass">
            <input
              type={confirm ? "text" : "password"}
              name="confirmPassword"
              placeholder="Повторите пароль"
              value={form.confirmPassword}
              onChange={handleChange}
            />
            <span onClick={() => setConfirm(!confirm)} className="eye">
              {confirm ? (
                <Noeye width={24} height={18} />
              ) : (
                <Eye width={24} height={15} />
              )}
            </span>
            {errors.confirmPassword && (
              <p className="error">{errors.confirmPassword}</p>
            )}
          </div>

          <button className="sub-btn" type="submit" disabled={loading}>
            {loading ? "⏳ Регистрация..." : "Зарегистрироваться"}
          </button>
        </form>
        <div className="other">
          <div className="or-wrapper">
            <div className="line"></div>
            <p className="or">или</p>
            <div className="line"></div>
          </div>
          <div className="log-btn" onClick={() => router.push("/auth/login")}>
            <span>Вход</span>
          </div>
        </div>
      </div>
    </div>
  );
}
