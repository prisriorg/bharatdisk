// Menu.tsx
import React from 'react';
interface MenuItem {
    label: string;
    href: string;
  }
const menuItems: MenuItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

const Menu: React.FC = () => {
  return (
    <ul className="hidden md:flex space-x-4">
      {menuItems.map((item) => (
        <li key={item.href}>
          <a href={item.href} className="hover:text-blue-500">
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
