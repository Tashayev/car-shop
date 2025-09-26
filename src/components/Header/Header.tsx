'use client';
import "./header.scss"
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import ProfIcon from "../../assets/prof.svg";
import DashIcon from "../../assets/dash.svg";
import OrderIcon from "../../assets/order.svg";
import PayIcon from "../../assets/pay.svg";
import BroadIcon from "../../assets/broad.svg";

export default function Header() {
  const pathname = usePathname();

  const links = [
    { href: "/dashboard", label: "Дашборд", icon: DashIcon },
    { href: "/profile", label: "Профиль", icon: ProfIcon },
    { href: "/orders", label: "Заказы", icon: OrderIcon },
    { href: "/payments", label: "Платежи", icon: PayIcon },
    { href: "/broadcast", label: "Трансляция", icon: BroadIcon },
  ];

  return (
    <header className="header">
      <nav className="nav">
        {links.map(link => {
          const Icon = link.icon;
          const isActive = pathname === link.href;

          return (
            <div
              key={link.href}
              className={`link-wrapper ${isActive ? "active-wrapper" : ""}`}
            >
              <Link href={link.href} className={isActive ? "active" : ""}>
                <Icon className="icon" />
                <span>{link.label}</span>
              </Link>
            </div>
          );
        })}
      </nav>
    </header>
  );
}
