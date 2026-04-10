import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { Button } from "../components/Button";
import { Home } from "lucide-react";

export function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-3xl sm:text-4xl mb-4 text-foreground">Page Not Found</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Oops! It seems this page has been folded away. Let's get you back to creating beautiful paper art.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button onClick={() => navigate("/")}>
            <Home size={18} className="mr-2" />
            Back to Home
          </Button>
          <Button variant="outline" onClick={() => navigate("/workshops")}>
            Explore Workshops
          </Button>
        </motion.div>

        {/* Decorative elements */}
        <div className="mt-16 flex justify-center gap-4">
          <motion.div
            animate={{
              rotate: [0, 10, 0, -10, 0],
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-16 h-16 border-4 border-primary/30 rounded-2xl"
          />
          <motion.div
            animate={{
              rotate: [0, -10, 0, 10, 0],
              y: [0, -15, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="w-16 h-16 border-4 border-accent/30 rounded-3xl"
          />
          <motion.div
            animate={{
              rotate: [0, 15, 0, -15, 0],
              y: [0, -12, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="w-16 h-16 border-4 border-primary/30 rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
}
