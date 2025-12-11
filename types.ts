export enum CategoryType {
  HOME = 'HOME',
  MENU = 'MENU',
  PRINT_DIGITAL = 'PRINT_DIGITAL',
  PRINT_LARGE = 'PRINT_LARGE',
  IT_SERVICES = 'IT_SERVICES',
  PROGRAMMING = 'PROGRAMMING',
  NET_SERVICES = 'NET_SERVICES',
  REPAIR = 'REPAIR',
  CONSULTING = 'CONSULTING',
  STATIONERY = 'STATIONERY',
  CONTACT = 'CONTACT'
}

export interface ServiceItem {
  title: string;
  price?: string; // String to allow 'Toman' suffix or ranges
  description?: string;
  isHeader?: boolean;
}

export interface CategoryData {
  id: CategoryType;
  title: string;
  icon: string; // Emoji or icon name
  items: ServiceItem[];
  color: string;
}