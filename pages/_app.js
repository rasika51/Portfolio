import '../styles/globals.css';


//components
import Layout from '../components/Layout';
import Transition from '../components/Transition';

//router
import {useRouter} from 'next/router';

// Next.js Head for dynamic title
import Head from 'next/head';

//framer motion
import {AnimatePresence, motion} from 'framer-motion';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <Layout>
      <AnimatePresence mode='wait'>
        <motion.div key={router.route} className='h-full'>

          <Head>
            <title>Rasika Wedaarachchi</title>
            <meta name="description" content="Portfolio of Rasika Wedaarachchi" />
            {/* Favicon */}
            <link rel="icon" href="/favicon1.png" />
          </Head>

          <Transition />
         <Component {...pageProps} />
        </motion.div>   
      </AnimatePresence>     
    </Layout>   
  );
}

export default MyApp;
