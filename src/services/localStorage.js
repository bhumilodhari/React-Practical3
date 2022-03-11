import { getDay } from "../Util/util";

const getStorage = () => {
    return JSON.parse(localStorage.getItem("TodoItems"));
};

const addStorage = (newTask) => {
  const list = getStorage();
  localStorage.setItem(
    "TodoItems",
      JSON.stringify({
      date: getDay(),
      tasks: [...list.tasks, newTask],
    })
  );
}
const storageUpdate = (newTask, id) => {
    const localTask = JSON.parse(localStorage.getItem("TodoItems"));
    localTask.tasks = localTask.tasks.map((currentTask) => {
        if (currentTask.id === id) {
            return newTask;
        } else {
            return currentTask;
        }
    });

    localStorage.setItem("TodoItems", JSON.stringify(localTask));
}

const resetStorage = () => {
    localStorage.setItem(
      "TodoItems",
        JSON.stringify({
        date: getDay(),
        tasks: [],
      })
    );
  };

export { getStorage , addStorage , storageUpdate , resetStorage};