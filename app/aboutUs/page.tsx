import Image from 'next/image';

const AboutPage = () => {
  return (
    <div className="py-10 px-5 md:px-20 bg-gray-50 text-gray-800">
      <div className="max-w-4xl mx-auto">
        {/* Hakkımızda Başlığı */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Hakkımızda</h1>
          <p className="text-lg text-gray-600">Restoran hesabı açarak kendi menünüzü oluşturun!</p>
        </div>

        {/* Şirket Hakkında Bilgi */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2">
              <Image
                src="/out-1.png" 
                alt="Şirketimiz"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2 md:pl-8 mt-6 md:mt-0">
              <h2 className="text-2xl font-semibold mb-4">Biz Kimiz?</h2>
              <p className="text-gray-700">
                Restoran hesabı açarak kendi menünüzü kolaylıkla oluşturabilirsiniz. Müşteriler QR kodunuzu okutarak doğrudan restoranınızın menüsüne ulaşabilir. Sepete eklenen ürünler sipariş tamamlandığında Restoran sahibinin WhatsApp&apos;a mesaj olarak iletilir.

              </p>
            </div>
          </div>
        </div>

        {/* Misyon ve Vizyon */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
          <h2 className="text-2xl font-semibold mb-4">Misyon ve Vizyon</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-medium mb-2">Misyonumuz</h3>
              <p className="text-gray-700">
                Restoranların kendi menülerini oluşturup, aracı firmalara komisyon ödemeden kendi kuryeleriyle sipariş teslim etmelerine olanak sağlamak.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Vizyonumuz</h3>
              <p className="text-gray-700">
                Restoran sektöründe dijitalleşmeyi destekleyerek, restoran sahiplerinin maliyetlerini azaltmak ve müşteri memnuniyetini artırmak.
              </p>
            </div>
          </div>
        </div>
        {/* İletişim Bilgileri */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">İletişim Bilgileri</h2>
          <p className="text-gray-700 mb-2">E-posta: umutdenizural@gmail.com</p>
          <p className="text-gray-700 mb-2">Telefon: +90 535 647 7909</p>
          <p className="text-gray-700">Adres: İstanbul/Üsküdar, Türkiye</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
