import Navbar from "../../Components/Navbar/Navbar";
import MainContainer from "../../Components/MainContainer/MainContainer";
import ComponentTitle from "../../Components/ComponentTitle/ComponentTitle";
import EmailComponent from "../../Components/EmailComponent/EmailComponent";
import Circle from "../../Components/Circle/Circle";
import styles from "./Contact.module.css";

function Contact() {
  return (
    <div>
      <Navbar />
      <Circle top={"-5rem"} right={"-18rem"} />

      {/* ✅ Wrapper that matches Navbar width */}
      <div className={styles.contact_wrapper}>
        <ComponentTitle title={"Get in touch"} />

        {/* ✅ Contact Section Box */}
        <div className={styles.box}>
          {/* LEFT - Contact Form */}
          <div className={styles.left_section_indexing}>
            <EmailComponent />
          </div>

          {/* RIGHT - Contact Info */}
          <div className={styles.right_section_indexing}>
            {/* Let's Connect Heading */}
<h2 className={styles.connect_heading}>Let’s Connect</h2>
<p className={styles.connect_text}>
I'd love to hear from you! Feel free to reach out via the form or contact info below.
</p>

            {/* Location */}
            <div className={styles.location_services}>
              <div className={styles.symbol}>
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <p>Balasore, Odisha, 756001</p>
            </div>

            {/* Phone */}
            <div className={styles.location_services}>
              <div className={styles.symbol}>
                <i className="fa-solid fa-phone"></i>
              </div>
              <p>+91-8926145029</p>
            </div>

            {/* Email */}
            <div className={styles.location_services}>
              <div className={styles.symbol}>
                <i className="fa-solid fa-envelope"></i>
              </div>
              <p>eleenajena2002@gmail.com</p>
            </div>

            {/* Social Links */}
            <div className={styles.follow_me_section}>
              <p>Follow me on</p>
              <div className={styles.account_box}>
                <div className={styles.account_icon}>
                  <a
                    href="https://www.linkedin.com/in/eleenajena/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                </div>
                <div className={styles.account_icon}>
                  <a
                    href="https://github.com/eleenajena19"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-github"></i>
                  </a>
                </div>
                <div className={styles.account_icon}>
                  <a
                    href="https://www.instagram.com/eleenajena_?igsh=Zm10YXFzemV1cGp5"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> {/* END .contact_wrapper */}
    </div>
  );
}

export default Contact;
