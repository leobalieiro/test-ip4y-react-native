import React, { createContext, useState } from "react";

export const ClientContext = createContext({});

const ClientProvider = ({ children }) => {
    const [showModalClientCreate, setShowModalClientCreate] = useState(false);
    const [showModalClientEdit, setShowModalClientEdit] = useState(false);

    return (
        <ClientContext.Provider
            value={{
                showModalClientCreate,
                setShowModalClientCreate,

                showModalClientEdit,
                setShowModalClientEdit,
            }}
        >
            {children}
        </ClientContext.Provider>
    );
};

export default ClientProvider;
