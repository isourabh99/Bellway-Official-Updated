import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

export default function DropdownMenu({
  label,
  items,
  dropdownKey,
  openDropdown,
  setOpenDropdown,
  openSubmenu,
  setOpenSubmenu,
}) {
  const renderItems = (list) =>
    list.map((item) =>
      item.subItems ? (
        <div
          key={item.id}
          className="relative"
          onMouseEnter={() => setOpenSubmenu(item.id)}
          onMouseLeave={() => setOpenSubmenu(null)}
        >
          {/* Submenu Trigger */}
          <div className="flex justify-between items-center px-4 py-2 text-white hover:bg-[#D82C2C] cursor-pointer">
            {item.title}
            <FaChevronRight className="ml-2 text-sm" />
          </div>

          {/* Submenu Dropdown */}
          <AnimatePresence>
            {openSubmenu === item.id && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="absolute left-full top-0 bg-zinc-900 shadow-md rounded-md z-50 w-60"
              >
                {item.subItems.map((sub) => (
                  <Link
                    key={sub.id}
                    to={sub.path}
                    className="block px-4 py-2 text-white hover:bg-[#D82C2C] transition no-underline"
                  >
                    {sub.title}
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ) : (
        // Regular item without subItems
        <Link
          key={item.id}
          to={item.path}
          className="block px-4 py-2 text-white hover:bg-[#D82C2C] transition no-underline"
        >
          {item.title}
        </Link>
      )
    );

  return (
    <div
      className="relative group"
      onMouseEnter={() => setOpenDropdown(dropdownKey)}
      onMouseLeave={() => {
        setOpenDropdown(null);
        setOpenSubmenu(null);
      }}
    >
      {/* Main Dropdown Label */}
      <div className="flex justify-between items-center text-white px-4 py-2 cursor-pointer">
        <span
          className={`transition ${
            openDropdown === dropdownKey ? "text-[#D82C2C]" : ""
          }`}
        >
          {label}
        </span>
        <FaChevronDown
          className={`ml-1 mt-1 text-sm transition-transform ${
            openDropdown === dropdownKey ? "rotate-180 text-[#D82C2C]" : ""
          }`}
        />
      </div>

      {/* Dropdown Items */}
      <AnimatePresence>
        {openDropdown === dropdownKey && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute mt-2 top-full right-1 w-64 bg-zinc-900 shadow-md rounded-md z-50"
          >
            {renderItems(items)}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
