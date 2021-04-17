
  class DataExtractor {
    constructor(text,command) {
      this.data = {};
      this.text = text;
      this.command = command;
    }

    find_ip() {
      let pattern,
      ip;
      pattern = /\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b/;
      ip = this.text.match(pattern);
      return ip;
    }



    find_number() {
      let data1,
      i,
      num;
      data1 = [];

      for (i of this.text.split(" ")) {

        if (!isNaN(i)) {
          num = new Number(i);
          data1.push(num);
        }
      }

      return data1
    }


    find_url() {
      let urls,
      pattern;
      pattern = /(((https?|https|ftp|ftps:\/\/)|(www\.))[^\s]+)/g;
      urls = this.text.match(pattern);
      return urls
    }

    find_domain() {
      let domain_suffix,
      domain_name,
      i,
      j;
      domain_suffix = ["com",
        "org"]
      domain_name = []
      text = this.text.split(" ")
      for (i of text) {
        for (j of domain_suffix) {
          if (i.includes("."+j)) {
            domain_name.push(i)
          }
        }
      }
      return domain_name
    }

    main() {
      let data,
      i,
      j,
      methods = "",
      command_me,
      value;
      for (j = 0; j < this.extraction_data.length; j++) {
        command_me = this.extraction_data[j][0];
        value = this.extraction_data[j][1];
        if (this.command == command_me) {
          methods += value;
        }
      }

      data = {}
      for (i of methods.split(" ")) {
        if (i == "none") {
          data["none"] = []
        }
        if (i == "ip") {
          data["ip"] = this.find_ip()
        }
        if (i == "number") {
          data["number"] = this.find_number()
        }
        if (i == "url") {
          data["url"] = this.find_url()
        }
        if (i == "domain") {
          data["domain"] = this.find_domain()
        }
      }
      return data

    }

  }