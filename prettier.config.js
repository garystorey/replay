module.exports = {
    semi: false,
    printWidth: 100,
    tabWidth: 2,
    tailwindConfig: './tailwind.config.js',
    plugins: [
        require("prettier-plugin-tailwindcss"),
        "@trivago/prettier-plugin-sort-imports"
    ],
    importOrder: [
        "^@/app/(.*)$",
        "^@/styles/(.*)$",
        "^@/modals/(.*)$",
        "^@/elements/(.*)$",
        "^@/hooks/(.*)$",
        "^@/utils/(.*)$",
        "^@/components/(.*)$",
        "^[../]",
        "^[./]"
      ],
      importOrderSeparation: true
}