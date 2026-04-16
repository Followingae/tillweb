import { Article } from '../types'

export const tablesGuides: Article[] = [
  {
    slug: 'viewing-table-status',
    categorySlug: 'tables',
    title: 'Viewing Table Status',
    description: 'Monitor real-time table occupancy, availability, and status from the Table Management dashboard.',
    steps: [
      {
        title: 'Open Table Management',
        description: 'Click "Table Management" in the sidebar navigation (under the restaurant section). The page opens showing a professional header with a Utensils icon, the title "Table Management", your branch name, and "Real-time Status" label.'
      },
      {
        title: 'Review availability stats',
        description: 'The header displays real-time table statistics in colored badges: green "X Available" (with pulsing dot), orange "X Occupied", gray "X Total", and blue "X% Free" showing the availability percentage.'
      },
      {
        title: 'View the Tables tab',
        description: 'The default view mode is "Tables" (with Utensils icon). This shows a grid of table cards, each displaying the table number/name, seat count, and current status (available, occupied, reserved). The status is color-coded for quick visual identification.'
      },
      {
        title: 'Click a table for details',
        description: 'Click on any table card in the grid to select it. A Table Operations Panel appears on the right side, showing detailed information about the selected table including its current order (if occupied), and action buttons for table operations.'
      },
      {
        title: 'Filter by floor',
        description: 'If floors have been configured, a "Floor:" dropdown selector appears in the header controls. Select a specific floor to filter the table view to only tables on that floor. The table count badge updates to show "X on floor" instead of "X total". A blue "Filtered" badge with a Building2 icon confirms the filter is active.'
      },
      {
        title: 'Refresh table data',
        description: 'Click the "Refresh" button (with RefreshCw icon) in the header stats area to manually refresh all table status data from the server.'
      }
    ],
    tips: [
      {
        title: 'Real-time updates',
        description: 'Table statuses update automatically when orders are placed or completed through the POS. Manual refresh is useful if you suspect data is stale.'
      },
      {
        title: 'Branch selection required',
        description: 'You must have a branch selected to view tables. If no branch is selected, a message will prompt you to select one from the branch selector.'
      }
    ],
    relatedSlugs: ['creating-tables-bulk-setup', 'managing-floor-plans', 'editing-table-details'],
    featured: true
  },
  {
    slug: 'creating-tables-bulk-setup',
    categorySlug: 'tables',
    title: 'Creating Tables with Bulk Setup',
    description: 'Quickly create multiple tables at once using the Standard Layout or Custom Tables configuration.',
    steps: [
      {
        title: 'Navigate to the Setup tab',
        description: 'On the Table Management page, click the "Setup" button (with Settings icon) in the view mode tabs. This tab is only visible if you have the "tables:create" permission. The Bulk Table Setup interface will load.'
      },
      {
        title: 'Choose a setup method',
        description: 'The setup page presents two options as large clickable cards: "Standard Layout" (with Grid icon) for creating numbered tables with consistent seating, and "Custom Tables" (with Plus icon) for creating tables with custom names and configurations.'
      },
      {
        title: 'Configure Standard Layout',
        description: 'If you select "Standard Layout", fill in three fields: "Number of Tables" (number input, min 1, max 100, default 10), "Seats per Table" (number input, min 1, max 20, default 4), and "Table Prefix" (text input, e.g., "T" or "TBL"). An info box shows a preview: "This will create X tables, each with Y seats. Tables will be numbered sequentially starting from 01."'
      },
      {
        title: 'Configure Custom Tables',
        description: 'If you select "Custom Tables", you see a list of table rows, each with fields for "Table Number" (e.g., "01"), "Table Name" (e.g., "Table 1"), and "Seats" (number, default 4). Click "Add Table" (with Plus icon) to add more rows. Click the remove button on any row to delete it.'
      },
      {
        title: 'Create the tables',
        description: 'Click "Create Tables" (green button) for Standard Layout, or the submit button for Custom Tables. The system creates all tables at once and you are automatically redirected back to the Tables status view. If a floor is selected, all new tables are automatically assigned to that floor.'
      }
    ],
    tips: [
      {
        title: 'Floor assignment',
        description: 'If you have a floor selected when creating tables, a blue message appears: "Tables will be assigned to the selected floor". This saves you from having to assign floors separately afterwards.'
      },
      {
        title: 'Quick Table Setup modal',
        description: 'An alternative quick setup is available via the "Quick Table Setup" modal accessible from the Actions dropdown. It has simplified fields: "Number of Tables", "Seats per Table", and "Table Prefix (Optional)".'
      }
    ],
    relatedSlugs: ['editing-table-details', 'managing-floor-plans', 'viewing-table-status']
  },
  {
    slug: 'editing-table-details',
    categorySlug: 'tables',
    title: 'Editing and Deleting Tables',
    description: 'Modify table names, seat counts, and active status, or soft-delete tables you no longer need.',
    steps: [
      {
        title: 'Select a table',
        description: 'On the Table Management page in the Tables view, click on a table card to select it. The Table Operations Panel appears on the right side of the screen.'
      },
      {
        title: 'Open the edit modal',
        description: 'In the Table Operations Panel, click the "Update" or edit button to open the table edit modal. The modal title shows "Edit Table [number]" (e.g., "Edit Table 05").'
      },
      {
        title: 'Modify table fields',
        description: 'In the edit modal, you can change: "Table Name" (text input), "Number of Seats" (number input, min 1, max 20), and "Table Active" (toggle switch). When active, the label reads "Table is available for seating"; when inactive, it reads "Table is inactive and cannot be used".'
      },
      {
        title: 'Save changes',
        description: 'Click "Save Changes" to apply your modifications. The modal closes and table data refreshes automatically. Click "Cancel" to discard changes.'
      },
      {
        title: 'Delete a table',
        description: 'In the edit modal, click "Delete Table" (with Trash2 icon, red styling) at the bottom-left. A confirmation dialog appears: "Are you sure you want to delete [table name]? This action will soft delete the table, but it can be restored later." Click "Delete Table" to confirm or "Cancel" to abort.'
      },
      {
        title: 'Restore a deleted table',
        description: 'If a table has been soft-deleted, the edit modal shows a "Restore Table" button (green, with RotateCcw icon) instead of the delete button. Click it to restore the table to active status.'
      }
    ],
    tips: [
      {
        title: 'Soft delete safety',
        description: 'Deleting a table is a soft delete, meaning the data is preserved. You can always restore a deleted table later if needed.'
      },
      {
        title: 'Deactivate vs. delete',
        description: 'If you temporarily do not need a table (e.g., seasonal patio closure), toggle the "Table Active" switch off instead of deleting the table.'
      }
    ],
    relatedSlugs: ['viewing-table-status', 'creating-tables-bulk-setup']
  },
  {
    slug: 'managing-floor-plans',
    categorySlug: 'tables',
    title: 'Creating and Managing Floors',
    description: 'Set up multiple dining floors or areas and assign tables to each floor for organized table management.',
    steps: [
      {
        title: 'Enable Floor Mode',
        description: 'On the Table Management page, toggle the "Floor Mode" switch in the header controls (next to the Building2 icon). When enabled, the view automatically switches to the "Floors" tab and shows the Floor Management Dashboard.'
      },
      {
        title: 'View existing floors',
        description: 'The Floor Management Dashboard shows all configured floors with statistics including table count per floor, active tables, total seats, and occupancy status. Floor statistics are loaded from a dedicated API endpoint.'
      },
      {
        title: 'Create a new floor',
        description: 'Click the create/add button on the Floor Management Dashboard. Fill in the floor form with: "Floor Number" (auto-incremented), "Floor Name" (e.g., "Ground Floor", "Rooftop"), "Description", "Active" status (checkbox), and "Sort Order" (for display ordering). Submit the form to create the floor.'
      },
      {
        title: 'Edit an existing floor',
        description: 'Click on a floor card and then click the edit button. The form pre-fills with the current floor data. Modify any fields and save. Editing requires the "floors:update" permission.'
      },
      {
        title: 'Delete a floor',
        description: 'Click the delete option on a floor card. This action requires the "floors:delete" permission. Note that deleting a floor does not delete the tables assigned to it; they become unassigned.'
      },
      {
        title: 'Assign tables to floors',
        description: 'Switch to the "Assign" tab (with MapPin icon) in Floor Mode. The Table-Floor Assignment interface shows all tables and available floors. Select tables and assign them to a specific floor using the assignment controls.'
      },
      {
        title: 'Switch back to regular mode',
        description: 'Toggle the "Floor Mode" switch off to return to the standard table view. You can still filter by floor using the "Floor:" dropdown selector without Floor Mode enabled.'
      }
    ],
    tips: [
      {
        title: 'Floor filtering in regular mode',
        description: 'Even without Floor Mode enabled, if floors exist, you can use the "Floor:" dropdown selector in the header to filter the table status view by a specific floor.'
      },
      {
        title: 'Permissions',
        description: 'Creating floors requires "floors:create" permission, editing requires "floors:update", and deleting requires "floors:delete". Table Management access requires the "floors:list" permission.'
      }
    ],
    relatedSlugs: ['viewing-table-status', 'creating-tables-bulk-setup', 'table-analytics']
  },
  {
    slug: 'table-analytics',
    categorySlug: 'tables',
    title: 'Viewing Table Analytics',
    description: 'Access analytics and performance data for your tables to optimize seating and turnover.',
    steps: [
      {
        title: 'Open the Analytics tab',
        description: 'On the Table Management page, click the "Analytics" button (with BarChart3 icon) in the view mode tabs. The Table Analytics component loads with performance data for your branch.'
      },
      {
        title: 'Review table performance metrics',
        description: 'The analytics view shows key metrics including table utilization rates, average seating duration, turnover rates, and revenue per table. Data is loaded based on your current branch selection.'
      },
      {
        title: 'Access from Actions menu',
        description: 'Alternatively, click the "Actions" dropdown button (with Settings icon and chevron) on the table overview card, then select "Analytics" (with BarChart3 icon) from the dropdown menu.'
      }
    ],
    tips: [
      {
        title: 'Use analytics for layout decisions',
        description: 'Review table analytics regularly to identify underperforming tables. Consider adjusting seat counts or table positions based on utilization patterns.'
      }
    ],
    relatedSlugs: ['viewing-table-status', 'managing-floor-plans']
  },
  {
    slug: 'table-qr-codes',
    categorySlug: 'tables',
    title: 'Managing Table QR Codes',
    description: 'Generate and manage QR codes for tables to enable customer self-ordering.',
    steps: [
      {
        title: 'Check QR ordering is enabled',
        description: 'The "QR Codes" tab (with QrCode icon) only appears in the Table Management view tabs when QR ordering is enabled for your venue. If you do not see this tab, QR ordering may need to be enabled in your system settings.'
      },
      {
        title: 'Open the QR Codes tab',
        description: 'Click the "QR Codes" button (with QrCode icon) in the view mode tabs. The QR Management interface loads showing all tables and their QR code status.'
      },
      {
        title: 'Generate and manage QR codes',
        description: 'Use the QR Management interface to generate unique QR codes for each table. Customers can scan these codes to place orders directly from their phones.'
      }
    ],
    tips: [
      {
        title: 'Print QR codes',
        description: 'QR codes can be printed and placed on tables as tent cards or stickers for customers to scan easily.'
      }
    ],
    relatedSlugs: ['viewing-table-status', 'creating-tables-bulk-setup']
  }
]
