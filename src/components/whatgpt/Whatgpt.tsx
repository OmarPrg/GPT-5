import { motion } from 'framer-motion';
import './Whatgpt.css';

import {Title , Card}  from './Card';

const Whatgpt = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className='Wgpt' 
      id='Whatgpt'
    >
         <motion.div 
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8, delay: 0.2 }}
           viewport={{ once: true }}
           className="Wgpt__TopPart"
         >
           <Title title={'What is GPT-3'}/>
           <p>We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.</p>
         </motion.div>
         <div className="Wgpt__MiddlePart">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            The Possibilities are beyond your imagination
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Explore The Library
          </motion.p>
         </div>
         <motion.div 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.6 }}
           viewport={{ once: true }}
           className="Wgpt__BottomPart"
         >
          <Card title={'Chatbots'} paragraph={'We so opinion friends me message as delight. Whole front do of plate heard oh ought. '}/>
          <Card title={'Knowledgebase'} paragraph={'At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'}/>
          <Card title={'Education'} paragraph={'At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'}/>
         </motion.div>
    </motion.div>
  )
}

export default Whatgpt