import { motion } from 'framer-motion';
import './Header.css'
import faceImage from '../../assets/Header Illustration.png';
import peopleImage from '../../assets/Group 81.png'

const Header = () => {
  return (
    <div className='Header' id='Home'>
      <motion.div 
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="Header__Content"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Let’s Build Something amazing with GPT-3 OpenAI
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
        </motion.p>
      
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="Header__Content__Email"
        >
           <input type="email" placeholder='Your Email Address' />
           <motion.button 
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
           > 
             Get Started
           </motion.button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="Header__Content__People"
        >
           <img src={peopleImage} alt="People" loading="lazy" />
           <p>1,600 people requested access a visit in last 24 hours</p>
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="Header__Image"
      > 
         <motion.img 
           src={faceImage} 
           alt="Face" 
           animate={{ y: [0, -20, 0] }}
           transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
         />
      </motion.div>
    </div>
  )
}

export default Header