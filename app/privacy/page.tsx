import React from 'react';


const PrivacyPolicy = () => {
  return (
    <>
      {/* SEO ve Sayfa Başlığı */}

      <div className="min-h-screen bg-gray-100">
        <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8 bg-white shadow-lg rounded-lg">
          <h1 className="text-4xl font-bold text-center mb-6 text-gray-900">Gizlilik Politikası</h1>
          
          <p className="mb-4 text-gray-700">
            Bu gizlilik politikası, <strong>QR Menü</strong> uygulamasını kullanan restoran sahiplerinin ve müşterilerin gizlilik haklarını korumak amacıyla hazırlanmıştır. Uygulama, restoran sahiplerinin menülerini dijital olarak sunmalarına ve müşterilerin WhatsApp üzerinden sipariş vermelerine olanak tanır. Uygulamamız, kişisel verilerin korunmasını ciddiye alır ve bu verilerin güvenliğini sağlamak için gerekli adımları atar.
          </p>

          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2 text-gray-900">1. Toplanan Veriler</h2>
            <p className="mb-4 text-gray-700">
              <strong>Restoran Sahiplerinden Toplanan Veriler:</strong> Restoran adı, menü bilgileri, telefon numarası ve WhatsApp numarası, restoran sahiplerinin sisteme giriş yapabilmesi için e-posta adresi ve kullanıcı bilgileri.
            </p>
            <p className="mb-4 text-gray-700">
              <strong>Müşterilerden Toplanan Veriler:</strong> QR kod taraması sonrası sipariş vermek amacıyla kullanılan WhatsApp numarası ve sipariş detayları.
            </p>
            <p className="mb-4 text-gray-700">
              <strong>Otomatik Olarak Toplanan Veriler:</strong> IP adresi, tarayıcı bilgileri, cihaz türü ve işletim sistemi bilgileri gibi teknik bilgiler.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2 text-gray-900">2. Verilerin Kullanımı</h2>
            <p className="mb-4 text-gray-700">
              Toplanan veriler, restoran sahiplerinin dijital menülerini yönetmesi, müşterilerin QR kod tarayarak menülere ulaşması ve WhatsApp üzerinden sipariş vermesi amacıyla kullanılır. Ayrıca, güvenlik ve kullanıcı desteği sağlamak için kullanılmaktadır.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2 text-gray-900">3. Verilerin Paylaşımı</h2>
            <p className="mb-4 text-gray-700">
              Toplanan veriler üçüncü şahıslarla paylaşılmamaktadır. Restoran sahiplerinin ve müşterilerin verileri yalnızca sipariş işlemleri ve uygulamanın işleyişi için kullanılmaktadır.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2 text-gray-900">4. Verilerin Güvenliği</h2>
            <p className="mb-4 text-gray-700">
              Kişisel verilerinizin güvenliği bizim için önemlidir. Uygulamamızda toplanan tüm veriler, güvenli sunucularda saklanır ve yetkisiz erişime karşı korunur.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2 text-gray-900">5. İletişim</h2>
            <div className="mb-4 text-gray-700">
              Bu gizlilik politikasıyla ilgili herhangi bir sorunuz varsa, bizimle iletişime geçebilirsiniz:
              <ul className="list-disc ml-6">
                <li>E-posta: uduve08@gmail.com</li>
                <li>Telefon: +90 535 647 79 09</li>
              </ul>
            </div>
          </div>

          <p className="text-sm text-gray-600">
            QR Menü uygulaması, restoran sahiplerinin menülerini dijital hale getirip, müşterilerin WhatsApp üzerinden sipariş verebilmesini sağlar. Gizlilik haklarına ve veri güvenliğine önem veriyoruz.
          </p>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
