import camelcase from "camelcase";

const convertKeyToCamelCase = (obj) => {
  const newObj = {};
  Object.keys(obj).forEach((key) => {
    newObj[camelcase(key)] = obj[key];
  });
  return newObj;
};
export default convertKeyToCamelCase;
