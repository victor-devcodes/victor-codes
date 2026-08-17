import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Button = ({
  children,
  variant = "primary",
  to,
  onClick,
  className = "",
  type = "button",
}) => {
  const styles = {
    primary:
      "bg-slate-950 text-white hover:bg-violet-600",

    secondary:
      "border border-slate-300 bg-white text-slate-950 hover:border-slate-950 hover:bg-slate-50",

    ghost:
      "bg-transparent text-slate-950 hover:bg-slate-100",
  };

  const classes = `
    inline-flex
    items-center
    justify-center
    gap-2
    rounded-xl
    px-6
    py-3
    text-sm
    font-semibold
    transition-all
    duration-300
    ${styles[variant]}
    ${className}
  `;

  if (to) {
    return (
      <motion.div
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
      >
        <Link to={to} className={classes}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={classes}
    >
      {children}
    </motion.button>
  );
};

export default Button;