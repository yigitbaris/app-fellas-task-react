projeyi çalıştırmak için gereken terminal kodları:

frontend kısmı için
cd /frontend && npm i
npm run dev

backend kısmı için
cd /backend && npm i
npm run dev

backend kısmı için gerekli olan .env dosyasında bulunan değerler:
MONGO_URL ---> bu değeri mongodb database connection kısmından kendi hesabınız için oluşturabilirsiniz.

projenin frontend kısmı vite ile kurulmuştur. create-react-app komutu ile kurulan projelere göre daha hızlıdır.
vite.config.js dosyanızda bu proxy eklentisine ip ihtiyacı ve engellemeri olmadan kendi bilgisayarınızda çalışan serverdaki
verilere ulaşmak için ihtiyacınız olacaktır.

proxy: {
// Proxy for external API
'/api': {
target: 'https://api.schiphol.nl',
changeOrigin: true,
rewrite: (path) => path.replace(/^\/api/, ''),
},
// Proxy for your local backend
'/local-api': {
target: 'http://localhost:5100', // Your local backend
changeOrigin: true,
rewrite: (path) => path.replace(/^\/local-api/, ''), // This rewrites '/local-api' to match backend paths
},
},

PROJE HAKKINDA BİLGİLER:

projede genel itibari ile tailwindcss kullanılmıştır. lokal olarak tasarım değişimi için
ilgili dosyaya gitmeniz gerekmektedir.

arrival time seçilip gelen uçuşlar bu şekilde listelenebilir fakat api den gelen veriler günün saatlerine bağlı
olduğu için çeşitli saatlerde bazı saat uçuşlar bulunmamaktadır. Bu yüzden de ekrana uçuş yok yazısı gelmektedir.

book flight tuşuna basıldığında ise bi mesaj ile birlikte uçuşlarım sayfasına yönlendirme yapılmaktadır.
burada uçuşlar listelenmektedir. saat ve durak bilgileri , uçuş adı ve uçağın varış ile kalkış noktaları gösterilmektedir.
projede olmayan uçuş silme özelliğini uçuşun sağ kısmında bulunan ikon ile sağlayabilirsiniz.

projenin backend kısmı mongodb , express ve node.js server ile sağlanmıştır.
