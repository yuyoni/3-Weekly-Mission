import Footer from "../components/footer/Footer";
import Navigator from "../components/nav/Navigator";

export default function Layout({ children }) {
  return (
    <>
      <Navigator />
      {children}
      <Footer />
    </>
  );
}
