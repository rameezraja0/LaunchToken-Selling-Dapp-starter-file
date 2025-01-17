import React from "react";

//INTERNAL IMPORT
import {
  TokenUtility,
  ArrowUp,
  Banner,
  Blog,
  Client,
  Contact,
  Distribution,
  Faq,
  Footer,
  Header,
  Loader,
  HowtoJoin,
  Service,
  Team,
  Timeline,
  TokenSale,
} from "../Components/index";
const index = () => {
  return (
    <div className="v_dark">
      <Header
      /*address = {address}
    setAddress={setAddress}
    connectWallet={connectWallet}*/
      />
      <Banner />
      <Service />
      <TokenUtility />
      <TokenSale />
      <Distribution />
      <HowtoJoin />
      {/* <Team /> */}
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
};
export default index;
