export interface Product {
    id: string;
    shopId: string;
    shopName: string
    name: string;
    description: string;
    price: number;
    ingredients: string[];
    submenu: string
    category: string;
    image: string;
    reviews: any[];
}



// Alt başlıklarla güncellenmiş ürünler
export const products: Product[] = [
    {
        id: "64a654593e91b8e73a351e9cs",
        shopId: 'UDU13208',
        shopName: 'UDU Restrant',
        name: "Margherita Pizza",
        description: "Klasik Margherita pizza.",
        price: 200,
        ingredients: ["domates", "mozzarella", "fesleğen"],
        submenu: 'Yemek',
        category: "pizzas",
        image: "/k_tost.jpeg",
        reviews: []
    },

    {
        id: "64a654593e91b8e73a351ea4",
        shopId: 'UDU13208',
        shopName: 'UDU Restrant',
        name: "Sıcak Çikolata",
        description: "Zengin ve kremalı sıcak çikolata.",
        price: 30,
        ingredients: ["süt", "çikolata", "şeker", "vanilin"],
        submenu: 'İçecek',
        category: "hot-beverages",
        image: "/k_sıcakıcecek.jpeg",
        reviews: []
    },
    {
        id: "64a654593e91b8e73a351ea5",
        shopId: 'UDU13208',
        shopName: 'UDU Restrant',
        name: "Türk Kahvesi",
        description: "Klasik Türk kahvesi, köpüklü ve aromatik.",
        price: 25,
        ingredients: ["kahve", "su", "şeker (isteğe bağlı)"],
        submenu: 'İçecek',
        category: "hot-beverages",
        image: "/k_sıcakıcecek.jpeg",
        reviews: []
    },
    {
        id: "64a654593e91b8e73a351ea6", 
        shopId: 'UDU13208',
        shopName: 'UDU Restrant',
        name: "Chai Latte",
        description: "Baharatlı ve tatlı bir chai latte.",
        price: 28,
        ingredients: ["süt", "chai baharatları", "şeker", "çay"],
        submenu: 'İçecek',
        category: "hot-beverages",
        image: "/k_sıcakıcecek.jpeg",
        reviews: []
    },
    {
        id: "64a654593e91b8e73a351ea7",
        shopId: 'UDU13208',
        shopName: 'UDU Restrant',
        name: "Latte",
        description: "Yumuşak ve kremalı latte.",
        price: 32,
        ingredients: ["süt", "espresso", "şeker (isteğe bağlı)"],
        submenu: 'İçecek',
        category: "hot-beverages",
        image: "/k_latte.jpeg",
        reviews: []
    },

    {
        id: "64a654593e91b8e73a351ea8",
        shopId: 'UDU13208',
        shopName: 'UDU Restrant',
        name: "Kırmızı Şarap",
        description: "Yüksek kaliteli kırmızı şarap.",
        price: 70,
        ingredients: ["üzüm", "su", "şeker"],
        submenu: 'İçecek',
        category: "alcoholic-beverages",
        image: "/k_soguk.jpeg",
        reviews: []
    },
    {
        id: "64a654593e91b8e73a351ea9",
        shopId: 'UDU13208',
        shopName: 'UDU Restrant',
        name: "Bira",
        description: "Serinletici bir lager bira.",
        price: 18,
        ingredients: ["su", "arpa", "şerbetçi otu", "maya"],
        submenu: 'İçecek',
        category: "alcoholic-beverages",
        image: "/k_latte.jpeg",
        reviews: []
    },
    {
        id: "64a654593e91b8e73a351eaa",
        shopId: 'UDU13208',
        shopName: 'UDU Restrant',
        name: "Margarita",
        description: "Tatlı ve ekşi bir margarita.",
        price: 55,
        ingredients: ["tequila", "lime suyu", "şeker", "tuza batırılmış kenar"],
        submenu: 'İçecek',
        category: "alcoholic-beverages",
        image: "/k_soguk.jpeg",
        reviews: []
    },
    {
        id: "64a654593e91b8e73a351eab",
        shopId: 'UDU13208',
        shopName: 'UDU Restrant',
        name: "Mojito",
        description: "Ferahlatıcı bir mojito kokteyli.",
        price: 50,
        ingredients: ["rom", "lime suyu", "nane", "şeker", "soda"],
        submenu: 'İçecek',
        category: "alcoholic-beverages",
        image: "/k_soguk.jpeg",
        reviews: []
    },


    {
        id: "64a654593e91b8e73a351eac",
        shopId: 'UDU13208',
        shopName: 'UDU Restrant',
        name: "Meyve Suyu",
        description: "Taze sıkılmış meyve suyu.",
        price: 25,
        ingredients: ["meyve suyu"],
        submenu: 'İçecek',
        category: "cold-beverages",
        image: "/k_soguk.jpeg",
        reviews: []
    },
    {
        id: "64a654593e91b8e73a351ead",
        shopId: 'UDU13208',
        shopName: 'UDU Restrant',
        name: "Buzlu Çay",
        description: "Soğuk ve serinletici buzlu çay.",
        price: 20,
        ingredients: ["çay", "şeker", "su", "buz"],
        submenu: 'İçecek',
        category: "cold-beverages",
        image: "/k_soguk.jpeg",
        reviews: []
    },
    {
        id: "64a654593e91b8e73a351eae",
        shopId: 'UDU13208',
        shopName: 'UDU Restrant',
        name: "Smoothie",
        description: "Taze meyvelerle yapılmış smoothie.",
        price: 35,
        ingredients: ["meyve", "yoğurt", "bal"],
        submenu: 'İçecek',
        category: "cold-beverages",
        image: "/k_milkshake.jpeg",
        reviews: []
    },
    {
        id: "64a654593e91b8e73a351eaf",
        shopId: 'UDU13208',
        shopName: 'UDU Restrant',
        name: "Limonata",
        description: "Ferahlık veren ev yapımı limonata.",
        price: 22,
        ingredients: ["limon", "şeker", "su", "buz"],
        submenu: 'İçecek',
        category: "cold-beverages",
        image: "/k_milkshake.jpeg",
        reviews: []
    },

    {
        id: "64a654593e91b8e73a351eb0",
        shopId: 'UDU13208',
        shopName: 'UDU Restrant',
        name: "Çikolatalı Kurabiye",
        description: "Çikolata parçacıklı kurabiye.",
        price: 30,
        ingredients: ["un", "şeker", "çikolata", "tereyağı"],
        submenu: 'Tatlı',
        category: "cookies",
        image: "/k_cookie.jpeg",
        reviews: []
    },
    {
        id: "64a654593e91b8e73a351eb1",
        shopId: 'UDU13208',
        shopName: 'UDU Restrant',
        name: "Yulaflı Kurabiye",
        description: "Yulaflı ve sağlıklı kurabiye.",
        price: 35,
        ingredients: ["yulaf", "bal", "kuru meyve", "fındık"],
        submenu: 'Tatlı',
        category: "cookies",
        image: "/k_magnolya.jpeg",
        reviews: []
    },
    {
        id: "64a654593e91b8e73a351eb2",
        shopId: 'UDU13208',
        shopName: 'UDU Restrant',
        name: "Zeytinli Kurabiye",
        description: "Tuzlu zeytinli kurabiye.",
        price: 32,
        ingredients: ["un", "zeytin", "tuz", "zeytinyağı"],
        submenu: 'Tatlı',
        category: "cookies",
        image: "/k_tost.jpeg",
        reviews: []
    },
    {
        id: "64a654593e91b8e73a351eb3",
        shopId: 'UDU13208',
        shopName: 'UDU Restrant',
        name: "Fındıklı Kurabiye",
        description: "Fındık parçacıklı tatlı kurabiye.",
        price: 33,
        ingredients: ["un", "şeker", "fındık", "tereyağı"],
        submenu: 'Tatlı',
        category: "cookies",
        image: "/k_cookie.jpeg",
        reviews: []
    },

    {
        id: "64a654593e91b8e73a351eb4",
        shopId: 'UDU13208',
        shopName: 'UDU Restrant',
        name: "Sütlaç",
        description: "Klasik Türk sütlaçı.",
        price: 40,
        ingredients: ["süt", "pirinç", "şeker", "vanilin"],
        submenu: 'Tatlı',
        category: "milk-desserts",
        image: "/k_cheescake.jpeg",
        reviews: []
    },
    {
        id: "64a654593e91b8e73a351eb5",
        shopId: 'UDU13208',
        shopName: 'UDU Restrant',
        name: "Muhallebi",
        description: "Kremalı ve hafif muhallebi.",
        price: 45,
        ingredients: ["süt", "nişasta", "şeker", "vanilin"],
        submenu: 'Tatlı',
        category: "milk-desserts",
        image: "/k_magnolya.jpeg",
        reviews: []
    },

    {
        id: "64a654593e91b8e73a351e9b",
        shopId: 'UDU13208',
        shopName: 'UDU Restrant',
        name: "İtalyan Pizza",
        description: "Lezzetli İtalyan pizza.",
        price: 250,
        ingredients: ["marul", "sosis", "peynir"],
        submenu: 'Yemek',
        category: "pizzas",
        image: "/k_pizza.jpeg",
        reviews: []
    },

    // Daha fazla pizza türü ekleyebilirsiniz

    {
        id: "64a654593e91b8e73a351e9e",
        shopId: 'UDU13208',
        shopName: 'UDU Restrant',
        name: "Spaghetti Carbonara",
        description: "Kremalı ve lezzetli carbonara makarna.",
        price: 150,
        ingredients: ["spaghetti", "krema", "pastırma", "yumurta"],
        submenu: 'Yemek',
        category: "pastas",
        image: "/k_susamliTost.jpeg",
        reviews: []
    },
    {
        id: "64a654593e91b8e73a351e9f",
        shopId: 'UDU13208',
        shopName: 'UDU Restrant',
        name: "Penne Arrabbiata",
        description: "Acılı penne makarna.",
        price: 160,
        ingredients: ["penne", "domates sosu", "sarımsak", "kırmızı biber"],
        submenu: 'Yemek',
        category: "pastas",
        image: "/k_kruvasan.jpeg",
        reviews: []
    },

    {
        id: "64a654593e91b8e73a351e9bs",
        shopId: 'UDU13208',
        shopName: 'UDU Restrant',
        name: "İtalyan Pizza",
        description: "Lezzetli İtalyan pizza.",
        price: 250,
        ingredients: ["marul", "sosis", "peynir"],
        submenu: 'Atıştırmalık',
        category: "sideDish",
        image: "/k_pizza.jpeg",
        reviews: []
    },
    {
        id: "64a654593e91b8e73a351e9cs1",
        shopId: 'UDU13208',
        shopName: 'UDU Restrant',
        name: "Margherita Pizza",
        description: "Klasik Margherita pizza.",
        price: 200,
        ingredients: ["domates", "mozzarella", "fesleğen"],
        submenu: 'Atıştırmalık',
        category: "sideDish",
        image: "/k_tost.jpeg",
        reviews: []
    }, {
        id: "64a654593e91b8e73a351e9cs1s",
        shopId: 'UDU13208',
        shopName: 'UDU Restrant',
        name: "Patates Kızartması",
        description: "Klasik Margherita pizza.",
        price: 200,
        ingredients: ["domates", "mozzarella", "fesleğen"],
        submenu: 'Atıştırmalık',
        category: "sideDish",
        image: "/k_tost.jpeg",
        reviews: []
    },
    {
        id: "64a654593e91b8e73a351e9cs1sa",
        shopId: 'UDU13208',
        shopName: 'UDU Restrant',
        name: "Soğan Halkası",
        description: "Klasik Margherita pizza.",
        price: 200,
        ingredients: ["domates", "mozzarella", "fesleğen"],
        submenu: 'Atıştırmalık',
        category: "sideDish",
        image: "/k_tost.jpeg",
        reviews: []
    },
    // Daha fazla pizza türü ekleyebilirsiniz

    {
        id: "64a654593e91b8e73a351e9e",
        shopId: 'UDU13208',
        shopName: 'UDU Restrant',
        name: "Spaghetti Carbonara",
        description: "Kremalı ve lezzetli carbonara makarna.",
        price: 150,
        ingredients: ["spaghetti", "krema", "pastırma", "yumurta"],
        submenu: 'Atıştırmalık',
        category: "sideDish",
        image: "/k_susamliTost.jpeg",
        reviews: []
    },
    {
        id: "64a654593e91b8e73a351e9f",
        shopId: 'UDU13208',
        shopName: 'UDU Restrant',
        name: "Penne Arrabbiata",
        description: "Acılı penne makarna.",
        price: 160,
        ingredients: ["penne", "domates sosu", "sarımsak", "kırmızı biber"],
        submenu: 'Atıştırmalık',
        category: "sideDish",
        image: "/k_kruvasan.jpeg",
        reviews: []
    }
    // Daha fazla makarna türü ekleyebilirsiniz
]