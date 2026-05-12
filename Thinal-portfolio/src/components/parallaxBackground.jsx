// ParallaxBackground.jsx
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const ParallaxBackground = () => {
  const { scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, { damping: 50, stiffness: 100 });

  const mountain3Y = useTransform(smooth, [0, 0.5], ["0%", "70%"]);
  const planetsX = useTransform(smooth, [0, 0.5], ["0%", "-20%"]);
  const mountain2Y = useTransform(smooth, [0, 0.5], ["0%", "30%"]);
  const mountain1Y = useTransform(smooth, [0, 0.5], ["0%", "0%"]);

  return (
    <section className="absolute inset-0">
      <div className="relative h-screen overflow-hidden">

        {/* Sky */}
        {/* <div
          className="absolute inset-0 w-full h-screen z-0"
          style={{
            backgroundImage: "url(/assets/sky.jpg)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
          }}
        /> */}

        {/* Mountain 3 (far) */}
        <motion.div
          className="absolute inset-0 z-10"
          style={{
            backgroundImage: "url(/assets/mountain-3.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: mountain3Y,
          }}
        />

        {/* Planets */}
        <motion.div
          className="absolute inset-0 z-20"
          style={{
            backgroundImage: "url(/assets/planets.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            x: planetsX,
          }}
        />

        {/* Mountain 2 */}
        <motion.div
          className="absolute inset-0 z-30"
          style={{
            backgroundImage: "url(/assets/mountain-2.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: mountain2Y,
          }}
        />

        {/* Mountain 1 (near) */}
        <motion.div
          className="absolute inset-0 z-40"
          style={{
            backgroundImage: "url(/assets/mountain-1.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: mountain1Y,
          }}
        />

      </div>
    </section>
  );
};

export default ParallaxBackground;