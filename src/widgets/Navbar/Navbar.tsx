import { Image, Navbar as NavbarBase, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/react';
import logoImg from '@root/app/assets/img/glavtabak_logo.jpg';
import { ShopCartLinkIcon } from '@root/entities';

export const Navbar = () => {
  return (
    <NavbarBase className="rounded-xl bg-theme-button-color" as="nav">
      <NavbarBrand>
        <Image alt="Логотип компании ГлавТабак" radius="sm" width={60} height={60} src={logoImg} />
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem className="flex items-center">
          <ShopCartLinkIcon />
        </NavbarItem>
      </NavbarContent>
    </NavbarBase>
  );
};
