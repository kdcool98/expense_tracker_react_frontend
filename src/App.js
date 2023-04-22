import styled from 'styled-components';
import bg from "./images/bg.png"
import { MainLayout } from './styles/Layouts';
import Orb from "./components/orb/Orb"
import Navigation from './components/navigaion/Navigation';
import { useState, useMemo } from "react";
import Dashboard from './components/dashboard/Dashboard';
import Incomes from './components/incomes/Incomes';
import Expenses from './components/expenses/Expenses';
import { useGlobalContext } from './context/GlobalContext';
import Transactions from './components/viewTransactions/Transactions';

function App() {
  const [active, setActive] = useState(1); // Default value willl be 1

  const orbMemo = useMemo(() => {
    return <Orb/>
  }, [])

  const global = useGlobalContext();
  
  const displayData = () => { 
    switch (active) {
      case 1:
        return <Dashboard />
      case 2:
        return <Transactions />
      case 3:
        return <Incomes />
      case 4:
        return <Expenses />
      default:
        return <Dashboard/>
    }
  }

  return (
    <AppStyled bg={bg} className="App">
      {orbMemo}
      {/* <Orb/> */}
      <MainLayout>
        <Navigation active={active} setActive={setActive} />
        <main>
          { displayData()}
        </main>
      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${props => props.bg});
  position: relative;
  main{
    flex:1;
    background-color: rgba(252, 246, 249, 0.78);
    border: 3px solid white;
    backdrop-filter: blur(4.5px);
    border-radius:32px;
    overflow-x: hidden;
    &::-webkit-scrollbar{
      width: 0;
    }
  }
`

export default App;
