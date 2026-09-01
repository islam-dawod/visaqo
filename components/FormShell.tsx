import Navbar from "./Navbar";
import Footer from "./Footer";
import StepIndicator from "./StepIndicator";

export default function FormShell({
  active,
  children,
}: {
  active: number;
  children: React.ReactNode;
}) {
  return (
    <div id="top" className="bg-gradient-to-b from-mist-lav/40 to-white">
      <Navbar />
      <main className="pb-20 pt-32 sm:pt-36">
        <div className="container-x">
          <StepIndicator active={active} />
          <div className="mt-14">{children}</div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
