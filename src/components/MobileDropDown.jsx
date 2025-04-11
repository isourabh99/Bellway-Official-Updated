import { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function MobileDropDown({ label, items, onClose }) {
  const [open, setOpen] = useState(false);
  const [openSub, setOpenSub] = useState(null);

  const toggle = () => setOpen(!open);
  const toggleSub = (id) => setOpenSub(openSub === id ? null : id);

  return (
    <div className="border-b border-zinc-700 text-xl">
      <div
        className="flex justify-between items-center px-5 py-4 text-white cursor-pointer"
        onClick={toggle}
      >
        <span className="">{label}</span>
        {open ? <FaChevronUp /> : <FaChevronDown />}
      </div>

      {open && (
        <div className="px-5 py-2 space-y-6">
          {items.map((item) =>
            item.subItems ? (
              <div key={item.id}>
                <div
                  className="flex justify-between items-center text-white cursor-pointer"
                  onClick={() => toggleSub(item.id)}
                >
                  <span className="">{item.title}</span>
                  {openSub === item.id ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                {openSub === item.id && (
                  <div className="pl-5  text-zinc-300 space-y-6 py-2 text-xl">
                    {item.subItems.map((sub) => (
                      <Link
                        key={sub.id}
                        to={sub.path}
                        className="block hover:text-[#D82C2C] no-underline"
                        onClick={onClose}
                      >
                        {sub.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.id}
                to={item.path}
                className="block text-zinc-300 hover:text-[#D82C2C] no-underline"
                onClick={onClose}
              >
                {item.title}
              </Link>
            )
          )}
        </div>
      )}
    </div>
  );
}
