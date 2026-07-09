/**
 * Lucide icon registry for module definitions.
 * Icon keys in modules.config.js resolve here — never import Lucide in the config data file.
 */
import {
  Home,
  Car,
  BookOpen,
  PieChart,
  NotebookPen,
  CalendarCheck,
  Luggage,
  BellRing,
  ShoppingBag,
  HandCoins,
  MapPinCheck,
  ScanLine,
} from 'lucide-react';

/** @type {Record<string, import('lucide-react').LucideIcon>} */
export const MODULE_ICONS = {
  HandCoins,
  PieChart,
  NotebookPen,
  CalendarCheck,
  Luggage,
  Car,
  Home,
  BellRing,
  ShoppingBag,
  BookOpen,
  ScanLine,
  MapPinCheck,
};

export function resolveModuleIcon(iconKey) {
  return MODULE_ICONS[iconKey] ?? HandCoins;
}
