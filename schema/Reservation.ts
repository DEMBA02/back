import { text, relationship,select, integer,calendarDay } from "@keystone-6/core/fields";
import { allowAll } from '@keystone-6/core/access';

export default {
  access: allowAll,
  fields: {
    date: calendarDay({
      db: { map: 'my_date' },
      validation: { isRequired: true },
      isIndexed: 'unique',
    }),
    nbre_place: integer({ validation: { isRequired: true } }),
    trajet: relationship({ref: 'Trajet', many: false}),
    voyageur: relationship({ref: 'Voyageur', many: false}),
  },
};