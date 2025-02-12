"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logo from "../../../../../assets/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CirclePerson, DownArrow, HomeIcon } from "@/assets/icons/icons";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="py-6 bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.10)] hidden md:block sticky top-0 z-20">
      <div className="w-[1216px] m-auto flex justify-between items-center text-[#314660]">
        <Link href="/">
          <Image src={logo} width={137.951} alt="verv logo" />
        </Link>
        <div className="text-lg flex justify-end items-center gap-14">
          <div className="font-medium">
            <ul className="flex justify-between items-center gap-6">
              <li>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="text-lg p-0 m-0">
                      About
                      <DownArrow />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-36">
                    <DropdownMenuGroup>
                      <Link href="/about/verv">
                        <DropdownMenuItem>Verv</DropdownMenuItem>
                      </Link>
                      <Link href="/about/landlords">
                        <DropdownMenuItem>Landlords</DropdownMenuItem>
                      </Link>
                      <Link href="/about/tenants">
                        <DropdownMenuItem>Tenants</DropdownMenuItem>
                      </Link>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
              <li className="flex justify-center items-center">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="text-lg p-0 m-0">
                      Pricing
                      <DownArrow />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-36">
                    <DropdownMenuGroup>
                      <DropdownMenuItem>
                        <span>Pricing I</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <span>Pricing II</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <span>Pricing III</span>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
              <li className="flex justify-center items-center">Agent Finder</li>
            </ul>
          </div>
          <div className="flex justify-end items-center gap-6 font-medium">
            <ul className="flex items-center justify-center gap-2">
              <li>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Avatar className="cursor-pointer">
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-36">
                    <DropdownMenuGroup>
                      <DropdownMenuItem>Profile</DropdownMenuItem>
                      <DropdownMenuItem>Setting</DropdownMenuItem>
                      <DropdownMenuItem>Logout</DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>

              <li>
                <Link
                  href="/login"
                  className="flex justify-center items-center gap-2"
                >
                  <CirclePerson width={24} height={24} />
                  Sign In/Register
                </Link>
              </li>
            </ul>
            <Button
              className="text-lg font-semibold rounded-[32px] bg-[#50B533] w-[180px] h-[56px] py-2 px-4"
              onClick={() => router.push("/listing/add-property")}
            >
              <HomeIcon width={25} height={24} />
              Add Listing
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
