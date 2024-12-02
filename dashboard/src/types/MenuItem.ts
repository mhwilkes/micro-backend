import React from "react";

export interface MenuItem {
    route: string;
    label: string;
    icon?: React.ReactNode;
    children?: MenuItem[]; // Optional children for nested menus
}

