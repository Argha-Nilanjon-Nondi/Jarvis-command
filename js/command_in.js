let command_text = document.querySelector(".command-input>textarea");
let command_output = document.querySelector(".command-display");


document.querySelector(".command-input button").addEventListener("click", function() {
    // success(command_text.value);
    // danger(command_text.value);
    warnning(command_text.value);

    obj.text = command_text.value;
    let obj1 = new Action(obj.result());
    obj1.worker();
});