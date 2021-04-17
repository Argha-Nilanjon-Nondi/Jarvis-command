class AI {
  result() {
  let obj1 = new Prediction(this.text)
  obj1.data = this.decision_data
  let command = obj1.dic_toMax();
  let obj2 = new Reply();
  obj2.data = this.reply_data
  let answer = obj2.find_sen(command);
  let obj3 = new DataExtractor(this.text,command);
  obj3.extraction_data = this.data_extraction
  let data_for_action=obj3.main()
  let data={};
  data["command"]=command;
  data["data"]=data_for_action ;
  data["answer"]=answer;
return data;
  }
}

let obj=new AI();
obj.decision_data=[
      ['say_hello','hello hey hi '],
      ['ip_find','ip find ip search'],
      ['ip_find','locate my ip'],
      ['tell_weather','who is the weather dat today'],
      ["check_tor","check my tor connection status"]
    ];
obj.reply_data=[
      ['na','na'],
      ['say_find9','hi find 01'],
      ['say_find9','hi find 02'],
      ['say_find9','hi find 03'],
      ['say_find99','hi find o888'],
      ["check_tor","Getting status "],
      ["check_tor","Wait a minute"]
    ];
obj.data_extraction=[
    ['say_hello','none'],
    ['ip_find','ip']
  ];
obj.text="tor check";
/*alert(JSON.stringify(obj.result()));
obj.text="How is the weather";
alert(JSON.stringify(obj.result()))*/