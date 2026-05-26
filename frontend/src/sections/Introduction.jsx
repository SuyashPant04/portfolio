import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";

const Introduction = () => {
  const { personal } = portfolioData;

  return (
    <section className="min-h-screen bg-gray-900 flex items-center justify-center px-6">

      <div className="max-w-5xl mx-auto text-center">

        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          {personal.name}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl md:text-3xl text-blue-400 mb-8"
        >
          {personal.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-lg text-gray-300 leading-relaxed"
        >
          {personal.introduction}
        </motion.p>

      </div>

    </section>
  );
};

export default Introduction;