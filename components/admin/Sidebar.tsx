"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  LayoutDashboard,
  Camera,
  Package,
  ShoppingBag,
  Settings,
  LogOut,
  Menu,
  X,
  Users,
  MessageCircle,
} from "lucide-react";
import Image from "next/image";
import logo from "@/assets/logo/lb-films.png";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { id: 1, name: "Dashboard", icon: LayoutDashboard, href: "/admin" },
    { id: 2, name: "Manage Projects", icon: Camera, href: "/admin/projects" },
    { id: 3, name: "Manage Packages", icon: Package, href: "/admin/packages" },
    {
      id: 4,
      name: "Orders/Bookings",
      icon: ShoppingBag,
      href: "/admin/orders",
    },
    { id: 5, name: "Manage Users", icon: Users, href: "/admin/users" },
    {
      id: 6,
      name: "Testimonials",
      icon: MessageCircle,
      href: "/admin/testimonials",
    },
    { id: 7, name: "Settings", icon: Settings, href: "/admin/settings" },
  ];

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden fixed top-4 left-4 z-50 bg-primary-500 text-white p-2 rounded-lg"
      >
        <Menu className="h-6 w-6" />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed md:static z-40 h-full bg-white shadow-lg w-64 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative">
            <Image
              src={logo}
              alt="LB Films"
              width={300}
              height={100}
              className="w-32 h-28 relative rounded-full "
            />
          </div>
        </Link>

        <nav className="p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                    pathname === item.href
                      ? "bg-primary-50 text-primary-600"
                      : "text-secondary-700 hover:bg-primary-50 hover:text-primary-600"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="absolute bottom-0 w-full p-4 border-t border-secondary-200">
          <button className="flex items-center space-x-3 w-full p-3 rounded-lg text-secondary-700 hover:bg-primary-50 hover:text-red-600 transition-colors">
            <LogOut className="h-5 w-5" />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
