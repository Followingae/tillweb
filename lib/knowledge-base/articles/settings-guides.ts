import { Article } from '../types'

export const settingsGuides: Article[] = [
  {
    slug: 'configure-pos-settings',
    categorySlug: 'settings',
    title: 'How to Configure POS Settings',
    description: 'Customize your POS display, layout, table management, and bill settings.',
    steps: [
      {
        title: 'Navigate to Settings',
        description: 'Click "Settings" in the sidebar to open the main Settings page. You need the "company:update" permission to manage settings.'
      },
      {
        title: 'Configure Display Settings',
        description: 'The POS Display Settings section lets you customize how items appear on the POS screen. Adjust display preferences and toggle various display options using the toggle switches.'
      },
      {
        title: 'Adjust Table Management Settings',
        description: 'The Table Management Settings section controls table-related behavior in the POS. Configure table display preferences and management options.'
      },
      {
        title: 'Configure POS Layout',
        description: 'The POS Layout Settings section lets you customize the layout of the POS interface, including how menu items and categories are arranged.'
      },
      {
        title: 'Set Bill Preferences',
        description: 'The Bill Settings section controls how bills are displayed and processed, including tip handling and bill formatting options.'
      },
      {
        title: 'Save Your Changes',
        description: 'Each section has its own save button. Click the relevant save button after making changes. A success toast notification ("POS display settings saved successfully!") confirms the save.'
      }
    ],
    tips: [
      {
        title: 'Settings Are Local',
        description: 'POS display, layout, and bill settings are saved locally on the device via the POSSettingsService. Changes apply immediately on page reload.'
      },
      {
        title: 'Permission Required',
        description: 'You need the "company:update" permission to access and modify settings. Without it, you will see a "Permission Denied" page.'
      }
    ],
    relatedSlugs: ['setup-printers', 'configure-receipt-settings'],
    featured: true
  },
  {
    slug: 'setup-printers',
    categorySlug: 'settings',
    title: 'How to Set Up Printers',
    description: 'Configure receipt printers, kitchen printers, and print settings for your POS system.',
    steps: [
      {
        title: 'Navigate to Printer Settings',
        description: 'Go to Settings from the sidebar, then click on the "Printers" section or navigate to Settings > Printers directly.'
      },
      {
        title: 'Configure QZ Tray Printer (Desktop)',
        description: 'For desktop/browser-based POS, the QZ Tray Printer Settings section allows you to configure printers connected via QZ Tray print service. Set up the printer name, paper width, and connection settings.'
      },
      {
        title: 'Configure Android Printer',
        description: 'For Android-based POS devices, the Android Printer Settings section allows you to configure built-in or Bluetooth thermal printers.'
      },
      {
        title: 'Set Up SmartPay Terminal',
        description: 'The SmartPay Terminal Settings section configures integrated payment terminal printing capabilities.'
      },
      {
        title: 'Configure Print Settings',
        description: 'General print settings control auto-print behavior, number of copies, and other print-related preferences. Toggle options include auto-print on order completion and print kitchen slips.'
      },
      {
        title: 'Save Printer Configuration',
        description: 'Save your printer settings. Test the printer by printing a test receipt to verify the connection.'
      }
    ],
    tips: [
      {
        title: 'Multiple Printer Types',
        description: 'The system supports QZ Tray printers (for desktop browsers), Android built-in printers, and SmartPay terminal printers. Configure the one that matches your hardware.'
      }
    ],
    relatedSlugs: ['configure-pos-settings', 'configure-receipt-settings', 'configure-kitchen-slip-settings']
  },
  {
    slug: 'configure-receipt-settings',
    categorySlug: 'settings',
    title: 'How to Configure Receipt Settings',
    description: 'Customize the content and layout of printed customer receipts.',
    steps: [
      {
        title: 'Navigate to Settings',
        description: 'Click "Settings" in the sidebar to open the Settings page.'
      },
      {
        title: 'Find Receipt Settings Section',
        description: 'Scroll to the Receipt Settings section on the Settings page.'
      },
      {
        title: 'Configure Receipt Content',
        description: 'Customize what appears on printed receipts including header text, footer text, company information, and which fields to show (tax details, item details, payment information).'
      },
      {
        title: 'Save Receipt Settings',
        description: 'Click the save button in the Receipt Settings section. A success toast notification ("Receipt settings saved successfully!") confirms the save.'
      }
    ],
    tips: [
      {
        title: 'Default Settings',
        description: 'Receipt settings have sensible defaults. You only need to customize them if you want to add custom header/footer text or change which fields appear.'
      }
    ],
    relatedSlugs: ['setup-printers', 'configure-pos-settings']
  },
  {
    slug: 'configure-kitchen-slip-settings',
    categorySlug: 'settings',
    title: 'How to Configure Kitchen Slip Settings',
    description: 'Customize kitchen order slips including content, formatting, and station routing.',
    steps: [
      {
        title: 'Navigate to Settings',
        description: 'Click "Settings" in the sidebar.'
      },
      {
        title: 'Find Kitchen Slip Settings',
        description: 'Scroll to the Kitchen Slip Settings section on the Settings page.'
      },
      {
        title: 'Configure Slip Content',
        description: 'Customize what information appears on kitchen slips, including item details, modifiers, special instructions, and station assignments.'
      },
      {
        title: 'Save Kitchen Slip Settings',
        description: 'Click save to apply your kitchen slip configuration.'
      }
    ],
    relatedSlugs: ['setup-printers', 'configure-pos-settings']
  },
  {
    slug: 'setup-coursing',
    categorySlug: 'settings',
    title: 'How to Set Up Coursing',
    description: 'Configure course-based order management for multi-course dining service.',
    steps: [
      {
        title: 'Navigate to Coursing Settings',
        description: 'Go to Settings in the sidebar, then click "Coursing" or navigate to Settings > Coursing.'
      },
      {
        title: 'Configure Courses',
        description: 'Set up your course sequence (e.g., Starters, Main Course, Dessert). Define the order in which courses should be sent to the kitchen.'
      },
      {
        title: 'Enable Coursing',
        description: 'Toggle coursing on to activate course-based order flow in the POS. When enabled, staff can assign menu items to specific courses during order entry.'
      },
      {
        title: 'Save Coursing Configuration',
        description: 'Save your coursing setup. The POS will now show course assignment options when adding items to orders.'
      }
    ],
    tips: [
      {
        title: 'Course Firing',
        description: 'With coursing enabled, kitchen staff can fire (send to preparation) each course separately, ensuring proper timing between courses.'
      }
    ],
    relatedSlugs: ['configure-pos-settings', 'configure-kitchen-slip-settings']
  },
  {
    slug: 'configure-qr-ordering',
    categorySlug: 'settings',
    title: 'How to Configure QR Ordering',
    description: 'Set up QR code-based ordering for customers to place orders from their phones.',
    steps: [
      {
        title: 'Navigate to QR Ordering Settings',
        description: 'Go to Settings in the sidebar, then click "QR Ordering" or navigate to Settings > QR Ordering.'
      },
      {
        title: 'Enable QR Ordering',
        description: 'Toggle the QR ordering feature on. Configure the ordering URL and customize the appearance of the QR ordering page.'
      },
      {
        title: 'Customize the Menu Display',
        description: 'Choose which menu items and categories are visible on the QR ordering page. Set up any restrictions or special instructions fields.'
      },
      {
        title: 'Generate QR Codes',
        description: 'The system generates unique QR codes that you can print and place on tables. Each QR code links to the digital ordering page.'
      },
      {
        title: 'Save Settings',
        description: 'Save your QR ordering configuration. Test by scanning a generated QR code with your phone.'
      }
    ],
    tips: [
      {
        title: 'Table-Specific QR Codes',
        description: 'QR codes can be linked to specific tables so orders automatically route to the correct table in the POS.'
      }
    ],
    relatedSlugs: ['configure-pos-settings', 'configure-kiosk-settings']
  },
  {
    slug: 'configure-kiosk-settings',
    categorySlug: 'settings',
    title: 'How to Configure Kiosk Settings',
    description: 'Set up self-service kiosk mode for customer-facing order terminals.',
    steps: [
      {
        title: 'Navigate to Kiosk Settings',
        description: 'Go to Settings in the sidebar, then click "Kiosk" or navigate to Settings > Kiosk.'
      },
      {
        title: 'Configure Kiosk Display',
        description: 'Set up the kiosk interface including menu layout, category display, item presentation, and branding elements.'
      },
      {
        title: 'Set Payment Options',
        description: 'Configure which payment methods are available on the kiosk (card only, cash and card, etc.).'
      },
      {
        title: 'Save Kiosk Configuration',
        description: 'Save your kiosk settings and test the kiosk mode to verify the customer experience.'
      }
    ],
    relatedSlugs: ['configure-qr-ordering', 'configure-pos-settings']
  },
  {
    slug: 'configure-zoho-books-integration',
    categorySlug: 'settings',
    title: 'How to Configure Zoho Books Integration',
    description: 'Connect your POS to Zoho Books for automated accounting and invoice sync.',
    steps: [
      {
        title: 'Navigate to Zoho Books Settings',
        description: 'Go to Settings in the sidebar, then click "Zoho Books" or navigate to Settings > Zoho Books.'
      },
      {
        title: 'Connect Your Zoho Account',
        description: 'Enter your Zoho Books credentials or use OAuth to connect your Zoho Books organization to the POS system.'
      },
      {
        title: 'Map Accounts',
        description: 'Map your POS sales categories, payment methods, and tax codes to the corresponding Zoho Books accounts and tax settings.'
      },
      {
        title: 'Configure Sync Settings',
        description: 'Set up automatic sync preferences including which data to sync (invoices, payments, expenses) and sync frequency.'
      },
      {
        title: 'Save and Test',
        description: 'Save the integration settings and run a test sync to verify data flows correctly between the POS and Zoho Books.'
      }
    ],
    tips: [
      {
        title: 'Account Mapping',
        description: 'Proper account mapping ensures your POS transactions categorize correctly in Zoho Books. Take time to map each payment method and category accurately.'
      }
    ],
    relatedSlugs: ['configure-pos-settings']
  },
  {
    slug: 'configure-tax-mode',
    categorySlug: 'settings',
    title: 'How to Configure Tax Mode',
    description: 'Set up inclusive or exclusive tax calculation for your business.',
    steps: [
      {
        title: 'Navigate to Settings',
        description: 'Click "Settings" in the sidebar to open the Settings page.'
      },
      {
        title: 'Find Tax Mode Toggle',
        description: 'Locate the Tax Mode section on the Settings page. The TaxModeToggle component allows you to switch between inclusive and exclusive tax modes.'
      },
      {
        title: 'Select Tax Mode',
        description: 'Choose "Tax Inclusive" (prices shown include tax) or "Tax Exclusive" (tax is added on top of displayed prices). This affects how prices are displayed and calculated across the entire POS system.'
      },
      {
        title: 'Save Tax Configuration',
        description: 'Save your tax mode selection. All price displays and calculations across the POS, receipts, and reports will reflect the chosen mode.'
      }
    ],
    tips: [
      {
        title: 'Impact on All Prices',
        description: 'Changing the tax mode affects how all prices are displayed and calculated. Make this decision early and communicate the change to your staff.'
      }
    ],
    relatedSlugs: ['configure-pos-settings', 'view-tax-summary-report']
  },
  {
    slug: 'manage-roles-and-permissions',
    categorySlug: 'settings',
    title: 'How to Manage Roles and Permissions',
    description: 'Create custom roles, configure granular permissions, and manage access control for your staff.',
    steps: [
      {
        title: 'Navigate to Roles Settings',
        description: 'Go to Settings in the sidebar, then click "Roles" or navigate to Settings > Roles. You need the "roles:manage" permission.'
      },
      {
        title: 'View All Roles',
        description: 'The Roles & Permissions page shows a table with all roles listing: Role name and description, Type (Built-in or Custom badge), number of Users assigned, Permissions count, and Edit/Delete actions.'
      },
      {
        title: 'Create a New Role',
        description: 'Click the "Create Role" button. In the modal, enter a Display Name (e.g., "Shift Supervisor"), a System Name (auto-generated from display name, lowercase with underscores), and an optional Description. Click "Create Role" to save.'
      },
      {
        title: 'Edit Role Permissions',
        description: 'Click "Edit" on any role or click the role row to open the Role Editor. The editor shows permission modules as expandable sections. Each module contains specific permissions with checkboxes. Use the search bar to filter permissions. Toggle individual permissions or entire modules.'
      },
      {
        title: 'Save Permission Changes',
        description: 'After selecting the desired permissions, click "Save" (save icon) to update the role. A success toast confirms "Role updated successfully".'
      },
      {
        title: 'Delete Custom Roles',
        description: 'Click "Delete" on a custom role. A confirmation modal warns if the role has assigned users. Built-in roles (marked as "Built-in" badge) cannot be deleted.'
      }
    ],
    tips: [
      {
        title: 'Built-in vs Custom Roles',
        description: 'Built-in roles (owner, manager, cashier, waiter, kitchen_manager, etc.) come pre-configured and cannot be deleted. Custom roles give you full control over permissions.'
      },
      {
        title: 'Permission Modules',
        description: 'Permissions are organized by module (e.g., POS, Orders, Catalog, Reports). You can quickly grant or revoke all permissions in a module.'
      }
    ],
    relatedSlugs: ['create-new-user', 'assign-user-roles'],
    featured: true
  },
  {
    slug: 'configure-shift-settings',
    categorySlug: 'settings',
    title: 'How to Configure Shift Settings',
    description: 'Set up shift management preferences including cash handling and reconciliation rules.',
    steps: [
      {
        title: 'Navigate to Settings',
        description: 'Click "Settings" in the sidebar.'
      },
      {
        title: 'Find Shift Settings',
        description: 'Locate the Shift Settings section on the Settings page.'
      },
      {
        title: 'Configure Shift Behavior',
        description: 'Adjust shift management preferences including whether shifts must be reconciled before closing, default opening cash amounts, and other shift-related policies.'
      },
      {
        title: 'Save Shift Settings',
        description: 'Click save to apply your shift configuration.'
      }
    ],
    relatedSlugs: ['configure-pos-settings', 'view-shift-performance-report']
  }
]
