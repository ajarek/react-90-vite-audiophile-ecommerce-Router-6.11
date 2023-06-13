import { useState } from 'react'
import { Link } from 'react-router-dom'
import Hamburger from 'hamburger-react'
import Cart from '../Cart/Cart'
import FullPageLayout from '../FullPageLayout/FullPageLayout'
import './Nav.css'

const Nav = () => {
  const [isOpen, setOpen] = useState(false)
  const [cart, setCart] = useState(false)

  const handleCart =()=>{
    setCart(!cart)
  }

  const handleFullPageLayout =(e)=>{

   if(e.target.className==='full-page-layout'){
    setCart(false)
   }
  }
  return (
   <>
    {cart?<FullPageLayout onClick={handleFullPageLayout}>
            <Cart/>
      </FullPageLayout>:null
      }
    <nav className='nav'>
      
      <div className="logo">
      <Link
        className='link'
        to={'/'}
      >
        <img src="/images/shared/desktop/logo.svg" alt="logo" />
       
      </Link>
      </div>
      
      <ul className={!isOpen ? 'wrapper' : 'wrapper navbar-none'}>
      
        <Link
          className='link'
          to={'/'}
        >
          <h1> HOME</h1>
        </Link>
        <Link
          className='link'
          to={'/headphones'}
        >
          <h1> HEADPHONES</h1>
        </Link>
        <Link
          className='link'
          to={'/speakers'}
        >
          <h1>SPEAKERS</h1>
        </Link>
        <Link
          className='link'
          to={'/earphones'}
        >
          <h1>EARPHONES</h1>
        </Link>
        
      </ul>
      <div className="cart">
        <button onClick={handleCart}><img src="/images/shared/desktop/icon-cart.svg" alt="cart"/></button>
        </div>
      <div className='hamburger'>
        <Hamburger
          size={30}
          duration={0.3}
          distance='md'
          color={isOpen ? '#ff3f34' : '#ffffff'}
          easing='ease-in'
          rounded
          label='Show menu'
          onToggle={(toggled) => {
            setOpen(true)
            if (toggled) {
              // open a menu
            } else {
              setOpen(false)
            }
          }}
        />
      </div>
    </nav>
    </>
  )
}

export default Nav
