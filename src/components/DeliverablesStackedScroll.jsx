import React from "react";
import {
  FaTools,
  FaMobileAlt,
  FaUserTie,
  FaStoreAlt,
  FaCheckCircle,
} from "react-icons/fa";

const deliverablesData = [
  {
    title: "Vendor",
    icon: FaTools,
    features: [
      "Admin Panel (Web Based)",
      "User Application",
      "Driver Application",
      "Push Notifications",
      "Real-time Order Tracking",
      "Payment Gateway Integration",
      "Order History",
      "Live Chat Support",
      "Offers & Coupons",
      "User Ratings & Reviews",
      "Wallet & Cashback",
      "Google & Apple Login",
      "Referral System",
      "Advanced Analytics",
      "Promo Banners",
      "Single Store Management",
      "Delivery Zone Settings",
      "Dynamic Pricing",
      "Product Variants",
      "Order Cancellation Handling",
    ],
  },
  {
    title: "Multi Vendor",
    icon: FaStoreAlt,
    features: [
      "Admin Panel (Web Based)",
      "User Application",
      "Driver Application",
      "Vendor Login (Web Based)",
      "Vendor Application",
      "Multiple Store Management",
      "Vendor Commission Settings",
      "Order Management",
      "Live Location of Delivery Boy",
      "Product Syncing",
      "Vendor Payout Reports",
      "Category Management",
      "Tax Settings",
      "Delivery Charges Configuration",
      "Bulk Uploads",
      "Marketing Tools",
      "Customer Support Tools",
      "Store Wise Inventory",
      "Multi-Currency & Language",
      "Scheduled Orders",
    ],
  },
  {
    title: "Subscription Platform",
    icon: FaMobileAlt,
    features: [
      "Subscription Plans",
      "Recurring Payments",
      "Billing Management",
      "User Roles",
      "Usage Limits",
      "Admin Dashboard",
      "Email Reminders",
      "Promo Code System",
      "Trial Period",
      "Auto Renewals",
      "Analytics Dashboard",
      "Subscription Pause",
      "Upgrade/Downgrade Options",
      "Payment Gateway Integration",
      "Multi-Language Support",
      "Referral Rewards",
      "Transaction History",
      "Email Notifications",
      "Secure Authentication",
      "User Insights",
    ],
  },
  {
    title: "Booking System",
    icon: FaUserTie,
    features: [
      "Appointment Scheduling",
      "Calendar Sync",
      "SMS/Email Reminders",
      "Service Management",
      "Staff Assignments",
      "Customer Portal",
      "Real-Time Availability",
      "Online Payments",
      "Booking History",
      "Time Slot Customization",
      "Multi-Location Support",
      "Service Reviews",
      "Promotions & Offers",
      "Admin Reports",
      "Mobile Friendly UI",
      "Automatic Invoicing",
      "Live Chat Support",
      "Service Packages",
      "Group Booking",
      "Custom Fields",
    ],
  },
  {
    title: "E-learning Platform",
    icon: FaTools,
    features: [
      "Course Management",
      "Video Streaming",
      "Student Dashboard",
      "Progress Tracking",
      "Quizzes & Exams",
      "Certificates",
      "Instructor Dashboard",
      "Discussion Forums",
      "Mobile App",
      "Live Classes",
      "Assignment Uploads",
      "Multi-Language Support",
      "Dark Mode",
      "Content Drip",
      "Gamification",
      "Push Notifications",
      "Revenue Analytics",
      "Course Ratings",
      "Zoom Integration",
      "Learning Paths",
    ],
  },
];

const DeliverablesStackedScroll = () => {
  return (
    <section className="relative min-h-[500vh]  text-white bg-black ">
      {deliverablesData.map((deliverable, index) => (
        <div
          key={index}
          className="sticky top-0 min-h-screen w-full flex flex-col items-center justify-center px-2 md:px-20 bg-black py-10"
          style={{ zIndex: index + 1 }}
        >
          <div className="absolute inset-0 bg-black  -z-10" />

          <div className="text-center mb-20 flex items-center gap-4">
            <deliverable.icon className="text-5xl  text-white" />
            <h2 className="text-4xl  font-semibold">{deliverable.title}</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4  w-full">
            {deliverable.features.map((feature, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-4 flex items-center gap-3"
              >
                <FaCheckCircle className="text-green-400" />
                <span className="text-sm font-medium leading-snug">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default DeliverablesStackedScroll;
