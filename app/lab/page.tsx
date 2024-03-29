"use client";
import {
  ArrowRight,
  Check,
  CheckCheck,
  CheckCircle,
  ChevronRight,
  Circle,
  Menu,
  Phone,
  Trash,
  Trash2,
  Trash2Icon,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function Lab() {
  const phoneVariants = {
    ringing: {
      rotate: [0, -11, 10, -11, 10, 0],
      transition: {
        duration: 0.4,
        ease: "easeInOut",
        loop: Infinity,
      },
    },
    still: {
      rotate: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    open: {
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    closed: {
      rotate: 180,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  const [buttonHover, setButtonHover] = useState(false);

  const buttonVariants = {
    hover: {
      rotate: 360,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    default: {
      opacity: 0.3,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };

  const [isChecked, setIsChecked] = useState(false);

  const [deleteHover, setDeleteHover] = useState(false);

  const deleteVariants = {
    buttonHover: {
      width: "104px",
      transition: {
        duration: 0.1,
        ease: "easeInOut",
      },
    },
    buttonDefault: {
      width: "80px",
      transition: {
        duration: 0.1,
        ease: "easeInOut",
      },
    },
    iconHover: {
      y: 0,
      opacity: 1,
      scale: 1,
      display: "block",
      transition: {
        duration: 0.1,
        ease: "easeInOut",
        delay: 0.2,
      },
    },
    iconDefault: {
      y: 4,
      opacity: 0,
      scale: 0.2,
      display: "none",
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="p-4">
      <h1 className=" text-xl">Motion Lab</h1>

      <div className="flex gap-4 mt-12 flex-wrap">
        <div className="experiment text-slate-600 hover:text-blue-500 w-20">
          <motion.div
            className="p-4"
            whileHover={"ringing"}
            variants={phoneVariants}
          >
            <Phone />
          </motion.div>
        </div>
        <div className="experiment text-slate-600 hover:text-blue-500 w-20">
          <motion.button
            className="p-4"
            variants={menuVariants}
            animate={isOpen ? "open" : "closed"}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </motion.button>
        </div>
        <div className="experiment text-slate-600 hover:text-blue-500">
          <motion.button
            onHoverStart={() => setButtonHover(true)}
            onHoverEnd={() => setButtonHover(false)}
            className="p-2 pr-2 pl-4 rounded-md bg-gradient-to-b from-slate-700 to-black text-white outline outline-slate-300 flex items-center gap-2 hover:outline-2 highlight"
          >
            Send
            {buttonHover ? (
              <motion.span
                variants={buttonVariants}
                animate={buttonHover ? "hover" : "default"}
              >
                <ArrowRight size="20" />
              </motion.span>
            ) : (
              <motion.span
                variants={buttonVariants}
                animate={buttonHover ? "hover" : "default"}
              >
                <ChevronRight size="20" />
              </motion.span>
            )}
          </motion.button>
        </div>

        <div className="experiment text-slate-600 hover:text-blue-500">
          <motion.button
            onClick={() => setIsChecked(!isChecked)}
            className="p-2 hover:bg-slate-100 rounded-md flex items-center gap-2"
          >
            {isChecked ? (
              <motion.span
                variants={buttonVariants}
                animate={isChecked ? "hover" : "default"}
              >
                <CheckCircle size="20" />
              </motion.span>
            ) : (
              <motion.span
                variants={buttonVariants}
                animate={isChecked ? "hover" : "default"}
              >
                <Circle size="20" />
              </motion.span>
            )}
            Send
          </motion.button>
        </div>

        <div className="experiment">
          <motion.button
            onHoverStart={() => setDeleteHover(true)}
            onHoverEnd={() => setDeleteHover(false)}
            className="p-2 px-4 gap-2 hover:bg-red-50 flex items-center justify-end text-red-500 hover:text-red-600 rounded-md transition-all  hover:border-red-300 font-semibold"
            variants={deleteVariants}
            animate={deleteHover ? "buttonHover" : "buttonDefault"}
          >
            <motion.span
              variants={deleteVariants}
              animate={deleteHover ? "iconHover" : "iconDefault"}
            >
              <Trash2 size="20" />
            </motion.span>
            Delete
          </motion.button>
        </div>
      </div>
    </div>
  );
}
