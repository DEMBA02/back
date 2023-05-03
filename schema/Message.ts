import { text, relationship,select, calendarDay} from "@keystone-6/core/fields";
import { allowAll } from '@keystone-6/core/access';

export default {
  access: allowAll,
  fields: {
    contenu: text({ validation: { isRequired: true } }),
    from: text({ validation: { isRequired: true }, isIndexed: 'unique' }),
    to: text({ validation: { isRequired: true } , isIndexed: 'unique'}),
    date: calendarDay({
      db: { map: 'my_date' },
      validation: { isRequired: true },
      isIndexed: 'unique',
    }),
  },
};