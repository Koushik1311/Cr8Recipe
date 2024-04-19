export const dashboardMenuItems = [
  {
    label: "Dashboard",
    path: "/dashboard",
  },
  {
    label: "Profile",
    path: "/dashboard/profile",
  },
  {
    label: "Recipe",
    sub: [
      {
        label: "Draft",
        path: "/dashboard/recipe/draft",
      },
      {
        label: "Published",
        path: "/dashboard/recipe/published",
      },
    ],
  },
];
