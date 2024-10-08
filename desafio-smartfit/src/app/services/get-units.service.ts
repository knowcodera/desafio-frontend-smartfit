import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UnitsResponse } from '../types/units-reponse.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetUnitsService {
  readonly apiUrl = "https://test-frontend-developer.s3.amazonaws.com/data/locations.json";

  constructor(private httpClient: HttpClient) { }

  getAllUnits(): Observable<UnitsResponse> {
    return this.httpClient.get<UnitsResponse>(this.apiUrl);
  }
}








// retorno json - backup
// {
//   "current_country_id": 1,
//   "locations": [
//     {
//       "id": 10998878976097,
//       "title": "Dom Severino",
//       "content": "\n<p>Av. Dom Severino, 1733 &#8211; Fátima<br>Teresina, PI</p>\n",
//       "opened": true,
//       "mask": "required",
//       "towel": "required",
//       "fountain": "partial",
//       "locker_room": "allowed",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "06h às 22h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "Fechada"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "Fechada"
//         }
//       ]
//     },
//     {
//       "id": 10998878976096,
//       "title": "Teresina Shopping",
//       "content": "\n<p>Av. Raul Lopes, 1000 &#8211; Noivos<br>Teresina, PI</p>\n",
//       "opened": true,
//       "mask": "required",
//       "towel": "required",
//       "fountain": "partial",
//       "locker_room": "allowed",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "06h às 22h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "Fechada"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "Fechada"
//         }
//       ]
//     },
//     {
//       "id": 10998878976092,
//       "title": "GV Shopping",
//       "content": "\n<p>Rua Sete de Setembro, 3500 &#8211; Centro<br>Governador Valadares, MG</p>\n",
//       "opened": true,
//       "mask": "recommended",
//       "towel": "required",
//       "fountain": "partial",
//       "locker_room": "allowed",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "06h às 23h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "09h às 18h"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "Fechada"
//         }
//       ]
//     },
//     {
//       "id": 10998878976091,
//       "title": "Avenida Mascote",
//       "content": "\n<p>Av. Mascote, 159 &#8211; Vila Mascote<br>São Paulo, SP</p>\n",
//       "opened": true,
//       "mask": "required",
//       "towel": "recommended",
//       "fountain": "not_allowed",
//       "locker_room": "allowed",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "06h às 10h"
//         },
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "17h às 21h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "09h às 17h"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "Fechada"
//         }
//       ]
//     },
//     {
//       "id": 10998878976090,
//       "title": "Litoral Plaza",
//       "content": "\n<p>Avenida Ayrton Senna da Silva, 1511 &#8211; Tude Bastos (Sítio do Campo)<br>Praia Grande, SP</p>\n",
//       "opened": true,
//       "mask": "required",
//       "towel": "required",
//       "fountain": "not_allowed",
//       "locker_room": "allowed",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "12h às 19h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "12h às 15h"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "Fechada"
//         }
//       ]
//     },
//     {
//       "id": 10998878976089,
//       "title": "Rui Barbosa",
//       "content": "\n<p>Avenida Rui Barbosa, 2727 &#8211; Joaquim Távora<br>Fortaleza, CE</p>\n",
//       "opened": true,
//       "mask": "required",
//       "towel": "required",
//       "fountain": "partial",
//       "locker_room": "closed",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "06h às 22h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "09h às 18h"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "Fechada"
//         }
//       ]
//     },
//     {
//       "id": 10998878976088,
//       "title": "Parnamirim Centro",
//       "content": "\n<p>Avenida Brigadeiro Everaldo Breves, 780 &#8211; Centro<br>Parnamirim, RN</p>\n",
//       "opened": true,
//       "mask": "required",
//       "towel": "required",
//       "fountain": "partial",
//       "locker_room": "allowed",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "06h às 22h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "09h às 18h"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "Fechada"
//         }
//       ]
//     },
//     {
//       "id": 10998878976086,
//       "title": "Cambuí II",
//       "content": "\n<p>Rua Quatorze de Dezembro, 483 &#8211; Centro<br>Campinas, SP</p>\n",
//       "opened": true,
//       "mask": "required",
//       "towel": "recommended",
//       "fountain": "partial",
//       "locker_room": "partial",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "06h às 10h"
//         },
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "17h às 21h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "09h às 17h"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "Fechada"
//         }
//       ]
//     },
//     {
//       "id": 10998878976084,
//       "title": "Parque Shopping Bahia",
//       "content": "\n<p>Avenida Santos Dumont, 4360 &#8211; Centro<br>Lauro de Freitas, BA</p>\n",
//       "opened": true,
//       "mask": "required",
//       "towel": "required",
//       "fountain": "not_allowed",
//       "locker_room": "partial",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "06h às 22h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "08h às 18h"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "Fechada"
//         }
//       ]
//     },
//     {
//       "id": 10998878976083,
//       "title": "Bauru",
//       "content": "\n<p>Av. Getúlio Vargas, 25-16 &#8211; Vila Aviação<br>Bauru, SP</p>\n",
//       "opened": true,
//       "mask": "required",
//       "towel": "required",
//       "fountain": "partial",
//       "locker_room": "partial",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "06h às 12h"
//         },
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "15h às 21h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "09h às 18h"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "10h às 16h"
//         }
//       ]
//     },
//     {
//       "id": 10998878976081,
//       "title": "Limeira",
//       "content": "\n<p>Avenida Campinas, 50 &#8211; Vila Cidade Jardim<br>Limeira, SP</p>\n",
//       "opened": true,
//       "mask": "required",
//       "towel": "required",
//       "fountain": "partial",
//       "locker_room": "partial",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "06h às 10h"
//         },
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "17h às 21h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "09h às 14h"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "Fechada"
//         }
//       ]
//     },
//     {
//       "id": 10998878976079,
//       "title": "Presidente Prudente",
//       "content": "\n<p>Rua Siqueira Campos, 1545 &#8211; Vila Roberto<br>Presidente Prudente, SP</p>\n",
//       "opened": false,
//       "mask": "required",
//       "towel": "required",
//       "fountain": "partial",
//       "locker_room": "allowed",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "Fechada"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "Fechada"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "Fechada"
//         }
//       ]
//     },
//     {
//       "id": 10998878976078,
//       "title": "Frei Aureliano",
//       "content": "\n<p>Rua Frei Aureliano Grottamari, 679 &#8211; Capuchinhos<br>Feira de Santana, BA</p>\n",
//       "opened": true,
//       "mask": "required",
//       "towel": "required",
//       "fountain": "not_allowed",
//       "locker_room": "allowed",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "06h às 22h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "08h às 16h"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "Fechada"
//         }
//       ]
//     },
//     {
//       "id": 10998878976077,
//       "title": "Fraga Maia",
//       "content": "\n<p>Av. Francisco Fraga Maia, 4727 &#8211; Cidade Nova<br>Feira de Santana, BA</p>\n",
//       "opened": true,
//       "mask": "required",
//       "towel": "required",
//       "fountain": "not_allowed",
//       "locker_room": "allowed",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "05h às 22h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "08h às 16h"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "Fechada"
//         }
//       ]
//     },
//     {
//       "id": 10998878976076,
//       "title": "Camaçari",
//       "content": "\n<p>Rodovia BA-535 &#8211; Polo Petroquímico<br>Camaçari, BA</p>\n",
//       "opened": true,
//       "mask": "required",
//       "towel": "required",
//       "fountain": "partial",
//       "locker_room": "partial",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "12h às 20h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "12h às 18h"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "Fechada"
//         }
//       ]
//     },
//     {
//       "id": 10998878976075,
//       "title": "Maracanaú",
//       "content": "\n<p>Avenida Carlos Jereissati, 100 &#8211; Jereissati II<br>Maracanaú, CE</p>\n",
//       "opened": true,
//       "mask": "required",
//       "towel": "required",
//       "fountain": "partial",
//       "locker_room": "closed",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "12h às 22h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "12h às 22h"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "Fechada"
//         }
//       ]
//     },
//     {
//       "id": 10998878976074,
//       "title": "Paulínia",
//       "content": "\n<p>Rua Bolívia, 60 &#8211; Jardim América<br>Paulínia, SP</p>\n",
//       "opened": true,
//       "mask": "required",
//       "towel": "required",
//       "fountain": "partial",
//       "locker_room": "partial",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "06h às 10h"
//         },
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "17h às 21h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "09h às 15h"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "10h às 14h"
//         }
//       ]
//     },
//     {
//       "id": 10998878976073,
//       "title": "Araçatuba",
//       "content": "\n<p>Av. Joaquim Pompeu de Toledo, 601 &#8211; Vila Estádio<br>Araçatuba, SP</p>\n",
//       "opened": true,
//       "mask": "required",
//       "towel": "required",
//       "fountain": "partial",
//       "locker_room": "closed",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "06h às 08h"
//         },
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "17h às 21h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "12h às 18h"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "Fechada"
//         },
//         {
//           "weekdays": "Obs.:",
//           "hour": "Obrigatório o uso de luvas descartáveis."
//         }
//       ]
//     },
//     {
//       "id": 10998878976072,
//       "title": "Jacareí",
//       "content": "\n<p>Av. Sen. Joaquim Miguel M. de Siqueira &#8211; Jardim Pereira do Amparo<br>Jacareí, SP</p>\n",
//       "opened": true,
//       "mask": "required",
//       "towel": "required",
//       "fountain": "partial",
//       "locker_room": "partial",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "06h30 às 08h30"
//         },
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "17h às 21h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "08h às 14h"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "Fechada"
//         }
//       ]
//     },
//     {
//       "id": 10998878976071,
//       "title": "Araras",
//       "content": "\n<p>Av. Dona Renata, 2954 &#8211; Parque Santa Cândida<br>Araras, SP</p>\n",
//       "opened": true,
//       "mask": "required",
//       "towel": "required",
//       "fountain": "partial",
//       "locker_room": "partial",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "06h às 09h"
//         },
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "16h às 21h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "08h às 12h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "13h às 17h"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "Fechada"
//         }
//       ]
//     },
//     {
//       "id": 10998878976070,
//       "title": "Trio",
//       "content": "\n<p>Avenida Presidente Vargas, 1265 &#8211; Jardim São Luiz<br>Ribeirão Preto, SP</p>\n",
//       "opened": true,
//       "mask": "required",
//       "towel": "required",
//       "fountain": "not_allowed",
//       "locker_room": "partial",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "16h às 00h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "09h às 17h"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "Fechada"
//         }
//       ]
//     },
//     {
//       "id": 10998878976069,
//       "title": "Neo",
//       "content": "\n<p>Avenida Maria de Jesus Condeixa, 600 &#8211; &#8211; Jardim Palma Travassos<br>Ribeirão Preto, SP</p>\n",
//       "opened": true,
//       "mask": "required",
//       "towel": "required",
//       "fountain": "not_allowed",
//       "locker_room": "partial",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "06h às 10h"
//         },
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "17h às 21h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "Fechada"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "Fechada"
//         }
//       ]
//     },
//     {
//       "id": 10998878976068,
//       "title": "Shopping Santa Úrsula",
//       "content": "\n<p>Rua São José, 933 &#8211; Centro<br>Ribeirão Preto, SP</p>\n",
//       "opened": true,
//       "mask": "required",
//       "towel": "required",
//       "fountain": "not_allowed",
//       "locker_room": "partial",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "09h às 17h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "Fechada"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "Fechada"
//         }
//       ]
//     },
//     {
//       "id": 10998878976067,
//       "title": "Mogi Guaçu",
//       "content": "\n<p>Av. Mogi Mirim, 210 &#8211; Centro<br>Mogi Guaçu, SP</p>\n",
//       "opened": true,
//       "mask": "required",
//       "towel": "required",
//       "fountain": "partial",
//       "locker_room": "partial",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "13h às 21h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "13h às 18h"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "Fechada"
//         }
//       ]
//     },
//     {
//       "id": 10998878976066,
//       "title": "Jundiaí Shopping",
//       "content": "\n<p>Avenida Nove de Julho, 3333 &#8211; Anhangabaú<br>Jundiaí, SP</p>\n",
//       "opened": true,
//       "mask": "required",
//       "towel": "required",
//       "fountain": "partial",
//       "locker_room": "partial",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "12h às 20h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "12h às 20h"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "Fechada"
//         }
//       ]
//     },
//     {
//       "id": 10998878976065,
//       "title": "Americana",
//       "content": "\n<p>Avenida Brasil, 1955 &#8211; Jardim São Paulo<br>Americana, SP</p>\n",
//       "opened": true,
//       "mask": "required",
//       "towel": "required",
//       "fountain": "partial",
//       "locker_room": "partial",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "06h às 10h"
//         },
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "17h às 21h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "08h às 12h"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "Fechada"
//         }
//       ]
//     },
//     {
//       "id": 10998878976064,
//       "title": "Santa Bárbara D&#8217;Oeste",
//       "content": "\n<p>Rua do Osmio, 975 &#8211; Vila Mollon IV<br>Santa Bárbara d&#8217;Oeste, SP</p>\n",
//       "opened": true,
//       "mask": "required",
//       "towel": "required",
//       "fountain": "partial",
//       "locker_room": "partial",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "06h às 09h"
//         },
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "17h às 20h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "08h às 14h"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "Fechada"
//         }
//       ]
//     },
//     {
//       "id": 10998878976062,
//       "title": "Rio Claro",
//       "content": "\n<p>Rua 14, 289 &#8211; Estádio<br>Rio Claro, SP</p>\n",
//       "opened": true,
//       "mask": "required",
//       "towel": "required",
//       "fountain": "partial",
//       "locker_room": "partial",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "06h às 10h"
//         },
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "17h às 21h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "08h às 16h"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "Fechada"
//         }
//       ]
//     },
//     {
//       "id": 10998878976061,
//       "title": "Av. 31 de Março",
//       "content": "\n<p>Avenida Trinta e Um de Março, 1533 &#8211; Paulicéia<br>Piracicaba, SP</p>\n",
//       "opened": true,
//       "mask": "required",
//       "towel": "required",
//       "fountain": "partial",
//       "locker_room": "partial",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "06h às 10h"
//         },
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "17h às 21h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "08h às 16h"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "Fechada"
//         }
//       ]
//     },
//     {
//       "id": 10998878976060,
//       "title": "Shopping Piracicaba",
//       "content": "",
//       "opened": false,
//       "mask": "required",
//       "towel": "required",
//       "fountain": "partial",
//       "locker_room": "partial",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "12h às 20h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "08h às 16h"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "Fechada"
//         }
//       ]
//     },
//     {
//       "id": 10998878976059,
//       "title": "Marília",
//       "content": "\n<p>Av. Tiradentes, 1048 &#8211; Quadra 2 &#8211; Lote B &#8211; Fragata<br>Marília, SP</p>\n",
//       "opened": false,
//       "mask": "required",
//       "towel": "required",
//       "fountain": "not_allowed",
//       "locker_room": "partial",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "15h às 21h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "10h às 16h"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "Fechada"
//         }
//       ]
//     },
//     {
//       "id": 10998878976058,
//       "title": "Hortolândia",
//       "content": "\n<p>Rua José Camilo de Camargo, 05 &#8211; Loteamento Remanso Campineiro<br>Hortolândia, SP</p>\n",
//       "opened": true,
//       "mask": "required",
//       "towel": "required",
//       "fountain": "partial",
//       "locker_room": "partial",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "06h às 09h"
//         },
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "16h às 21h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "09h às 15h"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "Fechada"
//         }
//       ]
//     },
//     {
//       "id": 10998878976057,
//       "title": "Barão Geraldo",
//       "content": "\n<p>Avenida Santa Isabel, 1030 &#8211; Vila Santa Isabel<br>Campinas, SP</p>\n",
//       "opened": true,
//       "mask": "required",
//       "towel": "required",
//       "fountain": "partial",
//       "locker_room": "partial",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "06h às 10h"
//         },
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "17h às 21h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "09h às 15h"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "10h às 14h"
//         }
//       ]
//     },
//     {
//       "id": 10998878976056,
//       "title": "Sumaré",
//       "content": "\n<p>Praça da República, 148 &#8211; Centro<br>Sumaré, SP</p>\n",
//       "opened": true,
//       "mask": "required",
//       "towel": "required",
//       "fountain": "partial",
//       "locker_room": "partial",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "06h às 10h"
//         },
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "17h às 21h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "09h às 15h"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "10h às 16h"
//         }
//       ]
//     },
//     {
//       "id": 10998878976055,
//       "title": "Taubaté",
//       "content": "\n<p>Avenida Itália, 850 &#8211; Jardim das nações<br>Taubaté, SP</p>\n",
//       "opened": true,
//       "mask": "required",
//       "towel": "required",
//       "fountain": "not_allowed",
//       "locker_room": "partial",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "06h às 09h"
//         },
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "18h às 21h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "09h às 15h"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "Fechada"
//         }
//       ]
//     },
//     {
//       "id": 10998878976054,
//       "title": "Aquarius",
//       "content": "\n<p>Av. Comendador Vicente de Paulo Penido, 251 &#8211; Parque Res. Aquarius<br>São José dos Campos, SP</p>\n",
//       "opened": true,
//       "mask": "required",
//       "towel": "required",
//       "fountain": "partial",
//       "locker_room": "closed",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "14h às 20h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "Fechada"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "Fechada"
//         }
//       ]
//     },
//     {
//       "id": 10998878976053,
//       "title": "Satélite",
//       "content": "\n<p>R. Pedro Tursi, 180 &#8211; Jardim Satélite<br>São José dos Campos, SP</p>\n",
//       "opened": true,
//       "mask": "required",
//       "towel": "required",
//       "fountain": "partial",
//       "locker_room": "closed",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "07h às 13h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "Fechada"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "Fechada"
//         }
//       ]
//     },
//     {
//       "id": 10998878976052,
//       "title": "Parque das Bandeiras",
//       "content": "\n<p>Av. John Boyd Dunlop, 3900 &#8211; Jardim Ipaussurama<br>Campinas, SP</p>\n",
//       "opened": true,
//       "mask": "required",
//       "towel": "recommended",
//       "fountain": "partial",
//       "locker_room": "allowed",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "06h às 10h"
//         },
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "17h às 21h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "09h às 17h"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "Fechada"
//         }
//       ]
//     },
//     {
//       "id": 10998878976051,
//       "title": "Prado Boulevard",
//       "content": "\n<p>Avenida Washington Luís, 2480 &#8211; Vila Marieta<br>Campinas, SP</p>\n",
//       "opened": true,
//       "mask": "required",
//       "towel": "recommended",
//       "fountain": "partial",
//       "locker_room": "partial",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "06h às 10h"
//         },
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "17h às 21h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "09h às 17h"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "Fechada"
//         }
//       ]
//     },
//     {
//       "id": 10998878976050,
//       "title": "Abolição",
//       "content": "\n<p>Rua da Abolição, 2013 &#8211; Ponte Preta<br>Campinas, SP</p>\n",
//       "opened": true,
//       "mask": "required",
//       "towel": "recommended",
//       "fountain": "partial",
//       "locker_room": "partial",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "06h às 10h"
//         },
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "17h às 21h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "09h às 17h"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "Fechada"
//         }
//       ]
//     },
//     {
//       "id": 10998878976049,
//       "title": "Campinas Shopping",
//       "content": "\n<p>Rua Jacy Teixeira Camargo, 940 &#8211; Jardim do Lago<br>Campinas, SP</p>\n",
//       "opened": true,
//       "mask": "required",
//       "towel": "recommended",
//       "fountain": "partial",
//       "locker_room": "partial",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "12h às 20h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "12h às 20h"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "Fechada"
//         }
//       ]
//     },
//     {
//       "id": 10998878976048,
//       "title": "Jorge Krug",
//       "content": "\n<p>Rua Jorge Krug, 177 &#8211; Guanabara<br>Campinas, SP</p>\n",
//       "opened": true,
//       "mask": "required",
//       "towel": "recommended",
//       "fountain": "partial",
//       "locker_room": "partial",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "12h às 20h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "12h às 20h"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "Fechada"
//         }
//       ]
//     },
//     {
//       "id": 10998878976047,
//       "title": "Maxi Shopping",
//       "content": "\n<p>Av. Antônio Frederico Ozanan, 6000 &#8211; Jardim Liberdade<br>Jundiaí, SP</p>\n",
//       "opened": true,
//       "mask": "recommended",
//       "towel": "recommended",
//       "fountain": "partial",
//       "locker_room": "partial",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "12h às 20h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "12h às 18h"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "Fechada"
//         }
//       ]
//     },
//     {
//       "id": 10998878976046,
//       "title": "Rua Quinze de Novembro",
//       "content": "\n<p>Rua Quinze de Novembro, 1.000 &#8211; Centro<br>Jundiaí, SP</p>\n",
//       "opened": true,
//       "mask": "recommended",
//       "towel": "recommended",
//       "fountain": "partial",
//       "locker_room": "partial",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "06h às 10h"
//         },
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "17h às 21h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "09h às 17h"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "Fechada"
//         }
//       ]
//     },
//     {
//       "id": 10998878976045,
//       "title": "Center Vale",
//       "content": "\n<p>Av. Deputado Benedito Matarazzo, 9403 &#8211; Jardim Oswaldo Cruz<br>São José dos Campos, SP</p>\n",
//       "opened": true,
//       "mask": "required",
//       "towel": "recommended",
//       "fountain": "partial",
//       "locker_room": "partial",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "14h às 20h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "Fechada"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "Fechada"
//         }
//       ]
//     },
//     {
//       "id": 10998878976044,
//       "title": "Campolim",
//       "content": "\n<p>Avenida Antônio Carlos Comitre, 2051 &#8211; Parque Campolim<br>Sorocaba, SP</p>\n",
//       "opened": true,
//       "mask": "required",
//       "towel": "recommended",
//       "fountain": "partial",
//       "locker_room": "partial",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "06h às 10h"
//         },
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "17h às 21h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "09h às 17h"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "Fechada"
//         }
//       ]
//     },
//     {
//       "id": 10998878976043,
//       "title": "Pereira Inácio",
//       "content": "\n<p>Avenida Comendador Pereira Inácio, 820 &#8211; Jardim Vergueiro<br>Sorocaba, SP</p>\n",
//       "opened": true,
//       "mask": "required",
//       "towel": "recommended",
//       "fountain": "partial",
//       "locker_room": "partial",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "06h às 10h"
//         },
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "17h às 21h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "09h às 17h"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "Fechada"
//         }
//       ]
//     },
//     {
//       "id": 10998878976042,
//       "title": "Shopping Cidade Sorocaba",
//       "content": "\n<p>Av. Itavuvu, 3365 &#8211; Jardim Santa Cecília<br>Sorocaba, SP</p>\n",
//       "opened": true,
//       "mask": "required",
//       "towel": "recommended",
//       "fountain": "partial",
//       "locker_room": "partial",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "12h às 20h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "09h às 17h"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "Fechada"
//         }
//       ]
//     },
//     {
//       "id": 10998878976041,
//       "title": "Pátio Cianê",
//       "content": "\n<p>Av. Doutor Afonso Vergueiro, 823 &#8211; Centro<br>Sorocaba, SP</p>\n",
//       "opened": true,
//       "mask": "required",
//       "towel": "recommended",
//       "fountain": "partial",
//       "locker_room": "partial",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "12h às 20h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "09h às 17h"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "Fechada"
//         }
//       ]
//     },
//     {
//       "id": 10998878976039,
//       "title": "Indaiatuba",
//       "content": "\n<p>Rua das Primaveras, 1050 &#8211; Jardim Pompéia<br>Indaiatuba, SP</p>\n",
//       "opened": true,
//       "mask": "required",
//       "towel": "required",
//       "fountain": "partial",
//       "locker_room": "allowed",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "06h30 às 08h30"
//         },
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "14h às 20h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "09h às 15h"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "Fechada"
//         }
//       ]
//     },
//     {
//       "id": 10998878976038,
//       "title": "Matatu",
//       "content": "\n<p>Rua Barros Falcão, 453 &#8211; Matatu<br>Salvador, BA</p>\n",
//       "opened": true,
//       "mask": "required",
//       "towel": "recommended",
//       "fountain": "not_allowed",
//       "locker_room": "partial",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "06h às 22h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "08h às 18h"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "Fechada"
//         }
//       ]
//     },
//     {
//       "id": 10998878976037,
//       "title": "Graça",
//       "content": "\n<p>Rua Oito de Dezembro, 525 &#8211; Graça<br>Salvador, BA</p>\n",
//       "opened": true,
//       "mask": "required",
//       "towel": "recommended",
//       "fountain": "not_allowed",
//       "locker_room": "partial",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "06h às 22h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "08h às 18h"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "Fechada"
//         }
//       ]
//     },
//     {
//       "id": 10998878976036,
//       "title": "Shopping Piedade",
//       "content": "\n<p>Rua Conselheiro Junqueira Ayres, 165 &#8211; Barris<br>Salvador, BA</p>\n",
//       "opened": true,
//       "mask": "required",
//       "towel": "recommended",
//       "fountain": "not_allowed",
//       "locker_room": "partial",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "08h às 20h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "08h às 18h"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "Fechada"
//         }
//       ]
//     },
//     {
//       "id": 10998878976035,
//       "title": "Salvador Norte Shopping",
//       "content": "\n<p>Rodovia BA-305 &#8211; São Cristóvão<br>Salvador, BA</p>\n",
//       "opened": false,
//       "mask": "required",
//       "towel": "recommended",
//       "fountain": "not_allowed",
//       "locker_room": "partial",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "12h às 20h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "12h às 20h"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "Fechada"
//         }
//       ]
//     },
//     {
//       "id": 10998878976034,
//       "title": "Itaigara",
//       "content": "\n<p>R. Wanderley Pinho, 527 &#8211; Itaigara<br>Salvador, BA</p>\n",
//       "opened": true,
//       "mask": "required",
//       "towel": "recommended",
//       "fountain": "not_allowed",
//       "locker_room": "partial",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "06h às 22h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "08h às 18h"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "Fechada"
//         }
//       ]
//     },
//     {
//       "id": 10998878976033,
//       "title": "Avenida Jorge Amado",
//       "content": "\n<p>Avenida Jorge Amado, 1834 &#8211; Imbuí<br>Salvador, BA</p>\n",
//       "opened": true,
//       "mask": "required",
//       "towel": "recommended",
//       "fountain": "not_allowed",
//       "locker_room": "partial",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "06h às 22h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "08h às 18h"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "Fechada"
//         }
//       ]
//     },
//     {
//       "id": 10998878976032,
//       "title": "Imbuí I",
//       "content": "\n<p>Rua dos Colibris, 337 &#8211; Imbuí<br>Salvador, BA</p>\n",
//       "opened": true,
//       "mask": "required",
//       "towel": "recommended",
//       "fountain": "not_allowed",
//       "locker_room": "partial",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "06h às 22h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "08h às 18h"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "Fechada"
//         }
//       ]
//     },
//     {
//       "id": 10998878976031,
//       "title": "Costa Azul",
//       "content": "\n<p>R. Prof. Lourival Pimenta Bastos, 368 &#8211; Costa Azul<br>Salvador, BA</p>\n",
//       "opened": true,
//       "mask": "required",
//       "towel": "recommended",
//       "fountain": "not_allowed",
//       "locker_room": "partial",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "06h às 22h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "08h às 18h"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "Fechada"
//         }
//       ]
//     },
//     {
//       "id": 10998878976030,
//       "title": "Caminho das Árvores",
//       "content": "\n<p>Alameda das Espatódeas, 138 &#8211; Caminho das Árvores<br>Salvador, BA</p>\n",
//       "opened": true,
//       "mask": "required",
//       "towel": "recommended",
//       "fountain": "not_allowed",
//       "locker_room": "partial",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "06h às 22h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "08h às 18h"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "Fechada"
//         }
//       ]
//     },
//     {
//       "id": 10998878976029,
//       "title": "Cabula",
//       "content": "\n<p>Rua Silveira Martins, 165 &#8211; Cabula<br>Salvador, BA</p>\n",
//       "opened": true,
//       "mask": "required",
//       "towel": "recommended",
//       "fountain": "not_allowed",
//       "locker_room": "partial",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "06h às 22h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "08h às 18h"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "Fechada"
//         }
//       ]
//     },
//     {
//       "id": 10998878976028,
//       "title": "Campos dos Goytacazes",
//       "content": "\n<p>Rua Barão de Miracema, 287 &#8211; Centro<br>Campos dos Goytacazes, RJ</p>\n",
//       "opened": true,
//       "mask": "required",
//       "towel": "required",
//       "fountain": "partial",
//       "locker_room": "closed",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "06h às 22h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "09h às 18h"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "Fechada"
//         }
//       ]
//     },
//     {
//       "id": 10998878976023,
//       "title": "Búzios",
//       "content": "\n<p>Rua das Pedras, 73 &#8211; Dantas<br>Armação dos Búzios, RJ</p>\n",
//       "opened": true,
//       "mask": "required",
//       "towel": "required",
//       "fountain": "partial",
//       "locker_room": "allowed",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "09h às 21h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "09h às 18h"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "Fechada"
//         }
//       ]
//     },
//     {
//       "id": 10998878976022,
//       "title": "Itabuna",
//       "content": "\n<p>Avenida Aziz Maron, s/n &#8211; Jardim Vitória<br>Itabuna, BA</p>\n",
//       "opened": true,
//       "mask": "required",
//       "towel": "required",
//       "fountain": "partial",
//       "locker_room": "allowed",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "05h às 19h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "Fechada"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "Fechada"
//         }
//       ]
//     },
//     {
//       "id": 10998878976021,
//       "title": "Volta Redonda",
//       "content": "\n<p>Av. Amaral Peixoto, 555 &#8211; Centro<br>Volta Redonda, RJ</p>\n",
//       "opened": true,
//       "mask": "required",
//       "towel": "required",
//       "fountain": "partial",
//       "locker_room": "allowed",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "06h às 22h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "09h às 18h"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "Fechada"
//         }
//       ]
//     },
//     {
//       "id": 10998878976019,
//       "title": "Caruaru",
//       "content": "\n<p>Rua Adjar da Silva Casé, 800 &#8211; Indianópolis<br>Caruaru, PE</p>\n",
//       "opened": true,
//       "mask": "required",
//       "towel": "required",
//       "fountain": "not_allowed",
//       "locker_room": "allowed",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "06h às 22h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "08h às 18h"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "Fechada"
//         }
//       ]
//     },
//     {
//       "id": 10998878976013,
//       "title": "Mossoró",
//       "content": "\n<p> Rua João da Escóssia, 1102 &#8211; Nova Betânia<br>Mossoró, RN </p>\n",
//       "opened": true,
//       "mask": "required",
//       "towel": "required",
//       "fountain": "partial",
//       "locker_room": "allowed",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "06h às 22h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "09h às 18h"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "Fechada"
//         }
//       ]
//     },
//     {
//       "id": 10998878976012,
//       "title": "Ville Roy",
//       "content": "\n<p>Avenida Ville Roy, 1544 (Dentro do Roraima Garden Shopping) &#8211; Caçari<br>Boa Vista, RR</p>\n",
//       "opened": true,
//       "mask": "required",
//       "towel": "required",
//       "fountain": "partial",
//       "locker_room": "allowed",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "06h às 22h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "09h às 18h"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "Fechada"
//         }
//       ]
//     },
//     {
//       "id": 10998878976011,
//       "title": "João Alencar",
//       "content": "\n<p>Av. Joao Alencar, 2181 &#8211; Cauamé<br>Boa Vista, RR</p>\n",
//       "opened": true,
//       "mask": "required",
//       "towel": "required",
//       "fountain": "partial",
//       "locker_room": "allowed",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "06h às 22h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "09h às 18h"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "Fechada"
//         }
//       ]
//     },
//     {
//       "id": 10998878976010,
//       "title": "Tirol",
//       "content": "\n<p>Avenida Prudente Morais, 777 &#8211; Tirol<br>Natal, RN</p>\n",
//       "opened": true,
//       "mask": "required",
//       "towel": "required",
//       "fountain": "partial",
//       "locker_room": "allowed",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "06h às 22h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "09h às 18h"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "Fechada"
//         }
//       ]
//     },
//     {
//       "id": 10998878976009,
//       "title": "Avenida Roberto Freire",
//       "content": "\n<p>Avenida Engenheiro Roberto Freire, 2020 &#8211; Capim Macio<br>Natal, RN</p>\n",
//       "opened": true,
//       "mask": "required",
//       "towel": "required",
//       "fountain": "partial",
//       "locker_room": "allowed",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "06h às 22h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "09h às 18h"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "Fechada"
//         }
//       ]
//     },
//     {
//       "id": 10998878976008,
//       "title": "Partage Norte Shopping Natal",
//       "content": "\n<p>Av. Dr. João Medeiros Filho &#8211; Potengi<br>Natal, RN</p>\n",
//       "opened": true,
//       "mask": "required",
//       "towel": "required",
//       "fountain": "partial",
//       "locker_room": "allowed",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "06h às 22h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "09h às 18h"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "Fechada"
//         }
//       ]
//     },
//     {
//       "id": 10998878976007,
//       "title": "Midway",
//       "content": "\n<p>Avenida Bernardo Vieira, 3775 &#8211; Tirol<br>Natal, RN</p>\n",
//       "opened": true,
//       "mask": "required",
//       "towel": "required",
//       "fountain": "partial",
//       "locker_room": "allowed",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "06h às 22h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "09h às 18h"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "Fechada"
//         }
//       ]
//     },
//     {
//       "id": 10998878976006,
//       "title": "Shopping Grande Rio",
//       "content": "\n<p>Rua Maria Soares Sendas, 111 &#8211; Parque Barreto<br>São João de Meriti, RJ</p>\n",
//       "opened": true,
//       "mask": "required",
//       "towel": "required",
//       "fountain": "partial",
//       "locker_room": "allowed",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "06h às 22h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "09h às 18h"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "Fechada"
//         }
//       ]
//     },
//     {
//       "id": 10998878976005,
//       "title": "Vilar dos Teles",
//       "content": "\n<p>Av. Automóvel Clube, 2487 &#8211; Vilar dos Teles<br>São João de Meriti, RJ</p>\n",
//       "opened": true,
//       "mask": "required",
//       "towel": "required",
//       "fountain": "partial",
//       "locker_room": "allowed",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "06h às 22h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "09h às 18h"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "Fechada"
//         }
//       ]
//     },
//     {
//       "id": 10998878976004,
//       "title": "Maceió Shopping",
//       "content": "\n<p> Av. Comendador Gustavo Paiva, 2990 &#8211; Mangabeiras<br>Maceió, AL </p>\n",
//       "opened": true,
//       "mask": "recommended",
//       "towel": "recommended",
//       "fountain": "partial",
//       "locker_room": "closed",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "06h às 22h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "09h às 18h"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "Fechada"
//         }
//       ]
//     },
//     {
//       "id": 10998878976003,
//       "title": "Palato",
//       "content": "\n<p>Avenida Fernandes Lima, 548 &#8211; Farol<br>Maceió, AL</p>\n",
//       "opened": true,
//       "mask": "recommended",
//       "towel": "recommended",
//       "fountain": "partial",
//       "locker_room": "closed",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "06h às 22h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "09h às 18h"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "Fechada"
//         }
//       ]
//     },
//     {
//       "id": 10998878976002,
//       "title": "Pátio Maceió",
//       "content": "\n<p>Avenida Menino Marcelo, 3800 &#8211; Cidade Universitária<br>Maceió, AL</p>\n",
//       "opened": true,
//       "mask": "recommended",
//       "towel": "recommended",
//       "fountain": "partial",
//       "locker_room": "closed",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "06h às 22h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "09h às 18h"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "Fechada"
//         }
//       ]
//     },
//     {
//       "id": 10998878976998,
//       "title": "Candelária",
//       "content": "\n<p>Rodovia BR-101, S/N &#8211; km 2 &#8211; Candelária<br>Natal, RN</p>\n",
//       "opened": true,
//       "mask": "required",
//       "towel": "required",
//       "fountain": "partial",
//       "locker_room": "allowed",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "09h às 17h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "09h às 18h"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "Fechada"
//         }
//       ]
//     },
//     {
//       "id": 10998878976995,
//       "title": "Largo do Taboão",
//       "content": "\n<p>Pça. Nicola Vivilechio, 103 &#8211; Jardim Bom Tempo<br>Taboão da Serra, SP</p>\n",
//       "opened": true,
//       "mask": "required",
//       "towel": "recommended",
//       "fountain": "not_allowed",
//       "locker_room": "allowed",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "06h às 10h"
//         },
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "17h às 21h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "09h às 17h"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "Fechada"
//         }
//       ]
//     },
//     {
//       "id": 10998878976994,
//       "title": "Taboão da Serra",
//       "content": "\n<p>Rodovia Régis Bittencourt, km 271,5 &#8211;<br>Taboão da Serra, SP</p>\n",
//       "opened": true,
//       "mask": "required",
//       "towel": "recommended",
//       "fountain": "not_allowed",
//       "locker_room": "allowed",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "06h às 10h"
//         },
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "17h às 21h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "09h às 17h"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "Fechada"
//         }
//       ]
//     },
//     {
//       "id": 10998878976993,
//       "title": "Manaíra Shopping",
//       "content": "\n<p>Av. Governador Flávio Ribeiro Coutinho, 805 &#8211; Manaíra Shopping &#8211; 3º andar<br>João Pessoa, PB</p>\n",
//       "opened": true,
//       "mask": "required",
//       "towel": "required",
//       "fountain": "partial",
//       "locker_room": "closed",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "06h às 22h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "09h às 15h"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "Fechada"
//         }
//       ]
//     },
//     {
//       "id": 10998878976992,
//       "title": "São Carlos",
//       "content": "\n<p>Av. Francisco Pereira Lopes, 1701 &#8211; Jardim Bandeirantes<br>São Carlos, SP</p>\n",
//       "opened": true,
//       "mask": "required",
//       "towel": "required",
//       "fountain": "partial",
//       "locker_room": "closed",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "06h30 às 09h30"
//         },
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "16h às 21h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "09h às 15h"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "09h às 15h"
//         }
//       ]
//     },
//     {
//       "id": 10998878976991,
//       "title": "Jardim das Américas",
//       "content": "\n<p>Av. Tancredo de Almeida Neves, 165 &#8211; Tancredo Neves<br>Cuiabá, MT</p>\n",
//       "opened": true,
//       "mask": "required",
//       "towel": "required",
//       "fountain": "partial",
//       "locker_room": "allowed",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "06h às 12h"
//         },
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "16h às 21h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "09h às 18h"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "Fechada"
//         }
//       ]
//     },
//     {
//       "id": 10998878976990,
//       "title": "Rubens de Mendonça",
//       "content": "\n<p>Av. Historiador Rubens de Mendonça, 42/43 &#8211; Alvorada<br>Cuiabá, MT</p>\n",
//       "opened": true,
//       "mask": "required",
//       "towel": "required",
//       "fountain": "partial",
//       "locker_room": "allowed",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "06h às 12h"
//         },
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "16h às 21h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "09h às 18h"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "Fechada"
//         }
//       ]
//     },
//     {
//       "id": 10998878976988,
//       "title": "Goiabeiras",
//       "content": "\n<p>Avenida Senador Filinto Müller, 28 &#8211; Goiabeiras<br>Cuiabá, MT</p>\n",
//       "opened": true,
//       "mask": "required",
//       "towel": "required",
//       "fountain": "partial",
//       "locker_room": "allowed",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "06h às 12h"
//         },
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "16h às 21h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "09h às 18h"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "Fechada"
//         }
//       ]
//     },
//     {
//       "id": 10998878976986,
//       "title": "Parangaba",
//       "content": "\n<p>Avenida Doutor Silas Munguba, 643 &#8211; Parangaba<br>Fortaleza, CE</p>\n",
//       "opened": true,
//       "mask": "required",
//       "towel": "required",
//       "fountain": "partial",
//       "locker_room": "closed",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "06h às 22h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "09h às 18h"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "Fechada"
//         }
//       ]
//     },
//     {
//       "id": 10998878976985,
//       "title": "Messejana",
//       "content": "\n<p>Rua Manuel Castelo Branco, 352 &#8211; Messejana<br>Fortaleza, CE</p>\n",
//       "opened": true,
//       "mask": "required",
//       "towel": "required",
//       "fountain": "partial",
//       "locker_room": "closed",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "06h às 22h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "09h às 18h"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "Fechada"
//         }
//       ]
//     },
//     {
//       "id": 10998878976983,
//       "title": "Dom Lustosa",
//       "content": "\n<p>Rua Coronel Matos Dourado, 1280 &#8211; Dom Lustosa<br>Fortaleza, CE</p>\n",
//       "opened": true,
//       "mask": "required",
//       "towel": "required",
//       "fountain": "partial",
//       "locker_room": "closed",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "06h às 22h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "09h às 18h"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "Fechada"
//         }
//       ]
//     },
//     {
//       "id": 10998878976981,
//       "title": "Vila Peri",
//       "content": "\n<p>Rua Waldir Diogo, 1138 &#8211; Manuel Sátiro<br>Fortaleza, CE</p>\n",
//       "opened": true,
//       "mask": "required",
//       "towel": "required",
//       "fountain": "partial",
//       "locker_room": "closed",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "06h às 22h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "09h às 18h"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "Fechada"
//         }
//       ]
//     },
//     {
//       "id": 10998878976980,
//       "title": "Via Sul Shopping",
//       "content": "\n<p>Av. Washington Soares, 4335 &#8211; Edson Queiroz<br>Fortaleza, CE</p>\n",
//       "opened": true,
//       "mask": "required",
//       "towel": "required",
//       "fountain": "partial",
//       "locker_room": "closed",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "06h às 22h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "09h às 18h"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "Fechada"
//         }
//       ]
//     },
//     {
//       "id": 10998878976979,
//       "title": "Cocó",
//       "content": "\n<p>Rua Doutor Gilberto Studart, 155 &#8211; Cocó<br>Fortaleza, CE</p>\n",
//       "opened": true,
//       "mask": "required",
//       "towel": "required",
//       "fountain": "partial",
//       "locker_room": "closed",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "06h às 22h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "09h às 18h"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "Fechada"
//         }
//       ]
//     },
//     {
//       "id": 10998878976978,
//       "title": "Barbosa de Freitas",
//       "content": "\n<p>Av. Santos Dumont, 3060 (loja 12 a 20) &#8211; Aldeota<br>Fortaleza, CE</p>\n",
//       "opened": true,
//       "mask": "required",
//       "towel": "required",
//       "fountain": "partial",
//       "locker_room": "closed",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "06h às 22h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "09h às 18h"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "Fechada"
//         }
//       ]
//     },
//     {
//       "id": 10998878976977,
//       "title": "Barão de Studart",
//       "content": "\n<p>Av. Barão de Studart, 2200 &#8211; Joaquim Távora<br>Fortaleza, CE</p>\n",
//       "opened": true,
//       "mask": "required",
//       "towel": "required",
//       "fountain": "partial",
//       "locker_room": "closed",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "09h às 17h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "09h às 17h"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "Fechada"
//         }
//       ]
//     },
//     {
//       "id": 10998878976976,
//       "title": "Washington Soares",
//       "content": "\n<p>Av. Washington Soares, 1550 &#8211; Edson Queiroz<br>Fortaleza, CE</p>\n",
//       "opened": true,
//       "mask": "required",
//       "towel": "required",
//       "fountain": "partial",
//       "locker_room": "closed",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "06h às 22h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "09h às 18h"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "Fechada"
//         }
//       ]
//     },
//     {
//       "id": 10998878976975,
//       "title": "Vicente Linhares",
//       "content": "\n<p>Rua Tibúrcio Cavalcante, 1885 &#8211; Meireles<br>Fortaleza, CE</p>\n",
//       "opened": true,
//       "mask": "required",
//       "towel": "required",
//       "fountain": "partial",
//       "locker_room": "closed",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "06h às 22h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "09h às 18h"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "Fechada"
//         }
//       ]
//     },
//     {
//       "id": 10998878976974,
//       "title": "Papicu",
//       "content": "\n<p>Av. Eng. Santana Jr., 699 &#8211; Papicu<br>Fortaleza, CE</p>\n",
//       "opened": true,
//       "mask": "required",
//       "towel": "required",
//       "fountain": "partial",
//       "locker_room": "closed",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "06h às 22h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "09h às 18h"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "Fechada"
//         }
//       ]
//     },
//     {
//       "id": 10998878976973,
//       "title": "North Shopping",
//       "content": "\n<p>Avenida Bezerra de Menezes, 2450 &#8211; São Gerardo<br>Fortaleza, CE</p>\n",
//       "opened": true,
//       "mask": "required",
//       "towel": "required",
//       "fountain": "partial",
//       "locker_room": "closed",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "11h às 22h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "11h às 20h"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "Fechada"
//         }
//       ]
//     },
//     {
//       "id": 10998878976972,
//       "title": "Riomar Kennedy",
//       "content": "\n<p>Avenida Sargento Hermínio Sampaio 3.100 &#8211; Presidente Kennedy<br>Fortaleza, CE</p>\n",
//       "opened": true,
//       "mask": "required",
//       "towel": "required",
//       "fountain": "partial",
//       "locker_room": "closed",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "06h às 22h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "09h às 18h"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "Fechada"
//         }
//       ]
//     },
//     {
//       "id": 10998878976971,
//       "title": "Montese",
//       "content": "\n<p>Avenida dos Expedicionários, 4444 &#8211; Benfica<br>Fortaleza, CE</p>\n",
//       "opened": true,
//       "mask": "required",
//       "towel": "required",
//       "fountain": "partial",
//       "locker_room": "closed",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "06h às 22h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "09h às 18h"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "Fechada"
//         }
//       ]
//     },
//     {
//       "id": 10998878976970,
//       "title": "Meireles",
//       "content": "\n<p>Avenida Senador Virgílio Távora, 303 &#8211; Meireles<br>Fortaleza, CE</p>\n",
//       "opened": true,
//       "mask": "required",
//       "towel": "required",
//       "fountain": "partial",
//       "locker_room": "closed",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "06h às 22h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "09h às 18h"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "Fechada"
//         }
//       ]
//     },
//     {
//       "id": 10998878976969,
//       "title": "Oliveira Paiva",
//       "content": "\n<p>Avenida Oliveira Paiva, 1350 &#8211; Cidade dos Funcionários<br>Fortaleza, CE</p>\n",
//       "opened": true,
//       "mask": "required",
//       "towel": "required",
//       "fountain": "partial",
//       "locker_room": "closed",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "06h às 22h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "09h às 18h"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "Fechada"
//         }
//       ]
//     },
//     {
//       "id": 10998878976968,
//       "title": "North Shopping Jóquei",
//       "content": "\n<p>Avenida Lineu Machado, 419 &#8211; Jóquei Clube<br>Fortaleza, CE</p>\n",
//       "opened": true,
//       "mask": "required",
//       "towel": "required",
//       "fountain": "partial",
//       "locker_room": "closed",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "11h às 22h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "11h às 20h"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "Fechada"
//         }
//       ]
//     },
//     {
//       "id": 10998878976967,
//       "title": "Iracema",
//       "content": "\n<p>Rua Carlos Vasconcelos, 284 &#8211; Meireles<br>Fortaleza, CE</p>\n",
//       "opened": true,
//       "mask": "required",
//       "towel": "required",
//       "fountain": "partial",
//       "locker_room": "closed",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "06h às 22h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "09h às 18h"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "Fechada"
//         }
//       ]
//     },
//     {
//       "id": 10998878976966,
//       "title": "Cariacica",
//       "content": "\n<p>Avenida Expedito Garcia, 281 &#8211; Campo Grande<br>Cariacica, ES</p>\n",
//       "opened": true,
//       "mask": "required",
//       "towel": "required",
//       "fountain": "partial",
//       "locker_room": "allowed",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "06h às 22h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "09h às 18h"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "Fechada"
//         }
//       ]
//     },
//     {
//       "id": 10998878976962,
//       "title": "Praia do Canto II",
//       "content": "\n<p>Rua Joaquim Lírio, 455 &#8211; Praia do Canto<br>Vitória, ES</p>\n",
//       "opened": true,
//       "mask": "required",
//       "towel": "required",
//       "fountain": "partial",
//       "locker_room": "allowed",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "06h às 22h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "09h às 18h"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "Fechada"
//         }
//       ]
//     },
//     {
//       "id": 10998878976961,
//       "title": "Praia do Canto I",
//       "content": "\n<p>Rua Joaquim Lírio, 455 &#8211; Praia do Canto<br>Vitória, ES</p>\n",
//       "opened": true,
//       "mask": "required",
//       "towel": "required",
//       "fountain": "partial",
//       "locker_room": "allowed",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "06h às 22h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "09h às 18h"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "Fechada"
//         }
//       ]
//     },
//     {
//       "id": 10998878976960,
//       "title": "Reta da Penha",
//       "content": "\n<p>Reta da Penha, 2150 &#8211; Barro Vermelho<br>Vitória, ES</p>\n",
//       "opened": true,
//       "mask": "required",
//       "towel": "required",
//       "fountain": "partial",
//       "locker_room": "allowed",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "06h às 22h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "09h às 18h"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "Fechada"
//         }
//       ]
//     },
//     {
//       "id": 10998878976959,
//       "title": "Serra",
//       "content": "\n<p>Avenida BNH, 57 &#8211; Parque Residencial Laranjeiras<br>Serra, ES</p>\n",
//       "opened": true,
//       "mask": "required",
//       "towel": "required",
//       "fountain": "partial",
//       "locker_room": "allowed",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "06h às 22h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "09h às 18h"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "Fechada"
//         }
//       ]
//     },
//     {
//       "id": 10998878976958,
//       "title": "Shopping Vila Velha",
//       "content": "\n<p>Av. Luciano das Neves 2418 &#8211;<br>Vila Velha, ES</p>\n",
//       "opened": true,
//       "mask": "required",
//       "towel": "required",
//       "fountain": "partial",
//       "locker_room": "allowed",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "06h às 22h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "09h às 18h"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "Fechada"
//         }
//       ]
//     },
//     {
//       "id": 10998878976957,
//       "title": "Centro Vila Velha",
//       "content": "\n<p>Rua Quinze de Novembro, 1123 &#8211; Centro<br>Vila Velha, ES</p>\n",
//       "opened": true,
//       "mask": "required",
//       "towel": "required",
//       "fountain": "partial",
//       "locker_room": "allowed",
//       "schedules": [
//         {
//           "weekdays": "Seg. às Sex.",
//           "hour": "06h às 22h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "09h às 18h"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "Fechada"
//         }
//       ]
//     },
//     {
//       "id": 10998878976956,
//       "title": "Buriti Shopping",
//       "content": "\n<p>Avenida Rio Verde, s/n &#8211; Jardim Nova Era<br>Aparecida de Goiânia, GO</p>\n",
//       "opened": true,
//       "mask": "required",
//       "towel": "required",
//       "fountain": "partial",
//       "locker_room": "closed",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "07h às 22h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "08h às 18h"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "Fechada"
//         }
//       ]
//     },
//     {
//       "id": 10998878976953,
//       "title": "Macapá",
//       "content": "\n<p>Rua Leopoldo Machado, 2334 &#8211; Central<br>Macapá, AP</p>\n",
//       "opened": true,
//       "mask": "required",
//       "towel": "required",
//       "fountain": "partial",
//       "locker_room": "closed",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "06h às 12h"
//         },
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "15h às 21h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "09h às 18h"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "Fechada"
//         }
//       ]
//     },
//     {
//       "id": 10998878976952,
//       "title": "Presidente Costa e Silva",
//       "content": "\n<p><p>Av. Presidente costa e Silva, 808 &#8211; Boqueirão<br>Praia Grande, SP</p>\n<span><strong>Obs.:</strong> *Unidade fechará de 1h em 1h para limpeza.</span></p>\n",
//       "opened": true,
//       "mask": "required",
//       "towel": "required",
//       "fountain": "not_allowed",
//       "locker_room": "allowed",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "06h às 09h"
//         },
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "15h às 22h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "09h às 16h"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "Fechada"
//         },
//         {
//           "weekdays": "Obs.:",
//           "hour": "*Unidade fechará de 1h em 1h para limpeza."
//         }
//       ]
//     },
//     {
//       "id": 10998878976949,
//       "title": "Suzano",
//       "content": "\n<p>Rua Sete de Setembro, 555 &#8211; Cidade Cruzeiro do Sul<br>Suzano, SP</p>\n",
//       "opened": true,
//       "mask": "required",
//       "towel": "recommended",
//       "fountain": "partial",
//       "locker_room": "closed",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "07h às 12h"
//         },
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "17h às 22h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "12h às 18h"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "12h às 16h"
//         }
//       ]
//     },
//     {
//       "id": 10998878976948,
//       "title": "Moreira César",
//       "content": "\n<p>Rua Coronel Moreira César, 26 &#8211; Icaraí<br>Niterói, RJ</p>\n",
//       "opened": true,
//       "mask": "required",
//       "towel": "required",
//       "fountain": "partial",
//       "locker_room": "partial",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "06h às 21h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "07h às 14h"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "Fechada"
//         }
//       ]
//     },
//     {
//       "id": 10998878976947,
//       "title": "Ingá",
//       "content": "\n<p>Rua Tiradentes,155 &#8211; Inga<br>Niterói, RJ</p>\n",
//       "opened": true,
//       "mask": "required",
//       "towel": "required",
//       "fountain": "partial",
//       "locker_room": "partial",
//       "schedules": [
//         {
//           "weekdays": "Seg. à Sex.",
//           "hour": "06h às 21h"
//         },
//         {
//           "weekdays": "Sáb.",
//           "hour": "07h às 14h"
//         },
//         {
//           "weekdays": "Dom.",
//           "hour": "Fechada"
//         }
//       ]
//     },
//     {
//       "id": 1099887897633,
//       "title": "Anchieta",
//       "street": "Avenida Francisco Deslandes, 900",
//       "region": "Anchieta",
//       "city_name": "Belo Horizonte",
//       "state_name": "Minas Gerais",
//       "uf": "MG"
//     },
//     {
//       "id": 1099887897682,
//       "title": "Aracaju",
//       "street": "Av. Deputado Pedro Valadares, 890 ",
//       "region": "Jardins Aracaju",
//       "city_name": "Aracaju",
//       "state_name": "Sergipe",
//       "uf": "SE"
//     },
//     {
//       "id": 109988789768,
//       "title": "Assis Brasil",
//       "street": "Avenida Assis Brasil, 3999",
//       "region": "São Sebastião",
//       "city_name": "Porto Alegre",
//       "state_name": "Rio Grande do Sul",
//       "uf": "RS"
//     },
//     {
//       "id": 1099887897642,
//       "title": "Avenida dos Mananciais",
//       "street": "Avenida dos Mananciais, 721",
//       "region": "Taquara",
//       "city_name": "Rio de Janeiro",
//       "state_name": "Rio de Janeiro",
//       "uf": "RJ"
//     },
//     {
//       "id": 1099887897664,
//       "title": "Avenida JK",
//       "street": "Av. Presidente Juscelino Kubitschek de Oliveira, 400",
//       "region": "Jardim Maracanã",
//       "city_name": "São José do Rio Preto",
//       "state_name": "São Paulo",
//       "uf": "SP"
//     },
//     {
//       "id": 1099887897604,
//       "title": "Avenida Prudente de Morais",
//       "street": "Avenida Prudente de Morais, 513",
//       "region": "Santo Antônio",
//       "city_name": "Belo Horizonte",
//       "state_name": "Minas Gerais",
//       "uf": "MG"
//     },
//     {
//       "id": 1099887897632,
//       "title": "Barreiro",
//       "street": "Avenida Afonso Vaz de Melo, 640",
//       "region": "Barreiro",
//       "city_name": "Belo Horizonte",
//       "state_name": "Minas Gerais",
//       "uf": "MG"
//     },
//     {
//       "id": 1099887897627,
//       "title": "BH Shopping",
//       "street": "BR-356, 3049",
//       "region": "Belvedere",
//       "city_name": "Belo Horizonte",
//       "state_name": "Minas Gerais",
//       "uf": "MG"
//     },
//     {
//       "id": 1099887897621,
//       "title": "Boqueirão",
//       "street": "Rua Maestro Carlos Frank, 1869",
//       "region": "Alto Boqueirão",
//       "city_name": "Curitiba",
//       "state_name": "Paraná",
//       "uf": "PR"
//     },
//     {
//       "id": 1099887897625,
//       "title": "Buritis",
//       "street": "Av. Prof. Mário Werneck, 1326",
//       "region": "Estoril",
//       "city_name": "Belo Horizonte",
//       "state_name": "Minas Gerais",
//       "uf": "MG"
//     },
//     {
//       "id": 109988789765,
//       "title": "Cambuí I",
//       "street": "Rua Barreto Leme,1822",
//       "region": "Cambui",
//       "city_name": "Campinas",
//       "state_name": "São Paulo",
//       "uf": "SP"
//     },
//     {
//       "id": 1099887897668,
//       "title": "Castelo",
//       "street": "Avenida Presidente Tancredo Neves, 2403",
//       "region": "Vila Paquetá",
//       "city_name": "Belo Horizonte",
//       "state_name": "Minas Gerais",
//       "uf": "MG"
//     },
//     {
//       "id": 1099887897648,
//       "title": "Centro",
//       "street": "Avenida Amazonas, 303",
//       "region": "Centro",
//       "city_name": "Belo Horizonte",
//       "state_name": "Minas Gerais",
//       "uf": "MG"
//     },
//     {
//       "id": 1099887897619,
//       "title": "Centro",
//       "street": "Rua Coronel Spinola de Castro, 2865",
//       "region": "Centro",
//       "city_name": "São José do Rio Preto",
//       "state_name": "São Paulo",
//       "uf": "SP"
//     },
//     {
//       "id": 1099887897619,
//       "title": "Cláudio Manoel",
//       "street": "Rua Cláudio Manoel, 36",
//       "region": "Funcionários",
//       "city_name": "Belo Horizonte",
//       "state_name": "Minas Gerais",
//       "uf": "MG"
//     },
//     {
//       "id": 1099887897645,
//       "title": "Conselheiro Aguiar I",
//       "street": "Avenida Conselheiro Aguiar, 2216",
//       "region": "Boa Viagem",
//       "city_name": "Recife",
//       "state_name": "Pernambuco",
//       "uf": "PE"
//     },
//     {
//       "id": 1099887897670,
//       "title": "Contagem",
//       "street": "Avenida João César de Oliveira, 1275",
//       "region": "Eldorado",
//       "city_name": "Contagem",
//       "state_name": "Minas Gerais",
//       "uf": "MG"
//     },
//     {
//       "id": 10998878976054,
//       "title": "Digital",
//       "street": "Avenida Paulista",
//       "region": "Bela Vista",
//       "city_name": "São Paulo",
//       "state_name": "São Paulo",
//       "uf": "SP"
//     },
//     {
//       "id": 109988789765,
//       "title": "Downtown",
//       "street": "Avenida das Américas, 500, Bloco 15, loja 108",
//       "region": "Barra da Tijuca",
//       "city_name": "Rio de Janeiro",
//       "state_name": "Rio de Janeiro",
//       "uf": "RJ"
//     },
//     {
//       "id": 1099887897692,
//       "title": "Duque de Caxias",
//       "street": "R. Professor José de Souza, 1216",
//       "region": "Jardim Vinte e Cinco de Agosto",
//       "city_name": "Duque de Caxias",
//       "state_name": "Rio de Janeiro",
//       "uf": "RJ"
//     },
//     {
//       "id": 1099887897694,
//       "title": "Estação BH",
//       "street": "Avenida Cristiano Machado, 11833",
//       "region": "Vila Cloris",
//       "city_name": "Belo Horizonte",
//       "state_name": "Minas Gerais",
//       "uf": "MG"
//     },
//     {
//       "id": 1099887897683,
//       "title": "Extra Minas",
//       "street": "Av. Cristiano Machado, 4000",
//       "region": "União",
//       "city_name": "Belo Horizonte",
//       "state_name": "Minas Gerais",
//       "uf": "MG"
//     },
//     {
//       "id": 1099887897639,
//       "title": "Franca",
//       "street": "Avenida Doutor Ismael Alonso Y. Alonso, 500",
//       "region": "Bairro Jardim Veneza",
//       "city_name": "Franca",
//       "state_name": "São Paulo",
//       "uf": "SP"
//     },
//     {
//       "id": 109988789765,
//       "title": "Granja Viana Km 21",
//       "street": "Rodovia Raposo Tavares Km 21, 21.350",
//       "region": "Lageadinho",
//       "city_name": "Cotia",
//       "state_name": "São Paulo",
//       "uf": "SP"
//     },
//     {
//       "id": 1099887897682,
//       "title": "Gutierrez ",
//       "street": "Rua André Cavalcanti, 190",
//       "region": "Gutierrez",
//       "city_name": "Belo Horizonte",
//       "state_name": "Minas Gerais",
//       "uf": "MG"
//     },
//     {
//       "id": 1099887897683,
//       "title": "Independência",
//       "street": "Av. Barão do Rio Branco, 2805",
//       "region": "Centro",
//       "city_name": "Juiz de Fora",
//       "state_name": "Minas Gerais",
//       "uf": "MG"
//     },
//     {
//       "id": 1099887897608,
//       "title": "ItaúPower Shopping",
//       "street": "Av. General David Sarnoff, 5160",
//       "region": "Cidade Industrial",
//       "city_name": "Contagem",
//       "state_name": "Minas Gerais",
//       "uf": "MG"
//     },
//     {
//       "id": 1099887897685,
//       "title": "Juazeiro do Norte",
//       "street": "Av. Padre Cícero, 2241",
//       "region": "Triângulo",
//       "city_name": "Juazeiro do Norte",
//       "state_name": "Ceará",
//       "uf": "CE"
//     },
//     {
//       "id": 1099887897670,
//       "title": "Jundiaí Shopping",
//       "street": "Avenida Nove de Julho, 3333",
//       "region": "Anhangabaú",
//       "city_name": "Jundiaí",
//       "state_name": "São Paulo",
//       "uf": "SP"
//     },
//     {
//       "id": 1099887897632,
//       "title": "Luxemburgo",
//       "street": "Rua Guaicuí, 600",
//       "region": "Coração de Jesus",
//       "city_name": "Belo Horizonte",
//       "state_name": "Minas Gerais",
//       "uf": "MG"
//     },
//     {
//       "id": 109988789760,
//       "title": "Miguel de Frias",
//       "street": "Rua Miguel de Frias, 198",
//       "region": "Icaraí",
//       "city_name": "Niterói",
//       "state_name": "Rio de Janeiro",
//       "uf": "RJ"
//     },
//     {
//       "id": 1099887897661,
//       "title": "Minas Shopping",
//       "street": "Avenida Cristiano Machado, 4000",
//       "region": "União",
//       "city_name": "Belo Horizonte",
//       "state_name": "Minas Gerais",
//       "uf": "MG"
//     },
//     {
//       "id": 1099887897603,
//       "title": "Nova Suissa",
//       "street": "Av. Silva Lobo, 770",
//       "region": "Nova Suissa",
//       "city_name": "Belo Horizonte",
//       "state_name": "Minas Gerais",
//       "uf": "MG"
//     },
//     {
//       "id": 1099887897669,
//       "title": "Pampulha",
//       "street": "Av. Portugal, 3450",
//       "region": "Jardim Atlântico",
//       "city_name": "Belo Horizonte",
//       "state_name": "Minas Gerais",
//       "uf": "MG"
//     },
//     {
//       "id": 1099887897646,
//       "title": "Portal Shopping",
//       "street": "Av. Anhanguera, 14.404",
//       "region": "Capuava",
//       "city_name": "Goiânia",
//       "state_name": "Goiás",
//       "uf": "GO"
//     },
//     {
//       "id": 1099887897630,
//       "title": "Rio Branco",
//       "street": "Rua Ladislau Ferreira, 1100",
//       "region": "Abrahão Alab",
//       "city_name": "Rio Branco",
//       "state_name": "Acre",
//       "uf": "AC"
//     },
//     {
//       "id": 1099887897643,
//       "title": "Rua Assunção",
//       "street": "Rua da Assunção, 665",
//       "region": "José Bonifácio",
//       "city_name": "Fortaleza",
//       "state_name": "Ceará",
//       "uf": "CE"
//     },
//     {
//       "id": 1099887897668,
//       "title": "Rua do Ouvidor",
//       "street": "Rua do Ouvidor, 186-A",
//       "region": "Centro",
//       "city_name": "Rio de Janeiro",
//       "state_name": "Rio de Janeiro",
//       "uf": "RJ"
//     },
//     {
//       "id": 1099887897617,
//       "title": "Rua Quinze de Novembro",
//       "street": "Rua Quinze de Novembro, 1.000",
//       "region": "Centro",
//       "city_name": "Jundiaí",
//       "state_name": "São Paulo",
//       "uf": "SP"
//     },
//     {
//       "id": 1099887897690,
//       "title": "Rua Rio de Janeiro",
//       "street": "Rua Rio de Janeiro, 1893",
//       "region": "Lourdes",
//       "city_name": "Belo Horizonte",
//       "state_name": "Minas Gerais",
//       "uf": "MG"
//     },
//     {
//       "id": 1099887897612,
//       "title": "Rua Sergipe",
//       "street": "Rua Sergipe, 1208",
//       "region": "Savassi",
//       "city_name": "Belo Horizonte",
//       "state_name": "Minas Gerais",
//       "uf": "MG"
//     },
//     {
//       "id": 1099887897617,
//       "title": "Savassi",
//       "street": "Rua Fernandes Tourinho, 195",
//       "region": "Funcionários",
//       "city_name": "Belo Horizonte",
//       "state_name": "Minas Gerais",
//       "uf": "MG"
//     },
//     {
//       "id": 1099887897658,
//       "title": "Shopping Cidade Norte",
//       "street": "Avenida Alfredo Antonio de Oliveira, 2077",
//       "region": "Jardim Planalto",
//       "city_name": "São José do Rio Preto",
//       "state_name": "São Paulo",
//       "uf": "SP"
//     },
//     {
//       "id": 1099887897666,
//       "title": "Shopping Del Rey",
//       "street": "Avenida Presidente Carlos Luz, 3001",
//       "region": "Caiçara",
//       "city_name": "Belo Horizonte",
//       "state_name": "Minas Gerais",
//       "uf": "MG"
//     },
//     {
//       "id": 1099887897660,
//       "title": "Sobral",
//       "street": "Av. Monsenhor Aloisio Pinto, 300 ",
//       "region": "Dom Expedito",
//       "city_name": "Sobral",
//       "state_name": "Ceará",
//       "uf": "CE"
//     },
//     {
//       "id": 1099887897605,
//       "title": "Sobral antiga",
//       "street": "Avenida Monsenhor Aloísio Pinto, 300",
//       "region": "Dom Expedito",
//       "city_name": "Sobral",
//       "state_name": "Ceará",
//       "uf": "CE"
//     },
//     {
//       "id": 1099887897666,
//       "title": "Spazio Ouro Verde",
//       "street": "Avenida Ruy Rodrigues, 3900",
//       "region": "Parque Universitário de Viracopos",
//       "city_name": "Campinas",
//       "state_name": "São Paulo",
//       "uf": "SP"
//     },
//     {
//       "id": 1099887897658,
//       "title": "Uberaba",
//       "street": "Av. Santos Dumont, 1000",
//       "region": "Santos Dumont",
//       "city_name": "Uberaba",
//       "state_name": "Minas Gerais",
//       "uf": "MG"
//     },
//     {
//       "id": 1099887897674,
//       "title": "Uberlândia",
//       "street": "Av. Rondon Pacheco 920",
//       "region": "Vila Saraiva",
//       "city_name": "Uberlândia",
//       "state_name": "Minas Gerais",
//       "uf": "MG"
//     },
//     {
//       "id": 1099887897634,
//       "title": "Via Norte",
//       "street": "Av. Arquiteto José Henrique Bento Rodrigues, 3760",
//       "region": "Monte das Oliveiras",
//       "city_name": "Manaus",
//       "state_name": "Amazonas",
//       "uf": "AM"
//     },
//     {
//       "id": 109988789769,
//       "title": "Vila Carrão",
//       "street": "Av. Guilherme Giorgi, 1460",
//       "region": "Vila Carrão",
//       "city_name": "São Paulo",
//       "state_name": "São Paulo",
//       "uf": "SP"
//     }
//   ],
//   "wp_total": 116,
//   "total": 167,
//   "success": true
// }
