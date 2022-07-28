# tckn-sorgu
KPS web servislerini kullanarak tckn sorgusu yapan fonksiyonlar içerir

Parametre olarak Aşağıdaki formatta bir JSON bekliyor:

```js
let params = {
    TCKimlikNo: 12345678901,
    Ad: "Muhammed Hilmi",
    Soyad: "Koca",
    DogumYili: 1989
};
```

Geriye bir promise dönüyor. Bunu aşağıdaki gibi çözebilirsiniz:

```js
const tcknSorgu = require("tckn-sorgu");

let params = {
    TCKimlikNo: 12345678901,
    Ad: "Muhammed Hilmi",
    Soyad: "Koca",
    DogumYili: 1989
};

tcknSorgu.tcknSorgula(params)
    .then(function (data) {
        console.log(data);
    }).catch(function (msg) {
        console.log(msg);
    });
```
