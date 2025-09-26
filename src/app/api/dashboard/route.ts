import { NextResponse } from "next/server";

export async function GET() {
  const orders = [
    { id: 1, title: "Заказ №1", status: "выполнен" },
    { id: 2, title: "Заказ №2", status: "в работе" },
    { id: 3, title: "Заказ №3", status: "новый" },
  ];

  return NextResponse.json(orders);
}
