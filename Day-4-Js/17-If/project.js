//Uygulama
//Şifre uzunluğu 12den büyükse güçlü şifre, 8 ile 12 arasındaysa yeterli şifre, 8 den küçükse yetersiz şifre olduğunu gösteren consolea bastırılsın.

const yeniSifre="dasdasdasda!321";

if(yeniSifre.length > 12)
{
    console.log("Şifre güçlü")
}
else if(yeniSifre.length>=8 && yeniSifre.length<=12)
{
    console.log("Şifre yeterli");
}
else{
    console.log("Şifreyi yeniden giriniz!");
}


