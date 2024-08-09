import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Logo ve Başlık */}
                    <div className="text-center md:text-left mb-4 md:mb-0">
                        <h1 className="text-xl font-bold">UDU </h1>
                        <p className="text-gray-400 text-sm">En Lezzetli Yemekler ve Tatlılar</p>
                        {/* Telif Hakkı Bilgisi */}
                        <div className="text-center text-gray-400 text-sm mt-4">
                            <p>&copy; 2024 Restoran Adı. Tüm hakları saklıdır.</p>
                        </div>
                    </div>

                    {/* Menü Bağlantıları */}
                    <div className="mb-4 md:mb-0">
                        <h2 className="text-md font-semibold mb-2">Menü</h2>
                        <ul className="space-y-1">
                            <li><a href="/#Yemekler" className="text-gray-300 hover:text-yellow-600">Yemekler</a></li>
                            <li><a href="/#İçecekler" className="text-gray-300 hover:text-yellow-600">İçecekler</a></li>
                            <li><a href="/#Tatlılar" className="text-gray-300 hover:text-yellow-600">Tatlılar</a></li>
                        </ul>
                    </div>

                    {/* Sosyal Medya Bağlantıları */}
                    <div className="mb-4 md:mb-0">
                        <h2 className="text-lg text-center font-semibold mb-2">Bizi Takip Edin</h2>
                        <div className="flex space-x-3">
                            <a href="#" className="text-gray-300 hover:text-yellow-600 text-sm">Facebook</a>
                            <a href="#" className="text-gray-300 hover:text-yellow-600 text-sm">Twitter</a>
                            <a href="#" className="text-gray-300 hover:text-yellow-600 text-sm">Instagram</a>
                            <a href="#" className="text-gray-300 hover:text-yellow-600 text-sm">LinkedIn</a>
                        </div>
                        <a href="/aboutUs" className="text-center text-gray-300 hover:text-yellow-600">Hakkımızda</a>
                    </div>
                </div>


            </div>
        </footer>
    );
};

export default Footer;
