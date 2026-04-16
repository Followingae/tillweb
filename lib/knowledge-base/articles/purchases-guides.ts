import { Article } from '../types'

export const purchasesGuides: Article[] = [
  {
    slug: 'create-purchase-order',
    categorySlug: 'purchases',
    title: 'How to Create a Purchase Invoice',
    description: 'Record stock receipts from suppliers with line items, tax handling, and unit conversion.',
    steps: [
      {
        title: 'Navigate to Purchases',
        description: 'Click "Purchases" in the sidebar to open the Purchase Invoices page. The page title reads "Purchase Invoices" with subtitle "Record and manage stock receipts from suppliers". You need the "inventory:stock-receipts:create" permission.'
      },
      {
        title: 'Click "New Purchase"',
        description: 'Click the "New Purchase" button in the top-right corner. This navigates to the new purchase form at /purchases/new.'
      },
      {
        title: 'Fill in Header Information',
        description: 'Complete the purchase header fields: select a Supplier from the dropdown (only active suppliers are listed), enter a Document Reference (supplier invoice number), set the Document Date and Receipt Date, select a Branch, and add optional Notes. Toggle "Tax Inclusive" if supplier prices include tax.'
      },
      {
        title: 'Add Line Items',
        description: 'Click "Add Item" to add a line. For each line item, select an ingredient or menu item from the item dropdown. The system auto-populates the stock unit and cost price. Enter the Quantity, choose a purchase unit (if configured), and enter the Price. Toggle between "per_unit" and "total" price modes.'
      },
      {
        title: 'Configure Optional Line Fields',
        description: 'Click the expand chevron on each line to reveal optional fields: batch number, expiry date, and line-level notes.'
      },
      {
        title: 'Review Total',
        description: 'The form calculates and displays the total amount based on all line items including quantities, prices, and tax.'
      },
      {
        title: 'Save as Draft or Process',
        description: 'Click "Save" to save the purchase as a draft. Drafts can be edited later. To immediately process the receipt (update inventory), the receipt must first be saved and then processed from the purchase list.'
      }
    ],
    tips: [
      {
        title: 'AI Upload',
        description: 'Click the "AI Upload" button (sparkles icon) in the purchases header to automatically extract purchase data from supplier invoices using AI. This redirects to /ai-upload?target=purchase.'
      },
      {
        title: 'Unit Conversion',
        description: 'When adding items, the system supports purchase unit conversion. If an item is stocked in "kg" but purchased in "boxes" (with a defined conversion factor), the system automatically converts quantities.'
      },
      {
        title: 'Tax Inclusive Mode',
        description: 'Toggle "Tax Inclusive" in the header if your supplier quotes prices with tax included. This affects how tax is calculated for each line item.'
      }
    ],
    relatedSlugs: ['manage-suppliers', 'process-purchase-receipt', 'view-stock-levels'],
    featured: true
  },
  {
    slug: 'manage-purchase-invoices',
    categorySlug: 'purchases',
    title: 'How to Manage Purchase Invoices',
    description: 'View, search, filter, process, void, and delete purchase invoices.',
    steps: [
      {
        title: 'Navigate to Purchases',
        description: 'Click "Purchases" in the sidebar. The page lists all purchase invoices in a table.'
      },
      {
        title: 'Search and Filter',
        description: 'Use the search input to find invoices by "receipt #, invoice #, or supplier...". Filter by status using the "All Status" dropdown (Draft, Received, Voided). Filter by supplier using the "All Suppliers" dropdown. Click "Refresh" to reload the list.'
      },
      {
        title: 'Review Invoice Details',
        description: 'The table shows columns: Receipt # (clickable link to detail page), Supplier, Invoice # (document reference), Date, Total (in AED), Status (badge: Draft/yellow, Received/green, Voided/red), and Actions (three-dot menu).'
      },
      {
        title: 'View Invoice Details',
        description: 'Click a receipt number or select "View Details" from the three-dot actions menu to see the full purchase invoice with all line items at /purchases/[id].'
      },
      {
        title: 'Edit a Draft Invoice',
        description: 'For draft invoices, select "Edit" from the actions menu to return to the edit form. Only draft invoices can be edited.'
      },
      {
        title: 'Navigate Between Pages',
        description: 'Use "Previous" and "Next" buttons at the bottom for pagination. The display shows "Showing X to Y of Z results".'
      }
    ],
    tips: [
      {
        title: 'Status Workflow',
        description: 'Purchase invoices follow this lifecycle: Draft (editable, not yet applied to inventory) -> Received (processed, stock updated) -> Voided (reversed, stock reverted).'
      },
      {
        title: 'Quick Access to Suppliers',
        description: 'Click the "Suppliers" button (truck icon) in the page header to navigate directly to the Suppliers management page.'
      }
    ],
    relatedSlugs: ['create-purchase-order', 'process-purchase-receipt']
  },
  {
    slug: 'process-purchase-receipt',
    categorySlug: 'purchases',
    title: 'How to Process a Purchase Receipt',
    description: 'Process draft receipts to update inventory stock levels from supplier deliveries.',
    steps: [
      {
        title: 'Find the Draft Receipt',
        description: 'Navigate to Purchases. Filter by "Draft" status to find unprocessed receipts.'
      },
      {
        title: 'Open the Actions Menu',
        description: 'Click the three-dot menu (MoreVertical icon) on the draft receipt row.'
      },
      {
        title: 'Click "Process Receipt"',
        description: 'Select "Process Receipt" (green text with checkmark icon) from the dropdown menu. This action is only available for receipts with "Draft" status.'
      },
      {
        title: 'Confirm Processing',
        description: 'The system processes the receipt, updating stock levels for all line items. A success toast shows: "Receipt [receipt_number] processed successfully. [X] items updated."'
      },
      {
        title: 'Verify Stock Updates',
        description: 'The receipt status changes to "Received" (green badge). Navigate to Inventory to verify that stock levels were updated correctly for each item in the receipt.'
      }
    ],
    tips: [
      {
        title: 'Cannot Undo Processing',
        description: 'Processing a receipt updates inventory immediately. To reverse, you must void the received receipt, which reverts all stock changes.'
      },
      {
        title: 'Cost Price Updates',
        description: 'Processing a receipt may also update the cost price for items based on the purchase price in the receipt.'
      }
    ],
    relatedSlugs: ['create-purchase-order', 'void-purchase-receipt']
  },
  {
    slug: 'void-purchase-receipt',
    categorySlug: 'purchases',
    title: 'How to Void a Purchase Receipt',
    description: 'Reverse a processed receipt to revert stock level changes.',
    steps: [
      {
        title: 'Find the Received Receipt',
        description: 'Navigate to Purchases. Filter by "Received" status to find processed receipts that need to be voided.'
      },
      {
        title: 'Open the Actions Menu',
        description: 'Click the three-dot menu on the received receipt row. You need the "inventory:stock-receipts:void" permission.'
      },
      {
        title: 'Click "Void Receipt"',
        description: 'Select "Void Receipt" (red text with X-circle icon) from the dropdown. This option only appears for receipts with "Received" status.'
      },
      {
        title: 'Enter Void Reason',
        description: 'A prompt dialog asks: "Enter reason for voiding this receipt:". Type the reason and click OK. The void reason is recorded for audit purposes.'
      },
      {
        title: 'Confirm the Void',
        description: 'The system reverses the stock changes. A success toast shows: "Receipt [receipt_number] voided. [X] items reverted." The receipt status changes to "Voided" (red badge).'
      }
    ],
    tips: [
      {
        title: 'Audit Trail',
        description: 'Void reasons are recorded and cannot be changed later. Provide a clear, accurate reason for auditing purposes.'
      }
    ],
    relatedSlugs: ['process-purchase-receipt', 'manage-purchase-invoices']
  },
  {
    slug: 'manage-suppliers',
    categorySlug: 'purchases',
    title: 'How to Manage Suppliers',
    description: 'Add, edit, view, and manage your supplier/vendor directory.',
    steps: [
      {
        title: 'Navigate to Suppliers',
        description: 'Click "Suppliers" from the Purchases page header, or navigate directly to /suppliers. The page title reads "Suppliers" with subtitle "Manage your suppliers and vendors". You need the "inventory:stock-receipts:create" permission.'
      },
      {
        title: 'View Supplier List',
        description: 'The table shows all suppliers with columns: Supplier (name and TRN), Contact (person name), Email / Phone, Payment Terms, Status (Active/Inactive badge), and Actions (three-dot menu).'
      },
      {
        title: 'Search and Filter Suppliers',
        description: 'Use the search input to find suppliers by "name, contact, email, phone...". Filter by status using the "All Status" dropdown (Active, Inactive). Click "Refresh" to reload.'
      },
      {
        title: 'Add a New Supplier',
        description: 'Click "Add Supplier" (plus icon). A dialog opens titled "Add New Supplier" with the description "Add a new supplier to your system". Fill in: Supplier Name (required), Contact Person, Tax Number (TRN), Email, Phone (placeholder: "+971 XX XXX XXXX"), Payment Terms (dropdown: Cash on Delivery, Net 7, Net 15, Net 30, Net 45, Net 60, Due on Receipt, Prepaid), Address, and Notes.'
      },
      {
        title: 'Save the Supplier',
        description: 'Click "Create Supplier" to save. A success toast shows "Supplier created successfully". The supplier list refreshes.'
      },
      {
        title: 'Edit a Supplier',
        description: 'From the three-dot actions menu, select "Edit". The dialog opens with pre-filled data. Modify fields and click "Save Changes".'
      },
      {
        title: 'View Supplier Details',
        description: 'Select "View Details" from the actions menu. A read-only dialog shows all supplier information including name, status, contact person, TRN, email, phone, payment terms, creation date, address, and notes.'
      },
      {
        title: 'Activate/Deactivate Supplier',
        description: 'From the actions menu, select "Deactivate" (amber text) to disable a supplier, or "Activate" (green text) to re-enable. A toast confirms the status change.'
      },
      {
        title: 'Delete a Supplier',
        description: 'Select "Delete" (red text with trash icon) from the actions menu. A confirmation dialog asks: "Are you sure you want to delete [name]? This action cannot be undone." Confirm to permanently delete.'
      }
    ],
    tips: [
      {
        title: 'Payment Terms',
        description: 'Setting accurate payment terms helps track supplier invoices and manage cash flow. Options include Cash on Delivery, Net 7/15/30/45/60, Due on Receipt, and Prepaid.'
      },
      {
        title: 'Deactivate vs Delete',
        description: 'Deactivated suppliers are hidden from purchase invoice dropdowns but their historical data is preserved. Only delete suppliers with no associated purchase invoices.'
      },
      {
        title: 'TRN (Tax Registration Number)',
        description: 'Record your supplier\'s TRN for UAE VAT compliance. This helps with tax reporting and verification.'
      }
    ],
    relatedSlugs: ['create-purchase-order', 'manage-purchase-invoices'],
    featured: true
  }
]
