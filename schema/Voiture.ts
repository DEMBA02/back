import { select, text, relationship } from "@keystone-6/core/fields";
import { allowAll } from '@keystone-6/core/access';

const startYear = 1950;
const endYear = new Date().getFullYear();
const years = Array.from({ length: endYear - startYear + 1 }, (_, i) => `${startYear + i}`);

export default {
  access: allowAll,
  fields: {
    plaque: text({ validation: { isRequired: true } }),
    color: select({
      options: [
        { label: 'Blanche', value: 'blanche' },
        { label: 'Rouge', value: 'rouge' },
        { label: 'Jaune', value: 'jaune' },
        { label: 'Bleu', value: 'bleu' },
        { label: 'Vert', value: 'vert' },
        { label: 'Orange', value: 'orange' },
        { label: 'Marron', value: 'marron' },
        { label: 'Noir', value: 'noir' },
      ],
      defaultValue: 'noir',
      //ui: { displayMode: 'segmented-control' },
    }),
    marque: select({
      options: [
        { label: 'Acura', value: 'acura' },
        { label: 'Alfa Romeo', value: 'alfa-romeo' },
        { label: 'Aston Martin', value: 'aston-martin' },
        { label: 'Audi', value: 'audi' },
        { label: 'Bentley', value: 'bentley' },
        { label: 'BMW', value: 'bmw' },
        { label: 'Bugatti', value: 'bugatti' },
        { label: 'Buick', value: 'buick' },
        { label: 'Cadillac', value: 'cadillac' },
        { label: 'Chevrolet', value: 'chevrolet' },
        { label: 'Chrysler', value: 'chrysler' },
        { label: 'Citroën', value: 'citroen' },
        { label: 'Dodge', value: 'dodge' },
        { label: 'Ferrari', value: 'ferrari' },
        { label: 'Fiat', value: 'fiat' },
        { label: 'Ford', value: 'ford' },
        { label: 'GMC', value: 'gmc' },
        { label: 'Honda', value: 'honda' },
        { label: 'Hyundai', value: 'hyundai' },
        { label: 'Infiniti', value: 'infiniti' },
        { label: 'Jaguar', value: 'jaguar' },
        { label: 'Jeep', value: 'jeep' },
        { label: 'Kia', value: 'kia' },
        { label: 'Lamborghini', value: 'lamborghini' },
        { label: 'Land Rover', value: 'land-rover' },
        { label: 'Lexus', value: 'lexus' },
        { label: 'Lincoln', value: 'lincoln' },
        { label: 'Lotus', value: 'lotus' },
        { label: 'Maserati', value: 'maserati' },
        { label: 'Mazda', value: 'mazda' },
        { label: 'McLaren', value: 'mclaren' },
        { label: 'Mercedes-Benz', value: 'mercedes-benz' },
        { label: 'Mini', value: 'mini' },
        { label: 'Mitsubishi', value: 'mitsubishi' },
        { label: 'Nissan', value: 'nissan' },
        { label: 'Pagani', value: 'pagani' },
        { label: 'Peugeot', value: 'peugeot' },
        { label: 'Porsche', value: 'porsche' },
        { label: 'Ram', value: 'ram' },
        { label: 'Renault', value: 'renault' },
        { label: 'Rolls-Royce', value: 'rolls-royce' },
        { label: 'Subaru', value: 'subaru' },
        { label: 'Suzuki', value: 'suzuki' },
        { label: 'Tesla', value: 'tesla' },
        { label: 'Toyota', value: 'toyota' },
        { label: 'Volkswagen', value: 'volkswagen' },
        { label: 'Volvo', value: 'volvo' }

      ],
      defaultValue: 'ford',
      //ui: { displayMode: 'segmented-control' },
    }),
    model: select({
      options: [
        { label: 'Acura', value: 'acura' },
        { label: 'Alfa Romeo', value: 'alfa-romeo' },
        { label: 'Aston Martin', value: 'aston-martin' },
        { label: 'Audi', value: 'audi' },
        { label: 'Bentley', value: 'bentley' },
        { label: 'BMW', value: 'bmw' },
        { label: 'Bugatti', value: 'bugatti' },
        { label: 'Buick', value: 'buick' },
        { label: 'Cadillac', value: 'cadillac' },
        { label: 'Chevrolet', value: 'chevrolet' },
        { label: 'Chrysler', value: 'chrysler' },
        { label: 'Citroën', value: 'citroen' },
        { label: 'Dodge', value: 'dodge' },
        { label: 'Ferrari', value: 'ferrari' },
        { label: 'Fiat', value: 'fiat' },
        { label: 'Ford', value: 'ford' },
        { label: 'GMC', value: 'gmc' },
        { label: 'Honda', value: 'honda' },
        { label: 'Hyundai', value: 'hyundai' },
        { label: 'Infiniti', value: 'infiniti' },
        { label: 'Jaguar', value: 'jaguar' },
        { label: 'Jeep', value: 'jeep' },
        { label: 'Kia', value: 'kia' },
        { label: 'Lamborghini', value: 'lamborghini' },
        { label: 'Land Rover', value: 'land-rover' },
        { label: 'Lexus', value: 'lexus' },
        { label: 'Lincoln', value: 'lincoln' },
        { label: 'Lotus', value: 'lotus' },
        { label: 'Maserati', value: 'maserati' },
        { label: 'Mazda', value: 'mazda' },
        { label: 'McLaren', value: 'mclaren' },
        { label: 'Mercedes-Benz', value: 'mercedes-benz' },
        { label: 'Mini', value: 'mini' },
        { label: 'Mitsubishi', value: 'mitsubishi' },
        { label: 'Nissan', value: 'nissan' },
        { label: 'Pagani', value: 'pagani' },
        { label: 'Peugeot', value: 'peugeot' },
        { label: 'Porsche', value: 'porsche' },
        { label: 'Ram', value: 'ram' },
        { label: 'Renault', value: 'renault' },
        { label: 'Rolls-Royce', value: 'rolls-royce' },
        { label: 'Subaru', value: 'subaru' },
        { label: 'Suzuki', value: 'suzuki' },
        { label: 'Tesla', value: 'tesla' },
        { label: 'Toyota', value: 'toyota' },
        { label: 'Volkswagen', value: 'volkswagen' },
        { label: 'Volvo', value: 'volvo' }

      ],
      defaultValue: 'ford',
      //ui: { displayMode: 'segmented-control' },
    }),
    years: select({
      options: years,
      defaultValue: years[0],
      validation: { isRequired: true },
      
      ui: { displayMode: 'select' },
    }),
    user: relationship({ref: 'User', many: false}),
  },
  labelField: 'plaque',
};


/* import { select, text } from "@keystone-6/core/fields";
import { allowAll } from '@keystone-6/core/access';


export default {
  access: allowAll,
  fields: {
    plaque: text({ validation: { isRequired: true } }),
    color: text({ validation: { isRequired: true } }),
    marque: text({ validation: { isRequired: true } }),
    annee: select({
      type: 'enum',
      options: [
        { label: '2022', value: '2022' },
        { label: '31 janvier 2023', value: '31/01/2023' },
      ],
      defaultValue: '31/01/2022',
      validation: { isRequired: true, },
      isIndexed: 'unique',
      ui: { displayMode: 'select' },
    }),
  },
};
 */