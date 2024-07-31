document.addEventListener("DOMContentLoaded", function () {
    var lis = document.getElementsByTagName("li");

    // console.log(lis);
    for (var i = 0; i < lis.length; i++) {
        if (i == 0) {
            lis[i].classList.add("list-group-item-success");
        }
        lis[i].id = i + 1;
        lis[i].addEventListener("click", liClick);
        lis[i].children[0].id = i + 1;
        lis[i].children[0].addEventListener("click", liClick);

        lis[i].children[0].children[0].id = i + 1;
        lis[i].children[0].children[0].addEventListener("click", liClick);

        lis[i].children[0].children[1].id = i + 1;
        lis[i].children[0].children[1].addEventListener("click", liClick);

        lis[i].children[0].children[2].id = i + 1;
        lis[i].children[0].children[2].addEventListener("click", liClick);
    }
});

function liClick(event) {
    var museoId = event.target.id;

    var lis = document.getElementsByTagName("li");

    for (var i = 0; i < lis.length; i++) {
        if (i + 1 != museoId) {
            // lis[i].classList.remove("active");
            lis[i].classList.remove("list-group-item-success");
        } else {
            // lis[i].classList.add("active");
            lis[i].classList.add("list-group-item-success");
        }
    }

    var coordenadas = "https://www.google.com/maps/embed?";

    switch (parseInt(museoId)) {
        case 1:
            coordenadas += "pb=!1m18!1m12!1m3!1d3284.687482870071!2d-58.39202299999999!3d-34.586773400000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccbaf2f03d0d9%3A0xd2d2eff0a66548b3!2sJun%C3%ADn%201930%2C%20C1113AAX%20CABA!5e0!3m2!1ses-419!2sar!4v1668276100079!5m2!1ses-419!2sar";
            break;
        case 2:
            coordenadas += "pb=!1m18!1m12!1m3!1d3285.0794777171463!2d-58.40591192444852!3d-34.57685547296394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb564f98749a7%3A0xbaaf207a5121f74e!2sAv.%20Pres.%20Figueroa%20Alcorta%203415%2C%20C1425CLA%20CABA!5e0!3m2!1ses-419!2sar!4v1668278651720!5m2!1ses-419!2sar";
            break;
        case 3:
            coordenadas += "pb=!1m18!1m12!1m3!1d3284.8495545238807!2d-58.4010755!3d-34.5826731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5620f9800e3%3A0x4bb039cbcf58d5df!2sAv.%20del%20Libertador%201902%2C%20C1425AAS%20CABA!5e0!3m2!1ses-419!2sar!4v1668464160889!5m2!1ses-419!2sar";
            break;
        case 4:
            coordenadas += "pb=!1m18!1m12!1m3!1d3283.2906425453175!2d-58.372942985194584!3d-34.6220948659769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a334d2db10cb05%3A0x36b388cb6b3f019f!2sAv.%20San%20Juan%20350%2C%20C1147AAO%20CABA!5e0!3m2!1ses-419!2sar!4v1668464310258!5m2!1ses-419!2sar";
            break;
        case 5:
            coordenadas += "pb=!1m18!1m12!1m3!1d3284.1195889180594!2d-58.43278918519537!3d-34.60113736486767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca7024676f7d%3A0xb8572c26326498ea!2sHumahuaca%204662%2C%20C1192ACP%20CABA!5e0!3m2!1ses-419!2sar!4v1668464350647!5m2!1ses-419!2sar";
            break;
        case 6:
            coordenadas += "pb=!1m18!1m12!1m3!1d3283.948851811415!2d-58.440366285195196!3d-34.60545486509613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca6d1ab2631f%3A0xeca366d67e8a21f0!2sAv.%20Patricias%20Argentinas%20480%2C%20C1414%20CABA!5e0!3m2!1ses-419!2sar!4v1668464391452!5m2!1ses-419!2sar";
            break;
        case 7:
            coordenadas += "pb=!1m18!1m12!1m3!1d3271.691312054681!2d-57.95144198518392!3d-34.91419538149795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e63a19cc9deb%3A0x70aa432d04271c20!2sC.%2050%20575%2C%20B1900ASW%20La%20Plata%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1668464422953!5m2!1ses-419!2sar";
            break;
        case 8:
            coordenadas += "pb=!1m18!1m12!1m3!1d3284.0039524041913!2d-58.372781485195205!3d-34.60406156502245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a3352d7d3eaddb%3A0x2eb870b02dea31fc!2sSarmiento%20151%2C%20C1041AAE%20CABA!5e0!3m2!1ses-419!2sar!4v1668464461705!5m2!1ses-419!2sar";
            break;
        case 9:
            coordenadas += "pb=!1m18!1m12!1m3!1d3282.5925948317763!2d-58.364208285193904!3d-34.63973436691082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a334b05cb3f6f1%3A0xa83303d7c04bbde2!2sAv.%20Don%20Pedro%20de%20Mendoza%201929%2C%20C1169%20CABA!5e0!3m2!1ses-419!2sar!4v1668464580956!5m2!1ses-419!2sar";
            break;
        case 10:
            coordenadas += "pb=!1m18!1m12!1m3!1d3283.2967393715976!2d-58.37240818519459!3d-34.62194076596862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a334d2e65052ff%3A0x99f8a520b9384bf1!2sAv.%20San%20Juan%20328%2C%20C1141%20CABA!5e0!3m2!1ses-419!2sar!4v1668464612993!5m2!1ses-419!2sar";
            break;
        case 11:
            coordenadas += "pb=!1m18!1m12!1m3!1d3271.736240859498!2d-57.95305978518406!3d-34.91306808143779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e6375d9dae71%3A0xf0fee7b271876c18!2sC.%2048%20575%2C%20B1900%20La%20Plata%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1668464643533!5m2!1ses-419!2sar";
            break;
        case 12:
            coordenadas += "pb=!1m18!1m12!1m3!1d3284.178704889866!2d-58.376499685195384!3d-34.59964236478858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccacb77624001%3A0x3e2a8194631b5e04!2sViamonte%20525%2C%20C1053ABK%20CABA!5e0!3m2!1ses-419!2sar!4v1668464674186!5m2!1ses-419!2sar";
            break;
        case 13:
            coordenadas += "pb=!1m18!1m12!1m3!1d3279.9150127236726!2d-58.39576328519149!3d-34.707323470493456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccd226f762d5d%3A0xb43557f84ba47782!2sAv.%2025%20de%20Mayo%20131%2C%20B1824NMB%20Gran%20Buenos%20Aires%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1668464705569!5m2!1ses-419!2sar";
            break;
        case 14:
            coordenadas += "pb=!1m18!1m12!1m3!1d3284.453515367553!2d-58.37023568519554!3d-34.59269186442098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a3354a9bc74697%3A0x20fc8da1f556cd4!2sAv.%20Ant%C3%A1rtida%20Argentina%201335%2C%20C1104ACA%20CABA!5e0!3m2!1ses-419!2sar!4v1668464737196!5m2!1ses-419!2sar";
            break;
        case 15:
            coordenadas += "pb=!1m18!1m12!1m3!1d3283.025868616187!2d-58.359016185194285!3d-34.62878656633112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a334c76e25efab%3A0x3700cad523d409ab!2sAgust%C3%ADn%20R.%20Caffarena%201%2C%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1668464767572!5m2!1ses-419!2sar";
            break;
        case 16:
            coordenadas += "pb=!1m18!1m12!1m3!1d3284.8475085687146!2d-58.431263285195925!3d-34.58272486389378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb58f88ac0323%3A0x45223cebb89362e9!2sGodoy%20Cruz%202270%2C%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1668464844616!5m2!1ses-419!2sar";
            break;
        case 17:
            coordenadas += "pb=!1m18!1m12!1m3!1d3271.707931834677!2d-57.949862785183974!3d-34.913778381475815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e63bcd4fa959%3A0x37d3790ec8718769!2sAv.%2051%20525%2C%20B1900AVK%20La%20Plata%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1668464926711!5m2!1ses-419!2sar";
            break;
        case 18:
            coordenadas += "pb=!1m18!1m12!1m3!1d3281.661550353502!2d-58.36964318101952!3d-34.66324941474939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a3334e0fa30ed7%3A0x3a53f2d830ce1c51!2sSan%20Mart%C3%ADn%20797%2C%20B1870APA%20Gran%20Buenos%20Aires%2C%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1668464959119!5m2!1ses-419!2sar";
            break;
        case 19:
            coordenadas += "pb=!1m18!1m12!1m3!1d3284.2594944199377!2d-58.39665898519545!3d-34.597599164680524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca958af42205%3A0x428441b4529d11b4!2sRiobamba%20985%2C%20C1116ABC%20CABA!5e0!3m2!1ses-419!2sar!4v1668464987650!5m2!1ses-419!2sar";
            break;
        case 20:
            coordenadas += "pb=!1m18!1m12!1m3!1d3284.814176964299!2d-58.45151488519596!3d-34.583568163938345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5ef198712d1%3A0xad024252de3a9c94!2sJorge%20Newbery%203599%2C%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1668465016798!5m2!1ses-419!2sar";
            break;
        case 21:
            coordenadas += "pb=!1m18!1m12!1m3!1d3284.817884463592!2d-58.395079485195986!3d-34.583474363933455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccaa1b5b1f72f%3A0xe391583504533d7a!2sAv.%20Pres.%20Figueroa%20Alcorta%202280%2C%20C1425%20CABA!5e0!3m2!1ses-419!2sar!4v1668465045175!5m2!1ses-419!2sar";
            break;
        case 22:
            coordenadas += "pb=!1m18!1m12!1m3!1d3284.71275882005!2d-58.4485084851959!3d-34.586133964074016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5f1fd8a9707%3A0x8e2535dc6d5b8a85!2sRoseti%2093%2C%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1668465072594!5m2!1ses-419!2sar";
            break;
        case 23:
            coordenadas += "pb=!1m18!1m12!1m3!1d3284.178704889866!2d-58.376499685195384!3d-34.59964236478858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccacb77624001%3A0x3e2a8194631b5e04!2sViamonte%20525%2C%20C1053ABK%20CABA!5e0!3m2!1ses-419!2sar!4v1668465187547!5m2!1ses-419!2sar";
            break;
        case 24:
            coordenadas += "pb=!1m18!1m12!1m3!1d3283.027570162218!2d-58.36177958519427!3d-34.628743566328936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a334c7cdf99783%3A0x1e91a67b00019665!2sCaboto%20531%2C%20C1157ABI%20CABA!5e0!3m2!1ses-419!2sar!4v1668465214613!5m2!1ses-419!2sar";
            break;
        default:
            coordenadas += "pb=!1m18!1m12!1m3!1d3284.687482870071!2d-58.39202299999999!3d-34.586773400000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccbaf2f03d0d9%3A0xd2d2eff0a66548b3!2sJun%C3%ADn%201930%2C%20C1113AAX%20CABA!5e0!3m2!1ses-419!2sar!4v1668276100079!5m2!1ses-419!2sar";
            break;
    }

    var mapa = document.getElementById("googleMap");
    mapa.src = coordenadas;

    document.getElementById("googleMap").scrollIntoView();
}