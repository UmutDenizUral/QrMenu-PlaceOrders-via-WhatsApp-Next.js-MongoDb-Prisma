const BannerSideContent = () => {
  return (
    <div className="flex relative flex-col justify-center items-start p-4 h-full bg-gray-50 text-black">
      <h2 className="text-2xl font-bold mb-4">Udulab QR Menü&apos;ye hoşgeldiniz</h2>
      <p className="mb-4 pb-2">
        Restoran hesabı açarak kendi menünüzü kolaylıkla oluşturabilirsiniz. Müşteriler QR kodunuzu okutarak direkt olarak kendi restoranınızın menüsüne ulaşabilir ve sepete eklenen ürünler sipariş tamamlandığında restoran sahibinin WhatsApp&apos;ına mesaj olarak düşer.
        Aracı firmalara komisyon ödemeden kendi kuryelerinizle siparişi teslim edebilirsiniz.
      </p>
      <a className="absolute bottom-2 underline underline-offset-2 cursor-pointer" href="/aboutUs">Biz kimiz --{'>'}</a>
    </div>
  );
};

export default BannerSideContent;
