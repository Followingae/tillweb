import { Article } from '../types'

export const shiftsGuides: Article[] = [
  {
    slug: 'starting-daily-session',
    categorySlug: 'shifts',
    title: 'Starting a Daily Session',
    description: 'Learn how to open a daily session, which is required before starting any device shifts or processing orders.',
    steps: [
      {
        title: 'Navigate to Shift Management',
        description: 'Click "Shift Management" in the sidebar navigation. The page opens showing the Daily Session card with a Calendar icon and the title "Daily Session".'
      },
      {
        title: 'Check for an existing session',
        description: 'If no daily session is active, you will see a centered message: "No Active Session" with the description "Start a daily session to enable shift management and reporting" and a "Start Session" button (with Calendar icon).'
      },
      {
        title: 'Click "Start Session"',
        description: 'Click the "Start Session" button. This button requires the "sessions:open" permission. A "Start Daily Session" modal will appear showing the current date and your branch name.'
      },
      {
        title: 'Enter the opening cash amount',
        description: 'In the modal, enter the "Opening Cash Amount" in the AED-labelled field. This is a required field that must be a positive number. The help text reads: "Enter the total cash amount in the register to start the day".'
      },
      {
        title: 'Add opening notes (optional)',
        description: 'Optionally fill in the "Opening Notes" textarea (with FileText icon) with any relevant notes about the start of the day, such as carry-over information from the previous day.'
      },
      {
        title: 'Review important notes',
        description: 'The modal displays an important information box (yellow) listing key reminders: device shifts cannot be started without an active daily session, orders cannot be processed without an active daily session, all cash movements will be tracked during the session, and you can close the session at the end of the day for reconciliation.'
      },
      {
        title: 'Start the session',
        description: 'Click "Start Daily Session" (green button with Calendar icon). The button shows a spinner with "Starting Session..." while processing. On success, a toast notification confirms "Daily session started successfully!" and the page refreshes to show the active session dashboard.'
      }
    ],
    tips: [
      {
        title: 'One session per branch',
        description: 'Only one daily session can be active per branch at a time. If a session is already active, you will see the session dashboard instead of the start button.'
      },
      {
        title: 'Session is required for POS',
        description: 'The POS terminal, Kitchen Display System, and all order processing functions require an active daily session. Always start the session before opening for business.'
      }
    ],
    relatedSlugs: ['closing-daily-session', 'starting-device-shift', 'viewing-session-dashboard'],
    featured: true
  },
  {
    slug: 'viewing-session-dashboard',
    categorySlug: 'shifts',
    title: 'Understanding the Session Dashboard',
    description: 'Review the daily session dashboard to monitor sales, orders, shifts, handovers, and session metrics in real time.',
    steps: [
      {
        title: 'View key metrics',
        description: 'When a daily session is active, the dashboard shows six metric cards in a grid: "Sales" (total revenue with cash/card breakdown and tips), "Orders" (total and completed counts), "Shifts" (active and total shift counts), "Handovers" (count and total amount with pending handovers), "Duration" (formatted hours and minutes since session start), and "Avg Order" (average order value with completion rate).'
      },
      {
        title: 'Review session details',
        description: 'Below the metrics, the "Session Details" card shows: "Started" (date and time), "Opened By" (staff member name), "Branch" (branch name), and "Opening Cash" (amount in AED, green text).'
      },
      {
        title: 'Check sales breakdown',
        description: 'The "Sales Breakdown" card displays payment method totals: Cash (green), Card (blue), Online (cyan), Total Sale (bold), and Open Orders (orange, showing count of unclosed orders).'
      },
      {
        title: 'Use Quick Actions',
        description: 'The "Quick Actions" card provides three buttons: "View Session Report" (with FileText icon) to open the session report modal, "Session History" (with Calendar icon) to view past sessions, and a conditional "X Pending Handovers" (with AlertTriangle icon, orange) that appears when there are unconfirmed cash handovers.'
      },
      {
        title: 'Use the top action buttons',
        description: 'Above the Daily Session card, quick action buttons are available: "Session History" (with Calendar icon), "Device Shifts" (with Monitor icon), and "Cash Handovers" (with ArrowRightLeft icon, only visible if you have the "sessions:handover:confirm" permission and a session is active).'
      }
    ],
    tips: [
      {
        title: 'Auto-refresh',
        description: 'Session data refreshes automatically every 30 seconds to keep metrics up to date. You can also trigger a manual refresh by interacting with the page.'
      },
      {
        title: 'Session status indicator',
        description: 'The session status badge in the card header shows "Active" with a green pulsing dot when the session is running.'
      }
    ],
    relatedSlugs: ['starting-daily-session', 'closing-daily-session', 'starting-device-shift']
  },
  {
    slug: 'starting-device-shift',
    categorySlug: 'shifts',
    title: 'Starting a Device Shift',
    description: 'Start a shift on a specific POS device to begin processing orders on that terminal.',
    steps: [
      {
        title: 'Open Device Shifts',
        description: 'On the Shift Management page, click the "Device Shifts" button (with Monitor icon) in the top action buttons area. A "Device Shift Operations" modal opens showing the device shifts panel.'
      },
      {
        title: 'Check for active shifts',
        description: 'The modal shows a header with "Device Shifts" title, a badge showing the count of active shifts (e.g., "2 Active Shifts" with a green pulsing dot), and the shift list below. If no shifts are active, you see a centered message: "No Active Shifts — Start a device shift to begin processing orders".'
      },
      {
        title: 'Click "Start New Shift" or "Start Shift"',
        description: 'Click the "Start New Shift" button (with Play icon, blue) at the top of the active shifts list, or the "Start Shift" button (with Play icon) in the empty state. This requires the "shifts:create" permission and an active daily session. A "Start New Shift" modal appears.'
      },
      {
        title: 'Select a device',
        description: 'In the Start New Shift modal, use the "Select Device" dropdown (with Monitor icon) to choose from available registered POS devices. Each device is listed by its alias name. A dashboard device is auto-selected as the default. After selection, a gray info box shows "Selected: [device alias]".'
      },
      {
        title: 'Add notes (optional)',
        description: 'Fill in the "Notes (Optional)" textarea with any relevant shift notes, such as special instructions or reminders from the previous shift.'
      },
      {
        title: 'Review the checklist',
        description: 'The modal displays a "Before Starting" checklist in a yellow box: verify device is connected and functioning, check that all peripherals are working, review any handover notes from previous shift, and ensure you are ready to begin processing orders.'
      },
      {
        title: 'Start the shift',
        description: 'Click "Start Shift" to begin. The button shows a spinner with "Starting..." while processing. On success, a toast confirms "Shift started successfully!" and the modal refreshes to show the new active shift.'
      }
    ],
    tips: [
      {
        title: 'Multiple device shifts',
        description: 'You can have multiple device shifts running simultaneously on different devices. Each shift tracks its own orders, revenue, and cash independently.'
      },
      {
        title: 'Daily session required',
        description: 'The "Start Shift" button is disabled if no daily session is active. Start a daily session first before attempting to start a device shift.'
      }
    ],
    relatedSlugs: ['closing-device-shift', 'starting-daily-session', 'viewing-session-dashboard']
  },
  {
    slug: 'closing-device-shift',
    categorySlug: 'shifts',
    title: 'Closing a Device Shift',
    description: 'End a device shift, review the shift summary, and generate a closing report.',
    steps: [
      {
        title: 'Open Device Shifts',
        description: 'Click the "Device Shifts" button (with Monitor icon) on the Shift Management page. The modal shows all active device shifts.'
      },
      {
        title: 'Find the shift to close',
        description: 'Each active shift card shows the device alias, start time, and four metrics: Orders (count), Revenue (AED total), Cash (AED), and Card (AED). Locate the shift you want to close.'
      },
      {
        title: 'Click "Close"',
        description: 'Click the "Close" button (with Square icon, red text) on the shift card. This requires the "shifts:close" permission. A "Close Shift" modal appears.'
      },
      {
        title: 'Review shift summary',
        description: 'The Close Shift modal displays a blue summary section with: Duration (hours and minutes), Orders (total count), Total Sales (AED), Cash (AED with Coins icon), and Card (AED). It also shows Tips collected if any were recorded during the shift.'
      },
      {
        title: 'Handle open orders (if any)',
        description: 'If there are open (unpaid) orders on this shift, a warning appears. If force close is disabled, a red "Cannot Close Shift" box lists the open orders and instructs you to complete or void them. If force close is enabled, an amber warning appears with a checkbox: "I understand and want to force close this shift" that you must check before proceeding.'
      },
      {
        title: 'Add closing notes (optional)',
        description: 'Fill in the "Notes" textarea with any relevant closing information (e.g., cash discrepancies, incidents during the shift).'
      },
      {
        title: 'Close the shift',
        description: 'Click the "Close Shift" button. On success, a toast confirms "Shift closed successfully!" and a shift report is automatically generated and sent to the printer. The shift moves from active to history.'
      }
    ],
    tips: [
      {
        title: 'Auto-printed report',
        description: 'When a shift is closed, a PDF shift closing report is automatically generated and sent to print. The report includes shift summary, payment breakdown, and cash reconciliation sections.'
      },
      {
        title: 'Force close setting',
        description: 'The ability to force close a shift with open orders is controlled by shift settings stored locally. If you cannot force close, all orders must be completed or voided before the shift can end.'
      }
    ],
    relatedSlugs: ['starting-device-shift', 'viewing-shift-history', 'cash-reconciliation']
  },
  {
    slug: 'closing-daily-session',
    categorySlug: 'shifts',
    title: 'Closing a Daily Session',
    description: 'End the daily session with cash declaration and reconciliation to close out the business day.',
    steps: [
      {
        title: 'Locate the Close Session button',
        description: 'On the Shift Management page, find the "Close Session" button (red outline text) in the Daily Session card header. This button is only visible when the session status is "Active" and you have the "sessions:close" permission.'
      },
      {
        title: 'Click "Close Session"',
        description: 'Click the button to open the "Close Daily Session" modal. The modal shows a payment declaration interface similar to professional POS reconciliation systems.'
      },
      {
        title: 'Review system amounts',
        description: 'The modal displays payment rows for Cash (with Banknote icon, green), Card (with CreditCard icon, blue), and Other (with Globe icon, purple, only if applicable). Each row shows the system-calculated amount based on the session\'s sales data.'
      },
      {
        title: 'Declare actual amounts',
        description: 'For each payment method, the "Declared Amount" field is pre-filled with the system amount. Modify these fields if your actual counted amounts differ. For cash, the expected amount equals opening cash plus cash sales.'
      },
      {
        title: 'Toggle Blind Close (optional)',
        description: 'Click the eye toggle button (EyeOff/Eye icon) to enable "Blind Close" mode. In this mode, all declared amounts are cleared to blank so you must enter counted amounts from scratch without seeing the system\'s expected values. This is useful for independent cash counting verification.'
      },
      {
        title: 'Add closing notes (optional)',
        description: 'Fill in the closing notes textarea with any end-of-day remarks, discrepancy explanations, or handover information for the next day.'
      },
      {
        title: 'Submit the close',
        description: 'Click the close/submit button to finalize the session. The system calculates variances between declared and expected amounts. A daily session closing report is automatically generated and sent to print. A toast confirms "Daily session closed successfully!".'
      }
    ],
    tips: [
      {
        title: 'Auto-printed report',
        description: 'The daily session closing report includes sections for: Session Overview, Key Metrics, Payment Summary, Cash Reconciliation, Voids & Refunds (if any), Discounts (if any), Device Shifts performance, and Cash Handovers.'
      },
      {
        title: 'Close all shifts first',
        description: 'It is recommended to close all active device shifts before closing the daily session. The session close will capture final data from all shifts.'
      },
      {
        title: 'Variance tracking',
        description: 'Any difference between the system amount and declared amount is recorded as a variance in the reconciliation report. Investigate significant variances before closing.'
      }
    ],
    relatedSlugs: ['starting-daily-session', 'closing-device-shift', 'cash-handovers']
  },
  {
    slug: 'viewing-shift-history',
    categorySlug: 'shifts',
    title: 'Viewing Shift History',
    description: 'Review past device shifts, view shift reports, and access historical shift data.',
    steps: [
      {
        title: 'Find the Shift History section',
        description: 'On the Shift Management page, scroll down to the "Shift History" card (with FileText icon). This shows the most recent 5 shifts for the current session in a compact table format.'
      },
      {
        title: 'Review shift entries',
        description: 'Each shift entry in the history table shows the device name, user name, opening time, closing time, total orders, total sales, cash collected, card collected, tips, and shift status (active or completed).'
      },
      {
        title: 'View a shift report',
        description: 'Click the report button on any shift row to open the Shift Report Modal. The report shows detailed shift data including sales breakdown, payment methods, and cash reconciliation.'
      },
      {
        title: 'View all history',
        description: 'Click "View All" in the Shift History card header, or click the "View all history" link at the bottom of the table (appears when there are exactly 5 shifts shown). This opens the "All Device Shifts History" modal with full pagination and filter support.'
      },
      {
        title: 'Use filters in full history view',
        description: 'The full history modal supports filtering by date range, device, user, and status. Use the pagination controls at the bottom to navigate through older shifts. The history is scoped to the current daily session by default.'
      }
    ],
    tips: [
      {
        title: 'Close active shifts from history',
        description: 'If you have the "shifts:close" permission, active shifts in the history table will show a "Close" button, allowing you to close a shift directly from the history view.'
      },
      {
        title: 'Session History',
        description: 'To view history across multiple days, click "Session History" in the top action buttons or Quick Actions. The "Daily Session History" modal shows past sessions with filters and pagination.'
      }
    ],
    relatedSlugs: ['closing-device-shift', 'viewing-session-dashboard']
  },
  {
    slug: 'cash-handovers',
    categorySlug: 'shifts',
    title: 'Recording Cash Handovers',
    description: 'Record cash transfers between staff members during a daily session for accountability and reconciliation.',
    steps: [
      {
        title: 'Open Cash Handovers',
        description: 'Click the "Cash Handovers" button (with ArrowRightLeft icon) in the top action buttons on the Shift Management page. This opens the "Unified Cash Handover" modal. This button requires the "sessions:handover:confirm" permission and an active daily session.'
      },
      {
        title: 'Create a new handover',
        description: 'In the Cash Handover modal, the "Record Cash Handover" form shows the following fields: "Handover Type" (dropdown), "Recipient" (user dropdown), "Amount" (AED currency input), "Reason" (text), "Order Reference" (optional), and "Notes" (optional textarea).'
      },
      {
        title: 'Select the handover type',
        description: 'Choose from the available handover types: "Shift Change" (for shift-to-shift cash transfer), "Cash Collection" (for collecting cash from register), "Waiter Handover" (for waiter-to-cashier transfers), "Order Payment" (for specific order payment), "Order Cash" (for order-related cash), "Change Return" (for returning change), "Adjustment" (for corrections), or "Other".'
      },
      {
        title: 'Select the recipient',
        description: 'Choose the staff member who will receive the cash from the "Received By" dropdown. The current user is automatically set as the person handing over the cash and is excluded from the recipient list.'
      },
      {
        title: 'Enter the amount',
        description: 'Enter the cash amount being transferred. The amount must be greater than zero.'
      },
      {
        title: 'Submit the handover',
        description: 'Click the submit button to record the handover. A success toast confirms "Cash handover recorded successfully". The handover appears in the session\'s handover history and is included in the daily session closing report.'
      },
      {
        title: 'View pending handovers',
        description: 'If there are pending (unconfirmed) handovers, a warning appears in the Quick Actions section: "X Pending Handovers" (with AlertTriangle icon, orange). Click it to view and confirm or cancel pending handovers.'
      }
    ],
    tips: [
      {
        title: 'Handover history',
        description: 'All cash handovers are tracked and included in the daily session closing report, providing a complete audit trail of cash movements between staff.'
      },
      {
        title: 'Multiple handover types',
        description: 'Use specific handover types (like "Waiter Handover" or "Order Payment") rather than "Other" to maintain clear categorization in your reports.'
      }
    ],
    relatedSlugs: ['closing-daily-session', 'closing-device-shift', 'viewing-shift-history']
  }
]
