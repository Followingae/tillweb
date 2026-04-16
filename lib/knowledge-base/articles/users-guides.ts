import { Article } from '../types'

export const usersGuides: Article[] = [
  {
    slug: 'create-new-user',
    categorySlug: 'users-and-roles',
    title: 'How to Create a New User',
    description: 'Add staff members to your POS system with roles, branch access, and PIN authentication.',
    steps: [
      {
        title: 'Navigate to Users',
        description: 'Click "Users" in the sidebar. You need the "users:list" permission to view the users page and "users:create" to add new users.'
      },
      {
        title: 'Check User Limits',
        description: 'The page header shows your current usage as a badge (e.g., "5 / 10 users"). If you have reached your user limit, the "Add New User" button will be disabled and a warning message reads "User limit reached. Contact support to add more users."'
      },
      {
        title: 'Click "Add New User"',
        description: 'Click the "Add New User" button in the top-right corner. A modal opens titled "Add New User" with the UserForm.'
      },
      {
        title: 'Fill in User Details',
        description: 'Complete the form fields: "Full Name" (required), "Email" (required), and "PIN" (required for new users, must be exactly 4 numeric digits).'
      },
      {
        title: 'Assign a Role',
        description: 'Select a role from the dropdown. Built-in roles include: Owner, Manager, Cashier, Waiter, Kitchen Manager, Line Cook, Prep Cook, and Expediter. If custom roles exist, they appear below a separator line "--- Custom Roles ---".'
      },
      {
        title: 'Assign Branch Access',
        description: 'Select which branch(es) the user can access from the branch multi-select. Users will only see data and operate in their assigned branches.'
      },
      {
        title: 'Save the User',
        description: 'Click save to create the user. A success toast shows "User created successfully". The user list refreshes automatically. If the user limit is reached during creation, an error toast appears: "User limit reached! Contact support to purchase additional user licenses."'
      }
    ],
    tips: [
      {
        title: 'PIN Security',
        description: 'The 4-digit PIN is used for POS login. Choose unique PINs for each user. PINs must contain only numeric digits.'
      },
      {
        title: 'User Limits',
        description: 'Your plan has a maximum number of users. The badge turns yellow at 90% capacity and red when at limit. Contact support to increase your user limit.'
      }
    ],
    relatedSlugs: ['assign-user-roles', 'manage-permissions', 'edit-role-permissions'],
    featured: true
  },
  {
    slug: 'assign-user-roles',
    categorySlug: 'users-and-roles',
    title: 'How to Assign Roles to Users',
    description: 'Set or change user roles to control access permissions across the POS system.',
    steps: [
      {
        title: 'Navigate to Users',
        description: 'Click "Users" in the sidebar. You need the "users:update" permission to modify user roles.'
      },
      {
        title: 'Find the User',
        description: 'Use the "Search users..." input to filter by name or email. Use the "All Roles" dropdown to filter by a specific role. The Staff List table shows each user with their Name, Email, Role (as a colored badge), Status (active/inactive dot), Created date, and Actions.'
      },
      {
        title: 'Click "Edit" on the User',
        description: 'Click the "Edit" button in the Actions column for the user you want to modify. The "Edit User" modal opens with the user\'s current information pre-filled.'
      },
      {
        title: 'Change the Role',
        description: 'In the role dropdown, select the new role. The dropdown lists built-in roles first (Owner, Manager, Cashier, Waiter, Kitchen Manager, Line Cook, Prep Cook, Expediter) followed by any custom roles separated by "--- Custom Roles ---".'
      },
      {
        title: 'Save the Changes',
        description: 'Click save to update the user. A success toast shows "User updated successfully". The user list refreshes and the role badge updates immediately.'
      }
    ],
    tips: [
      {
        title: 'Role Badge Colors',
        description: 'Role badges are color-coded: Owner (blue/info), Manager (yellow/warning), Cashier (gray/secondary), and other roles use the default color.'
      },
      {
        title: 'Immediate Effect',
        description: 'Role changes take effect on the user\'s next login or page refresh. Active sessions may need to re-authenticate to pick up new permissions.'
      }
    ],
    relatedSlugs: ['create-new-user', 'manage-permissions', 'edit-role-permissions']
  },
  {
    slug: 'manage-permissions',
    categorySlug: 'users-and-roles',
    title: 'How to Manage User Permissions',
    description: 'Understand and manage the permission system that controls access to every feature.',
    steps: [
      {
        title: 'Understand Permission Structure',
        description: 'Permissions follow a "module:action" format (e.g., "reports:view", "reports:export", "inventory:read", "inventory:update", "users:create", "discounts:list"). They are assigned to roles, and users inherit permissions from their assigned role.'
      },
      {
        title: 'Navigate to Roles',
        description: 'Go to Settings > Roles to view and edit role permissions. Each role row shows its permission count.'
      },
      {
        title: 'Edit Role Permissions',
        description: 'Click on a role to open the Role Editor. Permissions are organized into expandable modules. Each module shows a count of selected/total permissions (e.g., "3/5 selected").'
      },
      {
        title: 'Toggle Permissions',
        description: 'Check or uncheck individual permission checkboxes. Use the module header checkbox to select/deselect all permissions in a module at once.'
      },
      {
        title: 'Search Permissions',
        description: 'Use the search bar at the top of the permission editor to filter permissions by name or action keyword.'
      },
      {
        title: 'Save Changes',
        description: 'Click the save button to apply permission changes to the role. All users with this role will be affected.'
      }
    ],
    tips: [
      {
        title: 'Key Permission Areas',
        description: 'Critical permissions to review: "company:update" (settings access), "roles:manage" (role editing), "reports:view" and "reports:export" (report access), "inventory:read" and "inventory:update" (stock management), "users:list/create/update/delete" (user management).'
      },
      {
        title: 'Permission Denied Pages',
        description: 'When a user lacks required permissions, they see a "Permission Denied" page explaining which action they cannot perform (e.g., "view reports", "manage users", "view inventory").'
      }
    ],
    relatedSlugs: ['edit-role-permissions', 'assign-user-roles', 'manage-roles-and-permissions']
  },
  {
    slug: 'edit-role-permissions',
    categorySlug: 'users-and-roles',
    title: 'How to Edit Role Permissions',
    description: 'Modify the granular permissions assigned to a specific role using the role editor.',
    steps: [
      {
        title: 'Navigate to the Role Editor',
        description: 'Go to Settings > Roles, then click "Edit" on a role or click the role row. This opens the Role Editor page at /settings/roles/[role-name].'
      },
      {
        title: 'Edit Display Information',
        description: 'At the top, you can edit the role\'s Display Name and Description. The system name is shown but typically not changed after creation.'
      },
      {
        title: 'Browse Permission Modules',
        description: 'Permissions are grouped into expandable module sections. Click a module header to expand/collapse it. Each module shows "X/Y permissions selected" to indicate current coverage.'
      },
      {
        title: 'Search for Specific Permissions',
        description: 'Use the search input with the search icon to filter permissions. The search matches against permission keys and action names, filtering modules to show only relevant results.'
      },
      {
        title: 'Toggle Individual Permissions',
        description: 'Check or uncheck the checkbox next to each permission to grant or revoke it. Permission keys follow the format "module:action" (e.g., "pos:access", "orders:create").'
      },
      {
        title: 'Toggle Entire Modules',
        description: 'Use the module-level checkbox to quickly select or deselect all permissions within a module. The checkbox shows a mixed state when some but not all permissions are selected.'
      },
      {
        title: 'Save Permission Changes',
        description: 'Click the save button (Save icon) to update the role. A success toast confirms "Role updated successfully". Changes affect all users assigned to this role.'
      }
    ],
    tips: [
      {
        title: 'Built-in Roles',
        description: 'Built-in roles can have their permissions modified but cannot be deleted. Custom roles offer full flexibility including deletion.'
      },
      {
        title: 'Module Expansion',
        description: 'When the page loads, modules that already have selected permissions are automatically expanded for easy review.'
      }
    ],
    relatedSlugs: ['manage-permissions', 'manage-roles-and-permissions', 'create-new-user']
  },
  {
    slug: 'deactivate-or-delete-user',
    categorySlug: 'users-and-roles',
    title: 'How to Deactivate or Delete a User',
    description: 'Disable user access or permanently remove a user account.',
    steps: [
      {
        title: 'Navigate to Users',
        description: 'Click "Users" in the sidebar.'
      },
      {
        title: 'Find the User',
        description: 'Locate the user in the Staff List table. Each row shows the user\'s status as an active (green dot) or inactive (gray dot) indicator.'
      },
      {
        title: 'Deactivate a User',
        description: 'Click the "Deactivate" button (red variant) in the Actions column. The user status changes to inactive immediately. To reactivate, click "Activate" (green variant). You need the "users:update" permission.'
      },
      {
        title: 'Delete a User Permanently',
        description: 'Click the "Delete" button (red variant) in the Actions column. A browser confirmation dialog asks: "Are you sure you want to delete [user name]? This action cannot be undone." Click OK to confirm. A success toast shows "User [name] deleted successfully". You need the "users:delete" permission.'
      }
    ],
    tips: [
      {
        title: 'Deactivate vs Delete',
        description: 'Deactivating preserves the user record and their historical data (orders, shifts). Deleting is permanent. Prefer deactivation unless you need to free up a user license.'
      },
      {
        title: 'User Licenses',
        description: 'Deleting a user frees up a license slot. The usage counter in the page header updates automatically after deletion.'
      }
    ],
    relatedSlugs: ['create-new-user', 'assign-user-roles']
  }
]
