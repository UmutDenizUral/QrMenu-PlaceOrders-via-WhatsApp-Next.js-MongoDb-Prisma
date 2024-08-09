export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    ingredients: string[];
    submenu: string
    category: string;
    image: string;
    reviews: any[];
}

export interface Category {
    id: string;
    name: string;
    products: Product[];
}

export interface ProductCategories {
    drinks: Category[];
    deserts: Category[];
    foods: Category[];
    sideDish: Category[];
}


// Alt başlıklarla güncellenmiş ürünler
export const products: ProductCategories = {
    drinks: [
        {
            id: "hot-beverages",
            name: "Sıcak İçecekler",
            products: [
                {
                    id: "64a654593e91b8e73a351ea4",
                    name: "Sıcak Çikolata",
                    description: "Zengin ve kremalı sıcak çikolata.",
                    price: 30,
                    ingredients: ["süt", "çikolata", "şeker", "vanilin"],
                    submenu:'İçecek',
                    category: "hot-beverages",
                    image: "/k_sıcakıcecek.jpeg",
                    reviews: []
                },
                {
                    id: "64a654593e91b8e73a351ea5",
                    name: "Türk Kahvesi",
                    description: "Klasik Türk kahvesi, köpüklü ve aromatik.",
                    price: 25,
                    ingredients: ["kahve", "su", "şeker (isteğe bağlı)"],
                    submenu:'İçecek',
                    category: "hot-beverages",
                    image: "/k_sıcakıcecek.jpeg",
                    reviews: []
                },
                {
                    id: "64a654593e91b8e73a351ea6",
                    name: "Chai Latte",
                    description: "Baharatlı ve tatlı bir chai latte.",
                    price: 28,
                    ingredients: ["süt", "chai baharatları", "şeker", "çay"],
                    submenu:'İçecek',
                    category: "hot-beverages",
                    image: "/k_sıcakıcecek.jpeg",
                    reviews: []
                },
                {
                    id: "64a654593e91b8e73a351ea7",
                    name: "Latte",
                    description: "Yumuşak ve kremalı latte.",
                    price: 32,
                    ingredients: ["süt", "espresso", "şeker (isteğe bağlı)"],
                    submenu:'İçecek',
                    category: "hot-beverages",
                    image: "/k_latte.jpeg",
                    reviews: []
                }
            ]
        },
        {
            id: "alcoholic-beverages",
            name: "Alkollü İçecekler",
            products: [
                {
                    id: "64a654593e91b8e73a351ea8",
                    name: "Kırmızı Şarap",
                    description: "Yüksek kaliteli kırmızı şarap.",
                    price: 70,
                    ingredients: ["üzüm", "su", "şeker"],
                    submenu:'İçecek',
                    category: "alcoholic-beverages",
                    image: "/k_soguk.jpeg",
                    reviews: []
                },
                {
                    id: "64a654593e91b8e73a351ea9",
                    name: "Bira",
                    description: "Serinletici bir lager bira.",
                    price: 18,
                    ingredients: ["su", "arpa", "şerbetçi otu", "maya"],
                    submenu:'İçecek',
                    category: "alcoholic-beverages",
                    image: "/k_latte.jpeg",
                    reviews: []
                },
                {
                    id: "64a654593e91b8e73a351eaa",
                    name: "Margarita",
                    description: "Tatlı ve ekşi bir margarita.",
                    price: 55,
                    ingredients: ["tequila", "lime suyu", "şeker", "tuza batırılmış kenar"],
                    submenu:'İçecek',
                    category: "alcoholic-beverages",
                    image: "/k_soguk.jpeg",
                    reviews: []
                },
                {
                    id: "64a654593e91b8e73a351eab",
                    name: "Mojito",
                    description: "Ferahlatıcı bir mojito kokteyli.",
                    price: 50,
                    ingredients: ["rom", "lime suyu", "nane", "şeker", "soda"],
                    submenu:'İçecek',
                    category: "alcoholic-beverages",
                    image: "/k_soguk.jpeg",
                    reviews: []
                }
            ]
        },
        {
            id: "cold-beverages",
            name: "Soğuk İçecekler",
            products: [
                {
                    id: "64a654593e91b8e73a351eac",
                    name: "Meyve Suyu",
                    description: "Taze sıkılmış meyve suyu.",
                    price: 25,
                    ingredients: ["meyve suyu"],
                    submenu:'İçecek',
                    category: "cold-beverages",
                    image: "/k_soguk.jpeg",
                    reviews: []
                },
                {
                    id: "64a654593e91b8e73a351ead",
                    name: "Buzlu Çay",
                    description: "Soğuk ve serinletici buzlu çay.",
                    price: 20,
                    ingredients: ["çay", "şeker", "su", "buz"],
                    submenu:'İçecek',
                    category: "cold-beverages",
                    image: "/k_soguk.jpeg",
                    reviews: []
                },
                {
                    id: "64a654593e91b8e73a351eae",
                    name: "Smoothie",
                    description: "Taze meyvelerle yapılmış smoothie.",
                    price: 35,
                    ingredients: ["meyve", "yoğurt", "bal"],
                    submenu:'İçecek',
                    category: "cold-beverages",
                    image: "/k_milkshake.jpeg",
                    reviews: []
                },
                {
                    id: "64a654593e91b8e73a351eaf",
                    name: "Limonata",
                    description: "Ferahlık veren ev yapımı limonata.",
                    price: 22,
                    ingredients: ["limon", "şeker", "su", "buz"],
                    submenu:'İçecek',
                    category: "cold-beverages",
                    image: "/k_milkshake.jpeg",
                    reviews: []
                }
            ]
        }
    ],
    deserts: [
        {
            id: "cookies",
            name: "Kurabiyeler",
            products: [
                {
                    id: "64a654593e91b8e73a351eb0",
                    name: "Çikolatalı Kurabiye",
                    description: "Çikolata parçacıklı kurabiye.",
                    price: 30,
                    ingredients: ["un", "şeker", "çikolata", "tereyağı"],
                    submenu:'Tatlı',
                    category: "cookies",
                    image: "/k_cookie.jpeg",
                    reviews: []
                },
                {
                    id: "64a654593e91b8e73a351eb1",
                    name: "Yulaflı Kurabiye",
                    description: "Yulaflı ve sağlıklı kurabiye.",
                    price: 35,
                    ingredients: ["yulaf", "bal", "kuru meyve", "fındık"],
                    submenu:'Tatlı',
                    category: "cookies",
                    image: "/k_magnolya.jpeg",
                    reviews: []
                },
                {
                    id: "64a654593e91b8e73a351eb2",
                    name: "Zeytinli Kurabiye",
                    description: "Tuzlu zeytinli kurabiye.",
                    price: 32,
                    ingredients: ["un", "zeytin", "tuz", "zeytinyağı"],
                    submenu:'Tatlı',
                    category: "cookies",
                    image: "/k_tost.jpeg",
                    reviews: []
                },
                {
                    id: "64a654593e91b8e73a351eb3",
                    name: "Fındıklı Kurabiye",
                    description: "Fındık parçacıklı tatlı kurabiye.",
                    price: 33,
                    ingredients: ["un", "şeker", "fındık", "tereyağı"],
                    submenu:'Tatlı',
                    category: "cookies",
                    image: "/k_cookie.jpeg",
                    reviews: []
                }
            ]
        },
        {
            id: "milk-desserts",
            name: "Sütlü Tatlılar",
            products: [
                {
                    id: "64a654593e91b8e73a351eb4",
                    name: "Sütlaç",
                    description: "Klasik Türk sütlaçı.",
                    price: 40,
                    ingredients: ["süt", "pirinç", "şeker", "vanilin"],
                    submenu:'Tatlı',
                    category: "milk-desserts",
                    image: "/k_cheescake.jpeg",
                    reviews: []
                },
                {
                    id: "64a654593e91b8e73a351eb5",
                    name: "Muhallebi",
                    description: "Kremalı ve hafif muhallebi.",
                    price: 45,
                    ingredients: ["süt", "nişasta", "şeker", "vanilin"],
                    submenu:'Tatlı',
                    category: "milk-desserts",
                    image: "/k_magnolya.jpeg",
                    reviews: []
                }
            ]
        }
    ],
    foods: [
        {
            id: "pizzas",
            name: "Pizzalar",
            products: [
                {
                    id: "64a654593e91b8e73a351e9b",
                    name: "İtalyan Pizza",
                    description: "Lezzetli İtalyan pizza.",
                    price: 250,
                    ingredients: ["marul", "sosis", "peynir"],
                    submenu:'Yemek',
                    category: "pizzas",
                    image: "/k_pizza.jpeg",
                    reviews: []
                },
                {
                    id: "64a654593e91b8e73a351e9c",
                    name: "Margherita Pizza",
                    description: "Klasik Margherita pizza.",
                    price: 200,
                    ingredients: ["domates", "mozzarella", "fesleğen"],
                    submenu:'Yemek',
                    category: "pizzas",
                    image: "/k_tost.jpeg",
                    reviews: []
                }
                // Daha fazla pizza türü ekleyebilirsiniz
            ]
        },
        {
            id: "pastas",
            name: "Makarna",
            products: [
                {
                    id: "64a654593e91b8e73a351e9e",
                    name: "Spaghetti Carbonara",
                    description: "Kremalı ve lezzetli carbonara makarna.",
                    price: 150,
                    ingredients: ["spaghetti", "krema", "pastırma", "yumurta"],
                    submenu:'Yemek',
                    category: "pastas",
                    image: "/k_susamliTost.jpeg",
                    reviews: []
                },
                {
                    id: "64a654593e91b8e73a351e9f",
                    name: "Penne Arrabbiata",
                    description: "Acılı penne makarna.",
                    price: 160,
                    ingredients: ["penne", "domates sosu", "sarımsak", "kırmızı biber"],
                    submenu:'Yemek',
                    category: "pastas",
                    image: "/k_kruvasan.jpeg",
                    reviews: []
                }
                // Daha fazla makarna türü ekleyebilirsiniz
            ]
        }
    ],
    sideDish: [
        {
            id: "soganhalka",
            name: "sideDish",
            products: [
                {
                    id: "64a654593e91b8e73a351e9b",
                    name: "İtalyan Pizza",
                    description: "Lezzetli İtalyan pizza.",
                    price: 250,
                    ingredients: ["marul", "sosis", "peynir"],
                    submenu:'Atıştırmalık',
                    category: "sideDish",
                    image: "/k_pizza.jpeg",
                    reviews: []
                },
                {
                    id: "64a654593e91b8e73a351e9c",
                    name: "Margherita Pizza",
                    description: "Klasik Margherita pizza.",
                    price: 200,
                    ingredients: ["domates", "mozzarella", "fesleğen"],
                    submenu:'Atıştırmalık',
                    category: "sideDish",
                    image: "/k_tost.jpeg",
                    reviews: []
                }
                // Daha fazla pizza türü ekleyebilirsiniz
            ]
        },
        {
            id: "patata",
            name: "sideDish",
            products: [
                {
                    id: "64a654593e91b8e73a351e9e",
                    name: "Spaghetti Carbonara",
                    description: "Kremalı ve lezzetli carbonara makarna.",
                    price: 150,
                    ingredients: ["spaghetti", "krema", "pastırma", "yumurta"],
                    submenu:'Atıştırmalık',
                    category: "sideDish",
                    image: "/k_susamliTost.jpeg",
                    reviews: []
                },
                {
                    id: "64a654593e91b8e73a351e9f",
                    name: "Penne Arrabbiata",
                    description: "Acılı penne makarna.",
                    price: 160,
                    ingredients: ["penne", "domates sosu", "sarımsak", "kırmızı biber"],
                    submenu:'Atıştırmalık',
                    category: "sideDish",
                    image: "/k_kruvasan.jpeg",
                    reviews: []
                }
                // Daha fazla makarna türü ekleyebilirsiniz
            ]
        }
    ]
};
