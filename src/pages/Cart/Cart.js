import { CartForm } from "components/CartForm/CartForm";
import { Layout } from "./Cart.styled";

const Cart = () => {
  return (
    <Layout>
      <CartForm />
      <div>cart</div>
    </Layout>
  );
};

export default Cart;