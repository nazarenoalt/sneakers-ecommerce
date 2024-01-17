import React, {useState, useContext, useEffect} from "react";

const documentContext = React.createContext();

export const useDocumentContext = () => {
  return useContext(documentContext);
}

export const DocumentProvider = ({ children }) => {
  const [documentWidth, setDocumentWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener('resize', () => {
      setDocumentWidth(window.innerWidth);
    })
  }, []);
  return(
    <documentContext.Provider value={documentWidth}>
      {children}
    </documentContext.Provider>

  );
}