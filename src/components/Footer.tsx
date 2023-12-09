import styles from "../../scssModules/page.module.scss";
import Framer from "./framer";
import pdf from '../assets/final.pdf'

const Footer = () => {




  return (
    <footer>
      <main className={styles.main}>
        <p className="text-[#494136]">Made by Mohammad Totonchy</p>
        <div className={`${styles.container} flex gap-8 md:flex-row`}>
          <Framer>
            <a href="https://github.com/Mohtoto?tab=overview&from=2023-12-01&to=2023-12-02" target={'_blank'}>
              <svg
                className="md:h-14 h-12"
                viewBox="0 0 1024 1024"
                fill="currentColor"
              >
                <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
              </svg>
            </a>
          </Framer>
          <Framer>
            <a href="https://www.linkedin.com/in/mohammad-totonchy-622912250/" target={'_blank'}>
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                className="md:h-14 h-12"
              >
                <path d="M847.7 112H176.3c-35.5 0-64.3 28.8-64.3 64.3v671.4c0 35.5 28.8 64.3 64.3 64.3h671.4c35.5 0 64.3-28.8 64.3-64.3V176.3c0-35.5-28.8-64.3-64.3-64.3zm0 736c-447.8-.1-671.7-.2-671.7-.3.1-447.8.2-671.7.3-671.7 447.8.1 671.7.2 671.7.3-.1 447.8-.2 671.7-.3 671.7zM230.6 411.9h118.7v381.8H230.6zm59.4-52.2c37.9 0 68.8-30.8 68.8-68.8a68.8 68.8 0 10-137.6 0c-.1 38 30.7 68.8 68.8 68.8zm252.3 245.1c0-49.8 9.5-98 71.2-98 60.8 0 61.7 56.9 61.7 101.2v185.7h118.6V584.3c0-102.8-22.2-181.9-142.3-181.9-57.7 0-96.4 31.7-112.3 61.7h-1.6v-52.2H423.7v381.8h118.6V604.8z" />
              </svg>

            </a>
          </Framer>
          <Framer>
            <a href={pdf} target="_blank" download={pdf}>
              <svg
                fill="currentColor"
                viewBox="0 0 16 16"
                className={`md:h-14 h-12`}
              >
                <path d="M5.523 12.424c.14-.082.293-.162.459-.238a7.878 7.878 0 01-.45.606c-.28.337-.498.516-.635.572a.266.266 0 01-.035.012.282.282 0 01-.026-.044c-.056-.11-.054-.216.04-.36.106-.165.319-.354.647-.548zm2.455-1.647c-.119.025-.237.05-.356.078a21.148 21.148 0 00.5-1.05 12.045 12.045 0 00.51.858c-.217.032-.436.07-.654.114zm2.525.939a3.881 3.881 0 01-.435-.41c.228.005.434.022.612.054.317.057.466.147.518.209a.095.095 0 01.026.064.436.436 0 01-.06.2.307.307 0 01-.094.124.107.107 0 01-.069.015c-.09-.003-.258-.066-.498-.256zM8.278 6.97c-.04.244-.108.524-.2.829a4.86 4.86 0 01-.089-.346c-.076-.353-.087-.63-.046-.822.038-.177.11-.248.196-.283a.517.517 0 01.145-.04c.013.03.028.092.032.198.005.122-.007.277-.038.465z" />
                <path
                  fillRule="evenodd"
                  d="M4 0h5.293A1 1 0 0110 .293L13.707 4a1 1 0 01.293.707V14a2 2 0 01-2 2H4a2 2 0 01-2-2V2a2 2 0 012-2zm5.5 1.5v2a1 1 0 001 1h2l-3-3zM4.165 13.668c.09.18.23.343.438.419.207.075.412.04.58-.03.318-.13.635-.436.926-.786.333-.401.683-.927 1.021-1.51a11.651 11.651 0 011.997-.406c.3.383.61.713.91.95.28.22.603.403.934.417a.856.856 0 00.51-.138c.155-.101.27-.247.354-.416.09-.181.145-.37.138-.563a.844.844 0 00-.2-.518c-.226-.27-.596-.4-.96-.465a5.76 5.76 0 00-1.335-.05 10.954 10.954 0 01-.98-1.686c.25-.66.437-1.284.52-1.794.036-.218.055-.426.048-.614a1.238 1.238 0 00-.127-.538.7.7 0 00-.477-.365c-.202-.043-.41 0-.601.077-.377.15-.576.47-.651.823-.073.34-.04.736.046 1.136.088.406.238.848.43 1.295a19.697 19.697 0 01-1.062 2.227 7.662 7.662 0 00-1.482.645c-.37.22-.699.48-.897.787-.21.326-.275.714-.08 1.103z"
                />
              </svg>
            </a>
          </Framer>
          <Framer>
            <a href="#CONTACT">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="md:h-14 h-12"
              >
                <path d="M17.187 19.181L24 4.755 0 12.386l9.196 1.963.043 4.896 2.759-2.617-2.147-2.076 7.336 4.63z" />
              </svg>
            </a>
          </Framer>
        </div>
      </main>
    </footer>
  );
};

export default Footer;
