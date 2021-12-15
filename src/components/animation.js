export const pageAnimation ={
    hidden: {
        opacity: 0,
        y: 300,
    },
    show: {
        opacity: 1,
        y: 0,
        transition:{
            duration: 1,
            when: "beforeChildren",
            staggerChildren: 0.25,
        },
    },
};


export const titleAnim ={
    hidden: {y: 200},
    show: {
        y:0,
        transition: {duration: 0.75, ease: "easeOut"}
    },
};

export const fade = {
 hidden: { opacity: 0, 
          y: 300,
           
},
 show: {
     opacity: 1,
     y: 0,

     transition: {ease: 'easeOut', duration: 0.75},
     when: "beforeChildren",
     staggerChildren: 0.25,
 },
};