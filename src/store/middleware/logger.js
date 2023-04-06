const logger = (store) => (next) => (action) => {
  console.log('__ACTION__', action);
  next(action);
};

export default logger;