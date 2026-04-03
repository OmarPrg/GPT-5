import { motion } from 'framer-motion';
import './Blog.css'
import article1 from '../../assets/Rectangle 22-4.png'
import article2 from '../../assets/Rectangle 22.png'
import article3 from '../../assets/Rectangle 22-1.png'
import article4 from '../../assets/Rectangle 22-2.png'
import article5 from '../../assets/Rectangle 22-3.png'

const Blog_Card=({image , date , paragraph}:{image:string , date:string , paragraph:string})=>{ 
     return( 
         <motion.div 
           variants={{
             hidden: { opacity: 0, y: 30 },
             visible: { opacity: 1, y: 0 }
           }}
           className="BlogCard"
         >
            <img src={image} alt="" loading="lazy" />
            <div className="BlogCard__Content">
             <div>
               <div className="BlogCard__Content__Date">
                {date}
              </div>
              <div className="BlogCard__Content__Paragraph">
                {paragraph}
              </div>
             </div>
             <div className="BottomParagraph">
              <h4>Read Full Article</h4>
             </div>
            </div>
         </motion.div>
     )
}
const Blog = () => {
  return (
    <div className='Blog' id='Blog'>
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="Blog__Header" 
        >
            <h2>A lot is happening, <br/> We are blogging about it.</h2>
        </motion.div>
        <motion.div 
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="Blog__Cards"
        >
            <Blog_Card image={article1} date={'Sep 26, 2021'} paragraph={'GPT-3 and Open  AI is the future. Let us exlore how it is?'}/>
            <Blog_Card image={article2} date={'Sep 26, 2021'} paragraph={'GPT-3 and Open  AI is the future. Let us exlore how it is?'}/>
            <Blog_Card image={article3} date={'Sep 26, 2021'} paragraph={'GPT-3 and Open  AI is the future. Let us exlore how it is?'}/>
            <Blog_Card image={article4} date={'Sep 26, 2021'} paragraph={'GPT-3 and Open  AI is the future. Let us exlore how it is?'}/>
            <Blog_Card image={article5} date={'Sep 26, 2021'} paragraph={'GPT-3 and Open  AI is the future. Let us exlore how it is?'}/>
        </motion.div>
    </div>
  )
}

export default Blog;