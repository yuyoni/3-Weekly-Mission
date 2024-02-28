import Footer from "../../_components/footer/Footer";
import Navigator from "../../_components/nav/Navigator";

export default function Layout({ children }) {
  return (
    <>
      <Navigator />
      {children}
      <Footer />
    </>
  );
}
