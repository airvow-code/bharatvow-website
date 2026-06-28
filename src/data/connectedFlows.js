import {
  Home,
  ShieldCheck,
  CalendarClock,
  History,
  NotebookPen,
  BarChart3,
  Car,
  Fuel,
  Gauge,
  Wrench,
  PieChart,
  PartyPopper,
  Users,
  Gift,
  Wallet,
  Bell,
  ShoppingCart,
  CheckSquare,
  Link2,
  LayoutGrid,
  Sparkles,
} from 'lucide-react';

export const EVERYTHING_CONNECTED_ANCHOR = 'everything-connected';

export const EVERYTHING_CONNECTED = {
  eyebrow: 'One platform, many connections',
  title: 'Enter it once — BharatVow carries it forward',
  intro:
    'You should not re-type the same details in five different apps. When you save a home asset, log fuel, or plan an event, BharatVow keeps the story connected — so reminders, records, and daily views stay in sync across your digital life.',
  flows: [
    {
      id: 'home',
      title: 'Keeping the house running',
      summary: 'From the geyser warranty to the repair bill — one thread in Home Vault.',
      steps: [
        {
          icon: Home,
          title: 'Home Asset',
          description: 'Register appliances and furniture with warranty dates.',
        },
        {
          icon: ShieldCheck,
          title: 'Warranty watch',
          description: 'See what is expiring on your Home Vault dashboard.',
        },
        {
          icon: CalendarClock,
          title: 'Due Services',
          description: 'Get reminded before AC, RO, or geyser service is overdue.',
        },
        {
          icon: History,
          title: 'Service History',
          description: 'Keep a record of who fixed what and when.',
        },
        {
          icon: NotebookPen,
          title: 'Expenses Diary',
          description: 'Optionally add the service cost to daily household expenses.',
        },
        {
          icon: BarChart3,
          title: 'Home Reports',
          description: 'Review maintenance, bills, and warranties together.',
        },
      ],
    },
    {
      id: 'vehicle',
      title: 'Staying on top of your vehicle',
      summary: 'Papers, fuel, service, and running cost — in Vehicle Vault.',
      steps: [
        {
          icon: Car,
          title: 'Vehicle profile',
          description: 'Store RC, insurance, and PUC dates on your phone.',
        },
        {
          icon: Fuel,
          title: 'Fuel entry',
          description: 'Log fills as they happen on the road.',
        },
        {
          icon: Gauge,
          title: 'Mileage',
          description: 'Track average km/l from your fuel entries.',
        },
        {
          icon: Wrench,
          title: 'Service records',
          description: 'Note each service and what was done.',
        },
        {
          icon: PieChart,
          title: 'Cost overview',
          description: 'See fuel and service spend in one vehicle summary.',
        },
      ],
    },
    {
      id: 'event',
      title: 'Planning a celebration',
      summary: 'Guests, gifts, and costs — without scattered chats.',
      steps: [
        {
          icon: PartyPopper,
          title: 'Event Book',
          description: 'Open a register for a wedding, birthday, or function.',
        },
        {
          icon: Users,
          title: 'Guest list',
          description: 'Track who is invited and who confirmed.',
        },
        {
          icon: Gift,
          title: 'Gift records',
          description: 'Note gifts given and received for every guest.',
        },
        {
          icon: Wallet,
          title: 'Event budget',
          description: 'Follow planned and actual celebration costs.',
        },
        {
          icon: Bell,
          title: 'Days Reminder',
          description: 'See the date on the morning it matters.',
        },
      ],
    },
    {
      id: 'grocery',
      title: 'The weekly market run',
      summary: 'List, shop, log, and see where the household budget stands.',
      steps: [
        {
          icon: ShoppingCart,
          title: 'Grocery Bag',
          description: 'Build your market list before you leave home.',
        },
        {
          icon: CheckSquare,
          title: 'Shop & check off',
          description: 'Take the list to the kirana and tick items as you buy.',
        },
        {
          icon: NotebookPen,
          title: 'Expenses Diary',
          description: 'Log what you spent when you get back.',
        },
        {
          icon: PieChart,
          title: 'Budget Pocket',
          description: 'See how grocery fits your monthly household budget.',
        },
      ],
    },
  ],
  benefits: [
    {
      icon: Sparkles,
      title: 'Enter once',
      description:
        'Save a home asset, vehicle, or event in one place — BharatVow remembers the details for reminders and records.',
    },
    {
      icon: LayoutGrid,
      title: 'Stay organised',
      description:
        'Home, vehicles, celebrations, and household spending share one calm account instead of scattered notes.',
    },
    {
      icon: Bell,
      title: 'Never miss what matters',
      description:
        'Due services, renewals, and important dates surface before they become last-minute emergencies.',
    },
    {
      icon: Link2,
      title: 'Everything connected',
      description:
        'Each workflow links to the next — so daily life feels like one organised story, not six separate apps.',
    },
  ],
};
