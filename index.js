const soap = require('soap');

const address = 'https://tckimlik.nvi.gov.tr/service/kpspublic.asmx?WSDL';

exports.tcknSorgula = function (param) {

    return new Promise(function (successFunction, errorFunction) {

        soap.createClient(address, (err, client) => {

            client.TCKimlikNoDogrula(param, (err, result) => {
                if (result.TCKimlikNoDogrulaResult != null) {
                    successFunction(result.TCKimlikNoDogrulaResult)
                } else if (err) {
                    errorFunction(err)
                }
            });

        });
    });
}