import { IHeading } from '../models/i-heading';
import { IProduct } from '../models/i-products';

export class DataResource {

  static products: IProduct[] = [
      {
        "categoryId": 1,
        "categoryName": "Aderezos",
        "productId": "5084412043705",
        "productName": "Ketchup",
        "productDesc": "Esta Ketchup es deliciosa",
        "productImage": "https://assets.unileversolutions.com/v1/91468694.png",
        "productBrandId": 2,
        "productBrandName": "Hellmanns"
      },
      {
        "categoryId": 1,
        "categoryName": "Aderezos",
        "productId": "1277868706572",
        "productName": "Mayonesa",
        "productDesc": "Esta Mayonesa es deliciosa",
        "productImage": "https://ardiaprod.vtexassets.com/arquivos/ids/325528/Mayonesa-Clasica-Hellmann-s-Sin-Tacc-Doypack-475-Gr-_1.jpg?v=638599582731000000",
        "productBrandId": 2,
        "productBrandName": "Hellmanns"
      },
      {
        "categoryId": 1,
        "categoryName": "Aderezos",
        "productId": "8367570401384",
        "productName": "Mostaza",
        "productDesc": "Esta Mostaza es deliciosa",
        "productImage": "https://arjosimarprod.vteximg.com.br/arquivos/ids/170255-1000-1000/Mostaza-Aniversario-Original-Savora-Doy-Pack-250-gr-1-3851.jpg?v=638568165628670000",
        "productBrandId": 2,
        "productBrandName": "Hellmanns"
      },
      {
        "categoryId": 1,
        "categoryName": "Aderezos",
        "productId": "9507652121951",
        "productName": "Salsa Barbacoa",
        "productDesc": "Esta Salsa Barbacoa es deliciosa",
        "productImage": "https://www.unileverfoodsolutions.com.ar/dam/global-ufs/mcos/sla/argentina/calcmenu/products/AR-products/packshots/foodsolutions/barbacoa-hellmanns-1kg-exclusivo-de-argentina-paraguay/77940000039891.png",
        "productBrandId": 2,
        "productBrandName": "Hellmanns"
      },
      {
        "categoryId": 1,
        "categoryName": "Aderezos",
        "productId": "3038629503845",
        "productName": "Salsa de Soja",
        "productDesc": "Esta Salsa de Soja es deliciosa",
        "productImage": "https://www.unileverfoodsolutions.com.ar/dam/global-ufs/mcos/sla/argentina/calcmenu/products/AR-products/packshots/foodsolutions/salsa-shoyu-knorr-1l-exclusivo-de-argentina-uruguay/7891150049536-01-1.jpg",
        "productBrandId": 11,
        "productBrandName": "Cañuelas"
      }
    ]

  static headings: IHeading[] = [
      {
        "headingId": 1,
        "headingName": "Almacén",
        "categories": [
          {
            "categoryId": 1,
            "categoryName": "Aderezos",
            "productTypes": [
              {
                "productTypeId": 1,
                "productTypeName": "Mayonesa"
              },
              {
                "productTypeId": 2,
                "productTypeName": "Ketchup"
              },
              {
                "productTypeId": 3,
                "productTypeName": "Salsa de Soja"
              },
              {
                "productTypeId": 4,
                "productTypeName": "Mostaza"
              },
              {
                "productTypeId": 5,
                "productTypeName": "Salsa Barbacoa"
              }
            ]
          },
          {
            "categoryId": 2,
            "categoryName": "Aceites y vinagres",
            "productTypes": [
              {
                "productTypeId": 6,
                "productTypeName": "Aceite de Oliva"
              },
              {
                "productTypeId": 7,
                "productTypeName": "Aceite de Girasol"
              },
              {
                "productTypeId": 8,
                "productTypeName": "Aceite de Coco"
              }
            ]
          },
          {
            "categoryId": 3,
            "categoryName": "Golosinas",
            "productTypes": [
              {
                "productTypeId": 10,
                "productTypeName": "Chocolates"
              },
              {
                "productTypeId": 11,
                "productTypeName": "Chicles"
              },
              {
                "productTypeId": 12,
                "productTypeName": "Caramelos"
              }
            ]
          },
          {
            "categoryId": 4,
            "categoryName": "Arroz",
            "productTypes": [
              {
                "productTypeId": 13,
                "productTypeName": "Arroz Doble Carolina"
              },
              {
                "productTypeId": 14,
                "productTypeName": "Arroz No se pasa"
              },
              {
                "productTypeId": 15,
                "productTypeName": "Arroz Sushi"
              }
            ]
          },
          {
            "categoryId": 5,
            "categoryName": "Conservas",
            "productTypes": [
              {
                "productTypeId": 16,
                "productTypeName": "Sopa en Lata"
              },
              {
                "productTypeId": 17,
                "productTypeName": "Verdura en Lata"
              },
              {
                "productTypeId": 18,
                "productTypeName": "Fruta en Lata"
              },
              {
                "productTypeId": 19,
                "productTypeName": "Salsa de Tomate"
              },
              {
                "productTypeId": 20,
                "productTypeName": "Salsa Pesto"
              }
            ]
          },
          {
            "categoryId": 6,
            "categoryName": "Harinas",
            "productTypes": [
              {
                "productTypeId": 21,
                "productTypeName": "Harina 0000"
              },
              {
                "productTypeId": 22,
                "productTypeName": "Harina 00"
              },
              {
                "productTypeId": 23,
                "productTypeName": "Harina Leudante"
              }
            ]
          },
          {
            "categoryId": 29,
            "categoryName": "Snacks",
            "productTypes": [
              {
                "productTypeId": 87,
                "productTypeName": "Nachos"
              },
              {
                "productTypeId": 88,
                "productTypeName": "Palitos Salados"
              },
              {
                "productTypeId": 89,
                "productTypeName": "Maní"
              }
            ]
          },
          {
            "categoryId": 30,
            "categoryName": "Galletas",
            "productTypes": [
              {
                "productTypeId": 90,
                "productTypeName": "Galletas Dulces"
              },
              {
                "productTypeId": 91,
                "productTypeName": "Galletas Saladas"
              },
              {
                "productTypeId": 92,
                "productTypeName": "Galletas de Arroz"
              }
            ]
          }
        ]
      },
      {
        "headingId": 2,
        "headingName": "Bebidas",
        "categories": [
          {
            "categoryId": 7,
            "categoryName": "Aguas",
            "productTypes": [
              {
                "productTypeId": 24,
                "productTypeName": "Agua Mineral"
              },
              {
                "productTypeId": 25,
                "productTypeName": "Agua con Gas"
              },
              {
                "productTypeId": 26,
                "productTypeName": "Agua Saborizada"
              }
            ]
          },
          {
            "categoryId": 8,
            "categoryName": "Energizantes",
            "productTypes": [
              {
                "productTypeId": 27,
                "productTypeName": "Energizante de Limón"
              },
              {
                "productTypeId": 28,
                "productTypeName": "Energizante de Naranja"
              },
              {
                "productTypeId": 29,
                "productTypeName": "Energizante de Uva"
              }
            ]
          },
          {
            "categoryId": 9,
            "categoryName": "Jugos",
            "productTypes": [
              {
                "productTypeId": 32,
                "productTypeName": "Jugo de Piña"
              },
              {
                "productTypeId": 33,
                "productTypeName": "Jugo Concentrado Naranja"
              },
              {
                "productTypeId": 30,
                "productTypeName": "Jugo de Naranja"
              },
              {
                "productTypeId": 31,
                "productTypeName": "Jugo de Manzana"
              }
            ]
          },
          {
            "categoryId": 10,
            "categoryName": "Bebidas Sin Alcohol",
            "productTypes": [
              {
                "productTypeId": 34,
                "productTypeName": "Bebida de Cola"
              },
              {
                "productTypeId": 35,
                "productTypeName": "Bebida de Limón"
              },
              {
                "productTypeId": 36,
                "productTypeName": "Bebida de Naranja"
              },
              {
                "productTypeId": 37,
                "productTypeName": "Refresco de Lima"
              }
            ]
          },
          {
            "categoryId": 11,
            "categoryName": "Bebidas Alcohólicas",
            "productTypes": [
              {
                "productTypeId": 38,
                "productTypeName": "Cerveza Rubia"
              },
              {
                "productTypeId": 39,
                "productTypeName": "Cerveza IPA"
              },
              {
                "productTypeId": 40,
                "productTypeName": "Fernet"
              },
              {
                "productTypeId": 41,
                "productTypeName": "Vodka"
              }
            ]
          }
        ]
      },
      {
        "headingId": 3,
        "headingName": "Lácteos",
        "categories": [
          {
            "categoryId": 16,
            "categoryName": "Dulces de Leche",
            "productTypes": [
              {
                "productTypeId": 53,
                "productTypeName": "Dulce de Leche Colonial"
              },
              {
                "productTypeId": 54,
                "productTypeName": "Dulce de Leche Clásico"
              },
              {
                "productTypeId": 55,
                "productTypeName": "Dulce de Leche Repostero"
              }
            ]
          },
          {
            "categoryId": 17,
            "categoryName": "Cremas",
            "productTypes": [
              {
                "productTypeId": 56,
                "productTypeName": "Crema para Batir"
              },
              {
                "productTypeId": 57,
                "productTypeName": "Crema para Cocinar"
              }
            ]
          },
          {
            "categoryId": 12,
            "categoryName": "Leches",
            "productTypes": [
              {
                "productTypeId": 42,
                "productTypeName": "Leche Entera"
              },
              {
                "productTypeId": 43,
                "productTypeName": "Leche Descremada"
              },
              {
                "productTypeId": 44,
                "productTypeName": "Leche de Almendras"
              }
            ]
          },
          {
            "categoryId": 13,
            "categoryName": "Yogures",
            "productTypes": [
              {
                "productTypeId": 45,
                "productTypeName": "Yogur Natural"
              },
              {
                "productTypeId": 46,
                "productTypeName": "Yogur de Fresa"
              },
              {
                "productTypeId": 47,
                "productTypeName": "Yogur de Durazno"
              }
            ]
          },
          {
            "categoryId": 14,
            "categoryName": "Quesos",
            "productTypes": [
              {
                "productTypeId": 48,
                "productTypeName": "Queso Cheddar"
              },
              {
                "productTypeId": 49,
                "productTypeName": "Queso Mozzarella"
              },
              {
                "productTypeId": 50,
                "productTypeName": "Queso Azul"
              }
            ]
          },
          {
            "categoryId": 15,
            "categoryName": "Mantecas",
            "productTypes": [
              {
                "productTypeId": 51,
                "productTypeName": "Manteca"
              },
              {
                "productTypeId": 52,
                "productTypeName": "Margarina"
              }
            ]
          }
        ]
      },
      {
        "headingId": 4,
        "headingName": "Frutas y Verduras",
        "categories": [
          {
            "categoryId": 18,
            "categoryName": "Frutas Frescas",
            "productTypes": [
              {
                "productTypeId": 58,
                "productTypeName": "Banana"
              },
              {
                "productTypeId": 59,
                "productTypeName": "Frutilla"
              },
              {
                "productTypeId": 60,
                "productTypeName": "Manzana"
              }
            ]
          },
          {
            "categoryId": 19,
            "categoryName": "Verduras Frescas",
            "productTypes": [
              {
                "productTypeId": 61,
                "productTypeName": "Cebolla"
              },
              {
                "productTypeId": 62,
                "productTypeName": "Apio"
              },
              {
                "productTypeId": 63,
                "productTypeName": "Lechuga"
              }
            ]
          },
          {
            "categoryId": 20,
            "categoryName": "Huevos",
            "productTypes": [
              {
                "productTypeId": 64,
                "productTypeName": "Maple"
              },
              {
                "productTypeId": 65,
                "productTypeName": "Docena"
              },
              {
                "productTypeId": 66,
                "productTypeName": "Media Docena"
              }
            ]
          }
        ]
      },
      {
        "headingId": 5,
        "headingName": "Carnicería",
        "categories": [
          {
            "categoryId": 21,
            "categoryName": "Carnes Rojas",
            "productTypes": [
              {
                "productTypeId": 67,
                "productTypeName": "Vacio"
              },
              {
                "productTypeId": 68,
                "productTypeName": "Costilla"
              }
            ]
          },
          {
            "categoryId": 22,
            "categoryName": "Pollo",
            "productTypes": [
              {
                "productTypeId": 69,
                "productTypeName": "Pata"
              },
              {
                "productTypeId": 70,
                "productTypeName": "Muslo"
              }
            ]
          }
        ]
      },
      {
        "headingId": 6,
        "headingName": "Panadería",
        "categories": [
          {
            "categoryId": 23,
            "categoryName": "Pan",
            "productTypes": [
              {
                "productTypeId": 71,
                "productTypeName": "Pan Francés"
              },
              {
                "productTypeId": 72,
                "productTypeName": "Pan Integral"
              },
              {
                "productTypeId": 73,
                "productTypeName": "Pan de Molde"
              }
            ]
          },
          {
            "categoryId": 24,
            "categoryName": "Facturas",
            "productTypes": [
              {
                "productTypeId": 74,
                "productTypeName": "Medialunas"
              },
              {
                "productTypeId": 75,
                "productTypeName": "Facturas con crema"
              },
              {
                "productTypeId": 76,
                "productTypeName": "Vigilantes"
              }
            ]
          }
        ]
      },
      {
        "headingId": 7,
        "headingName": "Congelados",
        "categories": [
          {
            "categoryId": 25,
            "categoryName": "Frutas y Verduras",
            "productTypes": [
              {
                "productTypeId": 77,
                "productTypeName": "Cebolla"
              },
              {
                "productTypeId": 78,
                "productTypeName": "Frutos Rojos"
              }
            ]
          },
          {
            "categoryId": 28,
            "categoryName": "Helados",
            "productTypes": [
              {
                "productTypeId": 84,
                "productTypeName": "Helado de Vainilla"
              },
              {
                "productTypeId": 85,
                "productTypeName": "Helado de Chocolate"
              },
              {
                "productTypeId": 86,
                "productTypeName": "Helado de Frutilla"
              }
            ]
          }
        ]
      },
      {
        "headingId": 8,
        "headingName": "Productos de Limpieza",
        "categories": [
          {
            "categoryId": 26,
            "categoryName": "Detergentes",
            "productTypes": [
              {
                "productTypeId": 80,
                "productTypeName": "Detergente antialergico"
              },
              {
                "productTypeId": 79,
                "productTypeName": "Detergente en gel"
              }
            ]
          },
          {
            "categoryId": 27,
            "categoryName": "Cuidado Personal",
            "productTypes": [
              {
                "productTypeId": 81,
                "productTypeName": "Shampoo"
              },
              {
                "productTypeId": 82,
                "productTypeName": "Acondicionador"
              },
              {
                "productTypeId": 83,
                "productTypeName": "Jabón"
              }
            ]
          }
        ]
      }
  ];
}
