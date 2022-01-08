import { useState } from "react";
import Modal from 'react-modal';
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { GlobalStyles } from "./styles/global";
import { TransactionsProvider } from './hooks/useTransactions';

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModelOpen, setIsNewTransactionModelOpen ] = useState(false);
  
 
 function handleOpenNewTransactionModel(){
  setIsNewTransactionModelOpen(true);
 }

 function handleCloseNewTransactionModel(){
  setIsNewTransactionModelOpen(false);
 }
  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModel}/>
      <Dashboard />

      <NewTransactionModal 
        isOpen={isNewTransactionModelOpen}
        onRequestClose={handleCloseNewTransactionModel}
      />
      
      <GlobalStyles />
    </TransactionsProvider>
  );
}


