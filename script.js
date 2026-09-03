const letters={
ayah:{role:"Untuk Ayah",title:"Agus Husin",text:[
"Ayah, mungkin tidak selalu ada kata yang cukup untuk menjelaskan betapa besar arti Ayah dalam hidup kami.",
"Sejak kecil, kami melihat Ayah sebagai seseorang yang kuat. Seseorang yang mungkin lelah, punya banyak pikiran, dan menghadapi banyak hal sendiri, tetapi tetap berusaha terlihat baik-baik saja di depan keluarga. Dulu mungkin kami belum mengerti mengapa Ayah bekerja keras, mengapa Ayah begitu memikirkan masa depan kami, atau mengapa terkadang Ayah memilih diam. Sekarang kami mulai mengerti: ada begitu banyak cinta yang Ayah tunjukkan bukan lewat kata-kata, tetapi lewat pengorbanan.",
"Terima kasih karena selalu berusaha menjadi tempat kami merasa aman. Terima kasih untuk setiap nasihat, setiap teguran, setiap perjuangan yang mungkin tidak pernah kami lihat seluruhnya. Maaf kalau sebagai anak kami masih sering membuat Ayah kecewa, keras kepala, atau belum bisa membalas semua yang sudah Ayah berikan.",
"Kalau suatu hari nanti kami sudah punya kehidupan masing-masing, punya rumah sendiri, dan tidak lagi sesering sekarang berada di dekat Ayah, semoga Ayah tahu bahwa rumah pertama kami tetaplah rumah yang Ayah bangun bersama keluarga. Dan nama Ayah akan selalu menjadi salah satu nama paling penting dalam cerita hidup kami.",
"Semoga Ayah selalu sehat, panjang umur, dan diberi kesempatan melihat semua mimpi anak-anak Ayah menjadi kenyataan. Kami sayang Ayah. Lebih dari yang mungkin pernah kami ucapkan. 🤍"]},
mamah:{role:"Untuk Mamah",title:"Nurlaelah",text:[
"Mamah, kalau rumah punya bentuk manusia, mungkin bentuknya adalah Mamah.",
"Mamah adalah tempat kami pulang ketika dunia terasa terlalu ramai. Pelukan, perhatian, makanan yang dibuat dengan cinta, pertanyaan sederhana seperti 'sudah makan?'—hal-hal kecil yang mungkin dulu kami anggap biasa, ternyata adalah bentuk cinta yang paling tulus.",
"Terima kasih sudah menjadi seseorang yang selalu memikirkan keluarga bahkan ketika Mamah sendiri sedang lelah. Terima kasih karena tetap sabar menghadapi kami, tetap mendoakan kami, dan tetap percaya kepada kami bahkan ketika kami sendiri sedang ragu dengan diri sendiri.",
"Maaf untuk semua kekhawatiran yang pernah kami berikan. Maaf untuk kata-kata yang mungkin pernah menyakiti. Semoga suatu hari nanti kami bisa membuat Mamah melihat anak-anak Mamah dan berkata dalam hati, 'ternyata semua perjuanganku tidak sia-sia.'",
"Jangan pernah merasa sendiri, Mah. Sejauh apa pun anak-anak Mamah pergi, selalu ada bagian dari hati kami yang tinggal di rumah bersama Mamah. Kami sayang Mamah, selamanya. 🤍"]},
rian:{role:"Untuk Abang 1",title:"Rian Andriana",text:[
"Bang Rian, menjadi abang bukan cuma soal lahir lebih dulu. Ada tanggung jawab, perhatian, dan cara diam-diam menjaga yang mungkin tidak selalu terlihat.",
"Terima kasih sudah menjadi bagian dari perjalanan keluarga ini. Mungkin kita pernah berbeda pendapat, saling kesal, atau punya cara berpikir yang tidak sama. Tapi semua itu tidak pernah menghapus satu hal: kita tetap saudara.",
"Semoga hidup Abang selalu dipenuhi hal-hal baik. Semoga semua usaha, pekerjaan, impian, dan keluarga kecil Abang bersama Puji Lestari serta Muhammad Devano Baruna selalu diberi kebahagiaan dan keberkahan.",
"Kalau suatu hari kita sudah sama-sama sibuk dan jarang bertemu, jangan lupa bahwa ada rumah dan keluarga yang akan selalu menerima Abang apa adanya. Terima kasih sudah menjadi salah satu bagian penting dari cerita kami. 🤍"]},
andhika:{role:"Untuk Abang 2",title:"Andhika Rama Dwiputra",text:[
"Bang Andhika, mungkin tidak semua rasa sayang di keluarga selalu diucapkan. Kadang kita menunjukkannya lewat candaan, lewat perhatian kecil, atau sekadar memastikan satu sama lain baik-baik saja.",
"Terima kasih sudah menjadi bagian dari rumah ini dan menjadi salah satu orang yang membuat perjalanan keluarga kita punya lebih banyak cerita. Semoga semua langkah Abang selalu dimudahkan.",
"Semoga bersama Filzah Afiah, Abang selalu menemukan rumah yang penuh ketenangan, saling menguatkan, dan saling menjaga. Semoga apa pun yang sedang diperjuangkan hari ini suatu saat menjadi cerita indah yang bisa kita kenang bersama.",
"Jangan lupa, sejauh apa pun perjalanan Abang, keluarga akan selalu menjadi tempat untuk pulang. 🤍"]},
kartika:{role:"Untuk Si Bungsu",title:"Kartika Chandra",text:[
"Untuk Kartika, si bungsu yang mungkin sering dianggap masih kecil, padahal waktu terus berjalan dan tanpa sadar kamu juga sedang tumbuh menjadi seseorang yang hebat.",
"Menjadi anak bungsu mungkin membuatmu mendapatkan banyak perhatian, tetapi di balik itu ada cinta besar dari orang-orang yang ingin melihatmu bahagia dan berhasil. Jangan pernah merasa sendirian dalam mengejar impianmu.",
"Terima kasih sudah membawa warna, tawa, dan cerita baru ke dalam keluarga. Tetaplah menjadi dirimu sendiri. Tidak perlu menjadi sempurna untuk membuat keluarga bangga.",
"Suatu hari nanti kamu akan melihat kembali masa-masa ini dan menyadari betapa berharganya rumah, keluarga, dan orang-orang yang sejak awal selalu ada untukmu.",
"Jadilah perempuan yang kuat, baik hati, dan berani mengejar apa yang kamu impikan. Dan ingat: kapan pun kamu butuh tempat pulang, keluarga akan selalu ada. 🤍"]}
};
function openLetter(key){const x=letters[key];document.getElementById('letterRole').textContent=x.role;document.getElementById('letterTitle').textContent=x.title;document.getElementById('letterText').innerHTML=x.text.map(p=>`<p>${p}</p>`).join('');document.getElementById('modal').classList.add('show');document.body.style.overflow='hidden'}
function closeLetter(){document.getElementById('modal').classList.remove('show');document.body.style.overflow=''}
function closeOutside(e){if(e.target.id==='modal')closeLetter()}
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeLetter()});
