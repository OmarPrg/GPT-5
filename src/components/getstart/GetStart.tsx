import { motion } from 'framer-motion';
import './GetStarted.css'

const GetStart = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className='GetStart' 
      id='GetStart'
    >
        <p>Request Early Access to Get Started</p>
        <div className="GetStart__BottomPart">
             <h3>Register today & start exploring the endless possiblities.</h3>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type='button'
              >
                Get Started
              </motion.button>
        </div>
    </motion.div>
  )
}
export default GetStart;
