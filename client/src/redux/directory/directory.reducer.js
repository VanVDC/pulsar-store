const INTIAL_STATE = {
  sections: [
    {
      title: "meats",
      imageUrl: "https://i.ibb.co/pnV01X4/steak2.jpg",
      id: 1,
      linkUrl: "shop/meats",
    },
    {
      title: "veggies",
      imageUrl: "https://i.ibb.co/njWfSB4/avacodo.jpg",
      id: 2,
      linkUrl: "shop/veggies",
    },
    {
      title: "snacks",
      imageUrl: "https://i.ibb.co/QkdddNd/main.jpg",
      id: 3,
      linkUrl: "shop/snacks",
    },
    {
      title: "flours",
      imageUrl: "https://i.ibb.co/5kgZ27Y/flour2.jpg",
      size: "large",
      id: 4,
      linkUrl: "shop/flours",
    },
    {
      title: "oils",
      imageUrl: "https://i.ibb.co/WGgnmcj/oil.jpg",
      size: "large",
      id: 5,
      linkUrl: "shop/oils",
    },
  ],
};

const directoryReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
