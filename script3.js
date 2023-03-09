const block = document.querySelector(".block");

const Tasks = () => {
  setTimeout(() => {
    const promise = new Promise((res, rej) => {
      res();
    });
    promise.then(() => console.log("1) first promise"));
    //чтобы выполнить позже промиса
    queueMicrotask(() => {
      block.style.backgroundColor = "red";
      console.log("1) " + block.style.backgroundColor);
    });
    console.log("1) " + block.style.backgroundColor);
  }, 0);
  setTimeout(() => {
    const promise = new Promise((res, rej) => {
      res();
    });
    promise.then(() => console.log("2) second promise"));
    queueMicrotask(() => console.log("2) miq task"));
  }, 0);
  setTimeout(() => {
    const promise1 = new Promise((res, rej) => {
      res();
    });
    promise1.then(() => console.log("3) third promise"));
    //чтобы выполнить позже промиса
    queueMicrotask(() => {
      block.innerHTML = "change";
      console.log("3) InnerHTML: " + block.innerHTML);
    });
    console.log("3) InnerHTML: " + block.innerHTML);
  }, 0);
};
Tasks();
