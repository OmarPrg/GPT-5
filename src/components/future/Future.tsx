import { motion } from 'framer-motion';
import './Future.css'
import image from '../../assets/Feature Image.png'
import {Card} from '../whatgpt/Card';

const Future = () => {
  return (
    <div className='Future' id='Futures'>
         <div className="Future__TopPart">
              <motion.div 
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="Future__TopPart__LeftSide"
              >
                <h2>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h2>
                <p>Request Early Access to Get Started</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="Future__TopPart__RightSide"
              >
                  <Card title='Improving end distrusts instantly ' paragraph='From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.' />
                  <Card title='Become the tended active ' paragraph='Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.' />
                  <Card title='Message or am nothing ' paragraph='Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.' />
                  <Card title='Really boy law county ' paragraph='Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.' />
              </motion.div>
         </div>
         <div className="Future__BottomPart">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="Future__BottomPart__Image"
              >
                   <img src={image} alt="" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="Future__BottomPart__Content"
              >
                <h4>Request Early Access to Get Started</h4>
                <h2>The possibilities are beyond your imagination</h2>
                <h5>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</h5>
                <p>Request Early Access to Get Started</p>
              </motion.div>
         </div>
    </div>
  )
}

export default Future