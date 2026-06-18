export interface NavItem {
    title: string;
    href?: string;
    description?: string;
}

export interface NavItemWithChildren extends NavItem{
    card?: NavItemWithChildren[];
    menu?: NavItemWithChildren[];
}

export type MainNavItem = NavItemWithChildren; 

// extend smth can get the infos from that thing