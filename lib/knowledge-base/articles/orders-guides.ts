import { Article } from '../types'

export const ordersGuides: Article[] = [
  {
    slug: 'view-all-orders',
    categorySlug: 'orders',
    title: 'How to View All Orders',
    description: 'Access the Orders page to see a complete list of all orders with real-time updates, pagination, and detailed information.',
    steps: [
      {
        title: 'Navigate to the Orders page',
        description: 'Click "Orders" in the sidebar navigation. The page opens showing the heading "Orders" with a real-time connection indicator (green "Live" badge when connected, or "Offline" when disconnected).'
      },
      {
        title: 'Review the order table',
        description: 'Orders are displayed in a table with columns: Order Number, Date, Customer, Created By, Table, Items, Payment, Status, Total, and Actions. Each row represents a single order.'
      },
      {
        title: 'Understand order statuses',
        description: 'Orders show status badges: "Open" (amber/warning), "Completed" (green/success), "Voided" (red/error), "Refunded" (blue/info), and "Partially Refunded" (blue/info). For restaurant businesses, kitchen statuses also appear: Kitchen Pending, Kitchen Assigned, Kitchen Cooking, Kitchen Ready, and Kitchen Served.'
      },
      {
        title: 'View payment information',
        description: 'The Payment column shows the payment type with icons: Cash (banknote icon, green badge), Card (credit card icon, blue badge), Split (split icon, purple badge), or Paid Online (globe icon, amber badge). Payment status shows as Paid, Pending, or Failed. For split payments, the cash and card amounts are shown separately.'
      },
      {
        title: 'Navigate between pages',
        description: 'When there are more orders than fit on one page, pagination controls appear at the bottom. Use "Previous" and "Next" buttons, or click specific page numbers. Change the items per page using the "Show" dropdown (10, 20, 50, or 100).'
      }
    ],
    tips: [
      {
        title: 'Real-time updates',
        description: 'The Orders page connects to a WebSocket for live updates. When a new order is created, completed, voided, or updated, the list refreshes automatically within 1 second.'
      },
      {
        title: 'Default view',
        description: 'The page defaults to showing today\'s orders, sorted newest first, with 20 orders per page.'
      },
      {
        title: 'Order number format',
        description: 'Order numbers follow the format ORD-XXXXXX. Long order numbers are truncated to show the last 6 digits for readability, but hovering shows the full number.'
      }
    ],
    relatedSlugs: ['search-filter-orders', 'view-order-details', 'track-order-status'],
    featured: true
  },
  {
    slug: 'search-filter-orders',
    categorySlug: 'orders',
    title: 'How to Search and Filter Orders',
    description: 'Find specific orders using the search bar, status filter, date filter, and sort options on the Orders page.',
    steps: [
      {
        title: 'Search by keyword',
        description: 'Use the "Search orders..." input field in the filter bar at the top right. Type an order number, customer name, phone number, or any keyword. Results update as you type. Click the X icon to clear the search.'
      },
      {
        title: 'Filter by status',
        description: 'Use the status dropdown to filter by order status. Options include: All Statuses, Open, Completed, Voided, Refunded, and Partially Refunded. For restaurant businesses, additional kitchen statuses appear: Pending Kitchen, Assigned Kitchen, Cooking, Ready, and Served.'
      },
      {
        title: 'Filter by date range',
        description: 'Use the date dropdown to select a time period: All Dates, Today (default), Yesterday, Last 7 Days, Last 30 Days, or Custom Range. When "Custom Range" is selected, two date picker inputs appear for "From" and "To" dates.'
      },
      {
        title: 'Sort the results',
        description: 'Use the sort dropdown to change the order: Newest First (default), Oldest First, Order # (A-Z), or Order # (Z-A).'
      },
      {
        title: 'Clear all filters',
        description: 'When any filters are active, a "Clear all filters" link appears below the Order History heading. Click it to reset all filters at once, or clear them individually.'
      },
      {
        title: 'Export filtered results',
        description: 'Click the "Export Orders" button (with Download icon) in the header to export the current filtered results to an Excel file. The export includes all orders matching the active filters, not just the current page.'
      }
    ],
    tips: [
      {
        title: 'Combined filters',
        description: 'All filters work together. For example, you can search for a customer name while filtering by "Completed" status and "Last 7 Days" date range.'
      },
      {
        title: 'Filter count feedback',
        description: 'When filters are active, the counter below the heading shows "X of Y orders" and highlights the search term in blue.'
      },
      {
        title: 'Export permission',
        description: 'The Export Orders button requires the "reports:export" permission. If you do not see it, contact your manager.'
      }
    ],
    relatedSlugs: ['view-all-orders', 'view-order-details']
  },
  {
    slug: 'view-order-details',
    categorySlug: 'orders',
    title: 'How to View Order Details',
    description: 'Open a detailed view of any order to see line items, payment breakdown, kitchen status, and available actions.',
    steps: [
      {
        title: 'Click the order number link',
        description: 'In the Orders table, click the blue order number link (e.g., "ORD-ABC123") in the Order Number column. This navigates to the order detail page at /orders/[id].'
      },
      {
        title: 'Alternatively, click the "View" button',
        description: 'In the Actions column of any order row, click the "View" button to navigate to the same order detail page.'
      },
      {
        title: 'Review order information',
        description: 'The order detail page shows comprehensive information including: order number (with copy-to-clipboard), order status badge, creation date and time, customer details (name, phone, email), order source badge, table number, and the staff member who created the order.'
      },
      {
        title: 'Review line items',
        description: 'The order items section lists every item with its name, quantity, unit price, any modifiers or variations applied, item-level discounts, tax amount, and line total. Voided items appear with a strikethrough style and a "Voided" badge.'
      },
      {
        title: 'Review payment details',
        description: 'The Payment Details Card shows the payment method, amounts, status, and transaction details. For split payments, each portion is shown separately with its payment method and amount.'
      },
      {
        title: 'Take action on the order',
        description: 'Available actions depend on the order status and your permissions: "Void Order" (for open/completed orders, requires void permission), "Full Refund" or "Partial Refund" (for completed orders, requires refund permission), and "Transfer Items" (to move items to another table).'
      }
    ],
    tips: [
      {
        title: 'Copy order ID',
        description: 'Click the copy icon next to the order number to copy the full order ID to your clipboard. A checkmark confirms the copy was successful.'
      },
      {
        title: 'Refund history',
        description: 'For orders that have been refunded, a Refund History Section appears showing all refund transactions with amounts, reasons, and timestamps.'
      },
      {
        title: 'Back to orders',
        description: 'Click the back arrow or "Back to Orders" button at the top to return to the orders list while preserving your filters.'
      }
    ],
    relatedSlugs: ['view-all-orders', 'track-order-status', 'search-filter-orders']
  },
  {
    slug: 'track-order-status',
    categorySlug: 'orders',
    title: 'How to Track Order Status',
    description: 'Monitor order progress from creation through kitchen preparation to completion and payment.',
    steps: [
      {
        title: 'Check the Status column on the Orders page',
        description: 'The Status column shows the current order status as a coloured badge: Open (amber), Completed (green), Voided (red), Refunded (blue), or Partially Refunded (blue).'
      },
      {
        title: 'Monitor kitchen status (restaurant businesses)',
        description: 'For restaurant businesses, a kitchen status badge appears below the order status showing: Kitchen Pending (amber with ChefHat icon), Kitchen Assigned (blue), Kitchen Cooking (orange), Kitchen Ready (green), or Kitchen Served (grey).'
      },
      {
        title: 'View kitchen item breakdown',
        description: 'Below the kitchen status badge, a detailed breakdown shows the count of items in each stage: Pending, Assigned, Cooking, Ready, and Served, with a Total count at the bottom.'
      },
      {
        title: 'Track payment status',
        description: 'The Payment column shows real-time payment status: "Paid" (green checkmark), "Pending" (amber clock icon), or "Failed" (red X icon). For open orders without payment, it shows "Pending" in amber.'
      },
      {
        title: 'Complete an open order',
        description: 'For orders with "Open" status, a "Complete" button appears in the Actions column. Click it to navigate to the POS with the order loaded, ready for payment processing.'
      },
      {
        title: 'Use real-time updates',
        description: 'The Orders page receives WebSocket updates for order creation, completion, kitchen status changes, item additions/removals, void events, and refund processing. The list refreshes automatically.'
      }
    ],
    tips: [
      {
        title: 'Kitchen status is restaurant-only',
        description: 'Kitchen status badges and item breakdowns are hidden for retail businesses, as they do not use kitchen preparation workflows.'
      },
      {
        title: 'Order source tracking',
        description: 'The order source badge shows where the order originated: POS, QR ordering, website, or a third-party aggregator like Talabat or Deliveroo.'
      },
      {
        title: 'Aggregator information',
        description: 'For aggregator orders, the external order ID is shown with a hash icon, allowing you to cross-reference with the delivery platform.'
      }
    ],
    relatedSlugs: ['view-all-orders', 'view-order-details', 'search-filter-orders']
  }
]
