import {
  PieChart,
  Bell,
  Car,
  FileText,
  ShoppingCart,
  FolderOpen,
  Link2,
  Search,
  LayoutGrid,
  Heart,
} from 'lucide-react';

export const WHY_DIFFERENT = {
  eyebrow: 'The difference is connection',
  title: 'Your digital life shouldn\u2019t live across six different apps',
  intro:
    'Most people already juggle a budget tracker, reminder alerts, grocery lists in chat, vehicle papers in a folder, and notes scattered everywhere. BharatVow brings those everyday needs into one calm platform — so less time is spent searching, and more time stays on what matters.',
  traditional: {
    label: 'The traditional way',
    caption: 'Separate apps. Separate habits. Nothing shared.',
    apps: [
      { icon: PieChart, label: 'Budget app' },
      { icon: Bell, label: 'Reminder app' },
      { icon: Car, label: 'Vehicle app' },
      { icon: FileText, label: 'Notes app' },
      { icon: ShoppingCart, label: 'Grocery app' },
      { icon: FolderOpen, label: 'Document app' },
    ],
  },
  bharatvow: {
    label: 'BharatVow',
    caption: 'One account. Seven life areas. Always together.',
    lifeAreas: [
      'Budget',
      'Home',
      'Events',
      'Vehicles',
      'Grocery',
      'Travel',
      'Daily life',
    ],
  },
  benefits: [
    {
      icon: Link2,
      title: 'Everything connected',
      description:
        'Budget, home, and daily updates sit in the same place — not spread across five home screens.',
    },
    {
      icon: Search,
      title: 'Less searching',
      description:
        'When you need a bill copy or an important date, you open one app instead of hunting through chats.',
    },
    {
      icon: LayoutGrid,
      title: 'Better organisation',
      description:
        'Each part of life has its own space, but nothing feels like a separate product you have to learn again.',
    },
    {
      icon: Heart,
      title: 'Peace of mind',
      description:
        'Fewer forgotten tasks, fewer lost papers, and a clearer picture of what needs attention next.',
    },
  ],
};

export const WHY_DIFFERENT_ANCHOR = 'why-different';
