import { text, relationship,select, integer, float,calendarDay } from "@keystone-6/core/fields";
import { allowAll } from '@keystone-6/core/access';

export default {
  access: allowAll,
  fields: {
    type: text({ validation: { isRequired: true } }),
    status: select({
      options: [
        { label: 'Payer', value: 'payer' },
        { label: 'Non Payer', value: 'non payer' },
        { label: 'Draft', value: 'draft' },
      ],
      defaultValue: 'payer',
      //ui: { displayMode: 'segmented-control' },
    }),
    montant: float({ validation: { isRequired: true } }),
    date: calendarDay({
      db: { map: 'my_date' },
      validation: { isRequired: true },
      isIndexed: 'unique',
    }),
    
    trajet: relationship({ref: 'Trajet', many: false}),
    
  },
};