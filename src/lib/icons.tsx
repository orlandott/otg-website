import {
  Shield,
  DoorOpen,
  Home,
  ShieldCheck,
  Layers,
  Sun,
  SunMoon,
  Car,
  type LucideIcon,
} from "lucide-react";

export const productIcons: Record<string, LucideIcon> = {
  Shield,
  DoorOpen,
  Home,
  ShieldCheck,
  Layers,
  Sun,
  SunMoon,
  Car,
};

export function getProductIcon(name: string): LucideIcon {
  return productIcons[name] ?? Shield;
}
