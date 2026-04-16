import { Article } from '../types'

export const inventoryGuides: Article[] = [
  {
    slug: 'view-stock-levels',
    categorySlug: 'inventory',
    title: 'How to View Stock Levels',
    description: 'Monitor current stock for all ingredients and menu items with filtering and search.',
    steps: [
      {
        title: 'Navigate to Inventory',
        description: 'Click "Inventory" in the sidebar. The page title adapts to your business type: "Kitchen Inventory" for restaurants, "Product Inventory" for retail, or "Service Inventory" for service businesses. You need the "inventory:read" permission.'
      },
      {
        title: 'Review Summary Statistics',
        description: 'At the top, four summary cards show: Total Ingredients (or Total Products), Ingredient Value (total cost value in AED), Ingredient Low Stock (count of items below alert threshold), and Ingredient Out of Stock (count of items with zero stock).'
      },
      {
        title: 'Search for Items',
        description: 'Use the search box labeled "Search ingredients..." (or "Search products...") to filter items by name, description, SKU, or item type.'
      },
      {
        title: 'Filter by Stock Status',
        description: 'Use the stock filter dropdown with options: "All Stock", "In Stock", "Low Stock", and "Out of Stock" to focus on items that need attention.'
      },
      {
        title: 'Filter by Item Type (Restaurant Only)',
        description: 'For restaurant businesses, an additional dropdown lets you filter by: "Ingredients" (default), "Menu Items", or "All Types".'
      },
      {
        title: 'Switch Between Table and Grid Views',
        description: 'Toggle between table view (list format) and grid view (card format) using the two view-mode buttons next to the filters.'
      },
      {
        title: 'Review Stock Details',
        description: 'Each item row shows: Item name and description, Type badge (Ingredient, Product, Service, Combo), Price (in AED), Stock Level with unit (e.g., "150.00 kg"), Cost Price (in AED), Status badge (In Stock / Low Stock / Out of Stock / Not Tracked / Recipe), and an "Update Stock" action button.'
      }
    ],
    tips: [
      {
        title: 'Status Color Coding',
        description: 'Stock statuses are color-coded: green for In Stock, yellow for Low Stock, red for Out of Stock, gray for Not Tracked, and purple for Recipe-based items.'
      },
      {
        title: 'Recipe-Based Items',
        description: 'Menu items marked as recipe-based show "Via ingredients" for stock level, meaning their availability is determined by ingredient stock levels, not their own.'
      },
      {
        title: 'Pagination',
        description: 'When not searching, items are paginated with "Previous" and "Next" buttons showing "Showing X to Y of Z results". During search, all matching items load at once.'
      }
    ],
    relatedSlugs: ['adjust-stock', 'set-low-stock-alerts', 'manage-variation-stock'],
    featured: true
  },
  {
    slug: 'adjust-stock',
    categorySlug: 'inventory',
    title: 'How to Adjust Stock Levels',
    description: 'Add, remove, or set stock quantities with reason tracking and waste management.',
    steps: [
      {
        title: 'Navigate to Inventory',
        description: 'Click "Inventory" in the sidebar. You need the "inventory:update" permission to adjust stock.'
      },
      {
        title: 'Find the Item',
        description: 'Locate the item you want to adjust using search or filters. The "Update Stock" button appears only for items with inventory tracking enabled and for users with the inventory:update permission.'
      },
      {
        title: 'Click "Update Stock"',
        description: 'Click the "Update Stock" button on the item row (table view) or card (grid view). A modal opens titled "Update [Stock Label]: [Item Name]" showing the current stock level.'
      },
      {
        title: 'Select Adjustment Type',
        description: 'Choose from the "Adjustment Type" dropdown: "Add Stock" (increase quantity), "Remove Stock" (decrease quantity), or "Set Stock Level" (set to an exact value). When selecting "Set Stock Level", the quantity field pre-fills with the current stock.'
      },
      {
        title: 'Enter Quantity',
        description: 'Enter the quantity in the "Quantity" field. The field supports decimal values (e.g., 99.5, 10.25, 0.125) with step increments of 0.001. A preview shows the projected new stock level: "New Stock: [calculated value]".'
      },
      {
        title: 'Select a Reason',
        description: 'Choose a reason from the "Reason" dropdown (marked as required with *). Options vary by adjustment type and include reasons like purchase received, production, waste, damage, expired, correction, and others. A help text notes "This helps track inventory changes for reporting".'
      },
      {
        title: 'Link to Purchase Invoice (Optional)',
        description: 'For waste, damage, or expired reasons, an expandable "Link to Purchase Invoice (Optional)" section appears. Expand it to select a recent purchase invoice from the dropdown. When linked, the system displays the supplier name, invoice reference, unit cost, and calculated waste value in AED.'
      },
      {
        title: 'Submit the Adjustment',
        description: 'Click "Update Stock" to apply. The button is disabled if quantity is zero, reason is empty, or (in variation mode) no variation is selected. A success toast shows "Stock updated successfully".'
      }
    ],
    tips: [
      {
        title: 'Variation-Level Adjustments',
        description: 'For items with variations, the modal shows "[X] variation(s) available" and automatically enables variation mode. An info message reads "Please adjust stock at the variation level to maintain accuracy." Select a specific variation from the dropdown before adjusting.'
      },
      {
        title: 'Waste Tracking',
        description: 'Linking stock removals (waste, damage, expired) to purchase invoices enables waste value calculation and supplier quality tracking.'
      }
    ],
    relatedSlugs: ['view-stock-levels', 'manage-variation-stock', 'view-cost-history']
  },
  {
    slug: 'set-low-stock-alerts',
    categorySlug: 'inventory',
    title: 'How to Set Low Stock Alerts',
    description: 'Configure threshold alerts to be notified when items are running low.',
    steps: [
      {
        title: 'Navigate to Inventory',
        description: 'Click "Inventory" in the sidebar.'
      },
      {
        title: 'Understand Alert Thresholds',
        description: 'Each item has a "low_stock_alert" threshold (default: 5 units). When current stock drops to or below this threshold, the item is flagged as "Low Stock" with a yellow status badge.'
      },
      {
        title: 'Monitor Low Stock Items',
        description: 'Use the "Low Stock" filter in the stock filter dropdown to see all items currently below their threshold. The summary card at the top shows the total count of low stock items.'
      },
      {
        title: 'View Low Stock Alerts Detail',
        description: 'Low stock alerts show each item with its current stock level and the alert threshold, displayed in a yellow warning card format with the item name, branch name, current stock, and "Alert at: [threshold]" values.'
      }
    ],
    tips: [
      {
        title: 'Proactive Monitoring',
        description: 'Check the "Low Stock" count on the summary card daily. A growing count indicates you need to reorder. Create purchase orders for items showing as low stock.'
      },
      {
        title: 'Alert Threshold Defaults',
        description: 'The default low stock threshold is 5 units. Thresholds can be configured per item when setting up inventory tracking in the catalog.'
      }
    ],
    relatedSlugs: ['view-stock-levels', 'adjust-stock', 'create-purchase-order']
  },
  {
    slug: 'manage-variation-stock',
    categorySlug: 'inventory',
    title: 'How to Manage Variation Stock',
    description: 'Track and adjust stock levels for item variations like sizes and colors.',
    steps: [
      {
        title: 'Navigate to Inventory',
        description: 'Click "Inventory" in the sidebar.'
      },
      {
        title: 'Find an Item with Variations',
        description: 'Locate the item in the inventory list. Below the item name, a "Show variations" link indicates the item has variation support.'
      },
      {
        title: 'Expand Variation Details',
        description: 'Click "Show variations" to expand the variation section. This reveals the SimpleVariationStockSetup component where you can set up or view variation-level stock, and the VariationStockDisplay component showing current stock per variation option.'
      },
      {
        title: 'Set Up Variation Stock',
        description: 'Use the SimpleVariationStockSetup to initialize stock levels for each variation option (e.g., Small: 50, Medium: 30, Large: 20).'
      },
      {
        title: 'Adjust Variation Stock',
        description: 'Click "Update Stock" on the item. The stock modal automatically enables variation mode and shows a "Variation" dropdown listing all variations with their current stock (e.g., "Size: Small (50.00 current)"). Select a variation, choose adjustment type, enter quantity and reason, then submit.'
      }
    ],
    tips: [
      {
        title: 'Variation Accuracy',
        description: 'When an item has variations, always adjust stock at the variation level. The modal displays an info message: "This item has [X] variation(s). Please adjust stock at the variation level to maintain accuracy."'
      },
      {
        title: 'Collapse Variations',
        description: 'Click "Hide variations" to collapse the expanded section and keep the inventory view clean.'
      }
    ],
    relatedSlugs: ['view-stock-levels', 'adjust-stock']
  },
  {
    slug: 'view-cost-history',
    categorySlug: 'inventory',
    title: 'How to View Cost History',
    description: 'Track historical cost price changes for ingredients and products.',
    steps: [
      {
        title: 'Navigate to Cost History',
        description: 'From the Inventory page, click the "Cost History" button (purple, with a clipboard icon) in the top-right corner. This navigates to /inventory/cost-history.'
      },
      {
        title: 'Review Cost Trends',
        description: 'The Cost History page shows historical cost price data for your inventory items, allowing you to track price changes over time from your suppliers.'
      }
    ],
    tips: [
      {
        title: 'Supplier Price Monitoring',
        description: 'Regularly review cost history to identify upward trends in ingredient costs. This helps negotiate better prices or adjust your menu pricing.'
      }
    ],
    relatedSlugs: ['view-stock-levels', 'create-purchase-order']
  }
]
