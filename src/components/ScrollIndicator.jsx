import { motion } from "framer-motion";

const ScrollIndicator = () => {
  return (
    <div className="flex justify-center mt-10">
      <div className="w-[26px] h-[44px] border-2 border-white rounded-full flex items-start justify-center py-1">
        <motion.div
          className="w-[6px] h-[6px] rounded-full bg-[#8DD8FF]"
          animate={{ y: [0, 25, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
};

export default ScrollIndicator;
