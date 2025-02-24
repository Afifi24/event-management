"use client";

import React, { useState } from "react";
// import { useChangeLocale, useCurrentLocale } from "@/locales/client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

export function Translate() {
  //   const locale = useCurrentLocale();
  //   const changeLocale = useChangeLocale();
  //   const [selectedLocale, setSelectedLocale] = useState<"en" | "fr">(locale);

  //   const changeLanguage = (value: "fr" | "en") => {
  //     setSelectedLocale(value);
  //     changeLocale(value);
  //   };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Image
          src="/assets/icons/globe.svg"
          alt="globe"
          width={24}
          height={24}
          className="invert-colors"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-36  font-pilateExtended-Regular">
        <DropdownMenuRadioGroup
        //   value={selectedLocale}
        //   onValueChange={(value) => changeLanguage(value as "fr" | "en")}
        >
          <DropdownMenuRadioItem value="en" className="flex gap-2 pl-6">
            <Image
              src={"/assets/icons/englend-flag.png"}
              alt="englend"
              width={20}
              height={20}
              className="object-cover"
            />
            {/* {locale === "en" ? "English" : "Anglais"} */}
            English
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="fr" className="flex gap-2 pl-6">
            <Image
              src={"/assets/icons/france-flag.png"}
              alt="englend"
              width={20}
              height={20}
              className="object-cover"
            />
            {/* {locale === "fr" ? "Francais" : "French"} */}
            French
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
