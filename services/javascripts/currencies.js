var Currency = {
  rates: {"USD":1.0,"EUR":1.05669,"GBP":1.22203,"CAD":0.731935,"ARS":0.00285943,"AUD":0.636912,"BRL":0.194259,"CLP":0.00108429,"CNY":0.138424,"CYP":0.397899,"CZK":0.0431419,"DKK":0.141708,"EEK":0.0706676,"HKD":0.127684,"HUF":0.00273129,"ISK":0.00729618,"INR":0.012031,"JMD":0.00643837,"JPY":0.00670418,"LVL":1.57329,"LTL":0.320236,"MTL":0.293496,"MXN":0.0548134,"NZD":0.597189,"NOK":0.091838,"PLN":0.230689,"SGD":0.731901,"SKK":21.5517,"SIT":175.439,"ZAR":0.0516509,"KRW":0.000743858,"SEK":0.0910994,"CHF":1.10009,"TWD":0.0311073,"UYU":0.0255272,"MYR":0.212172,"BSD":1.0,"CRC":0.00186162,"RON":0.212939,"PHP":0.0176399,"AED":0.272294,"VEB":2.87678e-10,"IDR":6.40522e-05,"TRY":0.0360859,"THB":0.0270696,"TTD":0.148108,"ILS":0.256205,"SYP":7.69133e-05,"XCD":0.369974,"COP":0.000231162,"RUB":0.0099437,"HRK":0.140247,"KZT":0.00209421,"TZS":0.000398538,"XPT":875.277,"SAR":0.266667,"NIO":0.0274042,"LAK":4.88998e-05,"OMR":2.59534,"AMD":0.00243808,"CDF":0.000399625,"KPW":0.00111111,"SPL":6.0,"KES":0.00672004,"ZWD":0.00276319,"KHR":0.00024294,"MVR":0.0647795,"GTQ":0.127624,"BZD":0.497374,"BYR":3.03332e-05,"LYD":0.204758,"DZD":0.00725525,"BIF":0.000352751,"GIP":1.22203,"BOB":0.144743,"XOF":0.00161091,"STD":4.3086e-05,"NGN":0.00129871,"PGK":0.272,"ERN":0.0666667,"MWK":0.000864378,"CUP":0.0418084,"GMD":0.0152553,"CVE":0.00958273,"BTN":0.012031,"XAF":0.00161091,"UGX":0.000266705,"MAD":0.0973572,"MNT":0.000288363,"LSL":0.0516509,"XAG":21.8571,"TOP":0.418979,"SHP":1.22203,"RSD":0.00903615,"HTG":0.00745262,"MGA":0.000220821,"MZN":0.0156773,"FKP":1.22203,"BWP":0.0722541,"HNL":0.0405483,"PYG":0.000136879,"JEP":1.22203,"EGP":0.0324383,"LBP":6.66092e-05,"ANG":0.557213,"WST":0.359439,"TVD":0.636912,"GYD":0.00479671,"GGP":1.22203,"NPR":0.00751585,"KMF":0.00214788,"IRR":2.37169e-05,"XPD":1159.38,"SRD":0.0261702,"TMM":5.70975e-05,"SZL":0.0516509,"MOP":0.123965,"BMD":1.0,"XPF":0.00885504,"ETB":0.017998,"JOD":1.41044,"MDL":0.0550578,"MRO":0.0026285,"YER":0.00399618,"BAM":0.540276,"AWG":0.558659,"PEN":0.261823,"VEF":2.8766e-07,"SLL":4.44759e-05,"KYD":1.21576,"AOA":0.00120033,"TND":0.314747,"TJS":0.0910196,"SCR":0.07473,"LKR":0.00308473,"DJF":0.00562088,"GNF":0.000116827,"VUV":0.00819025,"SDG":0.00166574,"IMP":1.22203,"GEL":0.374914,"FJD":0.43745,"DOP":0.0176409,"XDR":1.31337,"MUR":0.0226355,"MMK":0.000477476,"LRD":0.00533363,"BBD":0.5,"ZMK":4.65693e-05,"XAU":1848.06,"VND":4.10091e-05,"UAH":0.0272722,"TMT":0.285488,"IQD":0.000763451,"BGN":0.540276,"KGS":0.0112459,"RWF":0.000823485,"BHD":2.65957,"UZS":8.19908e-05,"PKR":0.00352551,"MKD":0.0171788,"AFN":0.0131949,"NAD":0.0516509,"BDT":0.00907416,"AZN":0.587358,"SOS":0.00175915,"QAR":0.274725,"PAB":1.0,"CUC":1.0,"SVC":0.114286,"SBD":0.118001,"ALL":0.0100306,"BND":0.731901,"KWD":3.22909,"GHS":0.0855193,"ZMW":0.0465693,"XBT":27265.3,"NTD":0.0337206,"BYN":0.303332,"CNH":0.136779,"MRU":0.026285,"STN":0.043086,"VES":0.028766,"MXV":0.428844,"VED":0.028766,"SLE":0.0444759},
  convert: function(amount, from, to) {
    return (amount * this.rates[from]) / this.rates[to];
  }
};
