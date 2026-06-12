export interface Stat {
  label: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface NavItem {
  name: string;
  href: string;
}
