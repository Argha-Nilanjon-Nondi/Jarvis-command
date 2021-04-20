/*
Prediction
 -- make_commom() is a method which make a dataset which is important of take decision
 Return [
 (command1,sentence1),
 (command1,sentence2),
 (command2,sentence3)
 ]
   To
  { command1 : { word1.1 ,word1.2 , word1.2 , word2.1 , word2.2 , word2,3},
  command2:{ word3.1 , word3.2 ,word3.3 , word3.4 }
  }
  NOTE : word1.2 means second word of sentence one.
 -- result() is a method which find the score of accuracy which relative to self.text . It is the main method where I have created mathematical operation Return
 "Text1" and make_common() is needed to return {
 command1:score1 , command1:score2
 }
 --dic_toMax() is a method which finds the highest score from result().
 Return { command1:score1,command2:score2 } to [score1,command1] if score1 is the highest


*/




class Prediction {
    constructor(text) {
        this.text = text.toLowerCase()
    }

    make_common() {

        let data1 = {};
        let key,
            value,
            sample_data,
            sub_data1,
            sub_data2, i, j, k;

        for (i of this.data) {
            data1[i[0]] = "";
        }

        for (j of this.data) {
            key = j[0];
            value = j[1];
            data1[key] += (" " + value.toLowerCase());

        }


        for (k in data1) {
            sample_data = data1[k].split(" ");
            sample_data = Array.from(sample_data)
            sub_data2 = make_unique(sample_data);
            data1[k] = sub_data2;
        }

        return data1


    }


    result() {
        let data1 = this.make_common();
        let data2 = this.text.split(" ");
        let data3 = {};
        let i, j, k, z, a;
        let pos = 0;
        for (i in data1) {
            data3[i] = 0;
        }

        for (j in data1) {
            for (a of data2) {
                if ((data1[j]).includes(a)) {
                    data3[j] += 1
                }
            }
        }


        for (z in data3) {
            data3[z] = (data3[z] ** 2 / (data1[z].length));
        }


        return data3
    }


    dic_toMax() {
        let data1 = this.result();
        let data2 = [];
        let i, max_probability;

        for (i in data1) {
            data2.push([data1[i], i])
        }

        max_probability = find_max(data2);

        return max_probability
    }

}