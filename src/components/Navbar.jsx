import { useState } from "react";
import { Link } from "react-router";
import { Menu, X } from "lucide-react"; // Added 'X' icon for closing the menu
import { Button } from "@/components/ui/button";
import Store from "@/store/Store";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Games", path: "/games" },
  { name: "About", path: "/about" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const amount = Store((state) => state.amount);
  let {deposit , withdrawl} = Store();

  return (
    <nav className="bg-gray-900 text-white p-4 shadow-lg sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold">SatteBaji</div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {navItems.map((item, index) => (
            <Link key={index} to={item.path} className="hover:text-gray-400">
              {item.name}
            </Link>
          ))}
        </div>

        {/* Balance and Buttons */}
        <div className="flex justify-end items-center space-x-4">
          <div className="font-bold hidden lg:block">₹{amount}</div>
          <div className=" hidden lg:flex gap-2  ">
            <Button
              onClick={deposit}
              to="/deposit"
              className="bg-green-500 hover:bg-green-600"
            >
              Deposit
            </Button>
            <Button
              onClick={withdrawl}
              to="/deposit"
              className="bg-red-500 hover:bg-red-600"
            >
              Withdraw
            </Button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex justify-end items-center">
        <div className="font-bold">₹{amount}</div>
          <Button variant="ghost" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden mt-2 space-y-2 bg-gray-800 p-4 rounded-lg">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="block hover:text-gray-400"
            >
              {item.name}
            </Link>
          ))}
          <div className="gap-1  md:gap-3 flex">
            <Button
              onClick={deposit}
              to="/deposit"
              className="bg-green-500 hover:bg-green-600"
            >
              Deposit
            </Button>
            <Button
              onClick={withdrawl}
              to="/deposit"
              className="bg-red-500 hover:bg-red-600"
            >
              Withdraw
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
