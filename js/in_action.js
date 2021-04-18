class Action {
    constructor(data) {
        this.command = data["command"];
        this.data = data["data"];
        this.answer = data["answer"];
        success(this.answer);
    }

    worker() {
        if (this.command == "my_ip") {
            alert("ppp");
            fetch("https://api.myip.com", {
                headers: {
                    "Access-Control-Allow-Origin": "https://api.myip.com"
                }
            }).then((response) => {
                json_show(response.json())
            });
        }
    }

}