import {
  Monitor,
  ShoppingCart,
  BookOpen,
  CookingPot,
  Armchair,
  Clock,
  Users,
  BarChart3,
  Settings,
  Percent,
  Package,
  ShieldCheck,
  Truck
} from 'lucide-react'
import { Category } from './types'

export const categories: Category[] = [
  {
    slug: 'pos',
    name: 'POS',
    description: 'Learn how to use the point-of-sale terminal, process transactions, and manage your checkout flow.',
    icon: Monitor,
    articleSlugs: [
      'create-dine-in-order',
      'create-takeaway-order',
      'create-delivery-order',
      'add-items-modify-quantities',
      'apply-modifiers-variations',
      'apply-discounts',
      'process-payment',
      'process-split-payment',
      'quick-pay',
      'void-order',
      'void-item',
      'select-change-table',
      'transfer-table',
      'manage-open-orders',
      'print-receipt',
      'manage-combos'
    ]
  },
  {
    slug: 'orders',
    name: 'Orders',
    description: 'Manage dine-in, takeaway, and delivery orders from a single dashboard.',
    icon: ShoppingCart,
    articleSlugs: [
      'view-all-orders',
      'search-filter-orders',
      'view-order-details',
      'track-order-status'
    ]
  },
  {
    slug: 'catalog',
    name: 'Catalog',
    description: 'Set up and manage your menu items, categories, modifiers, and pricing.',
    icon: BookOpen,
    articleSlugs: [
      'create-menu-item',
      'edit-menu-item',
      'manage-categories',
      'setup-variations',
      'create-modifier-groups',
      'setup-combos',
      'manage-tax-codes',
      'bulk-import-items',
      'upload-item-images',
      'enable-disable-items',
      'track-item-inventory'
    ]
  },
  {
    slug: 'kitchen',
    name: 'Kitchen',
    description: 'Configure kitchen display systems and manage order preparation workflows.',
    icon: CookingPot,
    articleSlugs: [
      'viewing-kitchen-queue',
      'marking-items-ready',
      'setting-up-kitchen-stations',
      'editing-kitchen-stations',
      'kitchen-device-display',
      'order-priority-management'
    ]
  },
  {
    slug: 'tables',
    name: 'Tables',
    description: 'Set up floor plans, manage table assignments, and track table status in real time.',
    icon: Armchair,
    articleSlugs: [
      'viewing-table-status',
      'creating-tables-bulk-setup',
      'editing-table-details',
      'managing-floor-plans',
      'table-analytics',
      'table-qr-codes'
    ]
  },
  {
    slug: 'shifts',
    name: 'Shifts',
    description: 'Open and close shifts, track cash movements, and review shift summaries.',
    icon: Clock,
    articleSlugs: [
      'starting-daily-session',
      'viewing-session-dashboard',
      'starting-device-shift',
      'closing-device-shift',
      'closing-daily-session',
      'viewing-shift-history',
      'cash-handovers'
    ]
  },
  {
    slug: 'customers',
    name: 'Customers',
    description: 'Build customer profiles, track order history, and manage loyalty programs.',
    icon: Users,
    articleSlugs: [
      'adding-new-customer',
      'editing-customer-information',
      'searching-customers',
      'customer-detail-page',
      'customer-loyalty-management',
      'deleting-customers'
    ]
  },
  {
    slug: 'reports',
    name: 'Reports',
    description: 'Access sales analytics, staff performance, and business insights.',
    icon: BarChart3,
    articleSlugs: [
      'view-sales-summary-report',
      'view-orders-report',
      'view-z-report',
      'view-shift-performance-report',
      'view-tax-summary-report',
      'view-menu-mix-report',
      'view-void-report',
      'view-discount-report',
      'view-refund-report',
      'view-tip-report',
      'view-customer-report',
      'export-reports',
      'filter-reports-by-date',
      'view-top-products-report',
      'view-payment-methods-report'
    ]
  },
  {
    slug: 'settings',
    name: 'Settings',
    description: 'Configure your Till system, peripherals, receipts, and business preferences.',
    icon: Settings,
    articleSlugs: [
      'configure-pos-settings',
      'setup-printers',
      'configure-receipt-settings',
      'configure-kitchen-slip-settings',
      'setup-coursing',
      'configure-qr-ordering',
      'configure-kiosk-settings',
      'configure-zoho-books-integration',
      'configure-tax-mode',
      'manage-roles-and-permissions',
      'configure-shift-settings'
    ]
  },
  {
    slug: 'discounts',
    name: 'Discounts',
    description: 'Create and manage discounts, promotions, and special offers.',
    icon: Percent,
    articleSlugs: [
      'create-discount-rule',
      'set-discount-conditions',
      'manage-discount-rules',
      'view-discount-analytics',
      'quick-setup-discount'
    ]
  },
  {
    slug: 'inventory',
    name: 'Inventory',
    description: 'Track stock levels, set low-stock alerts, and manage supplier orders.',
    icon: Package,
    articleSlugs: [
      'view-stock-levels',
      'adjust-stock',
      'set-low-stock-alerts',
      'manage-variation-stock',
      'view-cost-history'
    ]
  },
  {
    slug: 'users-and-roles',
    name: 'Users & Roles',
    description: 'Manage staff accounts, assign roles, and configure access permissions.',
    icon: ShieldCheck,
    articleSlugs: [
      'create-new-user',
      'assign-user-roles',
      'manage-permissions',
      'edit-role-permissions',
      'deactivate-or-delete-user'
    ]
  },
  {
    slug: 'purchases',
    name: 'Purchases',
    description: 'Create purchase orders, manage suppliers, and track incoming stock.',
    icon: Truck,
    articleSlugs: [
      'create-purchase-order',
      'manage-purchase-invoices',
      'process-purchase-receipt',
      'void-purchase-receipt',
      'manage-suppliers'
    ]
  }
]

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find(c => c.slug === slug)
}
