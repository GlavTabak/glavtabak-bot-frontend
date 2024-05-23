import { Icon } from '@iconify/react';
import logoImg from '@root/app/assets/img/logo.jpg';
import {
  Navbar as NavbarBase,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Image,
} from '@nextui-org/react';

export const Navbar = () => {
  return (
    <NavbarBase className="rounded-xl">
      <NavbarBrand>
        <Image
          alt="Glav Tabak Logo"
          className="h-[60px] w-fit"
          src={logoImg}
        />
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          <Icon icon="heroicons:shopping-cart" className="size-8" color="black" />
        </NavbarItem>
      </NavbarContent>
    </NavbarBase>
  );
};
