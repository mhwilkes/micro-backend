import {MenuGroup} from "@/types/MenuGroup";


export const menuGroups: MenuGroup[] = [
    {
        groupName: "Dashboard",
        items: [
            {
                route: "/",
                label: "Home",
            },
            {
                route: "/products",
                label: "Products",
            },
            {
                route: "/orders",
                label: "Orders",
            }
        ]
    },
    {
        groupName: "Management",
        items: [
            {
                route: "/users",
                label: "Users",
                children: [
                    {
                        route: "/users/list",
                        label: "User List",
                    },
                    {
                        route: "/users/profile",
                        label: "User Profile",
                    }
                ]
            },
            {
                route: "/settings",
                label: "Settings",
            }
        ]
    }
];