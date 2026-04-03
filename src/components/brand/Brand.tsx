import { motion } from 'framer-motion';
import google from '../../assets/google.png';
import slack from '../../assets/slack.png';
import shopify from '../../assets/shopify.png';
import atlassian from '../../assets/atlassian.png';
import dropbox from '../../assets/dropbox.png';

import './Brand.css';

const Brand = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div 
      className='Brand'
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      <motion.img variants={itemVariants} src={google} alt="google" loading="lazy" />
      <motion.img variants={itemVariants} src={slack} alt="slack" loading="lazy" />
      <motion.img variants={itemVariants} src={atlassian} alt="atlassian" loading="lazy" />
      <motion.img variants={itemVariants} src={dropbox} alt="dropbox" loading="lazy" />
      <motion.img variants={itemVariants} src={shopify} alt="shopify" loading="lazy" />
    </motion.div>
  )
}

export default Brand