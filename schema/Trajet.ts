import { integer, select, text, relationship, calendarDay, timestamp} from "@keystone-6/core/fields";
import { allowAll } from '@keystone-6/core/access';

export default {
  access: allowAll,
  fields: {
    position_depart: text({ validation: { isRequired: true } }),
    position_arrive: text({ validation: { isRequired: true } }),
    date_depart: calendarDay({
      db: { map: 'my_date' },
      validation: { isRequired: true },
    }),
    date_arrive: calendarDay({
      db: { map: 'my_date1' },
      validation: { isRequired: true },
    }),
    heure_depart: timestamp({ validation: { isRequired: true } }),
    heure_arrive: timestamp({ validation: { isRequired: true } }),
    nbre_place: integer({ validation: { isRequired: true } }),
    chauffeur: relationship({ref: 'Chauffeur', many: false}),
    avis: relationship({ref: 'Avi', many: true}),
    reservations: relationship({ref: 'Reservation', many: true}),
    gare: relationship({ref: 'Gare', many: false}),
    escales: relationship({ref: 'Escale', many: true}),
    chemin: relationship({ref: 'Chemin', many: false}),
    paiement: relationship({ref: 'Paiement', many: false}),
  },
};