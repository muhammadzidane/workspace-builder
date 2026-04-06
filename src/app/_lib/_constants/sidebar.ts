import {
  IconApps,
  IconBox,
  IconBuildingCog,
  IconBuildingPlus,
  IconCashPlus,
  IconClipboardList,
  IconLayoutDashboard,
  IconMoneybag,
  IconPackages,
  IconSettings,
} from "@tabler/icons-react";

export const SIDEBAR_LIST = [
  {
    items: [
      {
        icon: IconLayoutDashboard,
        label: "Beranda",
        link: "/",
      },
      {
        icon: IconMoneybag,
        label: "Transaksi",
        link: "/transaction",
      },
    ],
    section: null,
  },
  {
    items: [
      {
        icon: IconBox,
        label: "Produk",
        link: "/product",
      },
      {
        icon: IconApps,
        label: "Kategori",
        link: "/category",
      },
      {
        icon: IconPackages,
        label: "Varian",
        link: "/variant",
      },
    ],
    section: "Manajemen Produk",
  },
  {
    items: [
      {
        icon: IconBuildingPlus,
        label: "Cabang",
        link: "/branch",
      },
      {
        icon: IconBuildingCog,
        label: "Pengaturan Toko",
        link: "/store-setting",
      },
    ],
    section: "Manajemen Toko",
  },
  {
    items: [
      {
        icon: IconClipboardList,
        label: "Settlement",
        link: "/settlement",
      },
      {
        icon: IconCashPlus,
        label: "Petty Cash",
        link: "/petty-cash",
      },
    ],
    section: "Operasional",
  },
  {
    items: [
      {
        icon: IconSettings,
        label: "Setting",
        link: "/setting/personal-information",
      },
    ],
    section: "Lainnya",
  },
];
