export const logoAnimated = {
    hidden: {
      x: -200,
      opacity: 0,
    },
    visible: (custom) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  };
  
  export  const textAnimated = {
    hidden: {
      x: 300,
      opacity: 0,
    },
    visible: (custom) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  };
  
export  const blockAnimation = {
    hidden: {
      y: -200,
      opacity: 0,
    },
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  };
  export const variants = {
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeOut",
        duration: 0.5,
      },
    },
    hide: {
      y: -200,
      opacity: 0,
      transition: {
        ease: "easeOut",
        duration: 0.3,
      },
    },
  };

export  const textAnimation = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: (custom) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  };
  
export  const blockAnimation2 = {
    hidden: {
      transform: { scale: 0 },
      opacity: 0,
    },
    visible: (custom) => ({
      transition: { delay: custom * 0.2 },
      transform: { scale: 1 },
      opacity: 1,
    }),
  };
export  const imgAnimation = {
    hidden: {
      transform: { scale: 0 },
      opacity: 0,
    },
    visible: custom=>({
      transition: { delay: custom * 0.2 },
      transform: { scale: 1 },
      opacity: 1,
    }),
  };