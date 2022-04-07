import "../styles/globals.css";
import { motion } from "framer-motion";
import { Router } from "next/router";

function MyApp({ Component, pageProps }) {
  return (
    <motion.div
      key={Router.route}
      initial="initial"
      animate="animate"
      variants={{
        initial: {
          opacity: 0,
        },
        animate: {
          opacity: 1,
        },
      }}
    >
      <Component {...pageProps} />
    </motion.div>
  );
}

export default MyApp;
