import { Home, Lightbulb, Users, Mail } from "lucide-react";
import Index from "./pages/Index.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Features",
    to: "/features",
    icon: <Lightbulb className="h-4 w-4" />,
    page: <div>Features Page</div>,
  },
  {
    title: "Use Cases",
    to: "/use-cases",
    icon: <Users className="h-4 w-4" />,
    page: <div>Use Cases Page</div>,
  },
  {
    title: "Contact",
    to: "/contact",
    icon: <Mail className="h-4 w-4" />,
    page: <div>Contact Page</div>,
  },
];