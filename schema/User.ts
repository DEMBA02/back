import { text, relationship, password, timestamp, select, integer, file, image, calendarDay} from "@keystone-6/core/fields";
import { allowAll } from '@keystone-6/core/access';

export default{
  access: allowAll,
  fields: {
    name: text({ validation: { isRequired: true } }),
    nom: text(),
    prenom: text(),
    telephone: integer(),
    piece: integer({}),
    email: text({
      validation: { isRequired: true },
      isIndexed: 'unique',
    }),
    naissance: calendarDay({
      db: { map: 'my_date' },
      //validation: { isRequired: true },
      isIndexed: 'unique',
    }),
    photo: image({ storage: 'local_image' }),
    bio: text({}),
    adresse: text({}),
    ville: text({}),
    password: password({ validation: { isRequired: true } }),
    createdAt: timestamp({
      // this sets the timestamp to Date.now() when the user is first created
      defaultValue: { kind: 'now' },
    }),
    avis: relationship({ref: 'Avi', many: true}),
    voitures: relationship({ref: 'Voiture', many: true}),
  },
  // Customizing how the "photo" field is displayed in the list view
  admin: {
    views: {
      // Define the view that will be used to display the list of items
      'my-view': {
        // Specify the fields to display and their width
        fieldMode: 'hidden', // hide the fields that are not specified
        cellMode: 'default', // use the default cell mode
        fields: [
          { field: 'name', width: '20%' },
          { field: 'photo', width: '20%', itemView: { fieldMode: 'edit', cellMode: 'image' } },
          { field: 'email', width: '20%' },
          { field: 'telephone', width: '20%' },
        ],
      },
    },
  },
  labelField: 'name',
};

