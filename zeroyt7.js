//DASAR BARU DENGAN NOL YT7
//RECODE SESUKA HATIMU JANGAN HPUS CREATOR NYA
//MAAF BASE NYA JELEK

//IKUTI SEMUA MEDIAML SOSIAL SAYA
//YOUTUBE : Nol YT7
//INSTAGRAM : @Zero_YT 7
//TIKTOK : @_zeroyt 7
//GITHUB : Nol-YT7

let  { fetchJosn , kyun , fetchText }  =  memerlukan ( './lib/fetcher' )
let  { color , bgcolor }  =  membutuhkan ( './lib/color' )
let  { wait , getBuffer , h2k , generateMessageID , getGroupAdmins , getRandom , start , info , success , close }  =  require ( './lib/functions' )

membiarkan
	{
		Koneksi WA ,
		Jenis Pesan ,
		Kehadiran ,
		Opsi Pesan ,
		tipe pantomim ,
		Pesan Lokasi WA ,
		WA_MESSAGE_STUB_TYPES ,
		WA_DEFAULT_EPHEMERAL ,
		Hubungkan kembaliMode ,
		Agen Proksi ,
		Perubahan Pengaturan Grup ,
		waChatKey ,
		disebutkanJid ,
		waktu proses ,
	}  =  membutuhkan ( "@adiwajshing/baileys" )
const  fs  =  membutuhkan ( "fs" )
const  aksio  =  membutuhkan ( 'aksios' )
const  speed  =  membutuhkan ( "kinerja-sekarang" )
const  util  =  membutuhkan ( 'util' )
const  crypto  =  membutuhkan ( 'crypto' )
const  permintaan  =  membutuhkan ( 'permintaan' )
const  { exec , spawn }  =  membutuhkan ( 'child_process' )
const  fetch  =  membutuhkan ( 'pengambilan simpul' )
const  momen  =  membutuhkan ( 'momen-zona waktu' )
const  ffmpeg  =  membutuhkan ( 'fasih-ffmpeg' )
const  { removeBackgroundFromImageFile }  =  membutuhkan ( 'remove.bg' )

//━━━━━━━━━━━━━━━[ DATABASE ]━━━━━━━━━━━━━━━━━//

biarkan  _antilink  =  JSON . parse ( fs . readFileSync ( './database/antilink.json' ) )
biarkan  _antivirtex  =  JSON . parse ( fs . readFileSync ( './database/antivirtex.json' ) )
biarkan  pengaturan  =  JSON . parse ( fs . readFileSync ( './setting.json' ) )
biarkan  pendaftar  =  JSON . parse ( fs . readFileSync ( './database/user.json' ) )

//━━━━━━━━━━━━━━━[ PENGATURAN ]━━━━━━━━━━━━━━━━━//

pemilik  =  pengaturan . PemilikNomor
nama bot  =  pengaturan . Nama Bot
tombol nol  =  pengaturan . NolKey
nama pemilik  =  pengaturan . Nama pemilik

//━━━━━━━━━━━━━━━[ EKSPOR MODUL ]━━━━━━━━━━━━━━━━━//

modul . ekspor  =  zeroyt7  =  asinkron  ( zeroyt7 ,  mek ,  _welkom )  =>  {
	coba  {
        jika  ( ! mek . hasNewMessage )  kembali
        mek  =  mek . pesan . semua ( ) [ 0 ]
		jika  ( ! mek . message )  kembali
		if  ( mek . key  &&  mek . key . remoteJid  ==  'status@broadcast' )  kembali
		global . diblokir
        	mek . message  =  ( Object . keys ( mek . message ) [ 0 ]  ===  'ephemeralMessage' ) ? mek . pesan . pesan singkat . pesan : mek . pesan
        biarkan  konten  =  JSON . stringify ( mek . pesan )
		biarkan  dari  =  mek . kunci . remoteJid
		let  { text , extendedText , contact , contactsArray , groupInviteMessage , listMessage , keysMessage , lokasi , liveLocation , gambar , video , stiker , dokumen , audio , produk , kutipanMsg }  =  MessageType
		misalkan  waktu  =  momen . tz ( 'Asia/Jakarta' ) . format ( 'DD/MM JJ:mm:dd' )
        biarkan  jenis  =  Obyek . kunci ( mek . pesan ) [ 0 ]        
        let  cmd  =  ( ketik  ===  'percakapan'  &&  mek . pesan . percakapan ) ? mek . pesan . percakapan : ( ketik  ==  'imageMessage' )  &&  mek . pesan . pesan gambar . keterangan ? mek . pesan . pesan gambar . caption : ( ketik  ==  'videoMessage' )  &&  mek. pesan . videoPesan . keterangan ? mek . pesan . videoPesan . keterangan : ( ketik  ==  'extendedTextMessage' )  &&  mek . pesan . diperpanjangTextMessage . teks ? mek . pesan . diperpanjangTextMessage . teks : '' . irisan ( 1 ) . memangkas ( ) . membagi (/  + / ) . pergeseran ( ) . untuk Huruf Kecil ( )
        let  prefix  =  / ^ [ °•π÷×¶∆£¢€¥®™=|~!#$%^&.?/ \\ ©^z+*@,; ] / . tes ( cmd ) ? cmd . cocok ( / ^ [ °•π÷×¶∆£¢€¥®™=|~!#$%^&.?/ \\ ©^z+*,; ] / gi ) : '-'          	
        body  =  ( ketik  ===  'percakapan'  &&  mek . pesan . percakapan . dimulaiDengan ( awalan ) ) ? mek . pesan . percakapan : ( ketik  ==  'imageMessage' )  &&  mek . pesan [ jenis ] . keterangan . dimulaiDengan ( awalan ) ? mek . pesan [ ketik ]. caption : ( ketik  ==  'videoMessage' )  &&  mek . pesan [ jenis ] . keterangan . dimulaiDengan ( awalan ) ? mek . pesan [ jenis ] . keterangan : ( ketik  ==  'extendedTextMessage' )  &&  mek . pesan [ jenis ] . teks . dimulaiDengan ( awalan )? mek . pesan [ jenis ] . teks : ( ketik  ==  'listResponseMessage' )  &&  mek . pesan [ jenis ] . singleSelectReply . dipilihRowId ? mek . pesan [ jenis ] . singleSelectReply . selectedRowId : ( ketik  ==  'buttonsResponseMessage' )  &&  mek . pesan [ ketik] . dipilihButtonId ? mek . pesan [ jenis ] . selectedButtonId : ''
		sobat  =  ( ketik  ===  'percakapan' ) ? mek . pesan . percakapan : ( ketik  ===  'extendedTextMessage' ) ? mek . pesan . diperpanjangTextMessage . teks : ''
		biarkan  perintah  =  tubuh . irisan ( 1 ) . memangkas ( ) . membagi ( /  + / ) . pergeseran ( ) . untuk Huruf Kecil ( )		
		biarkan  args  =  tubuh . memangkas ( ) . membagi ( /  + / ) . potong ( 1 )
		biarkan  isCmd  =  tubuh . dimulaiDengan ( awalan )
		misalkan  q  =  argumen . gabung ( ' ' )
		biarkan  Terverifikasi  =  "0@s.whatsapp.net"
		biarkan  txt  =  mek . pesan . percakapan
		biarkan  botNumber  =  zeroyt7 . pengguna . jid
		let  ownerNumber  =  [ ` ${ pemilik } @s.whatsapp.net` ,  `6285157740529@s.whatsapp.net` ]
		biarkan  isGroup  =  dari . berakhirDengan ( '@g.us' )
		biarkan  pengirim  =  isGroup ? mek . peserta : mek . kunci . remoteJid
		biarkan  totalchat  =  menunggu  zeroyt7 . chatting . semua ( )
		biarkan  groupMetadata  =  isGroup ? menunggu  zeroyt7 . groupMetadata ( dari ) : ''
		biarkan  groupName  =  isGroup ? grupMetadata . subjek : ''
		biarkan  groupId  =  isGroup ? grupMetadata . jid : ''
		biarkan  groupMembers  =  isGroup ? grupMetadata . peserta : ''
		biarkan  groupDesc  =  isGroup ? grupMetadata . des : ''
		biarkan  groupOwner  =  isGroup ? grupMetadata . pemilik : ''
		biarkan  groupAdmins  =  isGroup ? getGroupAdmins ( groupMembers ) : ''
		biarkan  isBotGroupAdmins  =  groupAdmins . termasuk ( nomor bot )  ||  Salah
		biarkan  isGroupAdmins  =  groupAdmins . termasuk ( pengirim )  ||  Salah
		biarkan  lanjutan  =  mek . kunci . dari saya ? zeroyt7 . pengguna . jid : zeroyt7 . kontak [ pengirim ]  ||  {  beri tahu : jid . ganti ( / @. + / ,  '' )  }
        biarkan  pushname  =  mek . kunci . dari saya ? zeroyt7 . pengguna . nama : lanjutan . beri tahu  ||  lanjut . nama v  ||  lanjut . nama  ||  '-'
        
		biarkan  isAntiLink  =  isGroup ? _antilink . termasuk ( dari ) : false
		biarkan  isWelkom  =  isGroup ? _welkom . termasuk ( dari ) : false
		biarkan  isAntiVirtex  =  isGroup ? _antivirtex . termasuk ( dari ) : false
		biarkan  isOwner  =  pemilikNumber . termasuk ( pengirim )
		let  isUser  =  pendaftar . termasuk ( pengirim )
		biarkan  isMybot  =  isOwner  ||  mek . kunci . dari saya
		
//━━━━━━━━━━━━━━━[ KONEKSI 1 ]━━━━━━━━━━━━━━━━━//

		kekacauan  =  {
			wait : 'Sabar Lagi Proses Tod...!' ,
			sukses : 'Jangan Lupa Subscribe Zero YT7' ,
			kesalahan : {
				stick : 'Gagal Convert Gambar Ke Sticker...Coba Lagi !' ,
				Iv : 'Linknya Error Tod !'
			} ,
			hanya : {
				admin : 'Kusus Admin Tod !' ,
				grup : 'Khusus Grup Tod !'
			}
		}
		faketeks  =  'Nol YT7'
		biarkan  isUrl  =  ( url )  =>  {
        kembali  url . cocok ( new  RegExp ( / https?: \/ \/ ( www \. ) ? [ -a-zA-Z0-9@:%.+~#= ] { 1,256 } \. [ a-zA-Z0-9 () ] { 1,6 } \b ( [ -a-zA-Z0-9()@:%+.~#?&/= ] * ) / ,  'gi' ) )
        }
        biarkan  balasan  =  ( teks )  =>  {
            zeroyt7 . sendMessage ( dari ,  teks ,  teks ,  { dikutip : mek } )
        }
        let  sendMess  =  ( hehe ,  teks )  =>  {
            zeroyt7 . sendMessage ( hehe ,  teks ,  teks )
        }
        let  mentions  =  ( teks ,  memberr ,  id )  =>  {
            ( id  ==  null  ||  id  ==  undefined  ||  id  ==  false ) ? zeroyt7 . sendMessage ( dari ,  teks . trim ( ) ,  extendedText ,  {  contextInfo : {  "mentionedJid" : memberr  }  } ) : zeroyt7 . sendMessage ( dari ,  teks . trim ( ) ,  extendedText,  {  dikutip : ftrol ,  contextInfo : {  "mentionedJid" : memberr  }  } )
        }
        misalkan  nol  =  fs . readFileSync  ( './zeroyt7/zerothumb.jpg' )
        let  costum  =  ( pesan ,  tipe ,  target ,  target2 )  =>  {
			zeroyt7 . sendMessage ( from ,  pesan ,  tipe ,  {  dikutip : {  key : {  fromMe : false ,  partisipan : ` ${ target } ` , ... ( from ? {  remoteJid : from  } : { } )  } ,  message : {  percakapan : ` ${ target2 }`  }  }  } )
		}
		biarkan  runtime  =  fungsi  ( detik )  {
  detik  =  Angka ( detik ) ;
  var  d  =  Matematika . lantai ( detik  /  ( 3600  *  24 ) ) ;
  var  h  =  Matematika . lantai ( ( % detik  ( 3600 * 24 ) ) / 3600 ) ;     
  var  m  =  Matematika . lantai ( ( detik  %  3600 )  /  60 ) ;
  var  s  =  Matematika . lantai ( detik  %  60 ) ;
  var  dTampilan  =  d  >  0 ? d  +  ( d  ==  1 ? " hari, " : " Hari, " ) : "" ;
  var  hDisplay  =  h  >  0 ? h  +  ( h  ==  1 ? " selai, " : " Selai, " ) : "" ;
  var  mDisplay  =  m  >  0 ? m  +  ( m  ==  1 ? " menit, " : " Menit, " ) : "" ;
  var  sTampilan  =  s  >  0 ? s  +  ( s  ==  1 ? " detik" : " Detik" ) : "" ;
  kembali  dDisplay  +  hDisplay  +  mDisplay  +  sDisplay ;
} ;
var  ase  =  Tanggal baru  ( ) ;
                        var  jamss  =  ase . getHours ( ) ;
                         saklar ( macet ) {
                case  0 : jamss  =  "Jangan gadang kak" ;  istirahat ;
                case  1 : jamss  =  "Jangan gadang kak" ;  istirahat ;
                case  2 : jamss  =  "Jangan gadang kak" ;  istirahat ;
                kasus  3 : macet  =  "Jangan gadang kak" ;  istirahat ;
                case  4 : jamss  =  "Jangan lupa sholat Subuh kak" ;  istirahat ;
                case  5 : jamss  =  "Selamat pagi" ;  istirahat ;
                case  6 : jamss  =  "Selamat pagi" ;  istirahat ;
                case  7 : jamss  =  "Selamat pagi" ;  istirahat ;
                case  8 : jamss  =  "Selamat pagi" ;  istirahat ;
                case  9 : jamss  =  "Selamat pagi" ;  istirahat ;
                case  10 : jamss  =  "Selamat pagi" ;  istirahat ;
                case  11 : jamss  =  "Selamat siang" ;  istirahat ;
                case  12 : jamss  =  "Jangan lupa sholat Zuhur kak" ;  istirahat ;
                case  13 : jamss  =  "Selamat siang" ;  istirahat ;
                case  14 : jamss  =  "Selamat sakit" ;  istirahat ;
                case  15 : jamss  =  "Jangan lupa sholat Ashar kak" ;  istirahat ;
                case  16 : jamss  =  "Selamat sakit" ;  istirahat ;
                case  17 : jamss  =  "Selamat sakit" ;  istirahat ;
                case  18 : jamss  =  "Selamat malam" ;  istirahat ;
                case  19 : jamss  =  "Jangan lupa sholat Isya kak" ;  istirahat ;
                case  20 : jamss  =  "Selamat malam" ;  istirahat ;
                case  21 : jamss  =  "Selamat malam" ;  istirahat ;
                kasus  22 : jamss  =  "Selamat malam" ;  istirahat ;
                kasus  23 : jamss  =  "Selamat malam" ;  istirahat ;
            }
            var  tampilUcapan  =  ""  +  jamss ;
        
//━━━━━━━━━━━━━━━[ TOMBOL ]━━━━━━━━━━━━━━━━━//

        let  sendButton  =  async  ( from ,  context ,  fortext ,  but ,  mek )  =>  {
            tombolPesan  =  {
                kontenTeks : konteks ,
                footerText : fortext ,
                tombol : tapi ,
                Jenis header : 1
            }
            zeroyt7 . sendMessage ( dari ,  buttonMessages ,  keysMessage ,  {
                dikutip : ftrol
            } )
        }
        let  sendButImage  =  async  ( from ,  context ,  fortext ,  img ,  but ,  mek )  =>  {
            jadinya  =  menunggu  zeroyt7 . prepareMessage ( dari ,  img ,  gambar )
            tombolPesanI  =  {
                imageMessage : jadinya . pesan . pesan gambar ,
                kontenTeks : konteks ,
                footerText : fortext ,
                tombol : tapi ,
                Jenis header : 4
            }
            zeroyt7 . sendMessage ( dari ,  buttonMessagesI ,  keysMessage ,  {
                dikutip : ftrol ,
            } )
        }
         fungsi  async sendButLocation ( id ,  text1 ,  desc1 ,  gam1 ,  tapi  =  [ ] ,  options  =  { } )  {
            biarkan  buttonMessages  =  {  locationMessage : {  jpegThumbnail : gam1  } ,  contentText : text1 ,  footerText : desc1 ,  tombol : tetapi ,  headerType : 6  }
            kembali  zeroyt7 . sendMessage ( id ,  buttonMessages ,  MessageType . keysMessage ,  opsi )
        }

//━━━━━━━━━━━━━━━[ PALSU PALSU ]━━━━━━━━━━━━━━━━━//
        biarkan  status palsu  =  ( teks )  =>  {
            zeroyt7 . sendMessage ( dari ,  teks ,  teks ,  {
                dikutip : {
                    kunci : {
                        dari Saya : salah ,
                        peserta : `0@s.whatsapp.net` , ... ( dari ? {  remoteJid : "status@broadcast"  } : { } )
                    } ,
                    pesan : {
                        "pesan gambar" : {
                            "url" : "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc" ,
                            "mimetype" : "gambar/jpeg" ,
                            "caption" : faketeks ,
                            "fileSha256" : "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=" ,
                            "fileLength" : "28777" ,
                            "tinggi" : 1080 ,
                            "lebar" : 1079 ,
                            "mediaKey" : "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=" ,
                            "fileEncSha256" : "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=" ,
                            "directPath" : "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69" ,
                            "mediaKeyTimestamp" : "1610993486" ,
                            "jpegThumbnail" : fs . readFileSync ( './zeroyt7/zero.jpg' ) ,
                            "scansSidecar" : "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            } )
        }
        zeroyt7 . chatRead ( dari ,  "baca" )
        biarkan  fakegroup  =  ( teks )  =>  {
            zeroyt7 . sendMessage ( dari ,  teks ,  teks ,  {
                dikutip : {
                    kunci : {
                        dari Saya : salah ,
                        peserta : `0@s.whatsapp.net` , ... ( dari ? {  remoteJid : "6289523258649-1604595598@g.us"  } : { } )
                    } ,
                    pesan : {
                        "pesan gambar" : {
                            "url" : "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc" ,
                            "mimetype" : "gambar/jpeg" ,
                            "caption" : faketeks ,
                            "fileSha256" : "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=" ,
                            "fileLength" : "28777" ,
                            "tinggi" : 1080 ,
                            "lebar" : 1079 ,
                            "mediaKey" : "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=" ,
                            "fileEncSha256" : "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=" ,
                            "directPath" : "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69" ,
                            "mediaKeyTimestamp" : "1610993486" ,
                            "jpegThumbnail" : fs . readFileSync ( './zeroyt7/zero.jpg' ) ,
                            "scansSidecar" : "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            } )
        }
        misalkan  ftrol  =  {
	kunci : {
                          peserta : '0@s.whatsapp.net'
                        } ,
       pesan : {
                    pesanpesan : {
                            jumlah barang : 123 ,
                            status : 1 ,
                            permukaan : 1 ,
                            pesan : `SUBSCRIBE ZERO YT7` , 
                            orderTitle : `SUBSCRIBE ZERO YT7` ,
                            thumbnail : nol ,  //Gambarnye
                            sellerJid : '0@s.whatsapp.net' 
                          }
                        }
                      }
        
//━━━━━━━━━━━━━━━[ KONEKSI 2 ]━━━━━━━━━━━━━━━━━//

        biarkan  sendStickerFromUrl  =  async ( ke ,  url )  =>  {
                var  nama  =  Tanggal . sekarang ( )  /  10.000 ;
                var  download  =  fungsi  ( uri ,  nama file ,  panggilan balik )  {
                    permintaan . kepala ( uri ,  fungsi  ( err ,  res ,  body )  {
                        permintaan ( uri ) . pipa ( fs . createWriteStream ( nama file ) ) . pada ( 'tutup' ,  panggilan balik ) ;
                    } ) ;
                } ;
                unduh ( url ,  './stik'  +  nama  +  '.png' ,  fungsi asinkron  ( ) {  
                    konsol . log ( 'selesai' ) ;
                    biarkan  file  =  './stik'  +  nama  +  '.png'
                    biarkan  asw  =  './stik'  +  nama  +  '.webp'
                    exec ( `ffmpeg -i ${ filess } -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ asw } ` ,  ( err )  =>  {
                        misalkan  media  =  fs . readFileSync ( asw )
                        zeroyt7 . sendMessage ( ke ,  media ,  MessageType . sticker , { dikutip : mek } )
                        fs . batalkan tautan Sinkronisasi ( file )
                        fs . batalkan tautanSinkronisasi ( asw )
                    } ) ;
                } ) ;
            }
        biarkan  sendMediaURL  =  async ( ke ,  url ,  teks = "" ,  mids = [ ] )  => {
                jika ( MID . panjang  >  0 ) {
                    text  =  normalizeMention ( untuk ,  teks ,  MID )
                }
                misalkan  fn  =  Tanggal . sekarang ( )  /  10.000 ;
                biarkan  nama file  =  fn . toString ( )
                biarkan  mime  =  ""
                var  download  =  fungsi  ( uri ,  nama file ,  panggilan balik )  {
                    permintaan . kepala ( uri ,  fungsi  ( err ,  res ,  body )  {
                        pantomim  =  res . header [ 'tipe konten' ]
                        permintaan ( uri ) . pipa ( fs . createWriteStream ( nama file ) ) . pada ( 'tutup' ,  panggilan balik ) ;
                    } ) ;
                } ;
                unduh ( url ,  nama file ,  fungsi asinkron  ( ) {  
                    konsol . log ( 'selesai' ) ;
                    misalkan  media  =  fs . readFileSync ( nama file )
                    biarkan  ketik  =  pantomim . split ( "/" ) [ 0 ] + "Pesan"
                    if ( pantomim  ===  "gambar/gif" ) {
                        jenis  =  Jenis Pesan . video
                        pantomim  =  Mimetype . gif
                    }
                    if ( mime . split ( "/" ) [ 0 ]  ===  "audio" ) {
                        pantomim  =  Mimetype . mp4Audio
                    }
                    zeroyt7 . sendMessage ( to ,  media ,  type ,  {  dikutip : ftrol ,  mimetype : mime ,  caption : text , contextInfo : { "mentionedJid" : mids } } )
                    
                    fs . batalkan tautanSync ( nama file )
                } ) ;
            }   
            if  ( sobat . termasuk ( "https://chat.whatsapp.com/" ) )  {
jika  ( ! isGroup )  kembali
jika  ( ! isAntiLink )  kembali
jika  ( isGroupAdmins )  kembali
var  kic  =  ` ${ pengirim . split ( "@" ) [ 0 ] } @s.whatsapp.net`
reply ( ` *「 GROUP LINK DETECTOR *\nKamu mengirimkan link grup chat, maaf kamu di kick dari grup :(` )
setWaktu habis ( ( )  =>  {
zeroyt7 . groupRemove ( dari ,  [ kic ] ) . catch ( ( e )  =>  {  balasan ( `BOT HARUS JADI ADMIN` )  } )
} ,  0 )
}

		jika  ( budy . panjang  >  3500 )  {
jika  ( ! isGroup )  kembali
jika  ( ! isAntiVirtex )  kembali
jika  ( isGroupAdmins )  kembali
reply ( 'Tandai telah dibaca\n' . repeat ( 300 ) )
reply ( `「 *VIRTEX DETECTOR* \n\nKamu mengirimkan virtex, maaf kamu di kick dari group :(` )
konsol . log ( color ( '[KICK]' ,  'red' ) ,  color ( 'Menerima teks virus!' ,  'yellow' ) )
zeroyt7 . grupHapus ( dari ,  [ pengirim ] )
}     
if  ( isCmd  &&  ! isUser ) {
          pendaftaran . mendorong ( pengirim )
          fs . writeFileSync ( './database/user.json' ,  JSON . stringify ( pendaftar ,  nol ,  2 ) )
        }

//━━━━━━━━━━━━━━━[ KONEKSI 3 ]━━━━━━━━━━━━━━━━━//

		warna  =  [ 'merah' ,  'putih' ,  'hitam' ,  'biru' ,  'kuning' ,  'hijau' ]
		let  isMedia  =  ( ketik  ===  'imageMessage'  ||  ketik  ===  'videoMessage' )
		biarkan  isQuotedImage  =  ketik  ===  'extendedTextMessage'  &&  konten . termasuk ( 'imageMessage' )
		let  isQuotedVideo  =  ketik  ===  'extendedTextMessage'  &&  konten . termasuk ( 'pesan video' )
		let  isQuotedAudio  =  ketik  ===  'extendedTextMessage'  &&  konten . termasuk ( 'pesan audio' )
		biarkan  isQuotedSticker  =  ketik  ===  'extendedTextMessage'  &&  konten . termasuk ( 'stikerMessage' )
      	if  ( ! isGroup  &&  isCmd )  konsol . log ( '\x1b[1;31m~\x1b[1;37m>' ,  '[\x1b[1;32mEXEC\x1b[1;37m]' ,  waktu ,  warna ( perintah ) ,  'dari' ,  warna ( pengirim . perpecahan ( '@' ) [ 0 ] ) ,  'args:' ,  warna ( args . panjang ) )
      	//if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', waktu, warna('Pesan'), 'dari', warna(pengirim.split('@')[0]), 'args :', warna(args.length))
     	jika  ( isCmd  &&  isGroup )  konsol . log ( '\x1b[1;31m~\x1b[1;37m>' ,  '[\x1b[1;32mEXEC\x1b[1;37m]' ,  waktu ,  warna ( perintah ) ,  'dari' ,  warna ( pengirim . perpecahan ( '@' ) [ 0 ] ) ,  'di' ,  warna ( groupName ) ,  'args:' ,  warna ( args . panjang ))
      	//if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', waktu, warna ('Pesan'), 'dari', warna(pengirim.split('@')[0]), 'dalam', warna(namagrup), 'args :', warna(args.length))

//━━━━━━━━━━━━━━━[ MENU ]━━━━━━━━━━━━━━━━━//

beralih  ( perintah )  {
	kasus  'menu' :
	gambar  =  fs . readFileSync ( './zeroyt7/zero.jpg' )
                   stempel waktu  =  kecepatan ( ) ;
				latensi  =  kecepatan ( )  -  stempel waktu	
              menunya  = 
`Hi $ { pushname } , $ { tampilUcapan } ✨
Saya ${ botname } Yg Siap Membantu Anda Dalam Kinerja Whatsapp Agar Mempermudah Seperti Membuat Sticker , Dll
Info Bot
Nama Bot : ${ nama bot }
Nama Pemilik : ${ nama pemilik }
Awalan : Multi Awalan
Nomor Pemilik : ${ pemilik . membagi ( '@' ) [ 0 ] }
Runtime : ${ runtime ( proses . uptime ( ) ) }
Bahasa: Javascript & Nodejs
Totan Pengguna : ${ pendaftar . panjang }
Kecepatan : ${ latensi . toFixed ( 4 ) } detik
└❏
Info Pengguna
Status : ${ isOwner ? 'Pemilik' : 'Pengguna' }
Nama Pengguna : ${ pushname }
Nomor Pengguna : ${ pengirim . membagi ( '@' ) [ 0 ] }
└❏
Menu Grup
│あ$ { prefix } antilink
│あ$ { prefix } diterima
│あ$ { prefix } antivirtex
│あ$ { prefix } kelompok
│あ$ { prefix } linkgrup
│あ$ { prefix } mempromosikan
│あ$ { prefix } demote
│あ$ { prefix } add
│あ$ { prefix } tendangan
│あ$ { prefix } setpp
│あ$ { prefix } setdesc
│あ$ { prefix } setName
│あ$ { prefix } hidetag
└⬣
Menu Stiker
│あ$ { prefix } attP
│あ$ { prefix } toimg
│あ$ { prefix } sticker
│あ$ { prefix } tomp3
│あ$ { prefix } tovideo
└⬣
	
Menu Pemilik
│あ$ { prefix } pemilik
│あ$ { prefix } sewabot
│あ$ { prefix } bc
│あ$ { prefix } Laporan
`
teks  =
`Ini Base Buatan Zero YT7 Silahkan Di Pake Jika Ingin Recode Atau Reupload Tolong Creator Jangan Hpus Tolong Hargai Karya Orang 🙏`
but = [
          { buttonId: `${prefix}infobot`, buttonText: { displayText: '☰ INFO' }, type: 1 },
          { buttonId: `${prefix}owner`, buttonText: { displayText: '☰ OWNER' }, type: 1 }
        ]
        sendButLocation(from, menunya, teks, gambar, but)
break
case 'infobot':
timestamp = speed();
				latensi = speed() - timestamp
                  	teks =
`┏━➤ *INFO BOT* 
*┃┃* Creator Bot : Zero YT7
*┃┃* Nama Owner : ${ownername}
*┃┃* Nama Bot : ${botname}
*┃┃* Prefix : Multi Prefix
*┃┃* Total Pengguna : ${pendaftar.length}
*┃┃* Runtime : ${runtime(process.uptime())}
*┃┃* Speed : ${latensi.toFixed(4)} second
*┃┃* Language : Javascript & Nodejs
*┃┗━━━━━━━━*
*┃◗ Thanks To Allah S.W.T*
*┃◗ Thank To Ortu*
*┃◗ Thank To Zero YT7 (Creator)*
*┃◗ Thanks To All Subscriberku*
*┗━━━━━━━ •*`
                  but = [
          { buttonId: `${prefix}owner`, buttonText: { displayText: '☰ OWNER' }, type: 1 },
          { buttonId: `${prefix}sc`, buttonText: { displayText: '☰ SCRIPT' }, type: 1 }
        ]
        sendButton(from, teks, '©Created : Zero YT7', but, mek)
break
	
//━━━━━━━━━━━━━━━[ FITUR GROUP ]━━━━━━━━━━━━━━━━━//

case 'welcome':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
but = [
{ buttonId: '!welcomeon', buttonText: { displayText: '☰ ON' }, type: 1 },
{ buttonId: '!welcomeoff', buttonText: { displayText: '☰ OFF' }, type: 1 }
]
sendButton(from, "Silahkan pilih untuk welcome group", faketeks, but, mek)
break
case 'welcomeon':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (isWelkom) return reply('welcome sudah aktif')
_welkom.push(from)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welkom))
reply(`\`\`\`✓Sukses mengaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`)
break
case 'welcomeoff':
jika (!isGroup) return reply(mess.only.group)
jika (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (!isWelkom) return reply('welcome sudah off sebelumnya')
_welkom.splice(from, 1)
fs . writeFileSync ( './database/welcome.json' ,  JSON . stringify ( _welkom ) )
reply ( `\`\`\`✓Sukses menonaktifkan fitur welcome di group\`\`\` * ${ groupMetadata . subject } *` )
merusak
kasus  'antilink' :
jika  ( ! isGroup )  kembali  balasan ( berantakan . hanya . group )
jika  ( ! isGroupAdmins )  kembali  balasan ( berantakan . hanya . admin )
if  ( ! isBotGroupAdmins )  mengembalikan  balasan ( "Bot Bukan Admin :)" )
tapi  =  [
{  buttonId : '!antilinkon' ,  buttonText : {  displayText : '☰ ON'  } ,  ketik : 1  } ,
{  buttonId : '!antilinkoff' ,  buttonText : {  displayText :'☰ OFF' }, type: 1 }
]
sendButton ( from ,  "Silahkan pilih untuk antilink group" ,  faketeks, but, mek)
break
case 'antilinkon' :
if (!isGroup) return reply(mess.only.group)
jika  ( ! isGroupAdmins )  kembali  balasan ( berantakan . hanya . admin )
if  ( ! isBotGroupAdmins )  mengembalikan  balasan ( "Bot Bukan Admin :)" )
jika  ( isAntiLink )  kembali  balasan ( 'anti Link Sudah pada' )
_antilink . mendorong ( dari )
fs . writeFileSync ( './database/antilink.json' ,  JSON . stringify ( _antilink ) )
reply(`\`\`\`✓Sukses mengaktifkan fitur anti link di group\`\`\` *${groupMetadata.subject}*`)
break
case 'antilinkoff' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (!isAntiLink) return reply('anti link sudah off sebelumnya')
_antilink.splice(from, 1)
fs.writeFileSync('./database/antilink.json', JSON.stringify(_antilink))
reply(`\`\`\`✓Sukses menonaktifkan fitur anti link di group\`\`\` *${groupMetadata.subject}*`)
break
case 'antivirtex' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
but = [
{  buttonId : '!antivirtexon' ,  buttonText : {  displayText : '☰ ON'  } ,  ketik : 1  } ,
{  buttonId : '!antivirtexoff' ,  buttonText : {  displayText : '☰ OFF'  } ,  ketik : 1  }
]
sendButton ( from ,  "Silahkan pilih untuk antivirtex group" ,  faketeks ,  but ,  mek )
merusak
kasus  'antivirtexon' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (isAntiVirtex) return reply('anti virtex group sudah aktif sebelumnya')
_antivirtex.push(from)
fs.writeFileSync('./database/antivirtex.json', JSON.stringify(_antivirtex))
reply(`\`\`\`Sukses mengaktifkan mode anti virtex di group\`\`\` *${groupMetadata.subject}*`)
break
case 'antivirtexoff' :
if (!isGroup) return reply(mess.only.group)
jika  ( ! isGroupAdmins )  kembali  balasan ( berantakan . hanya . admin )
if  ( ! isBotGroupAdmins )  mengembalikan  balasan ( "Bot Bukan Admin :)" )
if  ( ! isAntiVirtex )  mengembalikan  balasan ( 'Mode anti virtex sudah nonaktif sebelumnya' )
_antivirtex . sambungan ( dari ,  1 )
fs . writeFileSync ( './database/antivirtex.json' ,  JSON . stringify ( _antivirtex ))
reply ( `\`\`\`✓Sukes menonaktifkan mode anti virtex di group\`\`\` * ${ groupMetadata . subject } *` )
merusak
kasus 'group' :
jika  ( ! isGroupAdmins )  kembali  balasan ( berantakan . hanya . admin)
jika  ( ! isGroup )  kembali  balasan ( berantakan . hanya . group)
if  ( ! isBotGroupAdmins )  mengembalikan  balasan ( "Bot Bukan Admin :)" )
tapi  =  [
{ buttonId: '!groupbuka', buttonText: { displayText: '☰ BUKA' }, type: 1 },
{  buttonId : '!geouptutup' ,  buttonText : {  displayText : '☰ TUTUP'  } ,  ketik : 1  }
]
sendButton ( from ,  "Silahkan pilih untuk buka/tutup group" ,  faketeks ,  but ,  mek )
merusak
kasus  'groupbuka' :
jika  ( ! isGroup )  kembali  balasan ( berantakan . hanya . group )
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
reply(`\`\`\`✓Sukses Membuka Group\`\`\` *${groupMetadata.subject}*`)
zeroyt7.groupSettingChange(from, GroupSettingChange.messageSend, false)
break
case 'grouptutup' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
reply ( `\`\`\`✓Sukses Menutup Group\`\`\` * ${ groupMetadata . subject } *` )
zeroyt7 . groupSettingChange ( dari ,  GroupSettingChange . messageSend ,  true)
merusak
kasus  'linkgrup' :
jika  ( ! isGroup )  kembali  balasan ( berantakan . hanya . group )
if  ( ! isBotGroupAdmins )  mengembalikan  balasan ( "Bot Bukan Admin :)" )
linkgc = await zeroyt7.groupInviteCode(from)
yeh  =  `https://chat.whatsapp.com/ $ { linkgc } \ n \ nlink Grup * $ { groupName } *`
zeroyt7 . sendMessage ( dari ,  yeh ,  teks ,  {  dikutip : ftrol  } )
merusak
kasus  'promosikan' :
jika  ( ! isGroup )  kembali  balasan ( berantakan . hanya . group )
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadi admin!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, anda menjdi admin :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
zeroyt7.groupMakeAdmin(from, mentioned)
} else {
mentions(`Perintah di terima, @${mentioned[0].split('@')[0]} Kamu Menjadi Admin Di Group *${groupMetadata.subject}*`, mentioned, true)
zeroyt7.groupMakeAdmin(from, mentioned)
}
break
case 'demote' :
jika  ( ! isGroup )  kembali  balasan ( berantakan . hanya . group )
jika  ( ! isGroupAdmins )  kembali  balasan ( berantakan . hanya . admin )
if  ( ! isBotGroupAdmins )  mengembalikan  balasan ( "Bot Bukan Admin :)" )
if  ( mek . message . extendedTextMessage  ===  undefined  ||  mek . message . extendedTextMessage  ===  null )  return  reply ( 'Tag target yang ingin di tidak jadi admin!' )
disebutkan  =  mek . pesan . diperpanjangTextMessage . konteksInfo . disebutkanJid
if  ( disebutkan . panjang  >  1 )  {
teks  =  'Perintah di terima, anda tidak menjadi admin :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
zeroyt7.groupDemoteAdmin(from, mentioned)
} else {
mentions(`Perintah di terima, Menurunkan : @${mentioned[0].split('@')[0]} Menjadi Member`, mentioned, true)
zeroyt7.groupDemoteAdmin(from, mentioned)
}
break
case 'add' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (args.length < 1) return reply('Yang mau di add siapa??')
if (args[0].startsWith('08')) return reply('Gunakan kode negara Gan')
try {
num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
zeroyt7.groupAdd(from, [num])
} catch (e) {
console.log('Error :', e)
reply('Gagal menambahkan target, mungkin karena di private')
}
break
case 'kick' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, mengeluarkan :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
zeroyt7.groupRemove(from, mentioned)
} else {
mentions(`Perintah di terima, mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true)
zeroyt7.groupRemove(from, mentioned)
}
break
case 'tagall':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
members_id = []
teks = (args.length > 1) ? args.join(' ').trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `• @${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
mentions(teks, members_id, true)
break
case 'setname':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
zeroyt7.groupUpdateSubject(from, `${body.slice(9)}`)
zeroyt7.sendMessage(from, `\`\`\`✓Sukses Mengganti Nama Group Menjadi\`\`\` *${body.slice(9)}*`, text, { quoted: ftrol })
break
case 'setdesc':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
zeroyt7.groupUpdateDescription(from, `${body.slice(9)}`)
zeroyt7.sendMessage(from, `\`\`\`✓Sukses Mengganti Deskripsi Group\`\`\` *${groupMetadata.subject}* Menjadi: *${body.slice(9)}*`, text, { quoted: ftrol })
break
case 'setpp':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
media = await zeroyt7.downloadAndSaveMediaMessage(mek, './database/media_user')
await zeroyt7.updateProfilePicture(from, media)
reply(mess.wait)
reply(`\`\`\`✓Sukses Mengganti Profil Group\`\`\` *${groupMetadata.subject}*`)
break
case 'hidetag':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
var value = body.slice(9)
var group = await zeroyt7.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
text: value,
contextInfo: { mentionedJid: mem },
quoted: ftrol
}
zeroyt7.sendMessage(from, options, text)
break

//━━━━━━━━━━━━━━━[ FITUR STICKER ]━━━━━━━━━━━━━━━━━//

case 'attp':
if (args.length == 0) return reply(`Example: ${prefix + command} Hai`)
buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
zeroyt7.sendMessage(from, buffer, sticker, { quoted: ftrol })
break
case 'sticker':
case 'stiker':
case 's':
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
let media = await zeroyt7.downloadAndSaveMediaMessage(encmedia, './database/media_user')
ran = getRandom('.webp')
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply(mess.error.stick)
})
.on('end', function () {
console.log('Finish')
buffer = fs.readFileSync(ran)
costum(buffer, sticker, Verived, `Jangan Lupa Subscribe Zero YT7`)
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
let encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
let media = await zeroyt7.downloadAndSaveMediaMessage(encmedia, './database/media_user')
ran = getRandom('.webp')
reply(mess.wait)
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`❌ Gagal, pada saat mengkonversi ${tipe} ke stiker. pastikan untuk video yang dikirim tidak lebih dari 9 detik`)
})
.on('end', function () {
console.log('Finish')
costum(fs.readFileSync(ran), sticker, Verived, `~ Nih Dah Jadi Gif Stikernya`)
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
let media = await zeroyt7.downloadAndSaveMediaMessage(encmedia, './database/media_user')
ranw = getRandom('.webp')
ranp = getRandom('.png')
reply(mess.wait)
keyrmbg = 'bcAvZyjYAjKkp1cmK8ZgQvWH'
await removeBackgroundFromImageFile({ path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp }).then(res => {
fs.unlinkSync(media)
let buffer = Buffer.from(res.base64img, 'base64')
fs.writeFileSync(ranp, buffer, (err) => {
if (err) return reply('Gagal, Terjadi kesalahan, silahkan coba beberapa saat lagi.')
})
exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(mess.error.stick)
zeroyt7.sendMessage(from, fs.readFileSync(ranw), sticker, { quoted: ftrol })
fs.unlinkSync(ranw)
})
})
} else {
reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim`)
}
break
case 'toimg':
if (!isQuotedSticker) return reply(' reply stickernya gan')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await zeroyt7.downloadAndSaveMediaMessage(encmedia, './database/media_user')
ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(' Gagal, pada saat mengkonversi sticker ke gambar ')
buffer = fs.readFileSync(ran)
costum(buffer, image, Verived, `Jangan Lupa Subscribe Zero YT7`)
fs.unlinkSync(ran)
})
break
case 'tomp3':
zeroyt7.updatePresence(from, Presence.recording)
if (!isQuotedVideo) return reply('Reply Video nya Tod')
reply(mess.wait)
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await zeroyt7.downloadAndSaveMediaMessage(encmedia, './database/media_user')
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply('Gagal, pada saat mengkonversi video ke mp3')
bufferlkj = fs.readFileSync(ran)
zeroyt7.sendMessage(from, bufferlkj, audio, { mimetype: 'audio/mp4', quoted: ftrol })
fs.unlinkSync(ran)
})
break
case 'tovideo':
if (!isQuotedSticker) return reply('Reply stikernya')
reply(mess.wait)
anumedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
anum = await zeroyt7.downloadAndSaveMediaMessage(anumedia, './database/media_user')
ran = getRandom('.webp')
exec(`ffmpeg -i ${anum} ${ran}`, (err) => {
fs.unlinkSync(anum)
buffer = fs.readFileSync(ran)
zeroyt7.sendMessage(from, buffer, video, { quoted: ftrol, caption: 'Done... Jangan Lupa Subscribe Zero YT7' })
fs.unlinkSync(ran)
})
break

//━━━━━━━━━━━━━━━[ FITUR OWNER ]━━━━━━━━━━━━━━━━━//

case 'owner':
let inilist = []
for (let i of ownerNumber) {
let vname = zeroyt7.contacts[i] != undefined ? zeroyt7.contacts[i].vname || zeroyt7.contacts[i].notify : undefined
inilist.push({
"displayName": 'ZeroYT7',
"vcard": 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n'
+ `FN:${ownername}\n`
+ `ORG: Creator ${ownername} ;\n`
+ `TEL;type=CELL;type=VOICE;waid=${owner}:${owner}\n`
+ 'END:VCARD'.trim()
})
}
hehe = await zeroyt7.sendMessage(from, {
"displayName": `${inilist.length} kontak`,
"contacts": inilist 
}, 'contactsArrayMessage', { quoted: ftrol })
button = [
  {buttonId: '.youtube', buttonText: {displayText: '☰ YOUTUBE'}, type: 1},
  {buttonId: '.instagram', buttonText: {displayText: '☰ INSTAGRAM'}, type: 1},
  {buttonId: '.tiktok', buttonText: {displayText: '☰ TIKTOK'}, type: 1}
]
 buttons = {
    contentText: 'Nih Nomer Owner Ku Mau Tau Tentang Apa Ya ?',
    footerText: faketeks,
    buttons: button,
    headerType: 1
}
await zeroyt7.sendMessage(from, buttons, MessageType.buttonsMessage, {quoted: ftrol})
break
case 'bc':
if (!isOwner) return reply('LU BUKAN OWNER GBLOK')
if (args.length < 1) return reply('Teksnya?')
anu = await zeroyt7.chats.all()
for (let _ of anu) {
buttonss = [{buttonId: `${prefix}menu`, buttonText: {displayText: '☰ MENU'}, type: 1},{buttonId: `${prefix}sewabot`, buttonText: {displayText: '☰ SEWA BOT'}, type: 1}]
const btnbc = {
contentText: `${q}`,
footerText: '*SILAHKAN TEKAN BUTTON UNTUK INFORMASI LANJUT*',
buttons: buttonss,
headerType: 1
}
await zeroyt7.sendMessage(_.jid, btnbc, MessageType.buttonsMessage, {quoted: ftrol})
}
reply(`Sukses mengirim Broadcast:\n${q}`)
break
case 'report':
let pesan = body.slice(8)
if (pesan.length > 300) return pras.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', text, { quoted: ftrol })
var nomor = mek.participant
let teks1 = `*[REPORT]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${pesan}`
var options = {
text: teks1,
contextInfo: { mentionedJid: [nomor] },
}
zeroyt7.sendMessage(`6285157740529@s.whatsapp.net`, options, text, { quoted: ftrol })
reply('Masalah Telah Di Laporkan Ke Owner BOT, Mohon Tunggu Untuk Proses Perbaikan')
break
case 'youtube':
teks =
`Nih Youtube Owner Ku Jangan Lupa Di Subscribe Ya https://youtube.com/ZeroYT7`
zeroyt7.sendMessage(from, teks, text, {quoted: ftrol})
break
case 'instagram':
teks =
`Nih Instagram Owner Ku Jangan Lupa Di Follow Ya https://instagram.com/Zero_YT7`
zeroyt7.sendMessage(from, teks, text, {quoted: ftrol})
break
case 'tiktok':
teks =
`Nih Tiktok Owner Ku Jangan Lupa Di Follow Ya https://tiktok.com/@_zeroyt7`
zeroyt7.sendMessage(from, teks, text, {quoted: ftrol})
break
case 'sourcecode':
case 'script':
case 'sc':
teks = 
`*Bot Ini Menggunakan Sourcecode*
╭─────────────────────
├ Sc Ori = https://github.com/Zero-YT7/Base-ZeroYT7
├ Sc Full Fitur = https://youtube.com/ZeroYT7
├─────────────────────
├ Creator Base = Zero YT7
├ Creator Sc = Zero YT7
└─────────────────────`
zeroyt7.sendMessage(from, teks, text, {quoted: ftrol})
break

//━━━━━━━━━━━━━━━[ INFO BOT ]━━━━━━━━━━━━━━━━━//

case "speed":
case "ping":
timestamp = speed();
latensi = speed() - timestamp;
exec(`neofetch --stdout`, (error, stdout, stderr) => {
child = stdout.toString("utf-8");
ssd = child.replace(/Memory:/, "Ram:");
pingnya = `*${ssd}Speed: ${latensi.toFixed(4)} Second*`;
reply(pingnya);
});
break
case "runtime":
case "test":
run = process.uptime();
teks = `${kyun(run)}`;
reply(teks);
break
default:
if (isOwner) {
			if (budy.startsWith('>')) {
				console.log(color('[EVAL1]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval return`))
				try {
					let evaled = await eval(budy.slice(2))
					if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
					reply(`${evaled}`)
				} catch (err) {
					reply(`${err}`)
				}
			} else if (budy.startsWith('x')) {
				console.log(color('[EVAL2]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval identy`))
				try {
					return zeroyt7.sendMessage(from, JSON.stringify(eval(budy.slice(2)), null, '\t'), text, { quoted: ftrol })
				} catch (err) {
					e = String(err)
					reply(e)
				}
			}
		}
		}
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Error : %s', color(e, 'red'))
        }
	// console.log(e)
	}
}
