import { Article } from '../types'

export const posGuides: Article[] = [
  {
    slug: 'create-dine-in-order',
    categorySlug: 'pos',
    title: 'How to Create a Dine-In Order',
    description: 'Create a new dine-in order by selecting a table, adding items from the catalog, and sending to the kitchen.',
    steps: [
      {
        title: 'Navigate to the POS screen',
        description: 'Click "POS" in the sidebar navigation. The POS screen opens with the catalog browser on the left and the cart on the right.'
      },
      {
        title: 'Select Dine-in as the order type',
        description: 'In the order type panel at the top of the cart area, click the "Dine-in" pill button. It will highlight in blue with a checkmark icon.'
      },
      {
        title: 'Select a table',
        description: 'After choosing Dine-in, a table indicator appears below the pills showing "Select a table" with a pulsing amber dot. Click it to open the Table Selection Panel. Tables are colour-coded: green for available, red for occupied. You can filter by area using the tabs, or search by table number. Click a table to select it.'
      },
      {
        title: 'Add items from the catalog',
        description: 'Browse menu items in the catalog browser on the left side. Items are organised by category. Click a category to filter, then tap an item card to add it to the cart. The item appears in the cart with quantity 1.'
      },
      {
        title: 'Adjust quantities if needed',
        description: 'In the cart, use the "+" and "-" buttons next to each item to change the quantity. You can also tap the quantity number to open a numpad for direct entry.'
      },
      {
        title: 'Send the order or proceed to payment',
        description: 'If the order has new items that are not yet sent to the kitchen, a "Send to Kitchen" or "Place Order" button appears at the bottom of the cart. Click it to create the order and fire it to the kitchen. For immediate payment, click "Checkout" instead.'
      }
    ],
    tips: [
      {
        title: 'Quick item search',
        description: 'Use the search bar at the top of the catalog browser to quickly find items by name, SKU, or barcode.'
      },
      {
        title: 'Occupied tables load existing orders',
        description: 'If you select an occupied table, its existing open order will be loaded into the cart automatically so you can add more items.'
      },
      {
        title: 'Floor plan view',
        description: 'The Table Selection Panel supports a visual floor plan view showing your table layout spatially, giving you an at-a-glance view of table status.'
      }
    ],
    relatedSlugs: ['create-takeaway-order', 'create-delivery-order', 'select-change-table', 'add-items-modify-quantities'],
    featured: true
  },
  {
    slug: 'create-takeaway-order',
    categorySlug: 'pos',
    title: 'How to Create a Takeaway Order',
    description: 'Process takeaway orders without table assignment, add items, and complete payment.',
    steps: [
      {
        title: 'Open the POS screen',
        description: 'Click "POS" in the sidebar navigation to open the point-of-sale interface.'
      },
      {
        title: 'Select Takeaway as the order type',
        description: 'In the order type panel, click the "Takeaway" pill button. It highlights in amber with a shopping bag icon and a checkmark.'
      },
      {
        title: 'Add items to the cart',
        description: 'Browse or search the catalog on the left and tap items to add them. Adjust quantities using the "+" and "-" buttons in the cart.'
      },
      {
        title: 'Optionally attach a customer',
        description: 'In the Customer section, search for an existing customer by name or phone number. Selecting a customer enables loyalty points tracking. This step is optional for takeaway orders.'
      },
      {
        title: 'Complete the order',
        description: 'Click "Checkout" at the bottom of the cart to open the Payment Modal, or use "Quick Pay" for a fast cash or card payment without the full modal.'
      }
    ],
    tips: [
      {
        title: 'No table required',
        description: 'Takeaway orders skip the table selection step entirely. The order type panel shows only the order type pill without a table indicator.'
      },
      {
        title: 'Quick Pay for speed',
        description: 'For retail and takeaway flows, the "Quick Pay" button lets you complete payment with a single tap, defaulting to the full amount in cash.'
      }
    ],
    relatedSlugs: ['create-dine-in-order', 'create-delivery-order', 'process-payment']
  },
  {
    slug: 'create-delivery-order',
    categorySlug: 'pos',
    title: 'How to Create a Delivery Order',
    description: 'Set up a delivery order with customer address, contact details, and delivery-specific information.',
    steps: [
      {
        title: 'Open the POS screen',
        description: 'Navigate to "POS" from the sidebar.'
      },
      {
        title: 'Select Delivery as the order type',
        description: 'Click the "Delivery" pill button in the order type panel. It highlights in green with a truck icon.'
      },
      {
        title: 'Fill in delivery details',
        description: 'A delivery details card appears below the order type pills with fields for delivery address, customer phone, customer name, and estimated delivery time. Fill in the required fields. The delivery pill will pulse if details are incomplete.'
      },
      {
        title: 'Add items to the cart',
        description: 'Browse the catalog and add items as usual. Adjust quantities in the cart.'
      },
      {
        title: 'Configure aggregator settings (optional)',
        description: 'If this is a third-party aggregator order (e.g., Talabat, Deliveroo, Careem, UberEats), click the gear icon next to the order type pills to open the Order Source & Aggregator Settings. When configured, a purple badge reading "Aggregator order configured" appears below the pills.'
      },
      {
        title: 'Proceed to payment',
        description: 'Click "Checkout" to open the Payment Modal and complete the transaction.'
      }
    ],
    tips: [
      {
        title: 'Delivery validation',
        description: 'The system validates that delivery address and customer information are provided before allowing checkout. Incomplete delivery data will show a pulsing indicator on the Delivery pill.'
      },
      {
        title: 'Supported aggregators',
        description: 'Till supports orders from Talabat, Careem, Deliveroo, UberEats, Zomato, Noon Food, and HungerStation as delivery sources.'
      }
    ],
    relatedSlugs: ['create-takeaway-order', 'create-dine-in-order', 'process-payment']
  },
  {
    slug: 'add-items-modify-quantities',
    categorySlug: 'pos',
    title: 'How to Add Items and Modify Quantities',
    description: 'Add items to the cart from the catalog, adjust quantities, edit prices, and add notes to individual items.',
    steps: [
      {
        title: 'Browse or search the catalog',
        description: 'The catalog browser on the left of the POS screen shows items organised by category. Click a category tab to filter. Use the search bar at the top to search items by name, SKU, or barcode.'
      },
      {
        title: 'Tap an item to add it',
        description: 'Click any item card in the catalog browser. The item is added to the cart on the right with a default quantity of 1. If the item is a combo, a Combo Selection Modal opens first (see the combo guide).'
      },
      {
        title: 'Increase or decrease quantity',
        description: 'In the cart, use the "+" button to increase quantity or the "-" button to decrease. You can also tap the quantity number directly to open a touch numpad for entering an exact quantity.'
      },
      {
        title: 'Edit item price (if allowed)',
        description: 'Tap the price displayed for a cart item to open a price numpad. Enter the new price and confirm. This is useful for variable-price items or on-the-fly adjustments.'
      },
      {
        title: 'Add a note to an item',
        description: 'Expand a cart item by tapping the expand arrow, then click the notes area. Type a special instruction (e.g., "no onions", "extra spicy") and save. The note is sent to the kitchen with the order.'
      },
      {
        title: 'Remove an item from the cart',
        description: 'Click the "-" button until the quantity reaches zero, or use the delete/trash icon next to the item to remove it from the cart entirely.'
      }
    ],
    tips: [
      {
        title: 'Quick Item Entry',
        description: 'Use the Quick Item Entry bar for rapid barcode scanning or SKU-based lookup to add items without browsing the catalog.'
      },
      {
        title: 'Custom items',
        description: 'If an item is not in the catalog, use the Custom Item option to add an ad-hoc item with a custom name and price.'
      }
    ],
    relatedSlugs: ['apply-modifiers-variations', 'manage-combos', 'create-dine-in-order']
  },
  {
    slug: 'apply-modifiers-variations',
    categorySlug: 'pos',
    title: 'How to Apply Modifiers and Variations',
    description: 'Select item variations (e.g., size) and modifiers (e.g., extra toppings) when adding items to the cart.',
    steps: [
      {
        title: 'Add an item that has modifiers or variations',
        description: 'When you tap an item in the catalog that has configured modifiers or variations, the Modifier Panel opens automatically as a slide-in panel on the right side of the screen.'
      },
      {
        title: 'Select a variation (if available)',
        description: 'If the item has variation types (e.g., Size: Small, Medium, Large), select one option from each variation group. Required variation groups must be completed before proceeding. Price adjustments are shown next to each option.'
      },
      {
        title: 'Choose modifiers',
        description: 'Modifier groups appear below variations. Each group shows available options with their price adjustments (e.g., "+AED 2.00"). Select options according to the group rules - some groups allow single selection, others allow multiple. Required groups show a minimum selection count.'
      },
      {
        title: 'Confirm selections',
        description: 'Once all required selections are made, click the "Add to Cart" or "Confirm" button at the bottom of the Modifier Panel. The item is added to the cart with all selected modifiers and variations, and the total price is adjusted accordingly.'
      },
      {
        title: 'View modifiers in the cart',
        description: 'In the cart, items with modifiers show the selected options listed below the item name in smaller text. Each modifier and its price adjustment are visible.'
      }
    ],
    tips: [
      {
        title: 'Default modifiers',
        description: 'Some modifier options may be pre-selected as defaults. You can change these before confirming.'
      },
      {
        title: 'Price adjustments',
        description: 'The modifier panel shows a running total as you make selections, so you can see the final price before adding to cart.'
      }
    ],
    relatedSlugs: ['add-items-modify-quantities', 'manage-combos', 'create-modifier-groups']
  },
  {
    slug: 'apply-discounts',
    categorySlug: 'pos',
    title: 'How to Apply Discounts in the POS',
    description: 'Apply order-level and item-level discounts to the current cart using the Comprehensive Discount Manager.',
    steps: [
      {
        title: 'Open the Discount Manager',
        description: 'In the cart area, click the discount button in the cart action bar. This opens the Comprehensive Discount Manager modal showing all available discounts.'
      },
      {
        title: 'Browse available discounts',
        description: 'The discount manager shows two sections: "Order Discounts" that apply to the entire order total, and "Item Discounts" that apply to specific items. Each discount shows its name, type (percentage, fixed, BOGO, tiered), value, and any conditions like minimum order amount.'
      },
      {
        title: 'Apply an order-level discount',
        description: 'Under the Order Discounts section, click the "Apply" button next to the desired discount. The discount code is added and the cart total updates immediately. Applied discounts show a green "Applied" badge.'
      },
      {
        title: 'Apply an item-level discount',
        description: 'Under the Item Discounts section, click "Apply" next to a discount. If it applies to specific items, an item selection modal appears where you can check the items to include. Confirm your selection to apply the discount.'
      },
      {
        title: 'Remove a discount',
        description: 'To remove an applied discount, click the "Remove" button next to it in the discount manager, or remove the discount badge directly from the cart summary area.'
      }
    ],
    tips: [
      {
        title: 'Auto-apply discounts',
        description: 'Some discounts are configured to auto-apply when conditions are met. These will show as suggestions in the discount banner.'
      },
      {
        title: 'Discount suggestions',
        description: 'The system may show a Discount Suggestions Banner when cart items qualify for available promotions. These are calculated by the suggestions API in real time.'
      },
      {
        title: 'BOGO discounts',
        description: 'Buy-one-get-one (BOGO) discounts automatically calculate the free item based on cart contents when applied.'
      }
    ],
    relatedSlugs: ['process-payment', 'add-items-modify-quantities']
  },
  {
    slug: 'process-payment',
    categorySlug: 'pos',
    title: 'How to Process a Payment',
    description: 'Complete an order by processing cash, card, or split payments through the Payment Modal.',
    steps: [
      {
        title: 'Click "Checkout" in the cart',
        description: 'When the cart has items and you are ready to collect payment, click the "Checkout" button at the bottom of the cart display. This opens the Payment Modal.'
      },
      {
        title: 'Review the order summary',
        description: 'The Payment Modal displays the order subtotal, tax amount (VAT), any applied discounts, tip amount, and the final total due. Verify the amounts are correct.'
      },
      {
        title: 'Select a payment method',
        description: 'Choose from the available payment methods: Cash (with a banknote icon), Card (with a credit card icon), or Split (Cash + Card). Click the corresponding payment card to select it.'
      },
      {
        title: 'For cash payment: enter amount received',
        description: 'When Cash is selected, enter the cash amount received from the customer in the input field. The system automatically calculates and displays the change due below the input.'
      },
      {
        title: 'For card payment: process the transaction',
        description: 'When Card is selected, the system shows the total amount to charge. If SmartPay terminal integration is enabled, a Terminal Payment Modal opens to process the card through the connected terminal. Otherwise, confirm the card payment manually.'
      },
      {
        title: 'Complete the payment',
        description: 'Click the "Complete Payment" or "Pay" button to finalize the transaction. The system creates the order (if not already created), records the payment, and shows a success screen with the order number and payment details.'
      },
      {
        title: 'Receipt prints automatically',
        description: 'After successful payment, a receipt is automatically generated. On Android devices with connected printers, it is sent directly to the thermal printer. On desktop, the browser print dialog opens. A kitchen slip is also printed if auto-print settings are enabled.'
      }
    ],
    tips: [
      {
        title: 'Add a tip before payment',
        description: 'Click the tip area in the Payment Modal to open the Tip Modal. You can enter a custom tip amount or select from percentage presets.'
      },
      {
        title: 'Cash drawer opens automatically',
        description: 'For cash payments, the connected cash drawer opens automatically via QZ Tray integration when the payment is completed.'
      },
      {
        title: 'Held courses warning',
        description: 'If coursing is enabled and there are unfired courses, a warning appears before payment reminding you to fire all courses first.'
      }
    ],
    relatedSlugs: ['process-split-payment', 'quick-pay', 'print-receipt'],
    featured: true
  },
  {
    slug: 'process-split-payment',
    categorySlug: 'pos',
    title: 'How to Process a Split Payment',
    description: 'Split an order payment between multiple people using equal split or item-based assignment.',
    steps: [
      {
        title: 'Open the Payment Modal',
        description: 'Click "Checkout" in the cart to open the Payment Modal.'
      },
      {
        title: 'Select the Split payment option',
        description: 'Click the "Split" payment card (shown with a split square icon). This opens the Split Payment Modal.'
      },
      {
        title: 'Choose a split method',
        description: 'The Split Payment Modal offers two methods: "Equal Split" to divide the total evenly among a number of people, or "Items" to assign specific items to different paying guests.'
      },
      {
        title: 'For equal split: set the number of people',
        description: 'Enter the number of people sharing the bill using the number input. The modal shows the per-person amount calculated from the order total. Adjust as needed.'
      },
      {
        title: 'For item-based split: assign items to guests',
        description: 'In the Items view, each order line is shown with assignment controls. Assign items to different guests/portions. The Item Split Assignment component shows which items belong to each person.'
      },
      {
        title: 'Process each split portion',
        description: 'Each portion can be paid independently with cash or card. The Split Payment Status tracker shows which portions are paid and which are pending.'
      },
      {
        title: 'Complete the split',
        description: 'Once all portions are paid, the order is marked as completed. The Split Payment Status confirms all portions are settled.'
      }
    ],
    tips: [
      {
        title: 'Mixed cash + card',
        description: 'For a simple cash-and-card split (not per-person), use the Mixed Payment Form available from the Payment Modal. Enter the cash amount and card amount separately.'
      },
      {
        title: 'Existing split detection',
        description: 'If an order already has a split payment in progress, the Existing Split Dialog appears asking whether to resume the existing split or start fresh.'
      },
      {
        title: 'Voided items excluded',
        description: 'Voided items are automatically excluded from split payment calculations. Only active order lines are included.'
      }
    ],
    relatedSlugs: ['process-payment', 'quick-pay']
  },
  {
    slug: 'quick-pay',
    categorySlug: 'pos',
    title: 'How to Use Quick Pay',
    description: 'Complete a fast payment using the Quick Pay dialog for rapid checkout without the full Payment Modal.',
    steps: [
      {
        title: 'Ensure items are in the cart',
        description: 'Add one or more items to the POS cart. The Quick Pay option is available when there are items ready for payment.'
      },
      {
        title: 'Click the "Quick Pay" button',
        description: 'Click the "Quick Pay" button in the cart action bar. This opens the Quick Pay Dialog, a streamlined payment interface.'
      },
      {
        title: 'Select payment type',
        description: 'The Quick Pay Dialog shows three options: Cash (with Banknote icon), Card (with CreditCard icon), and Split. Cash is selected by default.'
      },
      {
        title: 'For cash: confirm or enter amount',
        description: 'The cash received field is pre-filled with the order total. Adjust if the customer is paying with a larger denomination. The change due is calculated automatically.'
      },
      {
        title: 'For card: confirm the amount',
        description: 'Card payment shows the total to charge. Click confirm to process.'
      },
      {
        title: 'Click confirm to complete',
        description: 'Click the confirm button to process the payment. The order is created, payment is recorded, and the cart is cleared for the next customer.'
      }
    ],
    tips: [
      {
        title: 'Designed for speed',
        description: 'Quick Pay is optimised for high-volume environments like retail and quick-service restaurants where customers pay immediately.'
      },
      {
        title: 'Split in Quick Pay',
        description: 'The Quick Pay dialog supports split payments. When Split is selected, enter the cash amount and the card amount is calculated as the remainder.'
      }
    ],
    relatedSlugs: ['process-payment', 'process-split-payment']
  },
  {
    slug: 'void-order',
    categorySlug: 'pos',
    title: 'How to Void an Order',
    description: 'Cancel an entire order by voiding it with a required reason. This action is permanent and cannot be reversed.',
    steps: [
      {
        title: 'Open the order to void',
        description: 'The order must be loaded as the active order in the POS cart, or navigate to the order detail page via Orders > click the order number.'
      },
      {
        title: 'Click the "Void Order" button',
        description: 'In the POS cart, click the "Void Order" button in the action bar (visible when there is an active order and you have void permissions). On the order detail page, click the "Void Order" button in the header area.'
      },
      {
        title: 'Review the warning',
        description: 'The Void Order modal opens with a red warning: "This action cannot be undone. The order will be marked as voided and removed from active orders." The order number and total amount are displayed.'
      },
      {
        title: 'Enter a reason for voiding',
        description: 'Type a reason in the "Reason for Voiding" input field. This is required and must be at least 3 characters. Examples are shown as placeholder text: "Customer requested cancellation, Wrong order entered..."'
      },
      {
        title: 'Confirm the void',
        description: 'Click the "Void Order" button (red) to confirm. The order status changes to "Voided" and a void slip is automatically printed to the kitchen if auto-print-on-void is enabled in kitchen slip settings.'
      }
    ],
    tips: [
      {
        title: 'Permission required',
        description: 'Voiding an order requires the "orders:void" permission. Device settings can also restrict voiding. If you cannot see the Void Order button, contact your manager.'
      },
      {
        title: 'Void individual items instead',
        description: 'If only one item needs to be removed, consider voiding the specific item rather than the entire order. This preserves the rest of the order.'
      }
    ],
    relatedSlugs: ['void-item', 'manage-open-orders']
  },
  {
    slug: 'void-item',
    categorySlug: 'pos',
    title: 'How to Void an Individual Item',
    description: 'Remove a specific item from an active order by voiding it. The item is marked as waste and its cost is excluded from the order total.',
    steps: [
      {
        title: 'Open the order containing the item',
        description: 'Load the order in the POS or navigate to the order detail page via Orders > click the order number.'
      },
      {
        title: 'Click the void icon on the item',
        description: 'In the cart or order detail view, find the item to void and click the void/trash icon next to it. This opens the Void Item modal.'
      },
      {
        title: 'Review the item details',
        description: 'The Void Item modal shows the item name, quantity, and price. A warning states: "This action cannot be undone. The item will be marked as voided and counted as waste."'
      },
      {
        title: 'Enter a void reason',
        description: 'Type a reason in the "Reason for Voiding" input field. Minimum 3 characters required.'
      },
      {
        title: 'Confirm the void',
        description: 'Click "Void Item" to confirm. The item is marked as voided, the order total is recalculated, and a void slip is printed if configured.'
      }
    ],
    tips: [
      {
        title: 'Voided items remain visible',
        description: 'Voided items stay visible in the order with a strikethrough or voided badge, but are excluded from the order total and payment calculations.'
      },
      {
        title: 'Item void permission',
        description: 'Voiding individual items requires the appropriate permission. The void button only appears if you have the "canVoidItems" capability enabled.'
      }
    ],
    relatedSlugs: ['void-order', 'add-items-modify-quantities']
  },
  {
    slug: 'select-change-table',
    categorySlug: 'pos',
    title: 'How to Select or Change a Table',
    description: 'Assign a table to a dine-in order, or change the assigned table during the order.',
    steps: [
      {
        title: 'Set the order type to Dine-in',
        description: 'In the order type panel, select "Dine-in". A table indicator appears below showing "Select a table" if none is assigned.'
      },
      {
        title: 'Open the Table Selection Panel',
        description: 'Click the table indicator or the table button in the POS header. The Table Selection Panel opens as a modal with all tables for your branch.'
      },
      {
        title: 'Browse tables by area',
        description: 'Tables are organised by floor/area. Use the tabs at the top to switch between areas. The "All" tab shows every table. You can also search by table number using the search bar.'
      },
      {
        title: 'Check table status',
        description: 'Each table shows its status: green for available, occupied tables show the current order count and time since the order was placed. The number of seats (capacity) and current guest count are also displayed.'
      },
      {
        title: 'Select a table',
        description: 'Click on an available table to select it. If you click an occupied table, the system offers to load the existing order from that table into the POS cart.'
      },
      {
        title: 'Change the table later',
        description: 'To change the table after it is assigned, click the table number displayed in the POS header. This reopens the Table Selection Panel where you can pick a different table.'
      }
    ],
    tips: [
      {
        title: 'Table recommendations',
        description: 'The Table Selection Panel can suggest the best table based on party size using the recommendation feature. Enter the number of guests to get AI-suggested table assignments.'
      },
      {
        title: 'Auto-refresh',
        description: 'Table status data refreshes automatically when the Table Selection Panel opens, ensuring you see real-time availability.'
      },
      {
        title: 'Skip table selection',
        description: 'You can click "Skip" to create a dine-in order without assigning a table. The table can be assigned later.'
      }
    ],
    relatedSlugs: ['transfer-table', 'create-dine-in-order', 'manage-open-orders']
  },
  {
    slug: 'transfer-table',
    categorySlug: 'pos',
    title: 'How to Transfer an Order to Another Table',
    description: 'Move an active dine-in order from one table to another, or transfer specific items to a different table.',
    steps: [
      {
        title: 'Open the order on its current table',
        description: 'Load the active dine-in order in the POS. The current table is shown in the POS header.'
      },
      {
        title: 'Click the "Transfer" button',
        description: 'In the POS header, next to the table number, click the "Transfer" button. This opens the Table Transfer Modal.'
      },
      {
        title: 'Choose transfer mode',
        description: 'The Table Transfer Modal offers two modes: "Entire Order" to move everything to a new table, or "Specific Items" to transfer individual items to another table\'s order.'
      },
      {
        title: 'Select the destination table',
        description: 'For entire order transfers, available and reserved tables are shown. For item transfers, occupied tables with existing orders are shown. Click to select the target table.'
      },
      {
        title: 'For item transfer: select items to move',
        description: 'In Specific Items mode, check the boxes next to the items you want to transfer. Combo items are transferred as a group with their components. Optionally check "Void source order if empty" to clean up after transfer.'
      },
      {
        title: 'Add a transfer reason (optional)',
        description: 'Enter a reason for the transfer in the notes field, such as "Customer moved to larger table".'
      },
      {
        title: 'Confirm the transfer',
        description: 'Click "Transfer Order" or "Transfer Items" to complete the move. The order is reassigned to the new table and the POS updates to reflect the change.'
      }
    ],
    tips: [
      {
        title: 'Permission required',
        description: 'Table transfers require the "tables:manage-orders" permission. The Transfer button only appears if you have this permission and table transfers are enabled for the business.'
      },
      {
        title: 'Kitchen notification',
        description: 'The kitchen display is updated when a table transfer occurs, so kitchen staff see the new table number for the order.'
      }
    ],
    relatedSlugs: ['select-change-table', 'manage-open-orders']
  },
  {
    slug: 'manage-open-orders',
    categorySlug: 'pos',
    title: 'How to Manage Open Orders',
    description: 'View, search, and load open orders from the Open Orders modal to resume or complete them in the POS.',
    steps: [
      {
        title: 'Open the Open Orders modal',
        description: 'In the POS header area, click the "Open Orders" button. This opens the Open Orders Modal showing all orders with status "open" for your branch.'
      },
      {
        title: 'Browse or search orders',
        description: 'The modal lists all open orders as cards. Use the search bar at the top to filter by order number, table number, customer name, staff name, or total amount.'
      },
      {
        title: 'Review order details',
        description: 'Each order card shows the order number, creation time (e.g., "15m ago"), table number (with a MapPin icon), customer name (with a Users icon), item count badge, and the order total.'
      },
      {
        title: 'Load an order into the POS',
        description: 'Click on an order card to load it into the POS cart. The modal closes, and the order\'s items, table assignment, and customer are loaded. A toast notification confirms "Loaded order [order number]".'
      },
      {
        title: 'Continue working with the order',
        description: 'Once loaded, you can add more items, apply discounts, or proceed to payment. New items are tracked separately from previously sent items.'
      }
    ],
    tips: [
      {
        title: 'Auto-refresh',
        description: 'The Open Orders modal automatically refreshes every 30 seconds while it is open, ensuring you see the latest orders.'
      },
      {
        title: 'Load from URL',
        description: 'Orders can also be loaded directly via URL parameter. From the Orders page, clicking "Complete" on an open order navigates to /pos?load_order=[id].'
      }
    ],
    relatedSlugs: ['create-dine-in-order', 'process-payment', 'void-order']
  },
  {
    slug: 'print-receipt',
    categorySlug: 'pos',
    title: 'How to Print Receipts and Kitchen Slips',
    description: 'Print customer receipts after payment and kitchen order tickets (KOT) for food preparation.',
    steps: [
      {
        title: 'Automatic receipt after payment',
        description: 'When a payment is completed in the Payment Modal, a receipt is automatically generated and sent to the configured printer. On Android devices, it is routed to the thermal printer via the Android Print Service. On desktop browsers, the browser print dialog opens.'
      },
      {
        title: 'Reprint a receipt from the Orders page',
        description: 'Navigate to "Orders" in the sidebar. Find the completed order and click the "Reprint" button (with a Printer icon) in the Actions column. The receipt is regenerated with full order details including payment information.'
      },
      {
        title: 'Print a kitchen slip',
        description: 'From the Orders page, click the "Kitchen Slip" button (orange, with a ChefHat icon) next to an open or completed order. The kitchen slip includes order items, modifications, table number, and server name.'
      },
      {
        title: 'Print a pre-payment bill',
        description: 'In the POS cart, use the "Print Bill" button to generate a pre-payment bill for the customer to review before paying. This is useful for dine-in orders where customers request to see the bill.'
      },
      {
        title: 'Auto-print kitchen slips on order',
        description: 'When auto-print is enabled in kitchen slip settings, a KOT (Kitchen Order Ticket) is automatically sent to the kitchen printer when an order is placed or updated with new items.'
      }
    ],
    tips: [
      {
        title: 'Printer setup',
        description: 'Receipt and kitchen slip printing requires either QZ Tray integration for desktop or a compatible thermal printer on Android. Configure printer settings in Settings > Printer Settings.'
      },
      {
        title: 'Cart bill locking',
        description: 'When a pre-payment bill is printed, the cart is locked to prevent modifications. This ensures the bill matches the final order. Managers can unlock the cart if changes are needed.'
      }
    ],
    relatedSlugs: ['process-payment', 'manage-open-orders']
  },
  {
    slug: 'manage-combos',
    categorySlug: 'pos',
    title: 'How to Add and Manage Combos in the POS',
    description: 'Order combo meals by selecting required and optional items from combo groups using the Combo Selection Modal.',
    steps: [
      {
        title: 'Find a combo item in the catalog',
        description: 'Combo items are displayed in the catalog with a combo/package icon. They appear alongside regular items in their assigned category.'
      },
      {
        title: 'Tap the combo to open the selection modal',
        description: 'When you click a combo item, the Combo Selection Modal opens instead of adding the item directly. This modal shows the combo details, base price, and all available selection groups.'
      },
      {
        title: 'Select items from each group',
        description: 'Each combo group has a name (e.g., "Choose Your Drink", "Choose Your Side"), minimum and maximum selections, and a list of available items. Required groups must be completed. Items may have price adjustments shown next to them (e.g., "+AED 3.00" for a premium option).'
      },
      {
        title: 'Review fixed items',
        description: 'Some combos include fixed items that are always included (e.g., a burger is always part of the Burger Combo). These are shown separately and cannot be changed.'
      },
      {
        title: 'Set the quantity',
        description: 'Use the "+" and "-" buttons at the bottom of the modal to set the combo quantity before adding to cart.'
      },
      {
        title: 'Confirm and add to cart',
        description: 'Click the confirmation button at the bottom showing the calculated total price (base price + any price adjustments from selections). The combo is added to the cart with all selected items visible as sub-items.'
      }
    ],
    tips: [
      {
        title: 'Price adjustments',
        description: 'The modal shows a running total as you make selections, including any price adjustments from premium choices in the combo groups.'
      },
      {
        title: 'Menu-aware pricing',
        description: 'If menu-based pricing is active, the combo base price may differ from the catalog price, reflecting time-of-day or special menu pricing.'
      }
    ],
    relatedSlugs: ['add-items-modify-quantities', 'apply-modifiers-variations', 'setup-combos']
  }
]
