import { Link } from "react-router-dom";
import ig from "../assets/instagram.png";
import tk from "../assets/LogosTiktokIcon.png";
import wh from "../assets/LogosWhatsappIcon.png";
import fb from "../assets/LogosFacebook.png";

export const Iconos = () => {
  return (
    <>
      <Link
        to="https://www.instagram.com/clinicaeyajcomalapagt/"
        target="_blank"
      >
        <img src={ig} alt="" width={30} height={10} />
      </Link>
      <Link to="https://www.tiktok.com/@clinicaeyaj" target="_blank">
        <img src={tk} alt="" width={30} height={10} />
      </Link>
      <Link
        to="https://api.whatsapp.com/send?phone=%2B50258369962&context=ARCdYwGbJ32Z4p3oZRoEwa8IWw8devE-F8p0JaY7qYpRCU4g8oAGJGbHsEYQaL_XIBIqJ4WCyDlp_AIU3DfJWvsSmrkdErDIv9inrCqy6RMivRuQFNVVzBUPdLEUrJg0FvmMaNKaWF4Y7LrRWh6oBZdxNg&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwZXh0bgNhZW0CMTAAAR3sR35G8pL3ULbekYEEBiRZdcVe2sB4TWYn5lMgPOpHOWiOb-KcDaRDWaY_aem___LZ3YdIRmGC0sMSNx0Kmw"
        target="_blank"
      >
        <img src={wh} alt="" width={30} height={10} />
      </Link>
      <Link
        to="https://www.facebook.com/profile.php?id=100063551527672"
        target="_blank"
      >
        <img src={fb} alt="" width={30} height={10} />
      </Link>
    </>
  );
};
