MyApp.service("ApiService", function($http) {

  this.syncMethod = function() {
    return 0;
  }

  this.getItems = function() {
    return $http.get("http://www.hel.fi/palvelukarttaws/rest/v2/service/26972")
      .then(function (response) {
        return response.data;
      })
      .catch(function (err) {
        console.error("Error ApiService getItems ", err);
        return {};
      })
  }
  this.getSchool = function(id) {
    return $http.get(window.env.API_URL+"/school/"+id)
      .then(function (response) {
        return response.data;
      })
      .catch(function (err) {
        console.error("Error ApiService getItems ", err);
        return {};
      })
  }

  this.getSchoolFromDB = function(id) {

    console.log(window.env.API_URL+"/school/db/"+id);
    return $http.get(window.env.API_URL+"/school/db/"+id)
      .then(function (response) {
        return response.data;
      })
      .catch(function (err) {
        console.error("Error ApiService getItems ", err);
        return {};
      })
  }

  this.getSchools = function () {//itä-vantaa (tikkurila) puuttuu ainaki ja martinlaakson lukio on samassa paikassa kun länsivantaan lukio ja tikkurilan lukio itävantaan lukio
    var asd = '[{"ranking":"1","mean":"36.796875","participants":"128","id":"15359","name":"Etelä-Tapiolan lukio","coords":"24.794697,60.178978"},{"ranking":"2","mean":"35.869565217391305","participants":"138","id":"30863","name":"Ressun lukio","coords":"24.938452,60.167095"},{"ranking":"3","mean":"35.07142857142857","participants":"126","id":"6901","name":"Gymnasiet Lärkan","coords":"24.89097,60.21669"},{"ranking":"4","mean":"32.88","participants":"100","id":"7190","name":"Helsingin Suomalainen Yhteiskoulu","coords":"24.889652,60.21161"},{"ranking":"5","mean":"31.938271604938272","participants":"81","id":"6880","name":"Helsingin yliopiston Viikin normaalikoulu","coords":"25.029861,60.22776"},{"ranking":"6","mean":"30.648809523809526","participants":"168","id":"15431","name":"Kuninkaantien lukio","coords":"24.66031,60.208965"},{"ranking":"7","mean":"30.29268292682927","participants":"82","id":"6780","name":"Kulosaaren yhteiskoulu","coords":"25.003601,60.18717"},'
        + '{"ranking":"8","mean":"30.19148936170213","participants":"47","id":"6840","name":"Helsingin Ranskalais-suomalainen koulu","coords":"24.869864,60.207634"},{"ranking":"9","mean":"29.70138888888889","participants":"144","id":"34961","name":"Munkkiniemen yhteiskoulu","coords":"24.878332,60.200237"},{"ranking":"10","mean":"28.96153846153846","participants":"104","id":"47288","name":"Töölön yhteiskoulu","coords":"24.92364,60.185265"},{"ranking":"11","mean":"28.905172413793103","participants":"116","id":"15307","name":"Mattlidens gymnasium","coords":"24.751099,60.16398"},{"ranking":"12","mean":"28.77659574468085","participants":"94","id":"15312","name":"Olarin lukio","coords":"24.737457,60.180492"},{"ranking":"13","mean":"28.743243243243242","participants":"74","id":"7048","name":"Helsingin normaalilyseo","coords":"24.944132,60.1628"},'
        + '{"ranking":"14","mean":"28.534246575342465","participants":"73","id":"14406","name":"Gymnasiet Grankulla samskola","coords":"24.724127,60.214394"},{"ranking":"15","mean":"28.1875","participants":"112","id":"6806","name":"Oulunkylän yhteiskoulu","coords":"24.96325,60.235916"},{"ranking":"16","mean":"27.753424657534246","participants":"146","id":"15348","name":"Tapiolan Lukio","coords":"24.752028,60.21014"},{"ranking":"17","mean":"27.134453781512605","participants":"119","id":"7051","name":"Brändö gymnasium","coords":"25.001835,60.185978"},{"ranking":"18","mean":"26.629213483146067","participants":"89","id":"6946","name":"Herttoniemen yhteiskoulu","coords":"25.036442,60.20595"},{"ranking":"19","mean":"25.825","participants":"160","id":"30862","name":"Mäkelänrinteen lukio","coords":"24.94865,60.199043"},{"ranking":"20","mean":"25.796992481203006","participants":"133","id":"30864","name":"Sibelius-lukio","coords":"24.956417,60.1745"},'
        + '{"ranking":"21","mean":"25.48739495798319","participants":"119","id":"14405","name":"Kauniaisten lukio","coords":"24.703032,60.215397"},{"ranking":"22","mean":"25.257142857142856","participants":"105","id":"15415","name":"Haukilahden lukio","coords":"24.76666,60.166313"},{"ranking":"23","mean":"25.07017543859649","participants":"114","id":"30858","name":"Kallion lukio","coords":"24.955107,60.183876"},{"ranking":"24","mean":"24.1900826446281","participants":"121","id":"6820","name":"Tölö gymnasium","coords":"24.921833,60.179214"},{"ranking":"25","mean":"23.774436090225564","participants":"133","id":"18649","name":"Martinlaakson lukio","coords":"24.845383,60.27492"},{"ranking":"26","mean":"23.74754098360656","participants":"305","id":"19274","name":"Tikkurilan lukio","coords":"25.049873,60.29908"},{"ranking":"27","mean":"23.388059701492537","participants":"201","id":"30854","name":"Helsingin luonnontiedelukio","coords":"24.943836,60.21015"},'
        + '{"ranking":"28","mean":"22.821782178217823","participants":"101","id":"7020","name":"Pohjois-Haagan yhteiskoulu","coords":"24.897505,60.227016"},{"ranking":"29","mean":"22.738636363636363","participants":"88","id":"7068","name":"Lauttasaaren yhteiskoulu","coords":"24.862947,60.158207"},{"ranking":"30","mean":"22.57246376811594","participants":"138","id":"15377","name":"Espoonlahden lukio","coords":"24.664593,60.14465"},{"ranking":"31","mean":"21.847826086956523","participants":"46","id":"9972","name":"Englantilainen koulu","coords":"24.89586,60.193573"},{"ranking":"32","mean":"21.67361111111111","participants":"144","id":"30855","name":"Helsingin kuvataidelukio","coords":"24.958439,60.185745"},{"ranking":"33","mean":"21.33644859813084","participants":"107","id":"15398","name":"Pohjois-Tapiolan lukio","coords":"24.791653,60.18744"},{"ranking":"34","mean":"21.2","participants":"185","id":"30851","name":"Alppilan lukio","coords":"24.939,60.19222"},'
        + '{"ranking":"35","mean":"21.186274509803923","participants":"102","id":"19428","name":"Sotungin lukio","coords":"25.121653,60.28047"},{"ranking":"36","mean":"21.029197080291972","participants":"274","id":"19890","name":"Vaskivuoren lukio","coords":"24.851114,60.266033"},{"ranking":"37","mean":"20.967741935483872","participants":"31","id":"19001","name":"Helsinge gymnasium","coords":"24.980295,60.282215"},{"ranking":"38","mean":"20.67924528301887","participants":"106","id":"15424","name":"Viherlaakson lukio","coords":"24.75118,60.210056"},{"ranking":"39","mean":"20.031007751937985","participants":"129","id":"6971","name":"Maunulan yhteiskoulu ja Helsingin matematiikkalukio","coords":"24.92702,60.229908"},{"ranking":"40","mean":"20.03030303030303","participants":"66","id":"7087","name":"Helsingin Rudolf Steiner-koulu","coords":"24.907461,60.196465"},'
        + '{"ranking":"41","mean":"19.685185185185187","participants":"162","id":"30853","name":"Helsingin medialukio","coords":"25.031038,60.26979"},{"ranking":"42","mean":"19.546666666666667","participants":"75","id":"15390","name":"Leppävaaran lukio","coords":"24.805935,60.225765"},{"ranking":"43","mean":"19.36842105263158","participants":"19","id":"7010","name":"Suomalais-venäläinen koulu","coords":"24.89931,60.238308"},{"ranking":"44","mean":"19.28205128205128","participants":"39","id":"6728","name":"Helsingin Uusi Yhteiskoulu","coords":"24.999256,60.23877"},{"ranking":"45","mean":"19.032","participants":"125","id":"34442","name":"Helsingin kielilukio","coords":"25.072126,60.21299"},{"ranking":"46","mean":"18.33132530120482","participants":"166","id":"30852","name":"Etu-Töölön lukio","coords":"24.922321,60.171154"},'
        + '{"ranking":"47","mean":"17.864406779661017","participants":"59","id":"15343","name":"Espoon yhteislyseon lukio","coords":"24.594084,60.188713"},{"ranking":"48","mean":"17.81935483870968","participants":"155","id":"7046","name":"Eiran aikuislukio","coords":"24.942867,60.155674"},{"ranking":"49","mean":"17.795454545454547","participants":"44","id":"6958","name":"Helsingin yhteislyseo","coords":"25.089436,60.230705"},{"ranking":"50","mean":"17.56338028169014","participants":"71","id":"15388","name":"Kaitaan lukio","coords":"24.695164,60.149723"},{"ranking":"51","mean":"17.010204081632654","participants":"98","id":"30865","name":"Vuosaaren lukio","coords":"25.14523,60.209152"},'
        + '{"ranking":"52","mean":"16.774774774774773","participants":"111","id":"18329","name":"Lumon lukio","coords":"25.07662,60.35201"},{"ranking":"53","mean":"16.48","participants":"50","id":"9861","name":"Helsingin aikuislukio","coords":"24.94865,60.199043"},{"ranking":"54","mean":"15.936170212765957","participants":"47","id":"6982","name":"Apollon yhteiskoulu","coords":"24.856485,60.244446"},{"ranking":"55","mean":"15.82882882882883","participants":"111","id":"15386","name":"Espoon aikuislukio","coords":"24.739729,60.228165"},{"ranking":"56","mean":"15.264150943396226","participants":"53","id":"29943","name":"Länsi-Vantaan aikuislukio","coords":"24.845833,60.27508"},'
        + '{"ranking":"57","mean":"0","participants":"0","id":"6774","name":"International school of Helsinki","coords":"24.91563,60.160614"},{"ranking":"58","mean":"0","participants":"0","id":"9944","name":"Helsingin eurooppalainen koulu","coords":"24.93871,60.164494"},{"ranking":"59","mean":"0","participants":"0","id":"7099","name":"Helsingin Saksalainen koulu","coords":"24.931969,60.166912"},{"ranking":"60","mean":"0","participants":"0","id":"15315","name":"Espoon Steinerkoulu","coords":"24.733088,60.17955"}]';

    var json = JSON.parse(asd);
    return json;
  }
})
