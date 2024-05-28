import logoImg from '@root/app/assets/img/logo.jpg';
import {
  Navbar as NavbarBase,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Image,
} from '@nextui-org/react';
import { ShopCart } from '@root/entities';

export const Navbar = () => {
  return (
    <NavbarBase className="rounded-xl" as="nav">
      <NavbarBrand>
        <Image
          alt="Glav Tabak Logo"
          className="h-[60px] w-fit"
          src={logoImg}
        />
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          <ShopCart />
        </NavbarItem>
      </NavbarContent>
    </NavbarBase>
  );
};
