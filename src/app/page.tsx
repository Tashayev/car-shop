"use client";

import { useState } from "react";

export default function HomePage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleRegister = async () => {
    const res = await fetch("/api/bitrix", {
      method: "POST",
      body: JSON.stringify({ name, email }),
    });

    const data = await res.json();
    console.log("Ответ от Bitrix:", data);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Имя"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Почта"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleRegister}>Зарегистрировать</button>
    </div>
  );
}
