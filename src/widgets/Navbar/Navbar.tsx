import { Image, Navbar as NavbarBase, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/react';
import logoImg from '@root/app/assets/img/logo.jpg';
import { ShopCartLinkIcon } from '@root/entities';

export const Navbar = () => {
  return (
    <NavbarBase className="rounded-xl bg-theme-button-color" as="nav">
      <NavbarBrand>
        <Image alt="Glav Tabak Logo" className="h-[60px] w-fit" src={logoImg} />
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          <ShopCartLinkIcon />
        </NavbarItem>
      </NavbarContent>
    </NavbarBase>
  );
};
