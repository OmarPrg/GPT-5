import { motion } from 'framer-motion';
import './Loading.css';

const Loading = () => {
    return (
        <div className="gpt5__loading">
            <div className="gpt5__loading-content">
                <motion.div 
                    className="gpt5__loading-spinner"
                    animate={{
                        rotate: 360,
                        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                    }}
                    transition={{
                        duration: 2,
                        ease: "easeInOut",
                        times: [0, 0.2, 0.5, 0.8, 1],
                        repeat: Infinity,
                    }}
                />
                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
                >
                    GPT-5
                </motion.h2>
                <div className="gpt5__loading-bar">
                    <motion.div 
                        className="gpt5__loading-bar-inner"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Loading;
