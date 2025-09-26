
export async function createBitrixContact(email: string, name?: string) {
  const url = process.env.BITRIX_WEBHOOK_URL;
  if (!url) return null;

  try {
    const resp = await fetch(`${url}crm.contact.add.json`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fields: {
          NAME: name ?? "No name",
          EMAIL: [{ VALUE: email, VALUE_TYPE: "WORK" }],
        },
      }),
    });

    const json = await resp.json();
    if (json.result) {
      return String(json.result);
    }
    console.warn("Bitrix error response:", json);
    return null;
  } catch (err) {
    console.warn("Bitrix request failed:", err);
    return null;
  }
}
