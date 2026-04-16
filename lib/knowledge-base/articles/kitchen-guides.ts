import { Article } from '../types'

export const kitchenGuides: Article[] = [
  {
    slug: 'viewing-kitchen-queue',
    categorySlug: 'kitchen',
    title: 'Viewing the Kitchen Queue',
    description: 'Learn how to view and navigate the Kitchen Display System (KDS) to monitor incoming orders and item statuses.',
    steps: [
      {
        title: 'Open the Kitchen Display',
        description: 'Click "Kitchen Display" in the sidebar navigation under the restaurant section. The KDS opens as a full-screen dark interface with a header bar showing "KITCHEN STATION" in green alongside your branch name.'
      },
      {
        title: 'Check connection status',
        description: 'In the header bar, verify the connection indicators. A green "Connected" badge with a Wifi icon confirms the API connection is active. A purple pulsing "Live" badge with a Radio icon confirms real-time Socket.IO updates are active. If you see "Polling" instead of "Live", the system is using periodic refreshes.'
      },
      {
        title: 'View order tickets',
        description: 'The main display area shows order tickets grouped by order. Each ticket displays the order number, table number (if applicable), item names, quantities, modifiers, and elapsed time since the order was placed. Items are color-coded by status: pending items appear in the default state, cooking items are highlighted in blue, and ready items are highlighted in green.'
      },
      {
        title: 'Filter by station',
        description: 'Use the station tabs at the top of the KDS display to filter items by kitchen station (e.g., Grill Station, Prep Station, Fryer Station). Click "All" to see orders across all stations.'
      },
      {
        title: 'Filter by device',
        description: 'Click the "All Devices" / "My Device" toggle button with the Monitor icon in the header to switch between viewing orders from all devices or only orders created from the current device.'
      },
      {
        title: 'Filter by course',
        description: 'If your menu uses courses, use the course filter buttons to show only items from a specific course (e.g., Starters, Mains). Course filters appear as colored buttons derived from your course configuration.'
      },
      {
        title: 'View past orders',
        description: 'Click the History icon button to toggle "Past Orders" mode, which shows served/completed items instead of active queue items. Click it again to return to the live queue.'
      },
      {
        title: 'Toggle audio notifications',
        description: 'Click the speaker icon (Volume2 or VolumeX) in the KDS toolbar to enable or disable audio alerts. When enabled, a sound plays each time a new order appears in the kitchen queue.'
      }
    ],
    tips: [
      {
        title: 'Fullscreen mode',
        description: 'Press F11 or click the Maximize2 icon in the top-right corner to enter fullscreen mode. This hides the keyboard hints and maximizes the display area for dedicated kitchen screens.'
      },
      {
        title: 'Quick refresh',
        description: 'Press F5 to manually refresh the kitchen display if you suspect data is stale. The KDS also auto-refreshes on a polling interval.'
      },
      {
        title: 'Active session required',
        description: 'The Kitchen Display requires an active daily session for the selected branch. If no session is active, you will see a "Session Required" message with a "Start Session" button that redirects to Shift Management.'
      }
    ],
    relatedSlugs: ['marking-items-ready', 'setting-up-kitchen-stations', 'order-priority-management'],
    featured: true
  },
  {
    slug: 'marking-items-ready',
    categorySlug: 'kitchen',
    title: 'Marking Items Ready and Completed',
    description: 'Learn how to update item statuses in the Kitchen Display System by starting cooking, marking items ready, and marking them as served.',
    steps: [
      {
        title: 'Select items to update',
        description: 'In the KDS display, click on individual items within an order ticket to select them. Selected items are highlighted with a checkbox. You can select multiple items across different orders.'
      },
      {
        title: 'Use the bulk action bar',
        description: 'When items are selected, a sticky action bar appears at the top showing the count of selected items (e.g., "3 items selected"). The bar includes action buttons: "Start Cooking" (blue, with Play icon), "Mark Ready" (green, with CheckCircle icon), "Mark Served" (gray, with Truck icon), and "Priority" (orange outline, with AlertTriangle icon).'
      },
      {
        title: 'Start cooking an item',
        description: 'Click "Start Cooking" to move selected pending items to the "cooking" status. This signals to the team that preparation has begun. The item will change its visual indicator on the ticket. This action requires the "kitchen:workflow:start-cooking" permission.'
      },
      {
        title: 'Mark items as ready',
        description: 'Click "Mark Ready" to indicate that selected items are ready for pickup or serving. Items move to the "ready" status and change their visual indicator to green. This action requires the "kitchen:workflow:mark-ready" permission.'
      },
      {
        title: 'Mark items as served',
        description: 'Click "Mark Served" to complete the item lifecycle. Items move to the "served" status and are removed from the active queue display. This action requires the "kitchen:status:update" permission.'
      },
      {
        title: 'Clear selection',
        description: 'Click "Clear" (with X icon) in the action bar to deselect all items and dismiss the bulk action bar.'
      },
      {
        title: 'Revert item status',
        description: 'The KDS supports reverting items to a previous status. You can revert a cooking item back to pending, revert a ready item back to cooking, or revert a served item back to ready. Use the appropriate revert action on individual items from the ticket context options.'
      }
    ],
    tips: [
      {
        title: 'Permission-based buttons',
        description: 'Action buttons only appear if you have the required permissions. If you cannot see "Start Cooking" or "Mark Ready" buttons, ask your manager to grant the appropriate kitchen workflow permissions for your role.'
      },
      {
        title: 'Urgency indicators',
        description: 'Items that have been waiting too long will pulse with a red animation to indicate urgency. Prioritize these items to maintain service quality.'
      }
    ],
    relatedSlugs: ['viewing-kitchen-queue', 'order-priority-management']
  },
  {
    slug: 'setting-up-kitchen-stations',
    categorySlug: 'kitchen',
    title: 'Setting Up Kitchen Stations',
    description: 'Create and configure kitchen stations to organize your kitchen workflow by food preparation areas.',
    steps: [
      {
        title: 'Navigate to Kitchen Management',
        description: 'From the KDS display, click the Settings (gear) icon in the top-right corner of the header bar. This navigates to the Kitchen Management page at /kitchen/management. You can also access it by clicking the "View Kitchen Display" button on the management page to go back.'
      },
      {
        title: 'Review station overview',
        description: 'The Kitchen Management page shows four summary cards at the top: "Total Stations" (with Settings icon), "Active Stations" (green, with CheckCircle icon), "Total Workload" (orange, with BarChart3 icon showing active items across all stations), and "High Load Stations" (red, with AlertCircle icon showing stations with more than 10 active items).'
      },
      {
        title: 'Click "Add Station"',
        description: 'Click the "Add Station" button (with Plus icon) in the top-right header area. This button is only visible if you have the "kitchen:stations:create" permission. A "Create Kitchen Station" modal will appear.'
      },
      {
        title: 'Fill in station details',
        description: 'In the Create Kitchen Station modal, fill in the required fields: "Station Name" (text input with placeholder "e.g., Main Grill, Salad Prep"), "Station Type" (dropdown with options: Prep Station, Grill Station, Fryer Station, Salad/Cold Station, Dessert Station, Expo/Final Station), "Display Color" (color picker that auto-selects based on station type), and "Display Order" (number from 1-10 controlling the station sort position).'
      },
      {
        title: 'Create the station',
        description: 'Click "Create Station" to save. A success toast "Kitchen station created successfully" will appear and the station list will refresh automatically. Click "Cancel" to discard changes.'
      },
      {
        title: 'View station cards',
        description: 'Each station appears as a card showing the station name, type (e.g., "grill Station"), an Active/Inactive badge, display order, display color, and a workload bar with three metrics: Pending items, Cooking items, and Total active items. A capacity percentage bar shows load as a proportion of 20 items maximum.'
      }
    ],
    tips: [
      {
        title: 'Station types and colors',
        description: 'Each station type has a default color: prep (purple), grill (red/orange), fryer (yellow), salad/cold (green), dessert (pink), and expo (blue). You can customize the color using the color picker.'
      },
      {
        title: 'High workload alerts',
        description: 'Station cards with more than 10 active items display a warning ring (orange border) to alert you of potential bottlenecks.'
      }
    ],
    relatedSlugs: ['editing-kitchen-stations', 'viewing-kitchen-queue']
  },
  {
    slug: 'editing-kitchen-stations',
    categorySlug: 'kitchen',
    title: 'Editing and Deleting Kitchen Stations',
    description: 'Modify existing kitchen station settings or remove stations that are no longer needed.',
    steps: [
      {
        title: 'Navigate to Kitchen Management',
        description: 'Go to the Kitchen Management page by clicking the Settings icon on the KDS display header, or navigate to /kitchen/management directly.'
      },
      {
        title: 'Click the Edit button',
        description: 'On the station card you want to modify, click the Edit button (pencil icon) in the top-right corner of the card. This button is visible if you have the "kitchen:stations:update" permission. An "Edit Kitchen Station" modal will open.'
      },
      {
        title: 'Update station details',
        description: 'In the Edit Kitchen Station modal, modify any of the following fields: "Station Name", "Station Type" (Prep, Grill, Fryer, Salad/Cold, Dessert, Expo/Final), "Display Color", "Display Order" (1-10), and "Station is active" (checkbox to enable or disable the station).'
      },
      {
        title: 'Save changes',
        description: 'Click "Update Station" to apply your changes. A success toast "Kitchen station updated successfully" will appear. Click "Cancel" to discard changes.'
      },
      {
        title: 'Delete a station',
        description: 'Click the Delete button (Trash2 icon, red text) on the station card. A confirmation dialog will ask "Are you sure you want to delete this station? This action will soft-delete the station." Click the confirm button to proceed. This button requires the "kitchen:stations:delete" permission.'
      }
    ],
    tips: [
      {
        title: 'Soft delete',
        description: 'Deleting a station is a soft delete, meaning the station data is preserved and can potentially be restored. Items previously assigned to a deleted station will need to be reassigned.'
      },
      {
        title: 'Deactivate instead of delete',
        description: 'If you only need to temporarily remove a station from the workflow, uncheck the "Station is active" checkbox in the edit modal instead of deleting it.'
      }
    ],
    relatedSlugs: ['setting-up-kitchen-stations', 'viewing-kitchen-queue']
  },
  {
    slug: 'kitchen-device-display',
    categorySlug: 'kitchen',
    title: 'Using the Device-Specific Kitchen Display',
    description: 'Filter the kitchen display to show only orders from a specific device or terminal.',
    steps: [
      {
        title: 'Navigate to Device Kitchen Display',
        description: 'Go to /kitchen/device in the dashboard. This page opens the "Device Kitchen Display" with a purple gradient header showing a Smartphone icon and the title "Device Kitchen Display" with the subtitle "Filtered by Current Device - Real-time Updates".'
      },
      {
        title: 'Check device detection',
        description: 'The display automatically detects the current device ID from browser storage. If a device is detected, a purple badge shows "Device: [device-id]..." alongside the branch name badge. If no device is detected, a yellow warning card appears: "No Device ID Found — Showing all orders. To filter by device, please register this device in POS settings."'
      },
      {
        title: 'View filtered orders',
        description: 'When a device ID is detected, the kitchen queue display shows only orders created from that specific terminal. The footer displays "Showing orders from device: [device-id]...".'
      },
      {
        title: 'Switch to all orders view',
        description: 'Click the "All Orders" button (with Monitor icon) in the top-right corner to navigate to the main KDS display at /kitchen, which shows orders from all devices.'
      },
      {
        title: 'Refresh the display',
        description: 'Click the Refresh button (RefreshCw icon) in the top-right corner to reload the page and fetch the latest orders.'
      }
    ],
    tips: [
      {
        title: 'Device registration required',
        description: 'The device filter only works if the current browser/device has been registered through POS device settings. Without a registered device ID, all orders will be shown.'
      },
      {
        title: 'Use for dedicated prep stations',
        description: 'This view is ideal for individual prep stations that only need to see orders from a specific terminal, reducing clutter on the display.'
      }
    ],
    relatedSlugs: ['viewing-kitchen-queue', 'marking-items-ready']
  },
  {
    slug: 'order-priority-management',
    categorySlug: 'kitchen',
    title: 'Managing Order Priority in the Kitchen',
    description: 'Set priority levels on kitchen queue items to expedite urgent orders.',
    steps: [
      {
        title: 'Open Priority Management',
        description: 'From the Kitchen Management page (/kitchen/management), click the "Manage Priorities" button (with Target icon) in the header area. A "Priority Management" modal will open showing all current queue items.'
      },
      {
        title: 'Refresh the queue list',
        description: 'Click the "Refresh" button (with RefreshCw icon) in the top-right of the modal to reload the latest queue items.'
      },
      {
        title: 'Select items to prioritize',
        description: 'Click on items in the queue list to select them. Each item shows the item name, order number, station name, current priority badge (Low in green, Medium in yellow, or High in red), and elapsed time in minutes. Selected items are highlighted with a blue border and checkbox.'
      },
      {
        title: 'Choose a priority level',
        description: 'From the "Set Priority Level" dropdown, select the desired priority: "Low Priority" (level 1), "Medium Priority" (level 2), or "High Priority" (level 3).'
      },
      {
        title: 'Apply the priority',
        description: 'Click the "Set Priority" button (with Target icon). The button shows the count of selected items in parentheses (e.g., "Set Priority (3)"). A success toast confirms "Priority updated for X items" and the list refreshes automatically.'
      },
      {
        title: 'Close the modal',
        description: 'Click "Close" to dismiss the Priority Management modal and return to the Kitchen Management page.'
      }
    ],
    tips: [
      {
        title: 'High priority visual cue',
        description: 'High-priority items in the KDS display will pulse with an urgency animation (red glow effect) to draw immediate attention from kitchen staff.'
      },
      {
        title: 'Permission required',
        description: 'Setting priorities requires the "kitchen:workflow:set-priority" permission. Contact your manager if you need access to this feature.'
      }
    ],
    relatedSlugs: ['viewing-kitchen-queue', 'marking-items-ready']
  }
]
