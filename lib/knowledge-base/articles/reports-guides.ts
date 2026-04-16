import { Article } from '../types'

export const reportsGuides: Article[] = [
  {
    slug: 'view-sales-summary-report',
    categorySlug: 'reports',
    title: 'How to View the Sales Summary Report',
    description: 'Access a comprehensive sales overview including revenue, orders, payment methods, and top categories.',
    steps: [
      {
        title: 'Navigate to Reports',
        description: 'From the sidebar, click "Reports" to open the Reports hub. You will see a grid of report cards with a date range selector at the top.'
      },
      {
        title: 'Select a Date Range',
        description: 'Use the date range selector in the top-right corner. Choose a preset such as "Today", "Yesterday", "This Week", "Last 7 Days", "Last 30 Days", or select "Custom Range" to pick specific start and end dates.'
      },
      {
        title: 'Open the Sales Summary Report',
        description: 'Find the "Sales Summary" card (identified by a trending-up icon) and click "View Report". The report loads automatically for the selected branch and date range.'
      },
      {
        title: 'Review Summary Cards',
        description: 'The report displays summary cards in three rows: Total Orders, Total Revenue, Total Tax, Total Discounts, Total Tips, Net Revenue, Avg Order Value, Avg Items Per Order, Voided Orders, and Refunded Orders.'
      },
      {
        title: 'Analyze Charts',
        description: 'Below the summary cards, charts show Sales by Status (pie chart), Payment Methods (pie chart), Sales by Hour (line chart with dual axes for revenue and orders), and Top Categories by Revenue (horizontal bar chart).'
      },
      {
        title: 'Switch to Daily Breakdown',
        description: 'Click the view toggle between "Summary" and "Daily" to see a daily trend chart and a daily breakdown table with per-day metrics.'
      }
    ],
    tips: [
      {
        title: 'View Mode Toggle',
        description: 'Use the "Summary" / "Daily" toggle to switch between the overview with charts and a granular day-by-day breakdown table.'
      },
      {
        title: 'Real-Time Data',
        description: 'All reports query real-time data from your database. Changing the date range or branch automatically refreshes the data.'
      }
    ],
    relatedSlugs: ['export-reports', 'filter-reports-by-date', 'view-z-report'],
    featured: true
  },
  {
    slug: 'view-orders-report',
    categorySlug: 'reports',
    title: 'How to View the Orders Report',
    description: 'Track detailed order information with customer data, fulfillment types, hourly trends, and comprehensive order analysis.',
    steps: [
      {
        title: 'Navigate to Reports',
        description: 'Click "Reports" in the sidebar to open the Reports hub.'
      },
      {
        title: 'Open the Orders Report',
        description: 'Find the "Orders Report" card (shopping cart icon) and click "View Report".'
      },
      {
        title: 'Apply Filters',
        description: 'Use the filter dropdowns to narrow results: "All Statuses" (Completed, Open, Voided, Refunded), "All Payment Types" (Cash, Card, Split), and "All Card Types" (if card types are available).'
      },
      {
        title: 'Review Summary Metrics',
        description: 'Summary cards show Total Orders, Total Revenue, Net Revenue, and Average Order Value. Status breakdown cards display counts for Completed, Open, Voided, Refunded, and Partial Refund orders.'
      },
      {
        title: 'Browse Charts and Data Tables',
        description: 'The report includes charts for Orders by Source (pie), Orders by Payment Type (bar), Orders by Hour (line), and Daily Orders Trend (line). Tables show Top Customers, Top Selling Items, and a full All Orders list with Department, Ticket#, Invoice#, Tax, Total, Payment, Card Type, User, Date, and Time columns.'
      }
    ],
    tips: [
      {
        title: 'Status Filters',
        description: 'Combine status and payment type filters to find specific orders, such as all voided card payments.'
      },
      {
        title: 'Card Type Filtering',
        description: 'The card type filter dropdown only appears when card payment data with brand information is available for the selected branch.'
      }
    ],
    relatedSlugs: ['view-sales-summary-report', 'view-void-report', 'view-refund-report']
  },
  {
    slug: 'view-z-report',
    categorySlug: 'reports',
    title: 'How to Generate a Z Report',
    description: 'View the end-of-day summary including sales, payments, tax, cash reconciliation, and top products.',
    steps: [
      {
        title: 'Navigate to the Z Report',
        description: 'Go to Reports and click on the "Z Report" card (file text icon). The title reads "Z Report - End of Day Summary".'
      },
      {
        title: 'Select Your Date',
        description: 'Use the date range selector. For a traditional Z report, select "Today" or "Yesterday" to view a single day\'s summary.'
      },
      {
        title: 'Review Summary Metrics',
        description: 'The report shows Total Orders, Total Revenue, Total Tax, Total Discounts, Net Revenue, Total Refunds (with amount), and Total Voids (with amount).'
      },
      {
        title: 'Check Cash Reconciliation',
        description: 'The "Cash Reconciliation" card displays Opening Cash, Closing Cash, Expected Cash, and Cash Variance (showing "Over" or "Short" with color coding).'
      },
      {
        title: 'Review Breakdowns',
        description: 'View Sales Breakdown (Dine-In, Takeaway, Delivery pie chart), Payment Summary (Cash, Card, Split, Online, Mixed pie chart), Order Source Breakdown, Order Type Breakdown, Hourly Breakdown chart, Shifts table (Device, User, Opened, Closed, Orders, Revenue, Status), and Top 10 Products table.'
      },
      {
        title: 'View Tax Summary',
        description: 'The Tax Summary section shows Taxable Amount, Tax Amount, and Tax Rate in dedicated cards.'
      }
    ],
    tips: [
      {
        title: 'Cash Variance',
        description: 'The Cash Variance is color-coded: green for over, red for short, and gray for exact match. This helps quickly identify cash discrepancies.'
      },
      {
        title: 'Shift Details',
        description: 'The Shifts table shows each device\'s shift with open/close times, making it easy to audit specific shift performance.'
      }
    ],
    relatedSlugs: ['view-sales-summary-report', 'view-shift-performance-report', 'export-reports']
  },
  {
    slug: 'view-shift-performance-report',
    categorySlug: 'reports',
    title: 'How to View Shift Performance',
    description: 'Analyze shift data with cash reconciliation, performance metrics, and variance tracking.',
    steps: [
      {
        title: 'Navigate to Reports',
        description: 'Click "Reports" in the sidebar.'
      },
      {
        title: 'Open Shift Performance',
        description: 'Find the "Shift Performance" card (clock icon) and click "View Report".'
      },
      {
        title: 'Select Date Range',
        description: 'Choose the period to analyze. The report loads shift data including performance metrics and cash reconciliation details.'
      },
      {
        title: 'Review Shift Data',
        description: 'The report displays each shift with device name, assigned user, open/close timestamps, order count, revenue generated, and shift status. Cash reconciliation shows opening/closing balances and variances.'
      }
    ],
    tips: [
      {
        title: 'Performance Comparison',
        description: 'Compare shifts side-by-side to identify top-performing staff members and peak revenue periods.'
      }
    ],
    relatedSlugs: ['view-z-report', 'view-sales-summary-report']
  },
  {
    slug: 'view-tax-summary-report',
    categorySlug: 'reports',
    title: 'How to View the Tax Summary Report',
    description: 'Access UAE VAT compliance report with tax breakdown by rate, payment method, and refunds/voids tracking.',
    steps: [
      {
        title: 'Navigate to Reports',
        description: 'Click "Reports" in the sidebar.'
      },
      {
        title: 'Open Tax Summary',
        description: 'Find the "Tax Summary" card (receipt icon) and click "View Report".'
      },
      {
        title: 'Review Tax Data',
        description: 'The report shows taxable amounts, tax collected, and effective tax rates broken down by period. It includes tax breakdown by payment method and tracks the impact of refunds and voids on tax totals.'
      }
    ],
    tips: [
      {
        title: 'VAT Compliance',
        description: 'This report is designed for UAE VAT compliance. Export it before filing to verify your tax figures against your records.'
      }
    ],
    relatedSlugs: ['view-z-report', 'export-reports']
  },
  {
    slug: 'view-menu-mix-report',
    categorySlug: 'reports',
    title: 'How to View the Menu Mix Report',
    description: 'Analyze menu engineering with item classification based on profitability and popularity.',
    steps: [
      {
        title: 'Navigate to Reports',
        description: 'Click "Reports" in the sidebar.'
      },
      {
        title: 'Open Menu Mix Report',
        description: 'Find the "Menu Mix Report" card (chef hat icon) and click "View Report".'
      },
      {
        title: 'Review Item Classifications',
        description: 'Each menu item is classified into one of four categories: PRIME (high profit, high popularity), STANDARD (high popularity, lower profit), PROBLEM (high profit, low popularity), or SLEEPER (low profit, low popularity).'
      },
      {
        title: 'Use Insights for Menu Engineering',
        description: 'Focus on promoting PRIME items, optimizing costs for STANDARD items, marketing PROBLEM items better, and considering removing or repricing SLEEPER items.'
      }
    ],
    tips: [
      {
        title: 'Menu Engineering Strategy',
        description: 'Use the PRIME/STANDARD/PROBLEM/SLEEPER classification to make data-driven decisions about menu item placement, pricing, and promotion.'
      }
    ],
    relatedSlugs: ['view-sales-summary-report', 'view-top-products-report']
  },
  {
    slug: 'view-void-report',
    categorySlug: 'reports',
    title: 'How to View the Void Report',
    description: 'Track all voided/cancelled orders with line-item details and reasons.',
    steps: [
      {
        title: 'Navigate to Reports',
        description: 'Click "Reports" in the sidebar.'
      },
      {
        title: 'Open Void Report',
        description: 'Find the "Void Report" card (X-circle icon in red) and click "View Report".'
      },
      {
        title: 'Review Voided Orders',
        description: 'The report lists all voided orders with details including void reasons, original order amounts, the staff member who voided, and timestamps. Line-item breakdowns show exactly which items were voided.'
      }
    ],
    tips: [
      {
        title: 'Loss Prevention',
        description: 'Review void reports regularly to identify patterns. Frequent voids by specific users or at specific times may indicate training needs or other issues.'
      }
    ],
    relatedSlugs: ['view-orders-report', 'view-refund-report']
  },
  {
    slug: 'view-discount-report',
    categorySlug: 'reports',
    title: 'How to View the Discount Report',
    description: 'Track item-wise and order-wise discounts with detailed breakdowns.',
    steps: [
      {
        title: 'Navigate to Reports',
        description: 'Click "Reports" in the sidebar.'
      },
      {
        title: 'Open Discounts Report',
        description: 'Find the "Discounts Report" card (tag icon) and click "View Report".'
      },
      {
        title: 'Review Discount Data',
        description: 'The report shows comprehensive discount tracking with both item-level and order-level discount analysis, including total discount amounts, frequency of discount usage, and breakdowns by discount type.'
      }
    ],
    relatedSlugs: ['create-discount-rule', 'view-sales-summary-report']
  },
  {
    slug: 'view-refund-report',
    categorySlug: 'reports',
    title: 'How to View the Refund Report',
    description: 'Track refunds with order-wise and item-wise breakdowns, payment methods, reasons, and daily trends.',
    steps: [
      {
        title: 'Navigate to Reports',
        description: 'Click "Reports" in the sidebar.'
      },
      {
        title: 'Open Refunds Report',
        description: 'Find the "Refunds Report" card (rotate-ccw icon) and click "View Report".'
      },
      {
        title: 'Analyze Refund Data',
        description: 'Review refund trends including order-wise breakdowns, item-wise breakdowns, refund reasons, payment method analysis, and daily trend charts.'
      }
    ],
    relatedSlugs: ['view-void-report', 'view-orders-report']
  },
  {
    slug: 'view-tip-report',
    categorySlug: 'reports',
    title: 'How to View the Tip Report',
    description: 'Track tip performance across users, payment methods, order sources, and time periods.',
    steps: [
      {
        title: 'Navigate to Reports',
        description: 'Click "Reports" in the sidebar.'
      },
      {
        title: 'Open Tip Report',
        description: 'Find the "Tip Report" card (heart icon) and click "View Report".'
      },
      {
        title: 'Review Tip Analytics',
        description: 'The report shows tip totals, averages, and breakdowns by staff member, payment method, order source, and time period.'
      }
    ],
    relatedSlugs: ['view-sales-summary-report', 'view-shift-performance-report']
  },
  {
    slug: 'view-customer-report',
    categorySlug: 'reports',
    title: 'How to View the Customer Report',
    description: 'Track customer behavior, lifetime value, retention metrics, acquisition trends, and top spending customers.',
    steps: [
      {
        title: 'Navigate to Reports',
        description: 'Click "Reports" in the sidebar.'
      },
      {
        title: 'Open Customer Report',
        description: 'Find the "Customer Report" card (users icon) and click "View Report".'
      },
      {
        title: 'Analyze Customer Data',
        description: 'Review customer lifetime value, retention metrics, acquisition trends over time, and a ranked list of top spending customers.'
      }
    ],
    relatedSlugs: ['view-orders-report', 'view-sales-summary-report']
  },
  {
    slug: 'export-reports',
    categorySlug: 'reports',
    title: 'How to Export Reports (PDF/Excel)',
    description: 'Export any report to PDF or Excel format for offline analysis and record-keeping.',
    steps: [
      {
        title: 'Open Any Report',
        description: 'Navigate to Reports and open the specific report you want to export.'
      },
      {
        title: 'Check Export Permission',
        description: 'Export buttons are only visible if your user role has the "reports:export" permission. If you do not see export buttons, contact your administrator.'
      },
      {
        title: 'Export to Excel',
        description: 'Click the "Export Excel" button in the top-right header area. The report generates a professional Excel file (.xlsx) with multiple sections, company metadata, branch name, and period information.'
      },
      {
        title: 'Export to PDF',
        description: 'Click the "Export PDF" button to generate a formatted PDF document. The PDF includes your company name, logo (if configured), report title, date range, and all report sections with tables.'
      },
      {
        title: 'Print the Report',
        description: 'Some reports (Sales Summary, Z Report) also have a "Print" button that opens the browser print dialog with a print-optimized layout.'
      }
    ],
    tips: [
      {
        title: 'Daily Breakdown Exports',
        description: 'When in "Daily" view mode, the export buttons generate a daily breakdown version of the report instead of the summary view.'
      },
      {
        title: 'Export Permission',
        description: 'The "reports:export" permission controls visibility of Export Excel, Export PDF, and Print buttons across all reports.'
      }
    ],
    relatedSlugs: ['view-sales-summary-report', 'view-z-report', 'filter-reports-by-date'],
    featured: true
  },
  {
    slug: 'filter-reports-by-date',
    categorySlug: 'reports',
    title: 'How to Filter Reports by Date Range',
    description: 'Use preset date ranges or custom dates to focus reports on specific time periods.',
    steps: [
      {
        title: 'Locate the Date Range Selector',
        description: 'On the Reports hub or inside any individual report, find the date range selector button showing a calendar icon and the current selection.'
      },
      {
        title: 'Choose a Preset Range',
        description: 'Click the selector to open a dropdown with preset options: "Today", "Yesterday", "This Week", "Last Week", "This Month", "Last Month", "Last 7 Days", "Last 30 Days", "Last 90 Days".'
      },
      {
        title: 'Set a Custom Range',
        description: 'Select "Custom Range" from the dropdown. A date picker modal appears where you can select specific start and end dates. Click to confirm your selection.'
      },
      {
        title: 'View the Selected Period',
        description: 'A blue info bar displays the "Selected Period" with formatted start and end dates (e.g., "Apr 01, 2026 - Apr 16, 2026"). All report data automatically refreshes for the chosen period.'
      }
    ],
    tips: [
      {
        title: 'URL Parameter Persistence',
        description: 'When navigating from the Reports hub to a specific report, your selected date range is passed via URL parameters so it carries over automatically.'
      }
    ],
    relatedSlugs: ['view-sales-summary-report', 'export-reports']
  },
  {
    slug: 'view-top-products-report',
    categorySlug: 'reports',
    title: 'How to View the Top Products Report',
    description: 'Analyze product performance showing best sellers by quantity and revenue with category breakdown.',
    steps: [
      {
        title: 'Navigate to Reports',
        description: 'Click "Reports" in the sidebar.'
      },
      {
        title: 'Open Top Products',
        description: 'Find the "Top Products" card (package icon). Note: This report requires the "advanced_reports" feature to be enabled for your account.'
      },
      {
        title: 'Review Product Rankings',
        description: 'The report shows products ranked by quantity sold and revenue generated, with category-level breakdowns.'
      }
    ],
    tips: [
      {
        title: 'Feature-Gated Report',
        description: 'Top Products, Payment Methods, Inventory Report, COGS, Purchase Summary, Supplier Performance, Cost Trends, and Item Summary reports require the "advanced_reports" feature flag to be enabled.'
      }
    ],
    relatedSlugs: ['view-menu-mix-report', 'view-sales-summary-report']
  },
  {
    slug: 'view-payment-methods-report',
    categorySlug: 'reports',
    title: 'How to View the Payment Methods Report',
    description: 'Analyze payment transaction data including cash, card, and split payments breakdown.',
    steps: [
      {
        title: 'Navigate to Reports',
        description: 'Click "Reports" in the sidebar.'
      },
      {
        title: 'Open Payment Methods',
        description: 'Find the "Payment Methods" card (credit card icon) and click "View Report". This is an advanced report that requires the "advanced_reports" feature.'
      },
      {
        title: 'Review Payment Data',
        description: 'Analyze transaction counts and amounts broken down by cash, card, split, online, and mixed payment types.'
      }
    ],
    relatedSlugs: ['view-sales-summary-report', 'view-z-report']
  }
]
