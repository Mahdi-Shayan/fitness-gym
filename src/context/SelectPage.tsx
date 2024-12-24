import React, { createContext, useContext, useState } from "react";

// Type
import { Pages } from "../shared/types";

const SelectPageContext = createContext({});

export function SelectPageProvider({children}: {children: React.ReactNode}) {
    const [selectedPage, setSelectedPage] = useState<Pages>(Pages.Home);

    return(
      <SelectPageContext.Provider value={{selectedPage, setSelectedPage}}>
        {children}
      </SelectPageContext.Provider>
    )
}

export function useSelected() {
  return useContext(SelectPageContext)
}