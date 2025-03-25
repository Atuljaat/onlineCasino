import { useState } from "react";
import { Link } from "react-router";
import { Menu } from "lucide-react";
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
    <nav className="bg-gray-900 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">SatteBaji</div>
        <div className="hidden md:flex space-x-6">
          {navItems.map((item, index) => (
            <Link key={index} to={item.path} className="hover:text-gray-400">
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <div className="font-bold">₹{amount}</div>
          <div className="gap-3 flex">
          <Button onClick={deposit} to="/deposit" className="bg-green-500 hover:bg-green-600">
            Deposit
          </Button>
          <Button onClick={withdrawl} to="/deposit" className="bg-red-500 hover:bg-red-600">
            Withdraw
          </Button>
          </div>
        </div>
       
        <div className="md:hidden">
          <Button variant="ghost" onClick={() => setIsOpen(!isOpen)}>
            <Menu />
          </Button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-2 space-y-2 bg-gray-800 p-4 rounded-lg">
          {navItems.map((item) => (
            <Link key={item.name} to={item.path} className="block hover:text-gray-400">
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
