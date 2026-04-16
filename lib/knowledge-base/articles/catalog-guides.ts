import { Article } from '../types'

export const catalogGuides: Article[] = [
  {
    slug: 'create-menu-item',
    categorySlug: 'catalog',
    title: 'How to Create a New Menu Item',
    description: 'Add a new item to your catalog with details like name, price, category, tax code, and images using the Enhanced Item Form.',
    steps: [
      {
        title: 'Navigate to the Catalog page',
        description: 'Click "Catalog" (labeled as "Menu Items" for restaurants, "Products" for retail, or "Services" for service businesses) in the sidebar navigation.'
      },
      {
        title: 'Click the add button',
        description: 'Click the primary button in the top-right header area. The label changes by business type: "Add Menu Item" for restaurants, "Add Product" for retail, or "Add Service" for service businesses. This opens the Enhanced Catalog Modal.'
      },
      {
        title: 'Fill in basic details',
        description: 'The form opens on the "Basic Info" tab. Enter the item Name (required), Description, SKU, and Barcode. Select the Item Type from the dropdown (e.g., menu-item, service, combo, modifier). Choose the Pricing Type (fixed is default).'
      },
      {
        title: 'Set the price',
        description: 'Enter the selling Price in AED. Optionally set the Cost Price to track profit margins. The form calculates the profit margin automatically.'
      },
      {
        title: 'Assign a category',
        description: 'Use the Category dropdown to select an existing category, or create a new one inline using the category creation option in the dropdown.'
      },
      {
        title: 'Assign a tax code',
        description: 'Select a Tax Code from the dropdown to apply the correct tax rate (e.g., VAT 5%). Tax codes must be created in the Tax Codes tab first.'
      },
      {
        title: 'Upload an image',
        description: 'In the Image section, click to upload a product image. The system generates responsive image URLs (thumbnail, mobile, tablet, desktop, original) for optimal loading across devices.'
      },
      {
        title: 'Configure business-specific fields',
        description: 'For restaurants: set Calories, Allergens (comma-separated), Preparation Time (minutes), and whether the item Requires Preparation. For services: set Duration (minutes) and Service Level.'
      },
      {
        title: 'Set the Active status',
        description: 'Toggle the Active switch to control whether the item appears in the POS catalog. Active items show a green "Active" badge; inactive items show a red "Inactive" badge.'
      },
      {
        title: 'Save the item',
        description: 'Click the "Save" or "Create" button at the bottom of the form. The item is created and appears in the items table.'
      }
    ],
    tips: [
      {
        title: 'Quick category creation',
        description: 'You can create a new category directly from the item form without navigating to the Categories tab. The CategorySelectWithCreation component allows inline category creation.'
      },
      {
        title: 'SKU auto-generation',
        description: 'If you leave the SKU field empty, the system may auto-generate one. Bulk-imported items receive SKUs starting with "BULK-".'
      },
      {
        title: 'Required fields',
        description: 'Name and Price are the minimum required fields. All other fields are optional but recommended for a complete catalog.'
      }
    ],
    relatedSlugs: ['edit-menu-item', 'manage-categories', 'upload-item-images', 'enable-disable-items'],
    featured: true
  },
  {
    slug: 'edit-menu-item',
    categorySlug: 'catalog',
    title: 'How to Edit an Existing Item',
    description: 'Modify the details of an existing catalog item including price, description, modifiers, and inventory settings.',
    steps: [
      {
        title: 'Navigate to the Catalog page',
        description: 'Click "Catalog" in the sidebar navigation. Ensure you are on the "Items" tab (shown with a box icon and label).'
      },
      {
        title: 'Find the item to edit',
        description: 'Browse the items table or use the search bar (labeled "Search items...") to find the item by name, SKU, or barcode. You can also filter by Active/Inactive status using the dropdown.'
      },
      {
        title: 'Click the "Edit" button',
        description: 'In the Actions column of the item row, click the "Edit" button (with a pencil icon). This opens the Enhanced Catalog Modal pre-filled with the item\'s current data.'
      },
      {
        title: 'Alternatively, click the item name',
        description: 'Click the item name link in the Name column to navigate to the item detail page at /catalog/[id], which shows comprehensive item information and an edit option.'
      },
      {
        title: 'Modify the desired fields',
        description: 'The edit form has multiple tabs for organising fields: Basic Info, Inventory, Modifiers (restaurant only), Variations, Kitchen, and Recipe. Navigate between tabs to find the field you want to change.'
      },
      {
        title: 'Save the changes',
        description: 'Click "Save" or "Update" to apply the changes. The items table refreshes to show the updated information.'
      }
    ],
    tips: [
      {
        title: 'Tab navigation',
        description: 'The form organises fields across tabs. Switch tabs to access Inventory settings, Modifier group assignments, Variation assignments, Kitchen station assignments, and Recipe ingredients.'
      },
      {
        title: 'Modifier assignments',
        description: 'On the Modifiers tab (restaurant only), you can assign modifier groups to the item, set item-specific price adjustments, enable/disable specific options, and mark default options.'
      }
    ],
    relatedSlugs: ['create-menu-item', 'setup-variations', 'create-modifier-groups']
  },
  {
    slug: 'manage-categories',
    categorySlug: 'catalog',
    title: 'How to Create and Manage Categories',
    description: 'Organise your catalog items into categories for easy navigation in the POS and online ordering.',
    steps: [
      {
        title: 'Navigate to the Categories tab',
        description: 'Go to Catalog and click the "Categories" tab (with a tag icon) in the tab bar. The Categories tab has 5 tabs: Items, Categories, Tax Codes, Variations, and Modifiers.'
      },
      {
        title: 'View existing categories',
        description: 'The Category Manager displays a table with columns: Name, Sort Order, Created date, and Actions (Edit, Delete). Categories are listed with their sort order for controlling display sequence.'
      },
      {
        title: 'Create a new category',
        description: 'Click the "Add Category" button. A modal opens with fields: Name (required), Parent Category (optional dropdown for sub-categories), and Sort Order (number for controlling display position).'
      },
      {
        title: 'Fill in the category details',
        description: 'Enter the category Name (e.g., "Appetizers", "Main Course", "Beverages"). Set the Sort Order to control where it appears in the POS catalog (lower numbers appear first). Optionally select a parent category for nesting.'
      },
      {
        title: 'Upload category images (after saving)',
        description: 'After saving the category, reopen it to upload a Banner Image and an Icon Image. Click the upload areas to select image files. Images are validated for size and format before uploading.'
      },
      {
        title: 'Save the category',
        description: 'Click "Save" or "Create" to create the category. It appears in the categories table immediately.'
      },
      {
        title: 'Edit or delete a category',
        description: 'Click "Edit" to modify the category name, sort order, or images. Click "Delete" to remove a category (a confirmation prompt appears).'
      }
    ],
    tips: [
      {
        title: 'Sort order matters',
        description: 'Categories appear in the POS catalog browser ordered by their Sort Order value. Use this to put your most popular categories first.'
      },
      {
        title: 'Category images for kiosk',
        description: 'Category banner and icon images are used in the self-service kiosk and QR ordering interfaces. Upload clear, attractive images for the best customer experience.'
      },
      {
        title: 'Permissions required',
        description: 'Creating categories requires the "catalog:create" permission. Editing requires "catalog:update" and deleting requires "catalog:delete".'
      }
    ],
    relatedSlugs: ['create-menu-item', 'bulk-import-items']
  },
  {
    slug: 'setup-variations',
    categorySlug: 'catalog',
    title: 'How to Set Up Variations',
    description: 'Create variation types (e.g., Size, Color) and their options (e.g., Small, Medium, Large) with price adjustments.',
    steps: [
      {
        title: 'Navigate to the Variations tab',
        description: 'Go to Catalog and click the "Variations" tab (with a shuffle icon) in the tab bar. The Variations Manager opens.'
      },
      {
        title: 'View existing variation types',
        description: 'The table shows existing variation types with columns: Name, Required (badge showing Required or Optional), Display Order, Created date, and Actions (Options, Edit, Delete).'
      },
      {
        title: 'Create a new variation type',
        description: 'Click the "Add Variation Type" button. A modal opens with fields: Name (required, e.g., "Size"), Required toggle (whether customers must select an option), and Display Order (number).'
      },
      {
        title: 'Save the variation type',
        description: 'Fill in the name and settings, then click "Save". The variation type appears in the table.'
      },
      {
        title: 'Add options to the variation type',
        description: 'Click the "Options" button in the Actions column for the variation type. An options modal opens showing existing options and a form to add new ones.'
      },
      {
        title: 'Create variation options',
        description: 'Enter the option Name (e.g., "Small", "Medium", "Large") and the Price Adjustment (e.g., 0 for Small, +2.00 for Medium, +4.00 for Large). Click "Add Option" to save. Repeat for each option.'
      },
      {
        title: 'Edit or delete options',
        description: 'Click the edit icon next to an option to modify its name or price adjustment. Click delete to remove an option. Changes are saved immediately.'
      }
    ],
    tips: [
      {
        title: 'Price adjustments',
        description: 'Price adjustments are added to or subtracted from the base item price. Use 0 for the default option and positive values for premium options.'
      },
      {
        title: 'Required vs optional',
        description: 'When a variation type is set to Required, customers must select an option before adding the item to the cart. Optional variations can be skipped.'
      },
      {
        title: 'Assign to items',
        description: 'After creating variation types and options, assign them to specific items in the item edit form under the Variations tab.'
      }
    ],
    relatedSlugs: ['create-menu-item', 'edit-menu-item', 'create-modifier-groups']
  },
  {
    slug: 'create-modifier-groups',
    categorySlug: 'catalog',
    title: 'How to Create Modifier Groups',
    description: 'Set up modifier groups (e.g., "Toppings", "Sauces") with individual options and pricing for restaurant items.',
    steps: [
      {
        title: 'Navigate to the Modifiers tab',
        description: 'Go to Catalog and click the "Modifiers" tab (with a plus icon). This tab is only visible for restaurant business types.'
      },
      {
        title: 'View existing modifier groups',
        description: 'The Modifier Group Manager displays existing groups. Each group can be expanded to show its options. Groups display their name, selection rules (min/max), and option count.'
      },
      {
        title: 'Create a new modifier group',
        description: 'Click the "Add Modifier Group" button. A modal opens with fields: Name (required, e.g., "Extra Toppings"), Min Selections (minimum options a customer must choose), Max Selections (maximum allowed), Is Required toggle, and Display Order.'
      },
      {
        title: 'Add modifier options',
        description: 'In the same form, add options for the group. Each option has: Name (e.g., "Extra Cheese", "Bacon"), Price Adjustment (the additional charge, e.g., 2.00), Is Default toggle (pre-selected in POS), and Display Order. Click the "+" button to add more option rows.'
      },
      {
        title: 'Save the modifier group',
        description: 'Click "Save" to create the group and all its options at once.'
      },
      {
        title: 'Manage options for existing groups',
        description: 'Click on a modifier group row to expand it and see its options inline. From here you can add new options, edit existing options (name and price adjustment), or delete options.'
      },
      {
        title: 'Configure option ingredients',
        description: 'For inventory tracking, click on a modifier option to assign ingredients. This links modifier options to inventory items so stock is deducted when the modifier is ordered.'
      }
    ],
    tips: [
      {
        title: 'Min and Max selections',
        description: 'Set Min Selections to 1 and Max to 1 for "choose one" groups (e.g., cooking temperature). Set Min to 0 and Max to 3 for "choose up to 3" optional groups (e.g., toppings).'
      },
      {
        title: 'Smart 86 integration',
        description: 'Modifier options are integrated with the Smart 86 system. If an ingredient runs out, affected modifier options are automatically marked as "86\'d" (unavailable) in the POS.'
      },
      {
        title: 'Restaurant-only feature',
        description: 'Modifier groups are only available for restaurant business types. Retail and service businesses do not see the Modifiers tab.'
      }
    ],
    relatedSlugs: ['setup-variations', 'create-menu-item', 'edit-menu-item']
  },
  {
    slug: 'setup-combos',
    categorySlug: 'catalog',
    title: 'How to Set Up Combo Items',
    description: 'Create combo/meal deal items using the Combo Builder, with selectable groups and fixed items.',
    steps: [
      {
        title: 'Create a new item and mark it as a combo',
        description: 'In the Catalog, click the add item button. In the form, toggle the "Is Combo" switch or select "combo" as the Item Type. This reveals the Combo Builder section in the form.'
      },
      {
        title: 'Set the combo base price',
        description: 'Enter the base price for the combo in the Price field. This is the starting price before any premium selections add their price adjustments.'
      },
      {
        title: 'Add selection groups',
        description: 'In the Combo Builder, click "Add Group" to create a selection group (e.g., "Choose Your Drink", "Choose Your Side"). Each group has a Name, Min selections (how many items the customer must pick), and Max selections.'
      },
      {
        title: 'Add items to each group',
        description: 'Click the "Add Item" button within a group to open the item picker. Search and select catalog items to include in the group. For each item, set the Price Adjustment (0 for included items, positive values for premium upgrades).'
      },
      {
        title: 'Add fixed items (always included)',
        description: 'Below the groups, use the "Fixed Items" section to add items that are always included in the combo (e.g., the main burger in a "Burger Combo"). Set the quantity for each fixed item.'
      },
      {
        title: 'Configure group rules',
        description: 'For each group, set Min and Max to control selection behavior. Min=1, Max=1 means "choose exactly one". Min=0, Max=2 means "optionally choose up to two".'
      },
      {
        title: 'Save the combo',
        description: 'Click "Save" to create the combo item. It appears in the catalog with a combo badge and can be ordered through the POS using the Combo Selection Modal.'
      }
    ],
    tips: [
      {
        title: 'No nested combos',
        description: 'Combo items cannot contain other combo items. The item picker filters out combos and ingredient-type items automatically.'
      },
      {
        title: 'Expand/collapse groups',
        description: 'Click the chevron icon next to each group header to expand or collapse the group details in the Combo Builder.'
      },
      {
        title: 'Combo stock tracking',
        description: 'Combos do not have their own stock level. Stock is tracked on the individual component items. The catalog shows "N/A (Combo)" in the Stock column for combo items.'
      }
    ],
    relatedSlugs: ['create-menu-item', 'manage-combos', 'edit-menu-item']
  },
  {
    slug: 'manage-tax-codes',
    categorySlug: 'catalog',
    title: 'How to Manage Tax Codes',
    description: 'Create, edit, and delete tax codes that are applied to catalog items for VAT and other tax calculations.',
    steps: [
      {
        title: 'Navigate to the Tax Codes tab',
        description: 'Go to Catalog and click the "Tax Codes" tab (with a money icon) in the tab bar.'
      },
      {
        title: 'View existing tax codes',
        description: 'The Tax Code Manager displays a table with columns: Code, Description, Rate (%), Created date, and Actions (Edit, Delete).'
      },
      {
        title: 'Create a new tax code',
        description: 'Click the "Add Tax Code" button. A modal opens with three fields: Code (required, up to 20 characters, e.g., "VAT5"), Description (required, e.g., "Standard VAT"), and Rate (required, 0-100, e.g., 5 for 5%).'
      },
      {
        title: 'Fill in the details and save',
        description: 'Enter the tax code, description, and rate. The system validates for duplicate codes and valid rate ranges. Click "Save" to create the tax code.'
      },
      {
        title: 'Edit or delete a tax code',
        description: 'Click "Edit" to modify the code, description, or rate. Click "Delete" to remove a tax code (confirmation required). Deleting a tax code does not retroactively affect existing orders.'
      }
    ],
    tips: [
      {
        title: 'Tax code assignment',
        description: 'Tax codes are assigned to individual items in the item creation/edit form. Each item can have one tax code applied.'
      },
      {
        title: 'Tax mode',
        description: 'The system supports both tax-inclusive (price includes tax) and tax-exclusive (tax added on top) modes. This is configured at the company level in Settings, not per tax code.'
      },
      {
        title: 'Unique codes required',
        description: 'Each tax code must have a unique code value. The system validates against duplicates when creating or editing.'
      }
    ],
    relatedSlugs: ['create-menu-item', 'edit-menu-item']
  },
  {
    slug: 'bulk-import-items',
    categorySlug: 'catalog',
    title: 'How to Bulk Import Items from CSV',
    description: 'Import multiple catalog items at once using a CSV file with the Bulk Import workflow.',
    steps: [
      {
        title: 'Navigate to the Bulk Import page',
        description: 'From the Catalog page, click the "Bulk Import" button (with an upload icon) in the top header area. This navigates to /catalog/bulk-import.'
      },
      {
        title: 'Download the CSV template',
        description: 'On the Bulk Import page, click "Download Template" to get a CSV file with the correct column headers. The template includes columns: name, price, description, sku, barcode, category, tax_code, tax_description, tax_rate, image_url, active, item_type, pricing_type, duration, calories, allergens, preparation_time, requires_preparation, is_combo, service_level, cost_price, current_stock, low_stock_alert, primary_unit, secondary_unit, discount_type, discount_value.'
      },
      {
        title: 'Prepare your CSV file',
        description: 'Fill in the template with your item data. The "name" and "price" columns are required. Other columns are optional. Save as a CSV file (max 10MB).'
      },
      {
        title: 'Upload the CSV file',
        description: 'Drag and drop your CSV file onto the upload zone, or click "Browse Files" to select it. The system accepts .csv files only.'
      },
      {
        title: 'Review the validation results',
        description: 'After upload, the system validates each row. A progress bar shows the stages: Uploading, Validating, Importing. Validation results show which rows passed, which have warnings, and which have errors.'
      },
      {
        title: 'Fix any errors',
        description: 'If validation finds errors (e.g., missing required fields, invalid data types), review the error details for each row. Fix the issues in your CSV and re-upload.'
      },
      {
        title: 'Confirm the import',
        description: 'Once validation passes, review the preview of items to be imported. Click "Confirm Import" to create all items. A progress bar shows the import status.'
      },
      {
        title: 'Review the results',
        description: 'After import, a results summary shows how many items were created successfully and any that failed. Successfully imported items appear in the catalog with SKUs starting with "BULK-".'
      }
    ],
    tips: [
      {
        title: 'Bulk import banner',
        description: 'After a successful bulk import, a blue banner appears on the Catalog page showing the count of bulk-imported items with a link to "Import more items".'
      },
      {
        title: 'Export first, then modify',
        description: 'Use the "Export CSV" button on the Catalog page to export existing items. Modify the exported file and re-import to update items in bulk.'
      },
      {
        title: 'Import permission',
        description: 'Bulk import requires the "catalog:batch:import" permission. Bulk export requires "catalog:batch:export".'
      }
    ],
    relatedSlugs: ['create-menu-item', 'manage-categories', 'upload-item-images']
  },
  {
    slug: 'upload-item-images',
    categorySlug: 'catalog',
    title: 'How to Upload Item Images',
    description: 'Add or replace product images for catalog items, with automatic responsive image generation.',
    steps: [
      {
        title: 'Open the item edit form',
        description: 'Navigate to Catalog, find the item, and click "Edit" to open the Enhanced Catalog Modal.'
      },
      {
        title: 'Find the Image Upload section',
        description: 'In the item form, locate the Item Image Upload Section. It shows the current image (if any) or a placeholder icon if no image is set.'
      },
      {
        title: 'Click to upload or drag and drop',
        description: 'Click the upload area or drag an image file onto it. Supported formats include JPEG, PNG, and WebP. The file is validated for size and format before uploading.'
      },
      {
        title: 'Wait for processing',
        description: 'The image is uploaded to the server and processed. The system generates responsive variants: thumbnail, mobile, tablet, desktop, and original resolution. A loading indicator shows during upload.'
      },
      {
        title: 'Preview the uploaded image',
        description: 'Once uploaded, the image preview updates to show the new image. The responsive URLs are saved to the item automatically.'
      },
      {
        title: 'Save the item',
        description: 'Click "Save" to confirm the changes. The image URL is also stored in the image_url field for backward compatibility.'
      }
    ],
    tips: [
      {
        title: 'Image quality',
        description: 'Upload high-resolution images for the best quality across all devices. The system handles resizing and optimization automatically.'
      },
      {
        title: 'Bulk image upload',
        description: 'For uploading images for many items at once, use the Bulk Image Upload page at /catalog/bulk-import/images.'
      },
      {
        title: 'Image URL in CSV import',
        description: 'When using CSV bulk import, you can include an image_url column with direct URLs to images hosted elsewhere.'
      }
    ],
    relatedSlugs: ['create-menu-item', 'edit-menu-item', 'bulk-import-items']
  },
  {
    slug: 'enable-disable-items',
    categorySlug: 'catalog',
    title: 'How to Enable or Disable Items',
    description: 'Control item visibility in the POS by toggling items between active and inactive status.',
    steps: [
      {
        title: 'Navigate to the Catalog page',
        description: 'Go to Catalog and ensure you are on the "Items" tab.'
      },
      {
        title: 'Use the status filter to find items',
        description: 'Use the status filter dropdown (top-right of the items section) to switch between: "Active Items Only" (default), "Inactive Items Only", or "All Items (Active & Inactive)".'
      },
      {
        title: 'Edit the item to change status',
        description: 'Click "Edit" on the item you want to enable or disable. In the item form, find the "Active" toggle switch.'
      },
      {
        title: 'Toggle the Active switch',
        description: 'Turn the Active toggle on to make the item visible in the POS catalog, or turn it off to hide it. Active items show a green "Active" badge with a green dot. Inactive items show a red "Inactive" badge with a red dot.'
      },
      {
        title: 'Save the change',
        description: 'Click "Save" to apply the status change. The item immediately becomes visible or hidden in the POS based on the new status.'
      }
    ],
    tips: [
      {
        title: 'Seasonal items',
        description: 'Use the active/inactive toggle for seasonal items. Disable items that are temporarily unavailable rather than deleting them.'
      },
      {
        title: 'Bulk status changes',
        description: 'Select multiple items using the checkboxes in the items table. Bulk actions for enabling or disabling inventory tracking appear in the blue action bar above the table.'
      },
      {
        title: '86d vs inactive',
        description: 'Items that are out of stock due to ingredient shortages are marked as "86\'d" by the Smart 86 system, which is different from being inactive. An 86\'d item is still active but temporarily unavailable.'
      }
    ],
    relatedSlugs: ['create-menu-item', 'edit-menu-item', 'track-item-inventory']
  },
  {
    slug: 'track-item-inventory',
    categorySlug: 'catalog',
    title: 'How to Track Inventory on Items',
    description: 'Enable inventory tracking on items to monitor stock levels, set low-stock alerts, and manage units of measurement.',
    steps: [
      {
        title: 'Open the item edit form',
        description: 'Navigate to Catalog, find the item, and click "Edit" to open the item form.'
      },
      {
        title: 'Navigate to the Inventory tab',
        description: 'In the item form, click the "Inventory" tab to see inventory-related settings.'
      },
      {
        title: 'Enable inventory tracking',
        description: 'Toggle the "Track Inventory" switch to on. This enables stock level monitoring for this item. When disabled, the item shows "Not Tracked" in the Stock column of the catalog table.'
      },
      {
        title: 'Set the current stock level',
        description: 'Enter the Current Stock quantity. This is the number of units currently available.'
      },
      {
        title: 'Set the low stock alert threshold',
        description: 'Enter the Low Stock Alert number (default is 5). When stock falls to or below this number, the item shows an amber "Low Stock" badge in the catalog. At zero, it shows a red "Out of Stock" badge.'
      },
      {
        title: 'Set units of measurement',
        description: 'Select the Primary Unit from the dropdown. Options include: Piece, Kilogram (kg), Gram (g), Pound (lb), Ounce (oz), Liter (l), Milliliter (ml), Box, Pack, Bottle, Can, Bag, Carton, Dozen, and Each. Optionally set a Secondary Unit for conversion tracking.'
      },
      {
        title: 'Configure branch-specific inventory (optional)',
        description: 'If you have multiple branches, enable "Branch Specific Inventory" to set different stock levels and low-stock alerts for each branch. Check the branches where this item is available and set per-branch stock levels.'
      },
      {
        title: 'Save the changes',
        description: 'Click "Save" to enable inventory tracking. The Stock column in the catalog now shows the stock level with colour-coded indicators: green for healthy stock, amber for low stock, and red for out of stock.'
      }
    ],
    tips: [
      {
        title: 'Stock column indicators',
        description: 'The catalog table Stock column shows: a green dot and number for healthy stock, an amber "Low Stock" badge when below the alert threshold, a red "Out of Stock" badge at zero, and "Not Tracked" for items without inventory tracking.'
      },
      {
        title: 'Combo items',
        description: 'Combo items show "N/A (Combo)" in the Stock column because their availability is determined by their component items, not their own stock.'
      },
      {
        title: 'Bulk inventory management',
        description: 'Select multiple items using checkboxes and use the bulk action buttons: "Disable Inventory Tracking" or "Enable Inventory Tracking" to change tracking for multiple items at once.'
      }
    ],
    relatedSlugs: ['create-menu-item', 'edit-menu-item', 'enable-disable-items']
  }
]
