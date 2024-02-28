const handleClickOutside = (e, setState) => {
  console.dir(e.currenTarget);
  console.dir(e.target);

  if (e.currentTarget === e.target) {
    setState(false);
  }
};

export default handleClickOutside;
