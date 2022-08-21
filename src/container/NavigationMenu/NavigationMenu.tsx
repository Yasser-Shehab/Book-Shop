import React from "react";
import { Tabs, TabsHeader, Tab } from "@material-tailwind/react";
import { data } from "../../data/menuData";

export function NavigationMenu() {
  return (
    <div className="mx-auto max-w-screen-xl py-2 px-4 lg:px-1 lg:py-4 mt-3">
      <Tabs value="html">
        <TabsHeader>
          {data.map(({ label, value }) => (
            <Tab key={value} value={value}>
              {label}
            </Tab>
          ))}
        </TabsHeader>
      </Tabs>
    </div>
  );
}
