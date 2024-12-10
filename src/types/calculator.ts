import { LucideIcon } from 'lucide-react';

export interface CalculatorInputs {
  method: string;
  squareFeet: number;
  infestationLevel: string;
  state: string;
}

export interface Product {
  title: string;
  description: string;
  link: string;
  icon: LucideIcon;
}