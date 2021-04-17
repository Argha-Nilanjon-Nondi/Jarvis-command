
function randrange(max) {
  let min=0;
  return Math.floor(Math.random() * (max - min )) + min;
}


class Reply {
  make_common() {
    let com_list = [];
    let data1 = {};
    let i,
    j,
    k;
    for (i of this.data) {
      com_list.push(i[0]);
    }
    com_list = make_unique(com_list);
    for (j of com_list) {
      data1[j] = [];
    }
    for (k of this.data) {
      if ((data1[k[0]]).includes(k[1])==false) {
        data1[k[0]].push(k[1])
      }
    }
    return data1
  }

  find_sen(com) {
    let common = this.make_common();
    let data1,
    index;
    if (com in common) {
      data1 = common[com]
      index = randrange(len(data1))
      return data1[index]
      return "Not available"
    }
  }

}