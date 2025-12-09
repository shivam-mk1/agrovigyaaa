import Navbar from "../../../components/Navbar/navbar";
import Footer from "../../../components/Footer/footer";
import styles from "./Anand.module.css";

const Anand = () => {
  return (
    <>
      <Navbar />
      <div className={styles.profileBg}>
        <div className={styles.profileContainer}>
          <h1 className={styles.profileTitle}>Dr. Anand Katikar</h1>
          <div className={styles.profileCard}>
            <div className={styles.profileImageWrapper}>
              <img
                src="https://i.postimg.cc/nLMdbSK0/Dr_Anand_Katikar.jpg"
                alt="Dr. Anand Katikar"
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
                  <span className={styles.detailLabel}>Secretary, Deccan Education Society, Pune and Member, Governing Body</span>

                </div>
              </div>
            </div>
            <div className={styles.profileDesc}>
              <p>
                Agriculture represents hope, resilience, and progress for countless rural families across India. However, despite its significance, the sector continues to struggle with limited market access, lack of technological exposure, financial uncertainty, and disguised unemployment. It is essential to integrate modern tools, digital platforms, and innovative solutions to uplift rural communities and create sustainable livelihoods.
              </p>
              <p>
                Agrovigya is a pioneering initiative that embodies this spirit of empowerment. By merging technology with practical agricultural solutions, the platform offers a complete ecosystem that supports farmers and rural youth through job opportunities, market access, financial inclusion, and knowledge-sharing. What makes Agrovigya truly remarkable is its commitment to inclusivity ensuring that even the remotest villages can benefit from technological advancements.
              </p>
              <p>
                Working closely with this project has been deeply inspiring. The dedication, creativity, and passion of the Agrovigya team reflect a profound understanding of the needs of rural India. Their work reinforces the belief that innovation, when aligned with purpose, can bring about lasting transformation.
              </p>
              <p>
                I extend my heartfelt appreciation to the entire team for turning a visionary idea into a powerful reality. With continued effort and collaborative spirit, I am confident that Agrovigya will become a national catalyst for agricultural modernization, rural employment, and sustainable development.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Anand;
