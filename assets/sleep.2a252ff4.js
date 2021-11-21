function sleep(time = 1e3) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}
export { sleep as s };
