import React from 'react';

const BannerSideContent = () => {
  return (
    <div className="flex flex-col justify-center items-start p-4 h-full bg-gray-50 text-black">
      <h2 className="text-2xl font-bold mb-4">Udulab Qr Menü'ye hoşgeldiniz</h2>
      <p className="mb-4">
       Restoran hesabı açarak kendi menünüzü kolaylıkla oluşturabilirsiniz. Müşteriler QR kodunuzu okutarak direkt olarak kendi restoranınızın menüsüne ulaşabilir ve sepete eklenen ürünler sipariş tamamlandığında restoran sahibinin WhatsApp'ına mesaj olarak düşer.
       Aracı firmalara komisyon ödemeden kendi kuryelerinizle siparişi teslim edebilirsiniz.
      </p>  
    </div>
  );
};

export default BannerSideContent;
