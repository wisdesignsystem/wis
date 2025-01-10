export default {
  Actions: {
    tags: {},
    filePath: "/Volumes/Work/wisdesign/wis/src/packages/actions/pc/index.ts",
    description: "",
    displayName: "Actions",
    methods: [],
    props: {},
  },
  Avatar: {
    tags: {},
    filePath: "/Volumes/Work/wisdesign/wis/src/packages/avatar/pc/index.ts",
    description: "",
    displayName: "Avatar",
    methods: [],
    props: {
      icon: {
        defaultValue: null,
        description:
          "Displays the avatar icon. This property is ignored if an avatar image URL is provided.",
        name: "icon",
        parent: {
          fileName: "wis/src/packages/avatar/avatar.ts",
          name: "AvatarProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/avatar/avatar.ts",
            name: "AvatarProps",
          },
        ],
        required: false,
        type: { name: "ReactNode" },
      },
      src: {
        defaultValue: null,
        description: "Displays the avatar image.",
        name: "src",
        parent: {
          fileName: "wis/src/packages/avatar/avatar.ts",
          name: "AvatarProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/avatar/avatar.ts",
            name: "AvatarProps",
          },
        ],
        required: false,
        type: { name: "string" },
      },
      size: {
        defaultValue: { value: "md" },
        description: "The size of the avatar.",
        name: "size",
        parent: {
          fileName: "wis/src/packages/avatar/avatar.ts",
          name: "AvatarProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/avatar/avatar.ts",
            name: "AvatarProps",
          },
        ],
        required: false,
        type: {
          name: "enum",
          raw: '"xs" | "sm" | "md" | "lg"',
          value: [
            { value: '"xs"' },
            { value: '"sm"' },
            { value: '"md"' },
            { value: '"lg"' },
          ],
        },
      },
      color: {
        defaultValue: { value: "auto" },
        description:
          "Controls the display color of the avatar. auto color is not completely random, but randomly generated from a list of colors.",
        name: "color",
        parent: {
          fileName: "wis/src/packages/avatar/avatar.ts",
          name: "AvatarProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/avatar/avatar.ts",
            name: "AvatarProps",
          },
        ],
        required: false,
        type: {
          name: "enum",
          raw: '"auto" | "gray" | "blue" | "purple" | "orange" | "red" | "green"',
          value: [
            { value: '"auto"' },
            { value: '"gray"' },
            { value: '"blue"' },
            { value: '"purple"' },
            { value: '"orange"' },
            { value: '"red"' },
            { value: '"green"' },
          ],
        },
      },
      colorSchema: {
        defaultValue: { value: "light" },
        description: "Controls the display color schema of the avatar.",
        name: "colorSchema",
        parent: {
          fileName: "wis/src/packages/avatar/avatar.ts",
          name: "AvatarProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/avatar/avatar.ts",
            name: "AvatarProps",
          },
        ],
        required: false,
        type: {
          name: "enum",
          raw: '"dark" | "light" | "outline"',
          value: [
            { value: '"dark"' },
            { value: '"light"' },
            { value: '"outline"' },
          ],
        },
      },
      shape: {
        defaultValue: { value: "circle" },
        description: "The shape of the avatar to apply.",
        name: "shape",
        parent: {
          fileName: "wis/src/packages/avatar/avatar.ts",
          name: "AvatarProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/avatar/avatar.ts",
            name: "AvatarProps",
          },
        ],
        required: false,
        type: {
          name: "enum",
          raw: '"circle" | "square"',
          value: [{ value: '"circle"' }, { value: '"square"' }],
        },
      },
      name: {
        defaultValue: null,
        description:
          "The name will only be displayed if there is no image or icon.",
        name: "name",
        parent: {
          fileName: "wis/src/packages/avatar/avatar.ts",
          name: "AvatarProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/avatar/avatar.ts",
            name: "AvatarProps",
          },
        ],
        required: true,
        type: { name: "string" },
      },
      initials: {
        defaultValue: null,
        description:
          "When the initials automatically generated from the name do not meet the requirements, you can pass in custom display text through this property.",
        name: "initials",
        parent: {
          fileName: "wis/src/packages/avatar/avatar.ts",
          name: "AvatarProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/avatar/avatar.ts",
            name: "AvatarProps",
          },
        ],
        required: false,
        type: { name: "string" },
      },
    },
  },
  AvatarGroup: {
    tags: { package: "avatar" },
    filePath: "/Volumes/Work/wisdesign/wis/src/packages/avatar/pc/index.ts",
    description: "",
    displayName: "AvatarGroup",
    methods: [],
    props: {
      size: {
        defaultValue: { value: "md" },
        description: "The size of the avatars in avatar group.",
        name: "size",
        parent: {
          fileName: "wis/src/packages/avatar/avatar.ts",
          name: "AvatarGroupProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/avatar/avatar.ts",
            name: "AvatarGroupProps",
          },
        ],
        required: false,
        type: {
          name: "enum",
          raw: '"xs" | "sm" | "md" | "lg"',
          value: [
            { value: '"xs"' },
            { value: '"sm"' },
            { value: '"md"' },
            { value: '"lg"' },
          ],
        },
      },
      color: {
        defaultValue: { value: "auto" },
        description:
          "Controls the display color of the avatar. auto color is not completely random, but randomly generated from a list of colors.",
        name: "color",
        parent: {
          fileName: "wis/src/packages/avatar/avatar.ts",
          name: "AvatarGroupProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/avatar/avatar.ts",
            name: "AvatarGroupProps",
          },
        ],
        required: false,
        type: {
          name: "enum",
          raw: '"auto" | "gray" | "blue" | "purple" | "orange" | "red" | "green"',
          value: [
            { value: '"auto"' },
            { value: '"gray"' },
            { value: '"blue"' },
            { value: '"purple"' },
            { value: '"orange"' },
            { value: '"red"' },
            { value: '"green"' },
          ],
        },
      },
      colorSchema: {
        defaultValue: { value: "light" },
        description: "Controls the display color schema of the avatar.",
        name: "colorSchema",
        parent: {
          fileName: "wis/src/packages/avatar/avatar.ts",
          name: "AvatarGroupProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/avatar/avatar.ts",
            name: "AvatarGroupProps",
          },
        ],
        required: false,
        type: {
          name: "enum",
          raw: '"dark" | "light" | "outline"',
          value: [
            { value: '"dark"' },
            { value: '"light"' },
            { value: '"outline"' },
          ],
        },
      },
      shape: {
        defaultValue: { value: "circle" },
        description: "The shape of the avatar to apply.",
        name: "shape",
        parent: {
          fileName: "wis/src/packages/avatar/avatar.ts",
          name: "AvatarGroupProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/avatar/avatar.ts",
            name: "AvatarGroupProps",
          },
        ],
        required: false,
        type: {
          name: "enum",
          raw: '"circle" | "square"',
          value: [{ value: '"circle"' }, { value: '"square"' }],
        },
      },
    },
  },
  blank: {
    tags: {},
    filePath: "/Volumes/Work/wisdesign/wis/src/packages/blank/index.ts",
    description:
      "Empty Resource Package\n\nIn certain scenarios, such as themes, when the corresponding theme resource cannot be matched, it can be redirected to this resource.",
    displayName: "blank",
    methods: [],
    props: {},
  },
  Box: {
    tags: {},
    filePath: "/Volumes/Work/wisdesign/wis/src/packages/box/pc/index.ts",
    description: "",
    displayName: "Box",
    methods: [],
    props: {},
  },
  BoxHeader: {
    tags: {},
    filePath: "/Volumes/Work/wisdesign/wis/src/packages/box/pc/index.ts",
    description: "",
    displayName: "BoxHeader",
    methods: [],
    props: {
      title: {
        defaultValue: null,
        description: "The title text to display.",
        name: "title",
        parent: {
          fileName: "wis/src/packages/box/box.ts",
          name: "BoxHeaderProps",
        },
        declarations: [
          { fileName: "wis/src/packages/box/box.ts", name: "BoxHeaderProps" },
        ],
        required: true,
        type: { name: "string" },
      },
      description: {
        defaultValue: null,
        description: "The description text to display.",
        name: "description",
        parent: {
          fileName: "wis/src/packages/box/box.ts",
          name: "BoxHeaderProps",
        },
        declarations: [
          { fileName: "wis/src/packages/box/box.ts", name: "BoxHeaderProps" },
        ],
        required: false,
        type: { name: "string" },
      },
    },
  },
  BoxActions: {
    tags: {},
    filePath: "/Volumes/Work/wisdesign/wis/src/packages/box/pc/index.ts",
    description: "",
    displayName: "BoxActions",
    methods: [],
    props: {},
  },
  BoxContent: {
    tags: {},
    filePath: "/Volumes/Work/wisdesign/wis/src/packages/box/pc/index.ts",
    description: "",
    displayName: "BoxContent",
    methods: [],
    props: {},
  },
  BoxCollapsible: {
    tags: {},
    filePath: "/Volumes/Work/wisdesign/wis/src/packages/box/pc/index.ts",
    description: "",
    displayName: "BoxCollapsible",
    methods: [],
    props: {
      defaultCollapsed: {
        defaultValue: { value: true },
        description:
          "The open state of the collapsible when it is initially rendered.",
        name: "defaultCollapsed",
        parent: {
          fileName: "wis/src/packages/box/box.ts",
          name: "BoxCollapsibleProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/box/box.ts",
            name: "BoxCollapsibleProps",
          },
        ],
        required: false,
        type: { name: "boolean" },
      },
      collapsed: {
        defaultValue: null,
        description:
          "The controlled open state of the collapsible. Must be used in conjunction with `onCollapsed`.",
        name: "collapsed",
        parent: {
          fileName: "wis/src/packages/box/box.ts",
          name: "BoxCollapsibleProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/box/box.ts",
            name: "BoxCollapsibleProps",
          },
        ],
        required: false,
        type: { name: "boolean" },
      },
      onCollapsed: {
        defaultValue: null,
        description:
          "Event handler called when the open state of the collapsible changes.",
        name: "onCollapsed",
        parent: {
          fileName: "wis/src/packages/box/box.ts",
          name: "BoxCollapsibleProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/box/box.ts",
            name: "BoxCollapsibleProps",
          },
        ],
        required: false,
        type: { name: "(collapsed: boolean) => void" },
      },
    },
  },
  BoxCollapse: {
    tags: {},
    filePath: "/Volumes/Work/wisdesign/wis/src/packages/box/pc/index.ts",
    description: "",
    displayName: "BoxCollapse",
    methods: [],
    props: {},
  },
  BoxPanel: {
    tags: {},
    filePath: "/Volumes/Work/wisdesign/wis/src/packages/box/pc/index.ts",
    description: "",
    displayName: "BoxPanel",
    methods: [],
    props: {},
  },
  BoxFooter: {
    tags: {},
    filePath: "/Volumes/Work/wisdesign/wis/src/packages/box/pc/index.ts",
    description: "",
    displayName: "BoxFooter",
    methods: [],
    props: {},
  },
  Button: {
    tags: {},
    filePath: "/Volumes/Work/wisdesign/wis/src/packages/button/pc/index.ts",
    description: "",
    displayName: "Button",
    methods: [],
    props: {
      variant: {
        defaultValue: { value: "secondary" },
        description: "The visual variant to apply to button.",
        name: "variant",
        parent: {
          fileName: "wis/src/packages/button/button.ts",
          name: "ButtonProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/button/button.ts",
            name: "ButtonProps",
          },
        ],
        required: false,
        type: {
          name: "enum",
          raw: '"primary" | "classic" | "secondary" | "tertiary" | "ghost"',
          value: [
            { value: '"primary"' },
            { value: '"classic"' },
            { value: '"secondary"' },
            { value: '"tertiary"' },
            { value: '"ghost"' },
          ],
        },
      },
      status: {
        defaultValue: { value: "none" },
        description: "Sets the special status of the button.",
        name: "status",
        parent: {
          fileName: "wis/src/packages/button/button.ts",
          name: "ButtonProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/button/button.ts",
            name: "ButtonProps",
          },
        ],
        required: false,
        type: {
          name: "enum",
          raw: '"none" | "danger"',
          value: [{ value: '"none"' }, { value: '"danger"' }],
        },
      },
      disabled: {
        defaultValue: null,
        description:
          "When `true`, prevents the user from interacting with the button.",
        name: "disabled",
        parent: {
          fileName: "wis/src/packages/button/button.ts",
          name: "ButtonProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/button/button.ts",
            name: "ButtonProps",
          },
        ],
        required: false,
        type: { name: "boolean" },
      },
      text: {
        defaultValue: null,
        description: "The text information displayed on the button.",
        name: "text",
        parent: {
          fileName: "wis/src/packages/button/button.ts",
          name: "ButtonProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/button/button.ts",
            name: "ButtonProps",
          },
        ],
        required: false,
        type: { name: "string" },
      },
      icon: {
        defaultValue: null,
        description:
          "The icon element will be displayed next to the button text.",
        name: "icon",
        parent: {
          fileName: "wis/src/packages/button/button.ts",
          name: "ButtonProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/button/button.ts",
            name: "ButtonProps",
          },
        ],
        required: false,
        type: { name: "ReactNode" },
      },
      iconControl: {
        defaultValue: { value: "prefix" },
        description:
          "Controls the display position of the icon relative to the text.",
        name: "iconControl",
        parent: {
          fileName: "wis/src/packages/button/button.ts",
          name: "ButtonProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/button/button.ts",
            name: "ButtonProps",
          },
        ],
        required: false,
        type: {
          name: "enum",
          raw: '"prefix" | "suffix"',
          value: [{ value: '"prefix"' }, { value: '"suffix"' }],
        },
      },
      size: {
        defaultValue: { value: "md" },
        description: "The size of the button.",
        name: "size",
        parent: {
          fileName: "wis/src/packages/button/button.ts",
          name: "ButtonProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/button/button.ts",
            name: "ButtonProps",
          },
        ],
        required: false,
        type: {
          name: "enum",
          raw: '"sm" | "xs" | "md"',
          value: [{ value: '"sm"' }, { value: '"xs"' }, { value: '"md"' }],
        },
      },
      shortcutKey: {
        defaultValue: null,
        description:
          "Sets a global shortcut key, such as `Control+I`. When the user presses the combination key, the button's click event will be triggered.",
        name: "shortcutKey",
        parent: {
          fileName: "wis/src/packages/button/button.ts",
          name: "ButtonProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/button/button.ts",
            name: "ButtonProps",
          },
        ],
        required: false,
        type: { name: "string" },
      },
      onClick: {
        defaultValue: { value: "() => {}" },
        description: "Event handler called when the button is clicked.",
        name: "onClick",
        parent: {
          fileName: "wis/src/packages/button/button.ts",
          name: "ButtonProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/button/button.ts",
            name: "ButtonProps",
          },
        ],
        required: false,
        type: {
          name: "(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void",
        },
      },
    },
  },
  ContextMenu: {
    tags: {},
    filePath:
      "/Volumes/Work/wisdesign/wis/src/packages/contextMenu/pc/index.ts",
    description: "",
    displayName: "ContextMenu",
    methods: [],
    props: {
      disabled: {
        defaultValue: null,
        description:
          "When `true`, prevents the user from interacting with the context menu.",
        name: "disabled",
        parent: {
          fileName: "wis/src/packages/contextMenu/contextMenu.ts",
          name: "ContextMenuProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/contextMenu/contextMenu.ts",
            name: "ContextMenuProps",
          },
        ],
        required: false,
        type: { name: "boolean" },
      },
      children: {
        defaultValue: null,
        description: "@ignore",
        name: "children",
        parent: {
          fileName: "wis/src/packages/contextMenu/contextMenu.ts",
          name: "ContextMenuProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/contextMenu/contextMenu.ts",
            name: "ContextMenuProps",
          },
        ],
        required: true,
        type: { name: "ReactNode" },
      },
    },
  },
  ContextMenuItem: {
    tags: {},
    filePath:
      "/Volumes/Work/wisdesign/wis/src/packages/contextMenu/pc/index.ts",
    description: "",
    displayName: "ContextMenuItem",
    methods: [],
    props: {
      status: {
        defaultValue: { value: "none" },
        description: "Sets the special status of the item.",
        name: "status",
        parent: {
          fileName: "wis/src/packages/contextMenu/contextMenu.ts",
          name: "ContextMenuItemProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/contextMenu/contextMenu.ts",
            name: "ContextMenuItemProps",
          },
        ],
        required: false,
        type: {
          name: "enum",
          raw: '"none" | "danger"',
          value: [{ value: '"none"' }, { value: '"danger"' }],
        },
      },
      disabled: {
        defaultValue: null,
        description:
          "When `true`, prevents the user from interacting with the context menu item.",
        name: "disabled",
        parent: {
          fileName: "wis/src/packages/contextMenu/contextMenu.ts",
          name: "ContextMenuItemProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/contextMenu/contextMenu.ts",
            name: "ContextMenuItemProps",
          },
        ],
        required: false,
        type: { name: "boolean" },
      },
      label: {
        defaultValue: null,
        description: "The text information displayed on the item.",
        name: "label",
        parent: {
          fileName: "wis/src/packages/contextMenu/contextMenu.ts",
          name: "ContextMenuItemProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/contextMenu/contextMenu.ts",
            name: "ContextMenuItemProps",
          },
        ],
        required: true,
        type: { name: "string" },
      },
      value: {
        defaultValue: null,
        description: "The unique value of the item.",
        name: "value",
        parent: {
          fileName: "wis/src/packages/contextMenu/contextMenu.ts",
          name: "ContextMenuItemProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/contextMenu/contextMenu.ts",
            name: "ContextMenuItemProps",
          },
        ],
        required: true,
        type: { name: "string" },
      },
      icon: {
        defaultValue: null,
        description:
          "The icon element will be displayed next to the context menu item text.",
        name: "icon",
        parent: {
          fileName: "wis/src/packages/contextMenu/contextMenu.ts",
          name: "ContextMenuItemProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/contextMenu/contextMenu.ts",
            name: "ContextMenuItemProps",
          },
        ],
        required: false,
        type: { name: "ReactNode" },
      },
      shortcutKey: {
        defaultValue: null,
        description:
          "Sets a global shortcut key, such as `Control+I`. When the user presses the combination key, the context menu item's click event will be triggered.",
        name: "shortcutKey",
        parent: {
          fileName: "wis/src/packages/contextMenu/contextMenu.ts",
          name: "ContextMenuItemProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/contextMenu/contextMenu.ts",
            name: "ContextMenuItemProps",
          },
        ],
        required: false,
        type: { name: "string" },
      },
      role: {
        defaultValue: null,
        description: "@private",
        name: "role",
        parent: {
          fileName: "wis/src/packages/contextMenu/contextMenu.ts",
          name: "ContextMenuItemProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/contextMenu/contextMenu.ts",
            name: "ContextMenuItemProps",
          },
        ],
        required: false,
        type: {
          name: "enum",
          raw: '"menuitem" | "menuitemcheckbox" | "menuitemradio"',
          value: [
            { value: '"menuitem"' },
            { value: '"menuitemcheckbox"' },
            { value: '"menuitemradio"' },
          ],
        },
      },
      checked: {
        defaultValue: null,
        description: "@private",
        name: "checked",
        parent: {
          fileName: "wis/src/packages/contextMenu/contextMenu.ts",
          name: "ContextMenuItemProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/contextMenu/contextMenu.ts",
            name: "ContextMenuItemProps",
          },
        ],
        required: false,
        type: { name: "boolean" },
      },
      onClick: {
        defaultValue: { value: "() => {}" },
        description:
          "Event handler called when the user select an item (via mouse or keyboard).",
        name: "onClick",
        parent: {
          fileName: "wis/src/packages/contextMenu/contextMenu.ts",
          name: "ContextMenuItemProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/contextMenu/contextMenu.ts",
            name: "ContextMenuItemProps",
          },
        ],
        required: false,
        type: { name: "(event: Event) => void" },
      },
      onCheckedChange: {
        defaultValue: { value: "() => {}" },
        description: "@private",
        name: "onCheckedChange",
        parent: {
          fileName: "wis/src/packages/contextMenu/contextMenu.ts",
          name: "ContextMenuItemProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/contextMenu/contextMenu.ts",
            name: "ContextMenuItemProps",
          },
        ],
        required: false,
        type: { name: "(checked: boolean) => void" },
      },
    },
  },
  ContextMenuGroup: {
    tags: {},
    filePath:
      "/Volumes/Work/wisdesign/wis/src/packages/contextMenu/pc/index.ts",
    description: "",
    displayName: "ContextMenuGroup",
    methods: [],
    props: {
      title: {
        defaultValue: null,
        description:
          "The group title text will show at the beginning of the group.",
        name: "title",
        parent: {
          fileName: "wis/src/packages/contextMenu/contextMenu.ts",
          name: "ContextMenuGroupProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/contextMenu/contextMenu.ts",
            name: "ContextMenuGroupProps",
          },
        ],
        required: true,
        type: { name: "string" },
      },
      children: {
        defaultValue: null,
        description: "@ignore",
        name: "children",
        parent: {
          fileName: "wis/src/packages/contextMenu/contextMenu.ts",
          name: "ContextMenuGroupProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/contextMenu/contextMenu.ts",
            name: "ContextMenuGroupProps",
          },
        ],
        required: true,
        type: { name: "ReactNode" },
      },
      onSelect: {
        defaultValue: { value: "() => {}" },
        description: "Event handler called when group item click.",
        name: "onSelect",
        parent: {
          fileName: "wis/src/packages/contextMenu/contextMenu.ts",
          name: "ContextMenuGroupProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/contextMenu/contextMenu.ts",
            name: "ContextMenuGroupProps",
          },
        ],
        required: false,
        type: { name: "(value: string) => void" },
      },
    },
  },
  ContextMenuCheckboxGroup: {
    tags: {},
    filePath:
      "/Volumes/Work/wisdesign/wis/src/packages/contextMenu/pc/index.ts",
    description: "",
    displayName: "ContextMenuCheckboxGroup",
    methods: [],
    props: {
      name: {
        defaultValue: null,
        description: "The unique name of group.",
        name: "name",
        parent: {
          fileName: "wis/src/packages/contextMenu/contextMenu.ts",
          name: "ContextMenuCheckboxGroupProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/contextMenu/contextMenu.ts",
            name: "ContextMenuCheckboxGroupProps",
          },
        ],
        required: true,
        type: { name: "string" },
      },
      title: {
        defaultValue: null,
        description:
          "The group title text will show at the beginning of the group.",
        name: "title",
        parent: {
          fileName: "wis/src/packages/contextMenu/contextMenu.ts",
          name: "ContextMenuCheckboxGroupProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/contextMenu/contextMenu.ts",
            name: "ContextMenuCheckboxGroupProps",
          },
        ],
        required: true,
        type: { name: "string" },
      },
      value: {
        defaultValue: null,
        description:
          "The value of selected item in the group. Must be used in conjunction with `onChange`.",
        name: "value",
        parent: {
          fileName: "wis/src/packages/contextMenu/contextMenu.ts",
          name: "ContextMenuCheckboxGroupProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/contextMenu/contextMenu.ts",
            name: "ContextMenuCheckboxGroupProps",
          },
        ],
        required: false,
        type: { name: "string[]" },
      },
      defaultValue: {
        defaultValue: null,
        description: "The default value of selected item in the group.",
        name: "defaultValue",
        parent: {
          fileName: "wis/src/packages/contextMenu/contextMenu.ts",
          name: "ContextMenuCheckboxGroupProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/contextMenu/contextMenu.ts",
            name: "ContextMenuCheckboxGroupProps",
          },
        ],
        required: false,
        type: { name: "string[]" },
      },
      children: {
        defaultValue: null,
        description: "@ignore",
        name: "children",
        parent: {
          fileName: "wis/src/packages/contextMenu/contextMenu.ts",
          name: "ContextMenuCheckboxGroupProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/contextMenu/contextMenu.ts",
            name: "ContextMenuCheckboxGroupProps",
          },
        ],
        required: true,
        type: { name: "ReactNode" },
      },
      onChange: {
        defaultValue: { value: "() => {}" },
        description: "Event handler called when group item click.",
        name: "onChange",
        parent: {
          fileName: "wis/src/packages/contextMenu/contextMenu.ts",
          name: "ContextMenuCheckboxGroupProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/contextMenu/contextMenu.ts",
            name: "ContextMenuCheckboxGroupProps",
          },
        ],
        required: false,
        type: { name: "(values: string[]) => void" },
      },
    },
  },
  ContextMenuRadioGroup: {
    tags: {},
    filePath:
      "/Volumes/Work/wisdesign/wis/src/packages/contextMenu/pc/index.ts",
    description: "",
    displayName: "ContextMenuRadioGroup",
    methods: [],
    props: {
      name: {
        defaultValue: null,
        description: "The unique name of group.",
        name: "name",
        parent: {
          fileName: "wis/src/packages/contextMenu/contextMenu.ts",
          name: "ContextMenuRadioGroupProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/contextMenu/contextMenu.ts",
            name: "ContextMenuRadioGroupProps",
          },
        ],
        required: true,
        type: { name: "string" },
      },
      title: {
        defaultValue: null,
        description:
          "The group title text will show at the beginning of the group.",
        name: "title",
        parent: {
          fileName: "wis/src/packages/contextMenu/contextMenu.ts",
          name: "ContextMenuRadioGroupProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/contextMenu/contextMenu.ts",
            name: "ContextMenuRadioGroupProps",
          },
        ],
        required: true,
        type: { name: "string" },
      },
      value: {
        defaultValue: null,
        description:
          "The value of selected item in the group. Must be used in conjunction with `onChecked`.",
        name: "value",
        parent: {
          fileName: "wis/src/packages/contextMenu/contextMenu.ts",
          name: "ContextMenuRadioGroupProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/contextMenu/contextMenu.ts",
            name: "ContextMenuRadioGroupProps",
          },
        ],
        required: false,
        type: { name: "string" },
      },
      defaultValue: {
        defaultValue: null,
        description: "The default value of selected item in the group.",
        name: "defaultValue",
        parent: {
          fileName: "wis/src/packages/contextMenu/contextMenu.ts",
          name: "ContextMenuRadioGroupProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/contextMenu/contextMenu.ts",
            name: "ContextMenuRadioGroupProps",
          },
        ],
        required: false,
        type: { name: "string" },
      },
      children: {
        defaultValue: null,
        description: "@ignore",
        name: "children",
        parent: {
          fileName: "wis/src/packages/contextMenu/contextMenu.ts",
          name: "ContextMenuRadioGroupProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/contextMenu/contextMenu.ts",
            name: "ContextMenuRadioGroupProps",
          },
        ],
        required: true,
        type: { name: "ReactNode" },
      },
      onChange: {
        defaultValue: { value: "() => {}" },
        description: "Event handler called when group item click.",
        name: "onChange",
        parent: {
          fileName: "wis/src/packages/contextMenu/contextMenu.ts",
          name: "ContextMenuRadioGroupProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/contextMenu/contextMenu.ts",
            name: "ContextMenuRadioGroupProps",
          },
        ],
        required: false,
        type: { name: "(value: string) => void" },
      },
    },
  },
  isElement: {
    tags: {},
    filePath: "/Volumes/Work/wisdesign/wis/src/packages/core/index.ts",
    description:
      "Checks if the component matches the specified type. If the component node is a symbiotic component,\nit continues to check if the symbiotic component matches the specified type.",
    displayName: "isElement",
    methods: [],
    props: {},
  },
  getSymbioteElement: {
    tags: {},
    filePath: "/Volumes/Work/wisdesign/wis/src/packages/core/index.ts",
    description: "",
    displayName: "getSymbioteElement",
    methods: [],
    props: {},
  },
  Dropdown: {
    tags: {},
    filePath: "/Volumes/Work/wisdesign/wis/src/packages/dropdown/pc/index.ts",
    description: "",
    displayName: "Dropdown",
    methods: [],
    props: {
      open: {
        defaultValue: null,
        description:
          "The controlled open state of the dropdown menu. Must be used in conjunction with `onOpen`.",
        name: "open",
        parent: {
          fileName: "wis/src/packages/dropdown/dropdown.ts",
          name: "DropdownProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/dropdown/dropdown.ts",
            name: "DropdownProps",
          },
        ],
        required: false,
        type: { name: "boolean" },
      },
      defaultOpen: {
        defaultValue: null,
        description:
          "The open state of the dropdown menu when it is initially rendered.",
        name: "defaultOpen",
        parent: {
          fileName: "wis/src/packages/dropdown/dropdown.ts",
          name: "DropdownProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/dropdown/dropdown.ts",
            name: "DropdownProps",
          },
        ],
        required: false,
        type: { name: "boolean" },
      },
      disabled: {
        defaultValue: null,
        description:
          "When `true`, prevents the user from interacting with the dropdown.",
        name: "disabled",
        parent: {
          fileName: "wis/src/packages/dropdown/dropdown.ts",
          name: "DropdownProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/dropdown/dropdown.ts",
            name: "DropdownProps",
          },
        ],
        required: false,
        type: { name: "boolean" },
      },
      text: {
        defaultValue: null,
        description: "The text information displayed on the dropdown menu.",
        name: "text",
        parent: {
          fileName: "wis/src/packages/dropdown/dropdown.ts",
          name: "DropdownProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/dropdown/dropdown.ts",
            name: "DropdownProps",
          },
        ],
        required: false,
        type: { name: "string" },
      },
      description: {
        defaultValue: null,
        description: "Describe the dropdown menu.",
        name: "description",
        parent: {
          fileName: "wis/src/packages/dropdown/dropdown.ts",
          name: "DropdownProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/dropdown/dropdown.ts",
            name: "DropdownProps",
          },
        ],
        required: false,
        type: { name: "string" },
      },
      icon: {
        defaultValue: null,
        description:
          "The icon element will be displayed next to the dropdown menu text.",
        name: "icon",
        parent: {
          fileName: "wis/src/packages/dropdown/dropdown.ts",
          name: "DropdownProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/dropdown/dropdown.ts",
            name: "DropdownProps",
          },
        ],
        required: false,
        type: { name: "ReactNode" },
      },
      avatar: {
        defaultValue: null,
        description:
          "The avatar element will be displayed next to the dropdown menu text.",
        name: "avatar",
        parent: {
          fileName: "wis/src/packages/dropdown/dropdown.ts",
          name: "DropdownProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/dropdown/dropdown.ts",
            name: "DropdownProps",
          },
        ],
        required: false,
        type: { name: "ReactNode" },
      },
      arrowDirection: {
        defaultValue: null,
        description: "The controlled dropdown menu arrow direction.",
        name: "arrowDirection",
        parent: {
          fileName: "wis/src/packages/dropdown/dropdown.ts",
          name: "DropdownProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/dropdown/dropdown.ts",
            name: "DropdownProps",
          },
        ],
        required: false,
        type: {
          name: "enum",
          raw: '"down" | "right"',
          value: [{ value: '"down"' }, { value: '"right"' }],
        },
      },
      onOpen: {
        defaultValue: null,
        description:
          "Event handler called when the dropdown menu is open state change.",
        name: "onOpen",
        parent: {
          fileName: "wis/src/packages/dropdown/dropdown.ts",
          name: "DropdownProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/dropdown/dropdown.ts",
            name: "DropdownProps",
          },
        ],
        required: false,
        type: { name: "(open: boolean) => void" },
      },
    },
  },
  DropdownButton: {
    tags: { package: "dropdown" },
    filePath: "/Volumes/Work/wisdesign/wis/src/packages/dropdown/pc/index.ts",
    description: "",
    displayName: "DropdownButton",
    methods: [],
    props: {
      open: {
        defaultValue: null,
        description:
          "The controlled open state of the dropdown menu. Must be used in conjunction with `onOpen`.",
        name: "open",
        parent: {
          fileName: "wis/src/packages/dropdown/dropdown.ts",
          name: "DropdownButtonProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/dropdown/dropdown.ts",
            name: "DropdownButtonProps",
          },
        ],
        required: false,
        type: { name: "boolean" },
      },
      defaultOpen: {
        defaultValue: null,
        description:
          "The open state of the dropdown menu when it is initially rendered.",
        name: "defaultOpen",
        parent: {
          fileName: "wis/src/packages/dropdown/dropdown.ts",
          name: "DropdownButtonProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/dropdown/dropdown.ts",
            name: "DropdownButtonProps",
          },
        ],
        required: false,
        type: { name: "boolean" },
      },
      variant: {
        defaultValue: null,
        description: "The visual variant to apply to dropdown button.",
        name: "variant",
        parent: {
          fileName: "wis/src/packages/dropdown/dropdown.ts",
          name: "DropdownButtonProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/dropdown/dropdown.ts",
            name: "DropdownButtonProps",
          },
        ],
        required: false,
        type: {
          name: "enum",
          raw: '"primary" | "classic" | "secondary"',
          value: [
            { value: '"primary"' },
            { value: '"classic"' },
            { value: '"secondary"' },
          ],
        },
      },
      disabled: {
        defaultValue: null,
        description:
          "When `true`, prevents the user from interacting with the dropdown button.",
        name: "disabled",
        parent: {
          fileName: "wis/src/packages/dropdown/dropdown.ts",
          name: "DropdownButtonProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/dropdown/dropdown.ts",
            name: "DropdownButtonProps",
          },
        ],
        required: false,
        type: { name: "boolean" },
      },
      text: {
        defaultValue: null,
        description: "The text information displayed on the dropdown menu.",
        name: "text",
        parent: {
          fileName: "wis/src/packages/dropdown/dropdown.ts",
          name: "DropdownButtonProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/dropdown/dropdown.ts",
            name: "DropdownButtonProps",
          },
        ],
        required: false,
        type: { name: "string" },
      },
      icon: {
        defaultValue: null,
        description:
          "The icon element will be displayed next to the dropdown button text.",
        name: "icon",
        parent: {
          fileName: "wis/src/packages/dropdown/dropdown.ts",
          name: "DropdownButtonProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/dropdown/dropdown.ts",
            name: "DropdownButtonProps",
          },
        ],
        required: false,
        type: { name: "ReactNode" },
      },
      iconControl: {
        defaultValue: null,
        description:
          "Controls the display position of the icon relative to the text.",
        name: "iconControl",
        parent: {
          fileName: "wis/src/packages/dropdown/dropdown.ts",
          name: "DropdownButtonProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/dropdown/dropdown.ts",
            name: "DropdownButtonProps",
          },
        ],
        required: false,
        type: {
          name: "enum",
          raw: '"prefix" | "suffix"',
          value: [{ value: '"prefix"' }, { value: '"suffix"' }],
        },
      },
      size: {
        defaultValue: null,
        description: "The size of the dropdown button.",
        name: "size",
        parent: {
          fileName: "wis/src/packages/dropdown/dropdown.ts",
          name: "DropdownButtonProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/dropdown/dropdown.ts",
            name: "DropdownButtonProps",
          },
        ],
        required: false,
        type: {
          name: "enum",
          raw: '"sm" | "xs" | "md"',
          value: [{ value: '"sm"' }, { value: '"xs"' }, { value: '"md"' }],
        },
      },
      shortcutKey: {
        defaultValue: null,
        description:
          "Sets a global shortcut key, such as `Control+I`. When the user presses the combination key, the dropdown button click event will be triggered.",
        name: "shortcutKey",
        parent: {
          fileName: "wis/src/packages/dropdown/dropdown.ts",
          name: "DropdownButtonProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/dropdown/dropdown.ts",
            name: "DropdownButtonProps",
          },
        ],
        required: false,
        type: { name: "string" },
      },
      onOpen: {
        defaultValue: null,
        description:
          "Event handler called when the dropdown menu is open state change.",
        name: "onOpen",
        parent: {
          fileName: "wis/src/packages/dropdown/dropdown.ts",
          name: "DropdownButtonProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/dropdown/dropdown.ts",
            name: "DropdownButtonProps",
          },
        ],
        required: false,
        type: { name: "(open: boolean) => void" },
      },
    },
  },
  DropdownGroup: {
    tags: { package: "dropdown" },
    filePath: "/Volumes/Work/wisdesign/wis/src/packages/dropdown/pc/index.ts",
    description: "",
    displayName: "DropdownGroup",
    methods: [],
    props: {
      title: {
        defaultValue: null,
        description:
          "The group title text will show at the beginning of the group.",
        name: "title",
        parent: {
          fileName: "wis/src/packages/dropdown/dropdown.ts",
          name: "DropdownGroupProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/dropdown/dropdown.ts",
            name: "DropdownGroupProps",
          },
        ],
        required: true,
        type: { name: "string" },
      },
      children: {
        defaultValue: null,
        description: "@ignore",
        name: "children",
        parent: {
          fileName: "wis/src/packages/dropdown/dropdown.ts",
          name: "DropdownGroupProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/dropdown/dropdown.ts",
            name: "DropdownGroupProps",
          },
        ],
        required: true,
        type: { name: "ReactNode" },
      },
      onSelect: {
        defaultValue: { value: "() => {}" },
        description: "Event handler called when group item click.",
        name: "onSelect",
        parent: {
          fileName: "wis/src/packages/dropdown/dropdown.ts",
          name: "DropdownGroupProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/dropdown/dropdown.ts",
            name: "DropdownGroupProps",
          },
        ],
        required: false,
        type: { name: "(value: string) => void" },
      },
    },
  },
  DropdownCheckboxGroup: {
    tags: { package: "dropdown" },
    filePath: "/Volumes/Work/wisdesign/wis/src/packages/dropdown/pc/index.ts",
    description: "",
    displayName: "DropdownCheckboxGroup",
    methods: [],
    props: {
      name: {
        defaultValue: null,
        description: "The unique name of group.",
        name: "name",
        parent: {
          fileName: "wis/src/packages/dropdown/dropdown.ts",
          name: "DropdownCheckboxGroupProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/dropdown/dropdown.ts",
            name: "DropdownCheckboxGroupProps",
          },
        ],
        required: true,
        type: { name: "string" },
      },
      title: {
        defaultValue: null,
        description:
          "The group title text will show at the beginning of the group.",
        name: "title",
        parent: {
          fileName: "wis/src/packages/dropdown/dropdown.ts",
          name: "DropdownCheckboxGroupProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/dropdown/dropdown.ts",
            name: "DropdownCheckboxGroupProps",
          },
        ],
        required: true,
        type: { name: "string" },
      },
      value: {
        defaultValue: null,
        description:
          "The value of selected item in the group. Must be used in conjunction with `onChange`.",
        name: "value",
        parent: {
          fileName: "wis/src/packages/dropdown/dropdown.ts",
          name: "DropdownCheckboxGroupProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/dropdown/dropdown.ts",
            name: "DropdownCheckboxGroupProps",
          },
        ],
        required: false,
        type: { name: "string[]" },
      },
      defaultValue: {
        defaultValue: null,
        description: "The default value of selected item in the group.",
        name: "defaultValue",
        parent: {
          fileName: "wis/src/packages/dropdown/dropdown.ts",
          name: "DropdownCheckboxGroupProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/dropdown/dropdown.ts",
            name: "DropdownCheckboxGroupProps",
          },
        ],
        required: false,
        type: { name: "string[]" },
      },
      children: {
        defaultValue: null,
        description: "@ignore",
        name: "children",
        parent: {
          fileName: "wis/src/packages/dropdown/dropdown.ts",
          name: "DropdownCheckboxGroupProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/dropdown/dropdown.ts",
            name: "DropdownCheckboxGroupProps",
          },
        ],
        required: true,
        type: { name: "ReactNode" },
      },
      onChange: {
        defaultValue: { value: "() => {}" },
        description: "Event handler called when group item click.",
        name: "onChange",
        parent: {
          fileName: "wis/src/packages/dropdown/dropdown.ts",
          name: "DropdownCheckboxGroupProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/dropdown/dropdown.ts",
            name: "DropdownCheckboxGroupProps",
          },
        ],
        required: false,
        type: { name: "(values: string[]) => void" },
      },
    },
  },
  DropdownRadioGroup: {
    tags: { package: "dropdown" },
    filePath: "/Volumes/Work/wisdesign/wis/src/packages/dropdown/pc/index.ts",
    description: "",
    displayName: "DropdownRadioGroup",
    methods: [],
    props: {
      name: {
        defaultValue: null,
        description: "The unique name of group.",
        name: "name",
        parent: {
          fileName: "wis/src/packages/dropdown/dropdown.ts",
          name: "DropdownRadioGroupProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/dropdown/dropdown.ts",
            name: "DropdownRadioGroupProps",
          },
        ],
        required: true,
        type: { name: "string" },
      },
      title: {
        defaultValue: null,
        description:
          "The group title text will show at the beginning of the group.",
        name: "title",
        parent: {
          fileName: "wis/src/packages/dropdown/dropdown.ts",
          name: "DropdownRadioGroupProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/dropdown/dropdown.ts",
            name: "DropdownRadioGroupProps",
          },
        ],
        required: true,
        type: { name: "string" },
      },
      value: {
        defaultValue: null,
        description:
          "The value of selected item in the group. Must be used in conjunction with `onChecked`.",
        name: "value",
        parent: {
          fileName: "wis/src/packages/dropdown/dropdown.ts",
          name: "DropdownRadioGroupProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/dropdown/dropdown.ts",
            name: "DropdownRadioGroupProps",
          },
        ],
        required: false,
        type: { name: "string" },
      },
      defaultValue: {
        defaultValue: null,
        description: "The default value of selected item in the group.",
        name: "defaultValue",
        parent: {
          fileName: "wis/src/packages/dropdown/dropdown.ts",
          name: "DropdownRadioGroupProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/dropdown/dropdown.ts",
            name: "DropdownRadioGroupProps",
          },
        ],
        required: false,
        type: { name: "string" },
      },
      children: {
        defaultValue: null,
        description: "@ignore",
        name: "children",
        parent: {
          fileName: "wis/src/packages/dropdown/dropdown.ts",
          name: "DropdownRadioGroupProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/dropdown/dropdown.ts",
            name: "DropdownRadioGroupProps",
          },
        ],
        required: true,
        type: { name: "ReactNode" },
      },
      onChange: {
        defaultValue: { value: "() => {}" },
        description: "Event handler called when group item click.",
        name: "onChange",
        parent: {
          fileName: "wis/src/packages/dropdown/dropdown.ts",
          name: "DropdownRadioGroupProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/dropdown/dropdown.ts",
            name: "DropdownRadioGroupProps",
          },
        ],
        required: false,
        type: { name: "(value: string) => void" },
      },
    },
  },
  DropdownItem: {
    tags: { package: "dropdown" },
    filePath: "/Volumes/Work/wisdesign/wis/src/packages/dropdown/pc/index.ts",
    description: "",
    displayName: "DropdownItem",
    methods: [],
    props: {
      status: {
        defaultValue: null,
        description: "Sets the special status of the item.",
        name: "status",
        parent: {
          fileName: "wis/src/packages/dropdown/dropdown.ts",
          name: "DropdownItemProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/dropdown/dropdown.ts",
            name: "DropdownItemProps",
          },
        ],
        required: false,
        type: {
          name: "enum",
          raw: '"none" | "danger"',
          value: [{ value: '"none"' }, { value: '"danger"' }],
        },
      },
      disabled: {
        defaultValue: null,
        description:
          "When `true`, prevents the user from interacting with the dropdown item.",
        name: "disabled",
        parent: {
          fileName: "wis/src/packages/dropdown/dropdown.ts",
          name: "DropdownItemProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/dropdown/dropdown.ts",
            name: "DropdownItemProps",
          },
        ],
        required: false,
        type: { name: "boolean" },
      },
      label: {
        defaultValue: null,
        description: "The text information displayed on the item.",
        name: "label",
        parent: {
          fileName: "wis/src/packages/dropdown/dropdown.ts",
          name: "DropdownItemProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/dropdown/dropdown.ts",
            name: "DropdownItemProps",
          },
        ],
        required: true,
        type: { name: "string" },
      },
      value: {
        defaultValue: null,
        description: "The unique value of the item.",
        name: "value",
        parent: {
          fileName: "wis/src/packages/dropdown/dropdown.ts",
          name: "DropdownItemProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/dropdown/dropdown.ts",
            name: "DropdownItemProps",
          },
        ],
        required: true,
        type: { name: "string" },
      },
      icon: {
        defaultValue: null,
        description:
          "The icon element will be displayed next to the dropdown item text.",
        name: "icon",
        parent: {
          fileName: "wis/src/packages/dropdown/dropdown.ts",
          name: "DropdownItemProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/dropdown/dropdown.ts",
            name: "DropdownItemProps",
          },
        ],
        required: false,
        type: { name: "ReactNode" },
      },
      shortcutKey: {
        defaultValue: null,
        description:
          "Sets a global shortcut key, such as `Control+I`. When the user presses the combination key, the dropdown item's click event will be triggered.",
        name: "shortcutKey",
        parent: {
          fileName: "wis/src/packages/dropdown/dropdown.ts",
          name: "DropdownItemProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/dropdown/dropdown.ts",
            name: "DropdownItemProps",
          },
        ],
        required: false,
        type: { name: "string" },
      },
      role: {
        defaultValue: null,
        description: "@private",
        name: "role",
        parent: {
          fileName: "wis/src/packages/dropdown/dropdown.ts",
          name: "DropdownItemProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/dropdown/dropdown.ts",
            name: "DropdownItemProps",
          },
        ],
        required: false,
        type: {
          name: "enum",
          raw: '"menuitem" | "menuitemcheckbox" | "menuitemradio"',
          value: [
            { value: '"menuitem"' },
            { value: '"menuitemcheckbox"' },
            { value: '"menuitemradio"' },
          ],
        },
      },
      checked: {
        defaultValue: null,
        description: "@private",
        name: "checked",
        parent: {
          fileName: "wis/src/packages/dropdown/dropdown.ts",
          name: "DropdownItemProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/dropdown/dropdown.ts",
            name: "DropdownItemProps",
          },
        ],
        required: false,
        type: { name: "boolean" },
      },
      onClick: {
        defaultValue: { value: "() => {}" },
        description:
          "Event handler called when the user select an item (via mouse or keyboard).",
        name: "onClick",
        parent: {
          fileName: "wis/src/packages/dropdown/dropdown.ts",
          name: "DropdownItemProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/dropdown/dropdown.ts",
            name: "DropdownItemProps",
          },
        ],
        required: false,
        type: { name: "(event: Event) => void" },
      },
      onCheckedChange: {
        defaultValue: { value: "() => {}" },
        description: "@private",
        name: "onCheckedChange",
        parent: {
          fileName: "wis/src/packages/dropdown/dropdown.ts",
          name: "DropdownItemProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/dropdown/dropdown.ts",
            name: "DropdownItemProps",
          },
        ],
        required: false,
        type: { name: "(checked: boolean) => void" },
      },
    },
  },
  Row: {
    tags: {},
    filePath: "/Volumes/Work/wisdesign/wis/src/packages/grid/index.ts",
    description: "",
    displayName: "Row",
    methods: [],
    props: {
      gutter: {
        defaultValue: { value: true },
        description: "",
        name: "gutter",
        parent: { fileName: "wis/src/packages/grid/grid.ts", name: "RowProps" },
        declarations: [
          { fileName: "wis/src/packages/grid/grid.ts", name: "RowProps" },
        ],
        required: false,
        type: { name: "boolean" },
      },
      responsive: {
        defaultValue: null,
        description: "",
        name: "responsive",
        parent: { fileName: "wis/src/packages/grid/grid.ts", name: "RowProps" },
        declarations: [
          { fileName: "wis/src/packages/grid/grid.ts", name: "RowProps" },
        ],
        required: false,
        type: { name: "boolean" },
      },
    },
  },
  Col: {
    tags: {},
    filePath: "/Volumes/Work/wisdesign/wis/src/packages/grid/index.ts",
    description: "",
    displayName: "Col",
    methods: [],
    props: {
      size: {
        defaultValue: { value: 12 },
        description: "",
        name: "size",
        parent: { fileName: "wis/src/packages/grid/grid.ts", name: "ColProps" },
        declarations: [
          { fileName: "wis/src/packages/grid/grid.ts", name: "ColProps" },
        ],
        required: false,
        type: { name: "Size | ResponsiveSize" },
      },
      offset: {
        defaultValue: null,
        description: "",
        name: "offset",
        parent: { fileName: "wis/src/packages/grid/grid.ts", name: "ColProps" },
        declarations: [
          { fileName: "wis/src/packages/grid/grid.ts", name: "ColProps" },
        ],
        required: false,
        type: { name: "Size | ResponsiveSize" },
      },
    },
  },
  isSize: {
    tags: {},
    filePath: "/Volumes/Work/wisdesign/wis/src/packages/grid/index.ts",
    description: "",
    displayName: "isSize",
    methods: [],
    props: {},
  },
  isResponsiveSize: {
    tags: {},
    filePath: "/Volumes/Work/wisdesign/wis/src/packages/grid/index.ts",
    description: "",
    displayName: "isResponsiveSize",
    methods: [],
    props: {},
  },
  Main: {
    tags: {},
    filePath: "/Volumes/Work/wisdesign/wis/src/packages/layout/pc/index.ts",
    description: "",
    displayName: "Main",
    methods: [],
    props: {
      title: {
        defaultValue: null,
        description: "The title text will show in the layout header.",
        name: "title",
        parent: {
          fileName: "wis/src/packages/layout/layout.ts",
          name: "LayoutProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/layout/layout.ts",
            name: "LayoutProps",
          },
        ],
        required: false,
        type: { name: "string" },
      },
      description: {
        defaultValue: null,
        description: "Describe the layout.",
        name: "description",
        parent: {
          fileName: "wis/src/packages/layout/layout.ts",
          name: "LayoutProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/layout/layout.ts",
            name: "LayoutProps",
          },
        ],
        required: false,
        type: { name: "string" },
      },
      gutter: {
        defaultValue: null,
        description:
          "Controls whether the layout has margins in responsive mode.\n@private",
        name: "gutter",
        parent: {
          fileName: "wis/src/packages/layout/layout.ts",
          name: "LayoutProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/layout/layout.ts",
            name: "LayoutProps",
          },
        ],
        required: false,
        type: { name: "boolean" },
      },
      responsive: {
        defaultValue: null,
        description:
          "Enable responsive functionality for the layout content area\n@private",
        name: "responsive",
        parent: {
          fileName: "wis/src/packages/layout/layout.ts",
          name: "LayoutProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/layout/layout.ts",
            name: "LayoutProps",
          },
        ],
        required: false,
        type: { name: "boolean" },
      },
    },
  },
  Left: {
    tags: {},
    filePath: "/Volumes/Work/wisdesign/wis/src/packages/layout/pc/index.ts",
    description: "",
    displayName: "Left",
    methods: [],
    props: {
      title: {
        defaultValue: null,
        description: "The title text will show in the layout header.",
        name: "title",
        parent: {
          fileName: "wis/src/packages/layout/layout.ts",
          name: "LayoutProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/layout/layout.ts",
            name: "LayoutProps",
          },
        ],
        required: false,
        type: { name: "string" },
      },
      description: {
        defaultValue: null,
        description: "Describe the layout.",
        name: "description",
        parent: {
          fileName: "wis/src/packages/layout/layout.ts",
          name: "LayoutProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/layout/layout.ts",
            name: "LayoutProps",
          },
        ],
        required: false,
        type: { name: "string" },
      },
    },
  },
  Right: {
    tags: {},
    filePath: "/Volumes/Work/wisdesign/wis/src/packages/layout/pc/index.ts",
    description: "",
    displayName: "Right",
    methods: [],
    props: {
      title: {
        defaultValue: null,
        description: "The title text will show in the layout header.",
        name: "title",
        parent: {
          fileName: "wis/src/packages/layout/layout.ts",
          name: "LayoutProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/layout/layout.ts",
            name: "LayoutProps",
          },
        ],
        required: false,
        type: { name: "string" },
      },
      description: {
        defaultValue: null,
        description: "Describe the layout.",
        name: "description",
        parent: {
          fileName: "wis/src/packages/layout/layout.ts",
          name: "LayoutProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/layout/layout.ts",
            name: "LayoutProps",
          },
        ],
        required: false,
        type: { name: "string" },
      },
    },
  },
  Top: {
    tags: {},
    filePath: "/Volumes/Work/wisdesign/wis/src/packages/layout/pc/index.ts",
    description: "",
    displayName: "Top",
    methods: [],
    props: {},
  },
  Bottom: {
    tags: {},
    filePath: "/Volumes/Work/wisdesign/wis/src/packages/layout/pc/index.ts",
    description: "",
    displayName: "Bottom",
    methods: [],
    props: {
      title: {
        defaultValue: null,
        description: "The title text will show in the layout header.",
        name: "title",
        parent: {
          fileName: "wis/src/packages/layout/layout.ts",
          name: "LayoutProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/layout/layout.ts",
            name: "LayoutProps",
          },
        ],
        required: false,
        type: { name: "string" },
      },
      description: {
        defaultValue: null,
        description: "Describe the layout.",
        name: "description",
        parent: {
          fileName: "wis/src/packages/layout/layout.ts",
          name: "LayoutProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/layout/layout.ts",
            name: "LayoutProps",
          },
        ],
        required: false,
        type: { name: "string" },
      },
    },
  },
  Module: {
    tags: {},
    filePath: "/Volumes/Work/wisdesign/wis/src/packages/module/pc/index.ts",
    description: "",
    displayName: "Module",
    methods: [],
    props: {
      title: {
        defaultValue: null,
        description: "The title text will show in the module header.",
        name: "title",
        parent: {
          fileName: "wis/src/packages/module/module.ts",
          name: "ModuleProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/module/module.ts",
            name: "ModuleProps",
          },
        ],
        required: true,
        type: { name: "string" },
      },
      description: {
        defaultValue: null,
        description: "Describe the module.",
        name: "description",
        parent: {
          fileName: "wis/src/packages/module/module.ts",
          name: "ModuleProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/module/module.ts",
            name: "ModuleProps",
          },
        ],
        required: false,
        type: { name: "string" },
      },
      variant: {
        defaultValue: { value: "basic" },
        description: "The visual variant to apply to module.",
        name: "variant",
        parent: {
          fileName: "wis/src/packages/module/module.ts",
          name: "ModuleProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/module/module.ts",
            name: "ModuleProps",
          },
        ],
        required: false,
        type: {
          name: "enum",
          raw: '"basic" | "ghost"',
          value: [{ value: '"basic"' }, { value: '"ghost"' }],
        },
      },
      size: {
        defaultValue: null,
        description:
          "Sets the number of columns the module occupies, with a total of 12 columns, and supports responsive settings.",
        name: "size",
        parent: {
          fileName: "wis/src/packages/module/module.ts",
          name: "ModuleProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/module/module.ts",
            name: "ModuleProps",
          },
        ],
        required: false,
        type: { name: "any" },
      },
      collapsible: {
        defaultValue: null,
        description: "Whether the module is collapsible.",
        name: "collapsible",
        parent: {
          fileName: "wis/src/packages/module/module.ts",
          name: "ModuleProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/module/module.ts",
            name: "ModuleProps",
          },
        ],
        required: false,
        type: { name: "boolean" },
      },
      collapsed: {
        defaultValue: null,
        description:
          "The controlled collapse state of the module. Must be used in conjunction with `onCollapsed`",
        name: "collapsed",
        parent: {
          fileName: "wis/src/packages/module/module.ts",
          name: "ModuleProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/module/module.ts",
            name: "ModuleProps",
          },
        ],
        required: false,
        type: { name: "boolean" },
      },
      defaultCollapsed: {
        defaultValue: null,
        description:
          "The collapse state of the module when it is initially rendered.",
        name: "defaultCollapsed",
        parent: {
          fileName: "wis/src/packages/module/module.ts",
          name: "ModuleProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/module/module.ts",
            name: "ModuleProps",
          },
        ],
        required: false,
        type: { name: "boolean" },
      },
      onCollapsed: {
        defaultValue: null,
        description:
          "Event handler called when the module is collapse state change.",
        name: "onCollapsed",
        parent: {
          fileName: "wis/src/packages/module/module.ts",
          name: "ModuleProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/module/module.ts",
            name: "ModuleProps",
          },
        ],
        required: false,
        type: { name: "(collapsed: boolean) => void" },
      },
    },
  },
  Page: {
    tags: {},
    filePath: "/Volumes/Work/wisdesign/wis/src/packages/page/pc/index.ts",
    description: "",
    displayName: "Page",
    methods: [],
    props: {
      title: {
        defaultValue: null,
        description: "The title text will show in the page header.",
        name: "title",
        parent: {
          fileName: "wis/src/packages/page/page.ts",
          name: "PageProps",
        },
        declarations: [
          { fileName: "wis/src/packages/page/page.ts", name: "PageProps" },
        ],
        required: true,
        type: { name: "string" },
      },
      description: {
        defaultValue: null,
        description: "The description text will show in the page header.",
        name: "description",
        parent: {
          fileName: "wis/src/packages/page/page.ts",
          name: "PageProps",
        },
        declarations: [
          { fileName: "wis/src/packages/page/page.ts", name: "PageProps" },
        ],
        required: false,
        type: { name: "string" },
      },
    },
  },
  Shortcut: {
    tags: {},
    filePath: "/Volumes/Work/wisdesign/wis/src/packages/shortcut/pc/index.ts",
    description: "",
    displayName: "Shortcut",
    methods: [],
    props: {
      shortcutKey: {
        defaultValue: null,
        description:
          "Sets a global shortcut key, such as `Control+I`. When the user presses the combination key, the onKeyPressed event will be triggered.",
        name: "shortcutKey",
        parent: {
          fileName: "wis/src/packages/shortcut/shortcut.ts",
          name: "ShortcutProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/shortcut/shortcut.ts",
            name: "ShortcutProps",
          },
        ],
        required: false,
        type: { name: "string" },
      },
      variant: {
        defaultValue: { value: "light" },
        description: "The visual variant to apply to shortcut.",
        name: "variant",
        parent: {
          fileName: "wis/src/packages/shortcut/shortcut.ts",
          name: "ShortcutProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/shortcut/shortcut.ts",
            name: "ShortcutProps",
          },
        ],
        required: false,
        type: {
          name: "enum",
          raw: '"light" | "dark" | "ghost"',
          value: [
            { value: '"light"' },
            { value: '"dark"' },
            { value: '"ghost"' },
          ],
        },
      },
      disabled: {
        defaultValue: null,
        description:
          "When `true`, prevents the user from interacting with the shortcut.",
        name: "disabled",
        parent: {
          fileName: "wis/src/packages/shortcut/shortcut.ts",
          name: "ShortcutProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/shortcut/shortcut.ts",
            name: "ShortcutProps",
          },
        ],
        required: false,
        type: { name: "boolean" },
      },
      size: {
        defaultValue: { value: "md" },
        description: "The size of the shortcut.",
        name: "size",
        parent: {
          fileName: "wis/src/packages/shortcut/shortcut.ts",
          name: "ShortcutProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/shortcut/shortcut.ts",
            name: "ShortcutProps",
          },
        ],
        required: false,
        type: {
          name: "enum",
          raw: '"sm" | "xs" | "md"',
          value: [{ value: '"sm"' }, { value: '"xs"' }, { value: '"md"' }],
        },
      },
      readonly: {
        defaultValue: null,
        description: "@private",
        name: "readonly",
        parent: {
          fileName: "wis/src/packages/shortcut/shortcut.ts",
          name: "ShortcutProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/shortcut/shortcut.ts",
            name: "ShortcutProps",
          },
        ],
        required: false,
        type: { name: "boolean" },
      },
      onKeyPressed: {
        defaultValue: { value: "() => {}" },
        description: "Event handler called when user pressed the shortcutKey.",
        name: "onKeyPressed",
        parent: {
          fileName: "wis/src/packages/shortcut/shortcut.ts",
          name: "ShortcutProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/shortcut/shortcut.ts",
            name: "ShortcutProps",
          },
        ],
        required: false,
        type: {
          name: "(event: KeyboardEvent<Element>, shortcut: ShortcutMeta) => void",
        },
      },
    },
  },
  pc: {
    tags: {
      example:
        "const [onKeydown, onShortcut] = useShortcut();\n\nonShortcut('Control+S', () => {\n  console.log('Shortcut Control+S triggered');\n});",
    },
    filePath: "/Volumes/Work/wisdesign/wis/src/packages/shortcut/pc/index.ts",
    description: "Custom hook to manage keyboard shortcuts.",
    displayName: "pc",
    methods: [],
    props: {},
  },
  Toggle: {
    tags: {},
    filePath: "/Volumes/Work/wisdesign/wis/src/packages/toggle/pc/index.ts",
    description: "",
    displayName: "Toggle",
    methods: [],
    props: {
      variant: {
        defaultValue: { value: "basic" },
        description: "The visual variant to apply to toggle.",
        name: "variant",
        parent: {
          fileName: "wis/src/packages/toggle/toggle.ts",
          name: "ToggleProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/toggle/toggle.ts",
            name: "ToggleProps",
          },
        ],
        required: false,
        type: {
          name: "enum",
          raw: '"basic" | "ghost"',
          value: [{ value: '"basic"' }, { value: '"ghost"' }],
        },
      },
      disabled: {
        defaultValue: null,
        description:
          "When `true`, prevents the user from interacting with the toggle.",
        name: "disabled",
        parent: {
          fileName: "wis/src/packages/toggle/toggle.ts",
          name: "ToggleProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/toggle/toggle.ts",
            name: "ToggleProps",
          },
        ],
        required: false,
        type: { name: "boolean" },
      },
      text: {
        defaultValue: null,
        description: "The text information displayed on the toggle.",
        name: "text",
        parent: {
          fileName: "wis/src/packages/toggle/toggle.ts",
          name: "ToggleProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/toggle/toggle.ts",
            name: "ToggleProps",
          },
        ],
        required: false,
        type: { name: "string" },
      },
      icon: {
        defaultValue: null,
        description:
          "The icon element will be displayed next to the toggle text.",
        name: "icon",
        parent: {
          fileName: "wis/src/packages/toggle/toggle.ts",
          name: "ToggleProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/toggle/toggle.ts",
            name: "ToggleProps",
          },
        ],
        required: false,
        type: { name: "ReactNode" },
      },
      iconControl: {
        defaultValue: { value: "prefix" },
        description:
          "Controls the display position of the icon relative to the text.",
        name: "iconControl",
        parent: {
          fileName: "wis/src/packages/toggle/toggle.ts",
          name: "ToggleProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/toggle/toggle.ts",
            name: "ToggleProps",
          },
        ],
        required: false,
        type: {
          name: "enum",
          raw: '"prefix" | "suffix"',
          value: [{ value: '"prefix"' }, { value: '"suffix"' }],
        },
      },
      size: {
        defaultValue: { value: "md" },
        description: "The size of the toggle.",
        name: "size",
        parent: {
          fileName: "wis/src/packages/toggle/toggle.ts",
          name: "ToggleProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/toggle/toggle.ts",
            name: "ToggleProps",
          },
        ],
        required: false,
        type: {
          name: "enum",
          raw: '"sm" | "xs" | "md"',
          value: [{ value: '"sm"' }, { value: '"xs"' }, { value: '"md"' }],
        },
      },
      shortcutKey: {
        defaultValue: null,
        description:
          "Sets a global shortcut key, such as `Control+I`. When the user presses the combination key, the toggle's click event will be triggered.",
        name: "shortcutKey",
        parent: {
          fileName: "wis/src/packages/toggle/toggle.ts",
          name: "ToggleProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/toggle/toggle.ts",
            name: "ToggleProps",
          },
        ],
        required: false,
        type: { name: "string" },
      },
      pressed: {
        defaultValue: null,
        description:
          "The press state of the toggle. Must be used in conjunction with `onPressed`.",
        name: "pressed",
        parent: {
          fileName: "wis/src/packages/toggle/toggle.ts",
          name: "ToggleProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/toggle/toggle.ts",
            name: "ToggleProps",
          },
        ],
        required: false,
        type: { name: "boolean" },
      },
      defaultPressed: {
        defaultValue: null,
        description: "The default press state of the toggle.",
        name: "defaultPressed",
        parent: {
          fileName: "wis/src/packages/toggle/toggle.ts",
          name: "ToggleProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/toggle/toggle.ts",
            name: "ToggleProps",
          },
        ],
        required: false,
        type: { name: "boolean" },
      },
      onPressed: {
        defaultValue: { value: "() => {}" },
        description:
          "Event handler called when the toggle press state is changed.",
        name: "onPressed",
        parent: {
          fileName: "wis/src/packages/toggle/toggle.ts",
          name: "ToggleProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/toggle/toggle.ts",
            name: "ToggleProps",
          },
        ],
        required: false,
        type: { name: "(pressed: boolean) => void" },
      },
    },
  },
  ToggleGroup: {
    tags: { package: "toggle" },
    filePath: "/Volumes/Work/wisdesign/wis/src/packages/toggle/pc/index.ts",
    description: "",
    displayName: "ToggleGroup",
    methods: [],
    props: {
      size: {
        defaultValue: { value: "md" },
        description: "The size of the toggle group.",
        name: "size",
        parent: {
          fileName: "wis/src/packages/toggle/toggle.ts",
          name: "ToggleGroupProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/toggle/toggle.ts",
            name: "ToggleGroupProps",
          },
        ],
        required: false,
        type: {
          name: "enum",
          raw: '"sm" | "md"',
          value: [{ value: '"sm"' }, { value: '"md"' }],
        },
      },
      variant: {
        defaultValue: { value: "basic" },
        description: "The visual variant to apply to toggle group.",
        name: "variant",
        parent: {
          fileName: "wis/src/packages/toggle/toggle.ts",
          name: "ToggleGroupProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/toggle/toggle.ts",
            name: "ToggleGroupProps",
          },
        ],
        required: false,
        type: {
          name: "enum",
          raw: '"basic" | "compact"',
          value: [{ value: '"basic"' }, { value: '"compact"' }],
        },
      },
      disabled: {
        defaultValue: null,
        description:
          "When `true`, prevents the user from interacting with the toggle item in toggle group.",
        name: "disabled",
        parent: {
          fileName: "wis/src/packages/toggle/toggle.ts",
          name: "ToggleGroupProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/toggle/toggle.ts",
            name: "ToggleGroupProps",
          },
        ],
        required: false,
        type: { name: "boolean" },
      },
      value: {
        defaultValue: null,
        description:
          "The value of selected item in the group. Must be used in conjunction with `onChange`.",
        name: "value",
        parent: {
          fileName: "wis/src/packages/toggle/toggle.ts",
          name: "ToggleGroupProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/toggle/toggle.ts",
            name: "ToggleGroupProps",
          },
        ],
        required: false,
        type: { name: "string | string[]" },
      },
      defaultValue: {
        defaultValue: null,
        description: "The default value of selected item in the group.",
        name: "defaultValue",
        parent: {
          fileName: "wis/src/packages/toggle/toggle.ts",
          name: "ToggleGroupProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/toggle/toggle.ts",
            name: "ToggleGroupProps",
          },
        ],
        required: false,
        type: { name: "string | string[]" },
      },
      multiple: {
        defaultValue: null,
        description: "When `true`, allows multiple items to be selected.",
        name: "multiple",
        parent: {
          fileName: "wis/src/packages/toggle/toggle.ts",
          name: "ToggleGroupProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/toggle/toggle.ts",
            name: "ToggleGroupProps",
          },
        ],
        required: false,
        type: { name: "boolean" },
      },
      onChange: {
        defaultValue: { value: "() => {}" },
        description:
          "Event handler called when the toggle group item press state changed.",
        name: "onChange",
        parent: {
          fileName: "wis/src/packages/toggle/toggle.ts",
          name: "ToggleGroupProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/toggle/toggle.ts",
            name: "ToggleGroupProps",
          },
        ],
        required: false,
        type: { name: "(value: string | string[]) => void" },
      },
    },
  },
  ToggleItem: {
    tags: { package: "toggle" },
    filePath: "/Volumes/Work/wisdesign/wis/src/packages/toggle/pc/index.ts",
    description: "",
    displayName: "ToggleItem",
    methods: [],
    props: {
      disabled: {
        defaultValue: null,
        description:
          "When `true`, prevents the user from interacting with the toggle item.",
        name: "disabled",
        parent: {
          fileName: "wis/src/packages/toggle/toggle.ts",
          name: "ToggleItemProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/toggle/toggle.ts",
            name: "ToggleItemProps",
          },
        ],
        required: false,
        type: { name: "boolean" },
      },
      text: {
        defaultValue: null,
        description: "The text information displayed on the toggle item.",
        name: "text",
        parent: {
          fileName: "wis/src/packages/toggle/toggle.ts",
          name: "ToggleItemProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/toggle/toggle.ts",
            name: "ToggleItemProps",
          },
        ],
        required: false,
        type: { name: "string" },
      },
      icon: {
        defaultValue: null,
        description:
          "The icon element will be displayed next to the toggle item text.",
        name: "icon",
        parent: {
          fileName: "wis/src/packages/toggle/toggle.ts",
          name: "ToggleItemProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/toggle/toggle.ts",
            name: "ToggleItemProps",
          },
        ],
        required: false,
        type: { name: "ReactNode" },
      },
      iconControl: {
        defaultValue: { value: "prefix" },
        description:
          "Controls the display position of the icon relative to the text.",
        name: "iconControl",
        parent: {
          fileName: "wis/src/packages/toggle/toggle.ts",
          name: "ToggleItemProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/toggle/toggle.ts",
            name: "ToggleItemProps",
          },
        ],
        required: false,
        type: {
          name: "enum",
          raw: '"prefix" | "suffix"',
          value: [{ value: '"prefix"' }, { value: '"suffix"' }],
        },
      },
      shortcutKey: {
        defaultValue: null,
        description:
          "Sets a global shortcut key, such as `Control+I`. When the user presses the combination key, the toggle's click event will be triggered.",
        name: "shortcutKey",
        parent: {
          fileName: "wis/src/packages/toggle/toggle.ts",
          name: "ToggleItemProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/toggle/toggle.ts",
            name: "ToggleItemProps",
          },
        ],
        required: false,
        type: { name: "string" },
      },
      value: {
        defaultValue: null,
        description: "The unique value of the toggle item.",
        name: "value",
        parent: {
          fileName: "wis/src/packages/toggle/toggle.ts",
          name: "ToggleItemProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/toggle/toggle.ts",
            name: "ToggleItemProps",
          },
        ],
        required: true,
        type: { name: "string" },
      },
      size: {
        defaultValue: null,
        description: "The size of the toggle item.",
        name: "size",
        parent: {
          fileName: "wis/src/packages/toggle/toggle.ts",
          name: "ToggleItemProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/toggle/toggle.ts",
            name: "ToggleItemProps",
          },
        ],
        required: false,
        type: {
          name: "enum",
          raw: '"sm" | "md"',
          value: [{ value: '"sm"' }, { value: '"md"' }],
        },
      },
      variant: {
        defaultValue: null,
        description: "@private",
        name: "variant",
        parent: {
          fileName: "wis/src/packages/toggle/toggle.ts",
          name: "ToggleItemProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/toggle/toggle.ts",
            name: "ToggleItemProps",
          },
        ],
        required: false,
        type: {
          name: "enum",
          raw: '"basic" | "compact"',
          value: [{ value: '"basic"' }, { value: '"compact"' }],
        },
      },
    },
  },
  Tooltip: {
    tags: {},
    filePath: "/Volumes/Work/wisdesign/wis/src/packages/tooltip/pc/index.ts",
    description: "",
    displayName: "Tooltip",
    methods: [],
    props: {
      side: {
        defaultValue: { value: "top" },
        description:
          "The preferred side of the trigger to render against when open. May change when collisions occur.",
        name: "side",
        parent: {
          fileName: "wis/src/packages/tooltip/tooltip.ts",
          name: "TooltipProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/tooltip/tooltip.ts",
            name: "TooltipProps",
          },
        ],
        required: false,
        type: {
          name: "enum",
          raw: '"top" | "right" | "bottom" | "left"',
          value: [
            { value: '"top"' },
            { value: '"right"' },
            { value: '"bottom"' },
            { value: '"left"' },
          ],
        },
      },
      align: {
        defaultValue: { value: "center" },
        description:
          "The preferred alignment against the trigger. May change when collisions occur.",
        name: "align",
        parent: {
          fileName: "wis/src/packages/tooltip/tooltip.ts",
          name: "TooltipProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/tooltip/tooltip.ts",
            name: "TooltipProps",
          },
        ],
        required: false,
        type: {
          name: "enum",
          raw: '"start" | "center" | "end"',
          value: [
            { value: '"start"' },
            { value: '"center"' },
            { value: '"end"' },
          ],
        },
      },
      text: {
        defaultValue: null,
        description: "The content text to render in the tooltip.",
        name: "text",
        parent: {
          fileName: "wis/src/packages/tooltip/tooltip.ts",
          name: "TooltipProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/tooltip/tooltip.ts",
            name: "TooltipProps",
          },
        ],
        required: true,
        type: { name: "string" },
      },
      open: {
        defaultValue: null,
        description:
          "The controlled open state of the tooltip. Must be used in conjunction with `onOpen`",
        name: "open",
        parent: {
          fileName: "wis/src/packages/tooltip/tooltip.ts",
          name: "TooltipProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/tooltip/tooltip.ts",
            name: "TooltipProps",
          },
        ],
        required: false,
        type: { name: "boolean" },
      },
      defaultOpen: {
        defaultValue: null,
        description:
          "The open state of the tooltip when it is initially rendered.",
        name: "defaultOpen",
        parent: {
          fileName: "wis/src/packages/tooltip/tooltip.ts",
          name: "TooltipProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/tooltip/tooltip.ts",
            name: "TooltipProps",
          },
        ],
        required: false,
        type: { name: "boolean" },
      },
      onOpen: {
        defaultValue: null,
        description:
          "Event handler called when the tooltip is open state change.",
        name: "onOpen",
        parent: {
          fileName: "wis/src/packages/tooltip/tooltip.ts",
          name: "TooltipProps",
        },
        declarations: [
          {
            fileName: "wis/src/packages/tooltip/tooltip.ts",
            name: "TooltipProps",
          },
        ],
        required: false,
        type: { name: "(open: boolean) => void" },
      },
    },
  },
};
