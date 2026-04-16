import { Article } from '../types'

export const customersGuides: Article[] = [
  {
    slug: 'adding-new-customer',
    categorySlug: 'customers',
    title: 'Adding a New Customer',
    description: 'Create a new customer profile with contact details, notes, and loyalty point tracking.',
    steps: [
      {
        title: 'Navigate to Customers',
        description: 'Click "Customers" in the sidebar navigation. The page opens showing the header title "Customers" with the subtitle "Manage customer profiles, loyalty points, and visit history".'
      },
      {
        title: 'Click "Add Customer"',
        description: 'Click the "Add Customer" button (with a plus icon) in the top-right header area. This button requires the "customers:create" permission. An "Add New Customer" modal will appear.'
      },
      {
        title: 'Enter the customer name',
        description: 'Fill in the "Full Name" field. This is required and must be between 2 and 100 characters. This is the primary identifier for the customer profile.'
      },
      {
        title: 'Add contact information',
        description: 'Enter the customer\'s "Phone" number (optional, but must be 6-20 characters if provided) and/or "Email" address (optional, must be a valid email format if provided). At least one contact method (phone or email) is required. If neither is provided, both fields will show the error: "Please provide at least phone or email".'
      },
      {
        title: 'Add address and notes (optional)',
        description: 'Optionally fill in the "Address" field (up to 500 characters) and "Notes" textarea (up to 1000 characters) with any relevant customer information such as preferences, allergies, or special requests.'
      },
      {
        title: 'Set loyalty points (optional)',
        description: 'The "Loyalty Points" field defaults to 0 for new customers. You can set an initial points value if migrating from another system. Points cannot be negative.'
      },
      {
        title: 'Set active status',
        description: 'The "Active" checkbox is checked by default for new customers. Uncheck it if you want to create the profile in an inactive state.'
      },
      {
        title: 'Save the customer',
        description: 'Click the submit button to save the new customer. The modal closes, the customer list refreshes, and the new customer appears in the table. If there are validation errors, they are displayed below the relevant fields in red text.'
      }
    ],
    tips: [
      {
        title: 'Quick duplicate check',
        description: 'Before adding a new customer, use the search bar in the DataTable to check if the customer already exists by searching for their name, phone, or email.'
      },
      {
        title: 'First customer prompt',
        description: 'If no customers exist yet, the page displays an empty state with a people icon and a prominent "Add Your First Customer" button.'
      }
    ],
    relatedSlugs: ['editing-customer-information', 'searching-customers', 'customer-loyalty-management'],
    featured: true
  },
  {
    slug: 'editing-customer-information',
    categorySlug: 'customers',
    title: 'Editing Customer Information',
    description: 'Update an existing customer\'s contact details, notes, loyalty points, and active status.',
    steps: [
      {
        title: 'Find the customer',
        description: 'On the Customers page, locate the customer in the data table. You can use the built-in DataTable search to filter by name or other fields.'
      },
      {
        title: 'Click "Edit"',
        description: 'Click the "Edit" button (outline style) in the Actions column of the customer row. This button requires the "customers:update" permission. An "Edit Customer" modal will appear with the customer\'s existing data pre-filled.'
      },
      {
        title: 'Modify customer fields',
        description: 'Update any of the following fields: "Full Name", "Phone", "Email", "Address", "Notes", "Loyalty Points", and "Active" status. All validation rules are the same as when adding a new customer.'
      },
      {
        title: 'Save changes',
        description: 'Click the submit button to save your modifications. The modal closes, and the customer list refreshes to show the updated data.'
      },
      {
        title: 'Edit from customer detail page',
        description: 'Alternatively, click the customer\'s name (a blue link) in the table to open their detail page at /customers/[id]. Then click the "Edit" button (outline) in the top-right header alongside "Back" and "Delete" buttons. The same edit modal appears.'
      }
    ],
    tips: [
      {
        title: 'Inactive customers',
        description: 'Uncheck the "Active" checkbox to deactivate a customer without deleting them. Inactive customers are hidden from the default filtered view but can be found by changing the status filter.'
      }
    ],
    relatedSlugs: ['adding-new-customer', 'searching-customers', 'customer-detail-page']
  },
  {
    slug: 'searching-customers',
    categorySlug: 'customers',
    title: 'Searching and Filtering Customers',
    description: 'Use search, filters, and sorting to quickly find customers in your database.',
    steps: [
      {
        title: 'Use the DataTable search',
        description: 'On the Customers page, the DataTable component includes a built-in search bar at the top. Type a customer name, phone number, or email to filter the list instantly. The search is performed client-side on the loaded data.'
      },
      {
        title: 'Open advanced filters',
        description: 'Click the "Filters" button (with filter icon) in the page header to expand the "Filter Customers" panel. The panel shows multiple filter options in a card layout.'
      },
      {
        title: 'Filter by status',
        description: 'Use the "Status" dropdown to filter: "All Customers", "Active Only", or "Inactive Only". The default view shows active customers.'
      },
      {
        title: 'Filter by loyalty points',
        description: 'Enter a "Min points" and/or "Max points" in the "Loyalty Points Range" fields to find customers within a specific loyalty tier range.'
      },
      {
        title: 'Filter by registration date',
        description: 'Use the "Registration Date" section with "From" and "To" date pickers to find customers who registered within a specific date range.'
      },
      {
        title: 'Filter by last visit date',
        description: 'Use the "Last Visit Date" section with "From" and "To" date pickers to find customers based on when they last visited your venue.'
      },
      {
        title: 'Apply or clear filters',
        description: 'Click "Apply Filters" (primary button) to apply your selections. Click "Clear All" (outline button, disabled when no filters are active) to reset all filters. Click "Cancel" to close the filter panel without applying changes. An "Active filters: X" count is shown when filters are active.'
      },
      {
        title: 'Adjust results per page',
        description: 'In the filters panel, use the "Results Per Page" dropdown to choose between 25, 50, 100, or 200 results per page. The default is 50.'
      },
      {
        title: 'Sort table columns',
        description: 'Click on sortable column headers in the DataTable (Name, Loyalty Points, Joined, Status) to sort the data ascending or descending by that column.'
      }
    ],
    tips: [
      {
        title: 'Load More pagination',
        description: 'If there are more customers than the current page size, a "Load More" button appears below the table. Click it to fetch the next batch of results.'
      },
      {
        title: 'Total count',
        description: 'The total number of customers is displayed in the "All Customers" card header (e.g., "156 total customers").'
      }
    ],
    relatedSlugs: ['adding-new-customer', 'customer-detail-page']
  },
  {
    slug: 'customer-detail-page',
    categorySlug: 'customers',
    title: 'Viewing Customer Details and Order History',
    description: 'Access a customer\'s full profile, visit history, loyalty status, and activity from their detail page.',
    steps: [
      {
        title: 'Open the customer detail page',
        description: 'On the Customers list page, click on a customer\'s name (displayed as a blue link) in the Name column. This navigates to /customers/[id] showing the full customer profile.'
      },
      {
        title: 'Review the customer header',
        description: 'The page header displays the customer\'s initials in a circular avatar, their full name in large bold text, and their primary contact information (phone or email) below. Action buttons on the right include "Back" (returns to customer list), "Edit" (opens edit modal), and "Delete" (red, with confirmation).'
      },
      {
        title: 'View stats cards',
        description: 'Four stat cards appear below the header: "Loyalty Points" (with current points count and tier badge like Bronze, Silver, Gold, Platinum, or Diamond), "Total Visits" (count), "Total Spent" (formatted currency), and "Customer Since" (registration date).'
      },
      {
        title: 'Explore the Overview tab',
        description: 'The "Overview" tab (default active) shows two cards: "Customer Information" with full name, phone, email, address, and status badge (Active/Inactive), and "Recent Activity" showing the last visit date and any notes. If the customer has notes, a full-width "Notes" card appears below.'
      },
      {
        title: 'View Visit History tab',
        description: 'Click the "Visit History" tab to see a DataTable of all customer visits. Each row shows the visit date and time, an order ID link (if associated with an order), and any visit notes. Pagination is set to 20 entries per page.'
      },
      {
        title: 'Check Loyalty tab',
        description: 'Click the "Loyalty" tab to see the customer\'s loyalty status. The left card shows: current tier with colored badge, current points, a progress bar toward the next tier (e.g., "X points to Gold"), and an "Add Points" button (with plus icon) that opens the Add Loyalty Points modal. The right card displays all available tiers: Bronze (0+), Silver (100+), Gold (1,000+), Platinum (5,000+), and Diamond (10,000+).'
      },
      {
        title: 'Add loyalty points',
        description: 'On the Loyalty tab, click "Add Points" to open the Add Loyalty Points modal. Enter the number of points to award and submit. The customer\'s points and tier will update immediately.'
      },
      {
        title: 'Delete the customer',
        description: 'Click the "Delete" button (red) in the header. A browser confirmation dialog asks: "Are you sure you want to delete customer [name]?". Click OK to delete and be redirected back to the customers list, or Cancel to abort.'
      }
    ],
    tips: [
      {
        title: 'Loyalty tier thresholds',
        description: 'The loyalty system uses five tiers: Bronze (0-99 points), Silver (100-999), Gold (1,000-4,999), Platinum (5,000-9,999), and Diamond (10,000+). The progress bar on the Loyalty tab shows progress toward the next tier.'
      },
      {
        title: 'Order association',
        description: 'Visits with linked order IDs show the first 8 characters of the order ID as a monospaced link for easy reference.'
      }
    ],
    relatedSlugs: ['editing-customer-information', 'customer-loyalty-management', 'searching-customers']
  },
  {
    slug: 'customer-loyalty-management',
    categorySlug: 'customers',
    title: 'Managing Customer Loyalty Points',
    description: 'Track and manage customer loyalty points, tiers, and rewards across your customer base.',
    steps: [
      {
        title: 'View loyalty in the customer list',
        description: 'On the Customers page, the "Loyalty Points" column in the DataTable shows each customer\'s current point balance alongside a colored tier badge (e.g., "250 Silver" or "5200 Platinum").'
      },
      {
        title: 'Open a customer\'s loyalty details',
        description: 'Click a customer\'s name to go to their detail page, then click the "Loyalty" tab. This shows the full loyalty status with tier, points, progress bar, and an "Add Points" button.'
      },
      {
        title: 'Add loyalty points',
        description: 'Click the "Add Points" button on the Loyalty tab. The Add Loyalty Points modal opens, showing the customer\'s current details. Enter the number of points to add and submit. Points are added immediately and the display refreshes.'
      },
      {
        title: 'Set points during customer edit',
        description: 'When editing a customer via the Edit modal, you can directly modify the "Loyalty Points" field to set a specific point balance. This is useful for corrections or migrations.'
      },
      {
        title: 'Filter customers by loyalty range',
        description: 'On the Customers page, click "Filters" and use the "Loyalty Points Range" fields to find customers within a specific point range. For example, enter Min: 1000, Max: 4999 to find all Gold-tier customers.'
      }
    ],
    tips: [
      {
        title: 'Tier progression display',
        description: 'The Loyalty tab shows a visual progress bar indicating how close the customer is to the next tier, along with the exact number of points needed (e.g., "750 points to Gold").'
      },
      {
        title: 'All tiers at a glance',
        description: 'The "Loyalty Tiers" card on the Loyalty tab displays all five tiers with their point thresholds, with the customer\'s current tier highlighted with a primary-colored background.'
      }
    ],
    relatedSlugs: ['customer-detail-page', 'adding-new-customer', 'searching-customers']
  },
  {
    slug: 'deleting-customers',
    categorySlug: 'customers',
    title: 'Deleting a Customer',
    description: 'Remove a customer record from the system when it is no longer needed.',
    steps: [
      {
        title: 'Delete from the customer list',
        description: 'On the Customers page, find the customer in the DataTable and click the "Delete" button (red/error variant) in the Actions column. This button requires the "customers:delete" permission.'
      },
      {
        title: 'Confirm deletion',
        description: 'A browser confirmation dialog appears asking: "Are you sure you want to delete customer [full name]?". Click OK to proceed with deletion or Cancel to abort.'
      },
      {
        title: 'Delete from detail page',
        description: 'Alternatively, navigate to the customer\'s detail page (/customers/[id]) and click the "Delete" button (red) in the page header. The same confirmation dialog appears. After deletion, you are automatically redirected to the customers list.'
      }
    ],
    tips: [
      {
        title: 'Consider deactivating instead',
        description: 'Instead of permanently deleting a customer, consider deactivating them by unchecking the "Active" checkbox in the edit modal. This preserves their order history and loyalty data for future reference.'
      },
      {
        title: 'Delete button disabled during operation',
        description: 'The Delete button is disabled while the deletion is in progress to prevent accidental double-clicks.'
      }
    ],
    relatedSlugs: ['editing-customer-information', 'searching-customers']
  }
]
