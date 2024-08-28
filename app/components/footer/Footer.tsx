import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-yellow-600 text-white py-4">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Logo ve Başlık */}
                    <div className="text-center md:text-left mb-4 md:mb-0">
                        <h1 className="text-xl font-bold">udulab Menu </h1>
                        <p className="text-gray-100 text-sm">En Lezzetli Yemekler ve Tatlılar</p>
                        {/* Telif Hakkı Bilgisi */}
                        <div className="text-center text-gray-100 text-sm mt-4">
                            <p>&copy; 2024 udu.com.tr   Tüm hakları saklıdır.</p>
                        </div>
                    </div>
        
                    {/* Menü Bağlantıları kullanımda değil */}
                    {/* <div className="mb-4 hidden md:block md:mb-0">
                        <h2 className="text-md font-semibold mb-2">Menü</h2>
                        <ul className="gap-3 flex">
                            <ul><li><a href="/#Yemekler" className="text-gray-100 hover:text-gray-300">Yemekler</a></li>
                                <li><a href="/#İçecekler" className="text-gray-100 hover:text-gray-300">İçecekler</a></li>
                            </ul>
                            <ul>
                                <li><a href="/#Tatlılar" className="text-gray-100 hover:text-gray-300">Tatlılar</a></li>
                                <li><a href="/#Atıştırmalık" className="text-gray-100 hover:text-gray-300">Atıştırmalıklar</a></li>
                            </ul>

                        </ul>
                    </div> */}

                    {/* Sosyal Medya Bağlantıları */}
                    <div className="mb-4 md:mb-0">
                        <h2 className="text-lg text-center font-semibold mb-2">Bizi Takip Edin</h2>
                        <div className="flex space-x-3">
                            <a href="#" className="text-gray-100 hover:text-gray-300 text-sm">Twitter</a>
                            <a href="#" className="text-gray-100 hover:text-gray-300 text-sm">Instagram</a>
                            <a href="https://www.linkedin.com/in/umut-deniz-ural-99a12a207/" className="text-gray-100 hover:text-gray-300 text-sm">LinkedIn</a>
                        </div>
                        <a href="/aboutUs" className="text-center text-gray-100 hover:text-gray-300">Hakkımızda</a>
                    </div>
                </div>


            </div>
        </footer>
    );
};

export default Footer;
