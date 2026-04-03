import { motion } from 'framer-motion';
import './Footer.css';
import GPT3 from '../../assets/GPT-3.svg';

const Linkes =( {title , items}:{title:string , items:string[]})=>{ 
   return( 
    <div className='Column'> 
             <h3>{title}</h3>
             {items.map((i, index)=>{ 
               return <p key={index}><a href="">{i}</a></p>
             })}
          </div>
   )
}

const Footer = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className='Footer'
    >
      <div className="Footer__Header">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Do you want to step in to the future before others
        </motion.h2>
      </div>
      <div className="Footer__Button">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Request Early Access
        </motion.button>
      </div>
      <div className="Footer__Links">
          <div className="Footer__Links__LogoSide">
            <img src={GPT3} alt="GPT-3"/>
            <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="Footer__Links__LinksSide"
          >
            <Linkes title='Links' items={['Overons' , 'Social Media' , 'Counters', 'Contact' ]}/>
            <Linkes title='Company' items={['Terms & Conditions' , 'Privacy Policy','Contact' ]}/>
            <Linkes title='Get in touch' items={['Crechterwoord K12 182 DK Alknjkcb' , '085-132567','info@payme.net' ]}/>
          </motion.div>         
      </div>
      
      <div className="Footer__License"><p>© 2021 GPT-3. All rights reserved.</p></div>
    </motion.div>
  )
}

export default Footer