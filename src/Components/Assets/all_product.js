import Pastas1 from '../Assets/Pastas/Pasta1.png';
import Pastas2 from '../Assets/Pastas/Pasta2.png';
import Pastas3 from '../Assets/Pastas/Pasta3.png';
import Pastas4 from '../Assets/Pastas/Pasta4.png';
import Pastas5 from '../Assets/Pastas/Pasta5.png';
import Pastas6 from '../Assets/Pastas/Pasta6.png';

import Condiments1 from '../Assets/Condiments/Condiments(1).jpg';
import Condiments2 from '../Assets/Condiments/Condiments(2).jpg';
import Condiments3 from '../Assets/Condiments/Condiments(3).jpg';
import Condiments4 from '../Assets/Condiments/Condiments(4).jpg';
import Condiments5 from '../Assets/Condiments/Condiments(5).jpeg';
import Condiments6 from '../Assets/Condiments/Condiments(6).jpg';

import Beverages1 from '../Assets/Beverages/Beverages(1).jpeg';
import Beverages2 from '../Assets/Beverages/Beverages(2).jpg';
import Beverages3 from '../Assets/Beverages/Beverages(3).jpg';
import Beverages4 from '../Assets/Beverages/Beverages(4).jpg';
import Beverages5 from '../Assets/Beverages/Beverages(5).jpg';
import Beverages6 from '../Assets/Beverages/Beverages(6).jpg';

import Oils1 from '../Assets/Oils and Vinegar/Oil(1).jpg';
import Oils2 from '../Assets/Oils and Vinegar/Oil(2).jpg';
import Oils3 from '../Assets/Oils and Vinegar/Oil(3).jpg';
import Oils4 from '../Assets/Oils and Vinegar/Oil(4).jpg';
import Oils5 from '../Assets/Oils and Vinegar/Oil(5).jpg';
import Oils6 from '../Assets/Oils and Vinegar/Oil(6).jpg';

import Chocolates1 from '../Assets/Chocolates and Jams/Chocolate(1).jpg';
import Chocolates2 from '../Assets/Chocolates and Jams/Chocolate(2).jpg';
import Chocolates3 from '../Assets/Chocolates and Jams/Chocolate(3).jpg';
import Chocolates4 from '../Assets/Chocolates and Jams/Chocolate(4).jpg';
import Chocolates5 from '../Assets/Chocolates and Jams/Chocolate(5).jpg';
import Chocolates6 from '../Assets/Chocolates and Jams/Chocolate(6).jpeg';

import Cookies1 from '../Assets/Cookies and Snacks/Cookie(1).png';
import Cookies2 from '../Assets/Cookies and Snacks/Cookie(2).png';
import Cookies3 from '../Assets/Cookies and Snacks/Cookie(3).png';
import Cookies4 from '../Assets/Cookies and Snacks/Cookie(4).png';
import Cookies5 from '../Assets/Cookies and Snacks/Cookie(5).png';
import Cookies6 from '../Assets/Cookies and Snacks/Cookie(6).png';

let all_product = [
  {
    id: 1,
    name: "Mulino Bianco Cuor Di Mela 12/350g",
    category: "Cookies and Snacks",
    image: Cookies1,
    unit_price: 50.0,
    total_price: 80.5,
  },
  {
    id: 2,
    name: "Mulino Bianco Abbracci 12/350g",
    category: "Cookies and Snacks",
    image: Cookies2,
    unit_price: 85.0,
    total_price: 120.5,
  },
  {
    id: 3,
    name: "Mulino Bianco Spicchi Di Sole 12/350g",
    category: "Cookies and Snacks",
    image: Cookies3,
    unit_price: 60.0,
    total_price: 100.5,
  },
  {
    id: 4,
    name: "Mulino Bianco Macine 12/350g",
    category: "Cookies and Snacks",
    image: Cookies4,
    unit_price: 100.0,
    total_price: 150.0,
  },
  {
    id: 5,
    name: "Mulino Bianco Girotondi 12/350g",
    category: "Cookies and Snacks",
    image: Cookies5,
    unit_price: 85.0,
    total_price: 120.5,
  },
  {
    id: 6,
    name: "Mulino Bianco Nascondini 12/350g",
    category: "Cookies and Snacks",
    image: Cookies6,
    unit_price: 85.0,
    total_price: 120.5,
  },
  {
    id: 7,
    name: "Nutella 1000g",
    category: "Chocolates and Jams",
    image: Chocolates1,
    unit_price: 85.0,
    total_price: 120.5,
  },
  {
    id: 8,
    name: "Nutella B-Ready 6pk 16pcs",
    category: "Chocolates and Jams",
    image: Chocolates2,
    unit_price: 85.0,
    total_price: 120.5,
  },
  {
    id: 9,
    name: "Kinder Baretta T4",
    category: "Chocolates and Jams",
    image: Chocolates3,
    unit_price: 85.0,
    total_price: 120.5,
  },
  {
    id: 10,
    name: "Santa Rosa Ciligie 12/350g",
    category: "Chocolates and Jams",
    image: Chocolates4,
    unit_price: 85.0,
    total_price: 120.5,
  },
  {
    id: 11,
    name: "Santa Rosa Prugne 12/350g",
    category: "Chocolates and Jams",
    image: Chocolates5,
    unit_price: 85.0,
    total_price: 120.5,
  },
  {
    id: 12,
    name: "Santa Rosa Arance 12/350g",
    category: "Chocolates and Jams",
    image: Chocolates6,
    unit_price: 85.0,
    total_price: 120.5,
  },
  {
    id: 13,
    name: "Mantova Org. Pear Basamic Vinegar 6/8.5oz",
    category: "Oils and Vinegar",
    image: Oils1,
    unit_price: 85.0,
    total_price: 120.5,
  },
  {
    id: 14,
    name: "Mantova Org. Flavored Basil EVOO 6/8.5oz",
    category: "Oils and Vinegar",
    image: Oils2,
    unit_price: 85.0,
    total_price: 120.5,
  },
  {
    id: 15,
    name: "Mantova Org. Flavored Garlic EVOO 6/8.5oz",
    category: "Oils and Vinegar",
    image: Oils3,
    unit_price: 85.0,
    total_price: 120.5,
  },
  {
    id: 16,
    name: "Mantova Red Wine Vinegar 6/17oz.",
    category: "Oils and Vinegar",
    image: Oils4,
    unit_price: 85.0,
    total_price: 120.5,
  },
  {
    id: 17,
    name: "Mantova Org.Pomergaranate Blasamic Vinegar Pk6/8.5Oz",
    category: "Oils and Vinegar",
    image: Oils5,
    unit_price: 85.0,
    total_price: 120.5,
  },
  {
    id: 18,
    name: "San Pellegrino Cedrata 24/200ml",
    category: "Beverages",
    image: Beverages1,
    unit_price: 85.0,
    total_price: 120.5,
  },
  {
    id: 19,
    name: "Yoga Pear Juice 48/6/4.2oz",
    category: "Beverages",
    image: Beverages2,
    unit_price: 85.0,
    total_price: 120.5,
  },
  {
    id: 20,
    name: "San Pellegrino Cocktail 6/1.25Lt",
    category: "Beverages",
    image: Beverages3,
    unit_price: 85.0,
    total_price: 120.5,
  },
  {
    id: 21,
    name: "Acqua Panna N Water Pet 24/500ml",
    category: "Beverages",
    image: Beverages4,
    unit_price: 85.0,
    total_price: 120.5,
  },
  {
    id: 22,
    name: "San Pellegrino Chinotto 24/200ml",
    category: "Beverages",
    image: Beverages5,
    unit_price: 85.0,
    total_price: 120.5,
  },
  {
    id: 23,
    name: "San Pellegrino Cocktail 24/200ml",
    category: "Beverages",
    image: Beverages6,
    unit_price: 85.0,
    total_price: 120.5,
  },
  {
    id: 24,
    name: "Mantova Org. Fig Basamic Vinegar 6/8.5oz",
    category: "Oils and Vinegar",
    image: Oils6,
    unit_price: 85.0,
    total_price: 120.5,
  },
  {
    id: 25,
    name: "Mantova Pesto Genovese 6/6.5oz",
    category: "Condiments",
    image: Condiments1,
    unit_price: 85.0,
    total_price: 120.5,
  },
  {
    id: 26,
    name: "Nostromo Tuno in Olive Oil 3/20/80g",
    category: "Condiments",
    image: Condiments2,
    unit_price: 85.0,
    total_price: 120.5,
  },
  {
    id: 27,
    name: "Nostromo Tuno in Olive Oil in Glass 6/180g",
    category: "Condiments",
    image: Condiments3,
    unit_price: 85.0,
    total_price: 120.5,
  },
  {
    id: 28,
    name: "Mantova Olive Paste 6/6.5oz",
    category: "Condiments",
    image: Condiments4,
    unit_price: 85.0,
    total_price: 120.5,
  },
  {
    id: 29,
    name: "Star Risotto Funghi 10/175g",
    category: "Condiments",
    image: Condiments5,
    unit_price: 85.0,
    total_price: 120.5,
  },
  {
    id: 30,
    name: "Crispo Confetto Mandorla Bianco 12/1kg",
    category: "Condiments",
    image: Condiments6,
    unit_price: 85.0,
    total_price: 120.5,
  },
  {
    id: 31,
    name: "Divella Lasagina Semola 12/17oz",
    category: "Pastas",
    image: Pastas1,
    unit_price: 85.0,
    total_price: 120.5,
  },
  {
    id: 32,
    name: "Divella Mafaldine 24/500g",
    category: "Pastas",
    image: Pastas2,
    unit_price: 85.0,
    total_price: 120.5,
  },
  {
    id: 33,
    name: "Divella Tripoline 24/500g",
    category: "Pastas",
    image: Pastas3,
    unit_price: 85.0,
    total_price: 120.5,
  },
  {
    id: 34,
    name: "Divella Fusilli Col Buco 20/500g",
    category: "Pastas",
    image: Pastas4,
    unit_price: 85.0,
    total_price: 120.5,
  },
  {
    id: 35,
    name: "Divella Farfallette 24/500g",
    category: "Pastas",
    image: Pastas5,
    unit_price: 85.0,
    total_price: 120.5,
  },
  {
    id: 36,
    name: "Divella Oricchiette 24/500g",
    category: "Pastas",
    image: Pastas6,
    unit_price: 85.0,
    total_price: 120.5,
  },
];

export default all_product;
