import { motion } from "framer-motion";

type PictureCardProps = {
  src: string;
  alt: string;
};

export default function PictureCard({ src, alt }: PictureCardProps) {
  return (
    <motion.div>
      <img src={src} alt={alt} />
    </motion.div>
  );
}
