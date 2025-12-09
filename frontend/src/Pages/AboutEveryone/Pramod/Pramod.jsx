import Navbar from "../../../components/Navbar/navbar";
import Footer from "../../../components/Footer/footer";
import styles from "./Pramod.module.css";

const Pramod = () => {
  return (
    <>
      <Navbar />
      <div className={styles.profileBg}>
        <div className={styles.profileContainer}>
          <h1 className={styles.profileTitle}>Shri Pramod Rawat</h1>
          <div className={styles.profileCard}>
            <div className={styles.profileImageWrapper}>
              <img
                src="https://i.postimg.cc/DzDx2Q5s/Shri_pramod_rawat.jpg"
                alt="Shri Pramod Rawat"
                className={styles.profileImage}
              />
              <div className={styles.profileDetails}>
                {/* <div className={styles.detailRow}>
                  <span className={styles.detailLabel}>location</span>
                  <span className={styles.detailValue}>Pune, Maharashtra</span>
                </div> */}
                {/* <div className={styles.detailRow}>
                  <span className={styles.detailLabel}>phone</span>
                  <span className={styles.detailValue}>-</span>
                </div> */}
                <div className={styles.detailRow}>
                  <span className={styles.detailLabel}>DES Chairman, Council & Governing Body</span>

                </div>
              </div>
            </div>
            <div className={styles.profileDesc}>
              <p>
                Agrovigya is a transformative step in this direction. It is more than just a digital platform it is a movement dedicated to empowering rural India through sustainable agricultural practices, digital inclusion, and employment generation. By integrating modern technology with traditional agricultural wisdom, Agrovigya bridges the gap between grassroots realities and digital opportunities.
              </p>
              <p>
                This initiative envisions a future where every farmer, rural worker, and job seeker has equitable access to markets, knowledge, financial tools, and meaningful employment. The platform’s approach combining AI-driven analytics, technology-enabled accessibility, and market linkages reflects our commitment to nation-building through rural upliftment.
              </p>
              <p>
                I am immensely proud of the Agrovigya team for their dedication, strategic insight, and relentless pursuit of innovation. Their efforts have shaped a platform that not only solves existing challenges but also sets a new benchmark for agricultural and employment ecosystems.
              </p>
              <p>
                As we look ahead, I am confident that Agrovigya will continue to empower millions, strengthen rural livelihoods, and significantly contribute to India’s socio-economic progress.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Pramod;
