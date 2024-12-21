import { FC } from 'react';
import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuContent, NavigationMenuLink, NavigationMenuTrigger, navigationMenuTriggerStyle } from './ui/navigation-menu';
import {  Link } from "react-router-dom";

const Navbar: FC = () => {
  return (
    <div className='grid grid-cols-6 gap-4 sticky top-0 backdrop-blur-sm bg-blue-400/30' style={{ zIndex: 100 }}>
      <div className='col-end-7 col-span-2'>
    <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <Link to="/" >
          <NavigationMenuLink className={navigationMenuTriggerStyle()} onClick={() => window.scrollTo(0, 0)}>
            Home
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
      {/* <NavigationMenuItem>
        <NavigationMenuTrigger>Components</NavigationMenuTrigger>
        <NavigationMenuContent>
        <Link to="#profile" >
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Profile
          </NavigationMenuLink>
        </Link>
        <Link to="#contact" >
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Contact
          </NavigationMenuLink>
        </Link>
        <Link to="#table" >
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Table
          </NavigationMenuLink>
        </Link>
        </NavigationMenuContent>
      </NavigationMenuItem> */}
      <NavigationMenuItem>
        <Link to="?tab=contact" >
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Contact
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <Link to="?tab=profile" >
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Profile
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <Link to="?tab=table" >
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Table
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <Link to="?tab=review" >
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Review
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
  </div>
  </div>
  );
}

export default Navbar;