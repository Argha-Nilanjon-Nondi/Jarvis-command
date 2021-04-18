function len(compo) {
    let e = 0;
    for (i of compo) {
        e++;
    }
    return e;
}

function make_unique(arr) {
    let unique = arr.filter((item, i, ar) => ar.indexOf(item) === i);
    return unique;
}

function find_max(list) {
    let probaility = [];
    //collecting probaility of commands
    for (let x = 0; x < list.length; x++) {
        probaility.push(list[x][0]);
    }

    //getting max of probaility
    function max_element(list2) {
        let maximinum = list2[0];
        for (let x = 1; x <= list2.length; x++) {
            if (maximinum < list2[x]) {
                maximinum = list2[x];
            }
        }
        return maximinum;
    }
    let max_prob = max_element(probaility);

    //finding appropiate command
    let command = "";
    for (let p = 0; p < list.length; p++) {
        let value = list[p][0];
        if (value == max_prob) {
            return list[p][1]
        }
    }

}


function success(text = "") {
    command_output.innerHTML += `<pre class="command-output-success">${text}</pre>`;
}

function danger(text = "") {
    command_output.innerHTML += `<pre class="command-output-danger">${text}</pre>`;
}

function warnning(text = "") {
    command_output.innerHTML += `<pre class="command-output-warnning">${text}</pre>`;
}




let total_data = {}; //json data to mke chart
function json_collection(data_for) {

    for (value in data_for) {

        if (typeof data_for[value] == "object") {
            json_show(data_for[value]);
        } else {
            total_data[value] = data_for[value];
        }

    }
    return total_data;

}

function json_show(data) {
    json_collection(data)
    let html_code = "";
    html_code += `<table>`;
    for (value in total_data) {
        html_code += `<tr>
      <th>${value}</th>
      <td>${total_data[value]}</td>
  </tr>`;
    }
    html_code += `</table>`;
    command_output.innerHTML += html_code;
    total_data = {};
}