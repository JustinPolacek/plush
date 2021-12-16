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
    exit:{
        opacity: 0,
        y: 300,
        transition:{
            duration: 1,
            when: "beforeChildren",
            staggerChildren: 0.25,
        },
    }
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

export const slider = {
    hidden: {x: '-100%', skew: '50deg'},
    show:{
        x: '100%',
        skew: '0deg',
        transition: {ease: 'easeOut', duration: 0.5},
    },

};

export const sliderContainer ={
    hidden: {opacity: 1},
    show: {opacity: 1, transition: {staggerChildren: 0.1, ease: 'easeOut'}}
}