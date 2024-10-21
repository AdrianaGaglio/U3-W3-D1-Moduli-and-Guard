import { Injectable } from '@angular/core';
import { iPost } from '../interfaces/ipost';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor() {}

  posts: iPost[] = [
    {
      id: 1,
      name: 'Avventura nelle Dolomiti',
      description:
        'Scopri la bellezza delle Dolomiti con escursioni mozzafiato e panorami indimenticabili.',
      image: 'https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg',
      active: true,
      user: {
        id: 1,
        name: 'Marco Rossi',
      },
    },
    {
      id: 2,
      name: 'Esplorando le spiagge di Bali',
      description:
        'Goditi il sole e le onde cristalline delle spiagge di Bali, un paradiso tropicale.',
      image:
        'https://images.pexels.com/photos/1533723/pexels-photo-1533723.jpeg',
      active: true,
      user: {
        id: 2,
        name: 'Luca Bianchi',
      },
    },
    {
      id: 3,
      name: 'Safari in Africa',
      description:
        "Vivi l'emozione di un safari in Africa e avvista animali selvaggi nel loro habitat naturale.",
      image:
        'https://images.pexels.com/photos/1177959/pexels-photo-1177959.jpeg',
      active: true,
      user: {
        id: 3,
        name: 'Giulia Verdi',
      },
    },
    {
      id: 4,
      name: 'Tour delle città storiche europee',
      description:
        "Visita le affascinanti città storiche d'Europa e immergiti nella cultura e nella storia.",
      image:
        'https://images.pexels.com/photos/3566891/pexels-photo-3566891.jpeg',
      active: false,
      user: {
        id: 1,
        name: 'Marco Rossi',
      },
    },
    {
      id: 5,
      name: 'Viaggio in Islanda',
      description:
        "Esplora i paesaggi ghiacciati dell'Islanda tra cascate, vulcani e geyser.",
      image:
        'https://images.pexels.com/photos/1089934/pexels-photo-1089934.jpeg',
      active: true,
      user: {
        id: 2,
        name: 'Luca Bianchi',
      },
    },
    {
      id: 6,
      name: 'La magia del Giappone',
      description:
        'Vivi la cultura unica del Giappone, tra tradizione e modernità.',
      image:
        'https://images.pexels.com/photos/1933239/pexels-photo-1933239.jpeg',
      active: true,
      user: {
        id: 3,
        name: 'Giulia Verdi',
      },
    },
    {
      id: 7,
      name: 'Avventura in Patagonia',
      description:
        'Parti per una spedizione in Patagonia e scopri la natura selvaggia e incontaminata.',
      image:
        'https://images.pexels.com/photos/1010659/pexels-photo-1010659.jpeg',
      active: false,
      user: {
        id: 4,
        name: 'Alessandro Gallo',
      },
    },
    {
      id: 8,
      name: 'Isole Greche',
      description:
        'Rilassati sulle incantevoli isole greche e goditi il mare cristallino e il cibo delizioso.',
      image:
        'https://images.pexels.com/photos/1641289/pexels-photo-1641289.jpeg',
      active: true,
      user: {
        id: 1,
        name: 'Marco Rossi',
      },
    },
    {
      id: 9,
      name: 'Road trip in California',
      description:
        'Scopri la costa della California con un indimenticabile viaggio on the road.',
      image:
        'https://images.pexels.com/photos/1173777/pexels-photo-1173777.jpeg',
      active: true,
      user: {
        id: 2,
        name: 'Luca Bianchi',
      },
    },
    {
      id: 10,
      name: "Alla scoperta dell'Australia",
      description:
        'Esplora il vasto outback australiano e la vibrante vita urbana di Sydney.',
      image:
        'https://images.pexels.com/photos/2230800/pexels-photo-2230800.jpeg',
      active: false,
      user: {
        id: 3,
        name: 'Giulia Verdi',
      },
    },
    {
      id: 11,
      name: 'Scoperta dei fiordi norvegesi',
      description:
        'Naviga tra i magnifici fiordi norvegesi e goditi panorami mozzafiato.',
      image: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg',
      active: true,
      user: {
        id: 4,
        name: 'Alessandro Gallo',
      },
    },
    {
      id: 12,
      name: 'La bellezza di Santorini',
      description:
        'Scopri la bellezza unica di Santorini con le sue case bianche e il mare blu.',
      image:
        'https://images.pexels.com/photos/2580371/pexels-photo-2580371.jpeg',
      active: true,
      user: {
        id: 1,
        name: 'Marco Rossi',
      },
    },
    {
      id: 13,
      name: 'Escursione nel deserto del Sahara',
      description:
        "Vivi un'esperienza unica nel deserto del Sahara tra dune di sabbia e oasi.",
      image:
        'https://images.pexels.com/photos/1560975/pexels-photo-1560975.jpeg',
      active: true,
      user: {
        id: 2,
        name: 'Luca Bianchi',
      },
    },
    {
      id: 14,
      name: 'Weekend a Parigi',
      description:
        'Trascorri un romantico weekend a Parigi tra arte e cultura.',
      image:
        'https://images.pexels.com/photos/3385099/pexels-photo-3385099.jpeg',
      active: false,
      user: {
        id: 3,
        name: 'Giulia Verdi',
      },
    },
    {
      id: 15,
      name: 'Rovine Maya in Messico',
      description:
        'Esplora le antiche rovine Maya e scopri la storia affascinante del Messico.',
      image:
        'https://images.pexels.com/photos/7034209/pexels-photo-7034209.jpeg',
      active: true,
      user: {
        id: 4,
        name: 'Alessandro Gallo',
      },
    },
    {
      id: 16,
      name: 'Montagne Rocciose in Canada',
      description:
        'Scopri la bellezza delle Montagne Rocciose in Canada tra laghi e foreste.',
      image: 'https://images.pexels.com/photos/673909/pexels-photo-673909.jpeg',
      active: true,
      user: {
        id: 1,
        name: 'Marco Rossi',
      },
    },
    {
      id: 17,
      name: 'Visita ai templi di Angkor Wat',
      description:
        'Scopri i magnifici templi di Angkor Wat e la loro storia millenaria.',
      image: 'https://images.pexels.com/photos/221321/pexels-photo-221321.jpeg',
      active: true,
      user: {
        id: 2,
        name: 'Luca Bianchi',
      },
    },
    {
      id: 18,
      name: 'Crociera nel Mediterraneo',
      description:
        'Goditi una crociera nel Mediterraneo tra isole e coste mozzafiato.',
      image:
        'https://images.pexels.com/photos/3716115/pexels-photo-3716115.jpeg',
      active: false,
      user: {
        id: 3,
        name: 'Giulia Verdi',
      },
    },
    {
      id: 19,
      name: 'Avventura nei parchi nazionali USA',
      description:
        'Esplora i parchi nazionali degli Stati Uniti e scopri la loro straordinaria bellezza.',
      image:
        'https://images.pexels.com/photos/3570845/pexels-photo-3570845.jpeg',
      active: true,
      user: {
        id: 4,
        name: 'Alessandro Gallo',
      },
    },
    {
      id: 20,
      name: 'Tour gastronomico in Italia',
      description:
        'Scopri la cucina italiana con un tour gastronomico tra le regioni più famose.',
      image:
        'https://images.pexels.com/photos/4606710/pexels-photo-4606710.jpeg',
      active: true,
      user: {
        id: 1,
        name: 'Marco Rossi',
      },
    },
    {
      id: 21,
      name: 'Escursione nella foresta pluviale',
      description:
        'Esplora la bellezza della foresta pluviale e la sua fauna unica.',
      image:
        'https://images.pexels.com/photos/1603031/pexels-photo-1603031.jpeg',
      active: true,
      user: {
        id: 2,
        name: 'Luca Bianchi',
      },
    },
    {
      id: 22,
      name: 'Relax a Phuket',
      description:
        'Rilassati sulle spiagge di Phuket e goditi un soggiorno da sogno.',
      image:
        'https://images.pexels.com/photos/1834118/pexels-photo-1834118.jpeg',
      active: false,
      user: {
        id: 3,
        name: 'Giulia Verdi',
      },
    },
    {
      id: 23,
      name: 'Tour della Cappadocia',
      description:
        "Vivi l'emozione di un tour in mongolfiera nella Cappadocia.",
      image:
        'https://images.pexels.com/photos/6793541/pexels-photo-6793541.jpeg',
      active: true,
      user: {
        id: 4,
        name: 'Alessandro Gallo',
      },
    },
    {
      id: 24,
      name: 'Avventura in Nuova Zelanda',
      description:
        'Scopri la bellezza naturale della Nuova Zelanda con paesaggi mozzafiato.',
      image:
        'https://images.pexels.com/photos/1377572/pexels-photo-1377572.jpeg',
      active: true,
      user: {
        id: 1,
        name: 'Marco Rossi',
      },
    },
    {
      id: 25,
      name: 'Viaggio a Machu Picchu',
      description:
        'Esplora le meraviglie di Machu Picchu e la sua storia affascinante.',
      image:
        'https://images.pexels.com/photos/4592184/pexels-photo-4592184.jpeg',
      active: true,
      user: {
        id: 2,
        name: 'Luca Bianchi',
      },
    },
    {
      id: 26,
      name: 'Scoprire il Sudafrica',
      description: 'Scopri le bellezze naturali e la cultura del Sudafrica.',
      image:
        'https://images.pexels.com/photos/1221150/pexels-photo-1221150.jpeg',
      active: false,
      user: {
        id: 3,
        name: 'Giulia Verdi',
      },
    },
    {
      id: 27,
      name: 'Visita ai castelli della Scozia',
      description:
        'Esplora i castelli storici della Scozia e le loro leggende.',
      image:
        'https://images.pexels.com/photos/1146642/pexels-photo-1146642.jpeg',
      active: true,
      user: {
        id: 4,
        name: 'Alessandro Gallo',
      },
    },
    {
      id: 28,
      name: 'Viaggio a New York',
      description: 'Scopri la grande mela e le sue meraviglie.',
      image:
        'https://images.pexels.com/photos/3319892/pexels-photo-3319892.jpeg',
      active: true,
      user: {
        id: 1,
        name: 'Marco Rossi',
      },
    },
    {
      id: 29,
      name: 'Tour in Giordania',
      description: 'Visita Petra e scopri la storia della Giordania.',
      image:
        'https://images.pexels.com/photos/4601559/pexels-photo-4601559.jpeg',
      active: true,
      user: {
        id: 2,
        name: 'Luca Bianchi',
      },
    },
    {
      id: 30,
      name: 'Relax alle Seychelles',
      description:
        'Goditi il paradiso tropicale delle Seychelles con le loro spiagge bianche.',
      image:
        'https://images.pexels.com/photos/2360254/pexels-photo-2360254.jpeg',
      active: false,
      user: {
        id: 3,
        name: 'Giulia Verdi',
      },
    },
    {
      id: 31,
      name: 'Avventure nei Balcani',
      description:
        'Esplora le bellezze dei Balcani e la loro cultura vibrante.',
      image: 'https://images.pexels.com/photos/676777/pexels-photo-676777.jpeg',
      active: true,
      user: {
        id: 4,
        name: 'Alessandro Gallo',
      },
    },
    {
      id: 32,
      name: 'Weekend a Londra',
      description: 'Scopri le meraviglie di Londra in un emozionante weekend.',
      image: 'https://images.pexels.com/photos/674013/pexels-photo-674013.jpeg',
      active: true,
      user: {
        id: 1,
        name: 'Marco Rossi',
      },
    },
    {
      id: 33,
      name: 'Tour delle Highlands',
      description:
        'Esplora le meraviglie delle Highlands scozzesi e le loro leggende.',
      image:
        'https://images.pexels.com/photos/2681711/pexels-photo-2681711.jpeg',
      active: true,
      user: {
        id: 2,
        name: 'Luca Bianchi',
      },
    },
    {
      id: 34,
      name: 'Avventura in Alaska',
      description:
        "Scopri la bellezza selvaggia dell'Alaska tra ghiacciai e fauna selvatica.",
      image:
        'https://images.pexels.com/photos/2202931/pexels-photo-2202931.jpeg',
      active: false,
      user: {
        id: 3,
        name: 'Giulia Verdi',
      },
    },
    {
      id: 35,
      name: 'Visita ai mercati di Marrakech',
      description:
        'Esplora i vivaci mercati di Marrakech e scopri la cultura marocchina.',
      image:
        'https://images.pexels.com/photos/1491424/pexels-photo-1491424.jpeg',
      active: true,
      user: {
        id: 4,
        name: 'Alessandro Gallo',
      },
    },
    {
      id: 36,
      name: 'Avventure in Giamaica',
      description:
        'Rilassati sulle spiagge della Giamaica e scopri la cultura locale.',
      image:
        'https://images.pexels.com/photos/2261669/pexels-photo-2261669.jpeg',
      active: true,
      user: {
        id: 1,
        name: 'Marco Rossi',
      },
    },
    {
      id: 37,
      name: 'Tour della Route 66',
      description: "Vivi l'emozione di percorrere la leggendaria Route 66.",
      image:
        'https://images.pexels.com/photos/1625007/pexels-photo-1625007.jpeg',
      active: true,
      user: {
        id: 2,
        name: 'Luca Bianchi',
      },
    },
    {
      id: 38,
      name: 'Escursione a Machu Picchu',
      description:
        'Fai trekking fino a Machu Picchu e scopri il suo fascino antico.',
      image:
        'https://images.pexels.com/photos/1322443/pexels-photo-1322443.jpeg',
      active: false,
      user: {
        id: 3,
        name: 'Giulia Verdi',
      },
    },
    {
      id: 39,
      name: 'Relax a Costa Rica',
      description:
        'Scopri la biodiversità della Costa Rica e rilassati nelle sue spiagge.',
      image:
        'https://images.pexels.com/photos/1261181/pexels-photo-1261181.jpeg',
      active: true,
      user: {
        id: 4,
        name: 'Alessandro Gallo',
      },
    },
    {
      id: 40,
      name: 'Tour della Transiberiana',
      description:
        'Viaggia lungo la Transiberiana e scopri le meraviglie della Russia.',
      image:
        'https://images.pexels.com/photos/2251980/pexels-photo-2251980.jpeg',
      active: true,
      user: {
        id: 1,
        name: 'Marco Rossi',
      },
    },
    {
      id: 41,
      name: 'Avventure nel Parco Nazionale Yellowstone',
      description:
        'Esplora la natura incontaminata del Parco Nazionale Yellowstone.',
      image:
        'https://images.pexels.com/photos/2747811/pexels-photo-2747811.jpeg',
      active: true,
      user: {
        id: 2,
        name: 'Luca Bianchi',
      },
    },
    {
      id: 42,
      name: 'Visita alle cascate di Iguazu',
      description:
        'Scopri le spettacolari cascate di Iguazu, una delle meraviglie naturali del mondo.',
      image:
        'https://images.pexels.com/photos/1391963/pexels-photo-1391963.jpeg',
      active: false,
      user: {
        id: 3,
        name: 'Giulia Verdi',
      },
    },
  ];

  loggedIn$ = new Subject<boolean>();
}
