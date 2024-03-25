/* eslint-disable @next/next/no-img-element */
import logo from '../assets/lws-logo-black.svg'
import Menu from '../assets/svg/menu.svg'


export default function Nav() {
  return (
    <nav class="flex items-center justify-between w-11/12 lg:w-10/12 max-w-7xl py-5 lg:py-6 mx-auto">
    <div class="flex gap-5 items-center justify-between lg:w-8/12 text-[#1A1A1A]">
      <div class="flex items-center gap-2">
        <img src={Menu} class="lg:hidden w-5 h-5" alt="" />
        <a href="./index.html">
          <img src={logo} class="h-10" alt="" />
        </a>
      </div>
    </div>
    <div class="flex items-center justify-end gap-2 lg:gap-5 lg:w-4/12">
      <img src="./assets/svg/avatar.svg" class="hidden lg:block w-[18px] h-[18px]" alt="login acount avatar" />
      <img src="./assets/svg/shopping-Cart.svg" class="block w-5 h-5" alt="shopping cart icon" />
    </div>
  </nav>
  )
}
