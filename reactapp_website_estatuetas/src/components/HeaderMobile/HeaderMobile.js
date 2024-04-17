import { IoClose } from "react-icons/io5";
import "./HeaderMobile.css";

export function HeaderMobile({ menuIsVisible, setMenuIsVisible }) {
  return (
    <>
      <div className="baseHeaderMobile" isVisible={menuIsVisible}>
        <IoClose size={45} onClick={setMenuIsVisible} />
        <nav className="headerMenuMobile">
          <a href="/">Home</a>
          <a href="/">Produtos</a>
          <a href="/">Categorias</a>
          <a href="/">Contate-nos</a>
        </nav>
      </div>
    </>
  );
}

export default HeaderMobile;
