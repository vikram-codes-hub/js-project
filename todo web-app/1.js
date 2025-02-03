let tasks = [];

const addtask = () => {
    let taskinput = document.querySelector(".taskinput");

    if (!taskinput) {
        console.log("Task input field not found!");
        return;
    }

    console.log("Input field found:", taskinput);
    const task = taskinput.value.trim();
    
    if (task) {
        tasks.push({ text: task, completed: false });
        console.log("Task added:", task);
    }
    console.log("Updated tasks:", tasks);
};



    document.querySelector(".newtask").addEventListener("click", (e) => {
        e.preventDefault();
        addtask();
    });


