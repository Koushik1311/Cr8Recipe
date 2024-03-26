import BigDeviceNavBar from "./BigDeviceNavBar";
import SmallDeviceNavBar from "./SmallDeviceNavBar";

export default function Header() {
  return (
    <>
      {/* Small Device NavBar */}
      <section className="lg:hidden">
        <SmallDeviceNavBar />
      </section>

      {/* Big Device NavBar */}
      <section className="hidden lg:block">
        <BigDeviceNavBar />
      </section>
    </>
  );
}
