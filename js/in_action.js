class Action {
    constructor(data) {
        this.command = data["command"];
        this.data = data["data"];
        this.answer = data["answer"];
        success(this.answer);
    }

    worker() {
        if (this.command == "my_ip") {
            $.ajax({
                url: "https://api.ipify.org?format=json",
                success: function(result) {
                    json_show(result);
                }
            });
        }

        if (this.command == "ip_find") {
            $.ajax({
                url: `https://ipapi.co/${this.data["ip"][0]}/json/`,
                success: function(result) {
                    json_show(result);
                }
            });
        }
    }

}