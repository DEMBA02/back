import { list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';

import {
  text,
  relationship,
  password,
  timestamp,
  select,
  integer,
} from '@keystone-6/core/fields';

import Voiture from './schema/Voiture';
import Chauffeur from './schema/Chauffeur';
import User from './schema/User';
import Post from './schema/Post';
import Trajet from './schema/Trajet';
import Tag from './schema/Tag';
import Chemin from './schema/Chemin';
import Gare from './schema/Gare';
import Escale from './schema/Escale';
import Autoroute from './schema/Autoroute';
import Paiement from './schema/Paiement';
import Reservation from './schema/Reservation';
import Avi from './schema/Avi';
import Voyageur from './schema/Voyageur';


import type { Lists } from '.keystone/types';
import keystone from './keystone';


export const lists: Lists = {

  User: list(User),
  Chauffeur: list(Chauffeur),
  Voiture: list(Voiture),
  Post: list(Post),
  Trajet: list(Trajet),
  Tag: list(Tag),
  Chemin: list(Chemin),
  Gare: list(Gare),
  Escale:list(Escale),
  Autoroute: list(Autoroute),
  Paiement: list(Paiement),
  Reservation: list(Reservation),
  Avi: list(Avi),
  Voyageur: list(Voyageur),
};
