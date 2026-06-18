import React from 'react'
import {Link} from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import type {MainNavItem} from '@/types';
import {Icons} from '@/components/icons';
import { siteConfig } from '@/config/site';

interface MainNavigationProps{
    items?: MainNavItem[]
}
export default function MainNavigation({items}: MainNavigationProps) {
  return (
    <div className='hidden lg:flex gap-1.5'>
        <Link to="/" className='items-center space-x-2 flex'>
            <Icons.logo className='size-7' aria-hidden="true"/> 
            <span className='font-bold inline-block'>{siteConfig.name}</span>
            <span className='sr-only'>Home</span>
        </Link>
        <NavigationMenu>
        <NavigationMenuList>
            {items?.[0]?.card && (
                <NavigationMenuItem>
                <NavigationMenuTrigger>{items[0].title}</NavigationMenuTrigger>
                <NavigationMenuContent>
                    <ul className="w-96">
                        <ListItem href="/docs" title={siteConfig.name}>
                            {siteConfig.description}
                        </ListItem>
                        {items[0].card.map((item) => (
                            <ListItem key={item.title} href={item.href ?? ''} title={item.title}>
                                {item.description}
                            </ListItem>
                        ))}
                    </ul>
                </NavigationMenuContent>
                </NavigationMenuItem>
            )}

            {items?.[0]?.menu && items[0].menu.map((item) => (
                <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link to={String(item.href)}>{item.title}</Link>
                </NavigationMenuLink>
                </NavigationMenuItem>
            ))}

        </NavigationMenuList>
        </NavigationMenu>
    </div>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link to={String(href)}>
          <div className="flex flex-col gap-1 text-sm">
            <div className="leading-none font-medium">{title}</div>
            <div className="line-clamp-2 text-muted-foreground">{children}</div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}

