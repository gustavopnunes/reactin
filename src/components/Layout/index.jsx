import MobileHeader from "../MobileHeader";
import DesktopHeader from "../DesktopHeader";
import { Container } from "./styles";
import AdBanner from "../AdBanner";
import LeftColumn from "../LeftColumn";
import MiddleColumn from "../MiddleColumn";
import RightColumn from "../RightColumn";
import { useData } from "../../providers/DataContext";
import { useEffect } from "react";
import UpdateProfileModal from "../UpdateProfileModal";

const Layout = () => {
  const { isLoading, setCurrentPage } = useData();

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setCurrentPage((currentPageInsideState) => currentPageInsideState + 1);
      }
    });
    intersectionObserver.observe(document.querySelector("#sentinel"));

    return () => intersectionObserver.disconnect();
    //eslint-disable-next-line
  }, []);

  return (
    <Container>
      <MobileHeader />
      <DesktopHeader />

      <span>{!isLoading && <AdBanner />}</span>
      <main>
        <LeftColumn isLoading={isLoading} />
        <MiddleColumn isLoading={isLoading} />
        <RightColumn isLoading={isLoading} />
      </main>

      <div id="sentinel">
        <img src="/images/loading.gif" alt="loading" />
      </div>
      <UpdateProfileModal />
    </Container>
  );
};

export default Layout;
