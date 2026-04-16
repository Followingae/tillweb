import { Article } from '../types'

export const discountsGuides: Article[] = [
  {
    slug: 'create-discount-rule',
    categorySlug: 'discounts',
    title: 'How to Create a Discount Rule',
    description: 'Set up automated discount rules with conditions, types, and scheduling for your POS.',
    steps: [
      {
        title: 'Navigate to Discounts',
        description: 'Click "Discounts" in the sidebar to open the Discount Rules Manager. You need the "discounts:create" permission to create new rules.'
      },
      {
        title: 'Open the Create Modal',
        description: 'Click the button to create a new discount rule. A modal form appears with fields to configure your discount.'
      },
      {
        title: 'Set Basic Information',
        description: 'Enter a name for the discount rule. Choose the discount type: percentage off, fixed amount off, or other available types. Set the discount value.'
      },
      {
        title: 'Configure Conditions',
        description: 'Set conditions for when the discount applies. You can configure BOGO (Buy One Get One) conditions using the BOGO Condition Builder, Happy Hour time-based conditions using the Happy Hour Condition Builder, or Tiered discount conditions using the Tiered Condition Builder.'
      },
      {
        title: 'Set Active Status',
        description: 'Toggle the active status to control whether the discount is immediately live. You can create rules as inactive and activate them later.'
      },
      {
        title: 'Save the Rule',
        description: 'Click save to create the discount rule. A success toast confirms the rule was created. The rule appears in the discount rules table.'
      }
    ],
    tips: [
      {
        title: 'Advanced Discounts Feature',
        description: 'BOGO, Happy Hour, and Tiered discount types require the "advanced_discounts" feature flag to be enabled. Contact your administrator if these options are not visible.'
      },
      {
        title: 'Test Before Going Live',
        description: 'Create rules with active status toggled off first. Test them on a few orders before enabling for all transactions.'
      }
    ],
    relatedSlugs: ['set-discount-conditions', 'view-discount-analytics'],
    featured: true
  },
  {
    slug: 'set-discount-conditions',
    categorySlug: 'discounts',
    title: 'How to Set Discount Conditions',
    description: 'Configure conditional triggers for discount rules including BOGO, Happy Hour, and tiered discounts.',
    steps: [
      {
        title: 'Open a Discount Rule for Editing',
        description: 'In the Discounts page, find the rule you want to modify in the discount rules table. Click the edit action to open the rule editor.'
      },
      {
        title: 'Configure BOGO Conditions',
        description: 'For Buy One Get One discounts, use the BOGO Condition Builder. Specify which items trigger the discount, the qualifying quantity, and what the customer receives (free item, discounted item, etc.).'
      },
      {
        title: 'Set Up Happy Hour Conditions',
        description: 'For time-based discounts, use the Happy Hour Condition Builder. Define the days of the week, start time, and end time when the discount is active.'
      },
      {
        title: 'Configure Tiered Conditions',
        description: 'For spend-based tiered discounts, use the Tiered Condition Builder. Set up multiple tiers with different discount values based on order total thresholds.'
      },
      {
        title: 'Save Condition Changes',
        description: 'Save the updated discount rule. The conditions take effect immediately for active rules.'
      }
    ],
    tips: [
      {
        title: 'Multiple Condition Types',
        description: 'Each discount rule can use one condition type. Choose the condition builder that matches your promotional strategy.'
      }
    ],
    relatedSlugs: ['create-discount-rule', 'view-discount-analytics']
  },
  {
    slug: 'manage-discount-rules',
    categorySlug: 'discounts',
    title: 'How to Manage Existing Discount Rules',
    description: 'View, edit, activate/deactivate, and delete discount rules from the rules manager.',
    steps: [
      {
        title: 'View All Discount Rules',
        description: 'Navigate to the Discounts page. The Discount Rules Manager shows a table of all rules with columns for name, type, value, conditions, status, and actions.'
      },
      {
        title: 'Search and Filter Rules',
        description: 'Use the search input and filter options at the top to find specific rules by name or filter by type and status.'
      },
      {
        title: 'Toggle Rule Status',
        description: 'Use the toggle switch on each rule row to quickly activate or deactivate a discount. A confirmation toast shows "Discount rule activated" or "Discount rule deactivated". You need the "discounts:update" permission.'
      },
      {
        title: 'Edit a Rule',
        description: 'Click the edit action on a rule to modify its settings. The edit modal pre-fills with the current rule configuration.'
      },
      {
        title: 'Delete a Rule',
        description: 'Click the delete action on a rule. A confirmation dialog asks "Are you sure you want to delete [rule name]? This cannot be undone." Confirm to permanently delete the rule. You need the "discounts:delete" permission.'
      }
    ],
    tips: [
      {
        title: 'Quick Status Toggle',
        description: 'The most common operation is toggling a discount on or off. Use the status toggle for quick changes without opening the full editor.'
      }
    ],
    relatedSlugs: ['create-discount-rule', 'view-discount-analytics']
  },
  {
    slug: 'view-discount-analytics',
    categorySlug: 'discounts',
    title: 'How to View Discount Analytics',
    description: 'Analyze discount usage, impact on revenue, and performance of your discount campaigns.',
    steps: [
      {
        title: 'Navigate to Discount Analytics',
        description: 'From the Discounts page, navigate to the "Analytics" tab or go directly to Discounts > Analytics.'
      },
      {
        title: 'Review the Analytics Dashboard',
        description: 'The Discount Analytics Dashboard shows comprehensive metrics about discount usage across your business including total discounts applied, revenue impact, and usage frequency.'
      },
      {
        title: 'Analyze Discount Performance',
        description: 'Review which discount rules are most frequently used, their total value, and their impact on average order values and customer behavior.'
      }
    ],
    tips: [
      {
        title: 'Performance Tracking',
        description: 'Use the Discount Performance page (Discounts > Performance) for additional detailed performance metrics to help optimize your discount strategy.'
      }
    ],
    relatedSlugs: ['create-discount-rule', 'view-discount-report']
  },
  {
    slug: 'quick-setup-discount',
    categorySlug: 'discounts',
    title: 'How to Use Quick Setup for Discounts',
    description: 'Quickly create common discount types using the guided quick setup wizard.',
    steps: [
      {
        title: 'Navigate to Quick Setup',
        description: 'From the Discounts page, navigate to the "Quick Setup" tab or go directly to Discounts > Quick Setup.'
      },
      {
        title: 'Choose a Discount Template',
        description: 'The Quick Setup page provides pre-configured templates for common discount scenarios, making it faster to create standard promotions.'
      },
      {
        title: 'Customize and Save',
        description: 'Select a template, adjust the values to your needs, and save. The discount rule is created and ready to use.'
      }
    ],
    relatedSlugs: ['create-discount-rule', 'set-discount-conditions']
  }
]
