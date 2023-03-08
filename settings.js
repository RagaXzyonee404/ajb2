const Nodeactyl = require('nodeactyl');
const chalk = require('chalk');
const fs = require('fs');
global.hostPanel = 'https://panel.semhas.me';
global.apikeyPanel = '';
global.panel = new Nodeactyl.NodeactylApplication(
  global.hostPanel,
  global.apikeyPanel
);
global.baseUrlApi = 'https://api.diky.my.id';
global.ServerBuilder = Nodeactyl.ServerBuilder;
global.prefa = '.';
global.linkGc = 'https://chat.whatsapp.com/KlUMZ454ZH4851ypQajFJC';
global.diky_key = 'diky'; //https://api.diky.my.id/
global.apikey = '24894c4fc7b99ed745521d8b'
global.grupWa = 'https://chat.whatsapp.com/KlUMZ454ZH4851ypQajFJC';
global.gcCode = 'CfF9ehZcKrMJl8EXpYd11Q';
global.footer = ``;
global.footer = `\n\nʟɪɴᴋ ᴊᴀᴅɪʙᴏᴛ ғʀᴇᴇ : https://chat.whatsapp.com/KlUMZ454ZH4851ypQajFJC\n\n`;
global.linkRestApi = 'https://api.diky.my.id/';
global.openaiKey = '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';
global.hituet = 0;
global.gopayno = '089516108557';
global.danano = '089530073117';
global.ovono = '089530073117';
global.creator = '6282192094580@s.whatsapp.net';
global.thumb = fs.readFileSync(`./image/thumb.png`);
global.qrisdonate = fs.readFileSync(`./image/qris.jpg`);
global.fake = `© IOX`;
global.packname = `©`;
global.author = `IOX`;
global.antilink = false;
global.antiwame = false;
global.autodltt = false;
global.autosticker = false;
global.ownerNomor = '6282192094580';
global.ownerName = 'iox';
global.ownerNumber = '6282192094580@s.whatsapp.net';
global.cek1 = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
  '19',
  '20',
  '21',
  '22',
  '23',
  '24',
  '25',
  '26',
  '27',
  '28',
  '29',
  '30',
  '31',
  '32',
  '33',
  '34',
  '35',
  '36',
  '37',
  '38',
  '39',
  '40',
  '41',
  '42',
  '43',
  '44',
  '45',
  '46',
  '47',
  '48',
  '49',
  '50',
  '51',
  '52',
  '53',
  '54',
  '55',
  '56',
  '57',
  '58',
  '59',
  '60',
  '61',
  '62',
  '63',
  '64',
  '65',
  '66',
  '67',
  '68',
  '69',
  '70',
  '71',
  '72',
  '73',
  '74',
  '75',
  '76',
  '77',
  '78',
  '79',
  '80',
  '81',
  '82',
  '83',
  '84',
  '85',
  '86',
  '87',
  '88',
  '89',
  '90',
  '91',
  '92',
  '93',
  '94',
  '95',
  '96',
  '97',
  '98',
  '99',
  '100',
];
global.mess = {
  wait: 'Wait, Please be patient',
  succes: 'Succesd !!!',
  admin: 'Hanya Admin Yang Dapat Menggunakan Fitur Ini',
  yahaha: 'jika ingin menambahkan audio minta izin ke owner terlebih dahulu!',
  yahaha2: 'jika ingin menghapus audio minta izin ke owner terlebih dahulu!',
  botAdmin: 'Bot harus menjadi admin !!!',
  owner: 'Owner Special Features!!!',
  creator: 'Kamu bukan pemilik bot !!!.',
  group: 'Fitur Hanya Dapat Di Gunakan Di Dalam Group Saja!!!',
  private: 'Fitur Hanya Dapat Di Gunakan Di Private Chat Saja!!!',
  bot: 'Bot Number User Special Features!!!',
  error: 'Error , Please Chat Owner...',
  premium:
    'Maaf Sebelumya Kamu Belum Premium, Silahkan Pencet Di Bawah Untuk Beli Premium',
};

global.bapak = [
  'Wah Mantap Lu Masih Punya Bapack\nPasti Bapack Nya Kuli :v\nAwowkwokwwok\n#CandabOs',
  'Aowkwwo Disini Ada Yteam :v\nLu Yteam Bro? Awowkwowk\nSabar Bro Ga Punya Bapack\n#Camda',
  'Bjir Bapack Mu Ternyata Sudah Cemrai\nSedih Bro Gua Liatnya\nTapi Nih Tapi :v\nTetep Ae Lu Yteam Aowkwowkw Ngakak :v',
  'Jangan #cekbapak Mulu Broo :v\nKasian Yang Yteam\nNtar Tersinggung Kan\nYahahaha Hayyuk By : Ramlan ID',
];

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update'${__filename}'`));
  delete require.cache[file];
  require(file);
});
