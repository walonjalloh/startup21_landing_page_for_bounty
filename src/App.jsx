import { useState } from 'react'
import Button from './components/Button'
import { Navbar, Page, Footer} from './components/component'
import List from './components/List';

function App() {

  const [isopen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isopen);
  }

  return (
    <>
        <Navbar go={isopen}/>
        <List/>
        <Button name='walon' classname='bg-black tex-2xl rounded-full text-white px-4 py-2' func={handleOpen}/>
        <Page/>
        <Footer/>
    </>
  
  )
}

export default App