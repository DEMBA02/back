"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// keystone.ts
var keystone_exports = {};
__export(keystone_exports, {
  default: () => keystone_default
});
module.exports = __toCommonJS(keystone_exports);
var import_core2 = require("@keystone-6/core");

// schema.ts
var import_core = require("@keystone-6/core");

// schema/Voiture.ts
var import_fields = require("@keystone-6/core/fields");
var import_access = require("@keystone-6/core/access");
var startYear = 1950;
var endYear = (/* @__PURE__ */ new Date()).getFullYear();
var years = Array.from({ length: endYear - startYear + 1 }, (_, i) => `${startYear + i}`);
var Voiture_default = {
  access: import_access.allowAll,
  fields: {
    plaque: (0, import_fields.text)({ validation: { isRequired: true } }),
    color: (0, import_fields.select)({
      options: [
        { label: "Blanche", value: "blanche" },
        { label: "Rouge", value: "rouge" },
        { label: "Jaune", value: "jaune" },
        { label: "Bleu", value: "bleu" },
        { label: "Vert", value: "vert" },
        { label: "Orange", value: "orange" },
        { label: "Marron", value: "marron" },
        { label: "Noir", value: "noir" }
      ],
      defaultValue: "noir"
      //ui: { displayMode: 'segmented-control' },
    }),
    marque: (0, import_fields.select)({
      options: [
        { label: "Acura", value: "acura" },
        { label: "Alfa Romeo", value: "alfa-romeo" },
        { label: "Aston Martin", value: "aston-martin" },
        { label: "Audi", value: "audi" },
        { label: "Bentley", value: "bentley" },
        { label: "BMW", value: "bmw" },
        { label: "Bugatti", value: "bugatti" },
        { label: "Buick", value: "buick" },
        { label: "Cadillac", value: "cadillac" },
        { label: "Chevrolet", value: "chevrolet" },
        { label: "Chrysler", value: "chrysler" },
        { label: "Citro\xEBn", value: "citroen" },
        { label: "Dodge", value: "dodge" },
        { label: "Ferrari", value: "ferrari" },
        { label: "Fiat", value: "fiat" },
        { label: "Ford", value: "ford" },
        { label: "GMC", value: "gmc" },
        { label: "Honda", value: "honda" },
        { label: "Hyundai", value: "hyundai" },
        { label: "Infiniti", value: "infiniti" },
        { label: "Jaguar", value: "jaguar" },
        { label: "Jeep", value: "jeep" },
        { label: "Kia", value: "kia" },
        { label: "Lamborghini", value: "lamborghini" },
        { label: "Land Rover", value: "land-rover" },
        { label: "Lexus", value: "lexus" },
        { label: "Lincoln", value: "lincoln" },
        { label: "Lotus", value: "lotus" },
        { label: "Maserati", value: "maserati" },
        { label: "Mazda", value: "mazda" },
        { label: "McLaren", value: "mclaren" },
        { label: "Mercedes-Benz", value: "mercedes-benz" },
        { label: "Mini", value: "mini" },
        { label: "Mitsubishi", value: "mitsubishi" },
        { label: "Nissan", value: "nissan" },
        { label: "Pagani", value: "pagani" },
        { label: "Peugeot", value: "peugeot" },
        { label: "Porsche", value: "porsche" },
        { label: "Ram", value: "ram" },
        { label: "Renault", value: "renault" },
        { label: "Rolls-Royce", value: "rolls-royce" },
        { label: "Subaru", value: "subaru" },
        { label: "Suzuki", value: "suzuki" },
        { label: "Tesla", value: "tesla" },
        { label: "Toyota", value: "toyota" },
        { label: "Volkswagen", value: "volkswagen" },
        { label: "Volvo", value: "volvo" }
      ],
      defaultValue: "ford"
      //ui: { displayMode: 'segmented-control' },
    }),
    model: (0, import_fields.select)({
      options: [
        { label: "Acura", value: "acura" },
        { label: "Alfa Romeo", value: "alfa-romeo" },
        { label: "Aston Martin", value: "aston-martin" },
        { label: "Audi", value: "audi" },
        { label: "Bentley", value: "bentley" },
        { label: "BMW", value: "bmw" },
        { label: "Bugatti", value: "bugatti" },
        { label: "Buick", value: "buick" },
        { label: "Cadillac", value: "cadillac" },
        { label: "Chevrolet", value: "chevrolet" },
        { label: "Chrysler", value: "chrysler" },
        { label: "Citro\xEBn", value: "citroen" },
        { label: "Dodge", value: "dodge" },
        { label: "Ferrari", value: "ferrari" },
        { label: "Fiat", value: "fiat" },
        { label: "Ford", value: "ford" },
        { label: "GMC", value: "gmc" },
        { label: "Honda", value: "honda" },
        { label: "Hyundai", value: "hyundai" },
        { label: "Infiniti", value: "infiniti" },
        { label: "Jaguar", value: "jaguar" },
        { label: "Jeep", value: "jeep" },
        { label: "Kia", value: "kia" },
        { label: "Lamborghini", value: "lamborghini" },
        { label: "Land Rover", value: "land-rover" },
        { label: "Lexus", value: "lexus" },
        { label: "Lincoln", value: "lincoln" },
        { label: "Lotus", value: "lotus" },
        { label: "Maserati", value: "maserati" },
        { label: "Mazda", value: "mazda" },
        { label: "McLaren", value: "mclaren" },
        { label: "Mercedes-Benz", value: "mercedes-benz" },
        { label: "Mini", value: "mini" },
        { label: "Mitsubishi", value: "mitsubishi" },
        { label: "Nissan", value: "nissan" },
        { label: "Pagani", value: "pagani" },
        { label: "Peugeot", value: "peugeot" },
        { label: "Porsche", value: "porsche" },
        { label: "Ram", value: "ram" },
        { label: "Renault", value: "renault" },
        { label: "Rolls-Royce", value: "rolls-royce" },
        { label: "Subaru", value: "subaru" },
        { label: "Suzuki", value: "suzuki" },
        { label: "Tesla", value: "tesla" },
        { label: "Toyota", value: "toyota" },
        { label: "Volkswagen", value: "volkswagen" },
        { label: "Volvo", value: "volvo" }
      ],
      defaultValue: "ford"
      //ui: { displayMode: 'segmented-control' },
    }),
    years: (0, import_fields.select)({
      options: years,
      defaultValue: years[0],
      validation: { isRequired: true },
      ui: { displayMode: "select" }
    }),
    user: (0, import_fields.relationship)({ ref: "User", many: false })
  },
  labelField: "plaque"
};

// schema/Chauffeur.ts
var import_fields3 = require("@keystone-6/core/fields");
var import_access3 = require("@keystone-6/core/access");

// schema/User.ts
var import_fields2 = require("@keystone-6/core/fields");
var import_access2 = require("@keystone-6/core/access");
var User_default = {
  access: import_access2.allowAll,
  fields: {
    name: (0, import_fields2.text)({ validation: { isRequired: true } }),
    nom: (0, import_fields2.text)(),
    prenom: (0, import_fields2.text)(),
    telephone: (0, import_fields2.integer)(),
    piece: (0, import_fields2.integer)({}),
    email: (0, import_fields2.text)({
      validation: { isRequired: true },
      isIndexed: "unique"
    }),
    naissance: (0, import_fields2.calendarDay)({
      db: { map: "my_date" },
      //validation: { isRequired: true },
      isIndexed: "unique"
    }),
    photo: (0, import_fields2.image)({ storage: "local_image" }),
    bio: (0, import_fields2.text)({}),
    adresse: (0, import_fields2.text)({}),
    ville: (0, import_fields2.text)({}),
    password: (0, import_fields2.password)({ validation: { isRequired: true } }),
    createdAt: (0, import_fields2.timestamp)({
      // this sets the timestamp to Date.now() when the user is first created
      defaultValue: { kind: "now" }
    }),
    avis: (0, import_fields2.relationship)({ ref: "Avi", many: true }),
    voitures: (0, import_fields2.relationship)({ ref: "Voiture", many: true })
  },
  // Customizing how the "photo" field is displayed in the list view
  admin: {
    views: {
      // Define the view that will be used to display the list of items
      "my-view": {
        // Specify the fields to display and their width
        fieldMode: "hidden",
        // hide the fields that are not specified
        cellMode: "default",
        // use the default cell mode
        fields: [
          { field: "name", width: "20%" },
          { field: "photo", width: "20%", itemView: { fieldMode: "edit", cellMode: "image" } },
          { field: "email", width: "20%" },
          { field: "telephone", width: "20%" }
        ]
      }
    }
  },
  labelField: "name"
};

// schema/Chauffeur.ts
var Chauffeur_default = {
  access: import_access3.allowAll,
  fields: {
    ...User_default.fields,
    permis: (0, import_fields3.text)(),
    trajets: (0, import_fields3.relationship)({ ref: "Trajet", many: true }),
    posts: (0, import_fields3.relationship)({ ref: "Post.author", many: true })
  }
};

// schema/Post.ts
var import_fields4 = require("@keystone-6/core/fields");
var import_access4 = require("@keystone-6/core/access");
var import_fields_document = require("@keystone-6/fields-document");
var Post_default = {
  access: import_access4.allowAll,
  fields: {
    title: (0, import_fields4.text)({ validation: { isRequired: true } }),
    content: (0, import_fields_document.document)({
      formatting: true,
      layouts: [
        [1, 1],
        [1, 1, 1],
        [2, 1],
        [1, 2],
        [1, 2, 1]
      ],
      links: true,
      dividers: true
    }),
    author: (0, import_fields4.relationship)({
      ref: "Chauffeur.posts",
      ui: {
        displayMode: "cards",
        cardFields: ["name", "email"],
        inlineEdit: { fields: ["name", "email"] },
        linkToItem: true,
        inlineConnect: true
      },
      many: false
    }),
    tags: (0, import_fields4.relationship)({
      ref: "Tag.posts",
      many: true,
      ui: {
        displayMode: "cards",
        cardFields: ["name"],
        inlineEdit: { fields: ["name"] },
        linkToItem: true,
        inlineConnect: true,
        inlineCreate: { fields: ["name"] }
      }
    })
  }
};

// schema/Trajet.ts
var import_fields5 = require("@keystone-6/core/fields");
var import_access5 = require("@keystone-6/core/access");
var Trajet_default = {
  access: import_access5.allowAll,
  fields: {
    position_depart: (0, import_fields5.text)({ validation: { isRequired: true } }),
    position_arrive: (0, import_fields5.text)({ validation: { isRequired: true } }),
    date_depart: (0, import_fields5.calendarDay)({
      db: { map: "my_date" },
      validation: { isRequired: true }
    }),
    date_arrive: (0, import_fields5.calendarDay)({
      db: { map: "my_date1" },
      validation: { isRequired: true }
    }),
    heure_depart: (0, import_fields5.timestamp)({ validation: { isRequired: true } }),
    heure_arrive: (0, import_fields5.timestamp)({ validation: { isRequired: true } }),
    nbre_place: (0, import_fields5.integer)({ validation: { isRequired: true } }),
    chauffeur: (0, import_fields5.relationship)({ ref: "Chauffeur", many: false }),
    avis: (0, import_fields5.relationship)({ ref: "Avi", many: true }),
    reservations: (0, import_fields5.relationship)({ ref: "Reservation", many: true }),
    gare: (0, import_fields5.relationship)({ ref: "Gare", many: false }),
    escales: (0, import_fields5.relationship)({ ref: "Escale", many: true }),
    chemin: (0, import_fields5.relationship)({ ref: "Chemin", many: false }),
    paiement: (0, import_fields5.relationship)({ ref: "Paiement", many: false })
  }
};

// schema/Tag.ts
var import_fields6 = require("@keystone-6/core/fields");
var import_access6 = require("@keystone-6/core/access");
var Tag_default = {
  access: import_access6.allowAll,
  ui: {
    isHidden: true
  },
  fields: {
    name: (0, import_fields6.text)(),
    posts: (0, import_fields6.relationship)({ ref: "Post.tags", many: true })
  }
};

// schema/Chemin.ts
var import_fields7 = require("@keystone-6/core/fields");
var import_access7 = require("@keystone-6/core/access");
var Chemin_default = {
  access: import_access7.allowAll,
  fields: {
    duree: (0, import_fields7.timestamp)({ validation: { isRequired: true } }),
    peage: (0, import_fields7.text)({ validation: { isRequired: true } }),
    estimation_prix: (0, import_fields7.float)({ validation: { isRequired: true } }),
    trajets: (0, import_fields7.relationship)({ ref: "Trajet", many: true }),
    autoroutes: (0, import_fields7.relationship)({ ref: "Autoroute", many: true })
  }
};

// schema/Gare.ts
var import_fields8 = require("@keystone-6/core/fields");
var import_access8 = require("@keystone-6/core/access");
var Gare_default = {
  access: import_access8.allowAll,
  fields: {
    libelle: (0, import_fields8.text)({ validation: { isRequired: true } }),
    trajets: (0, import_fields8.relationship)({ ref: "Trajet", many: true })
  }
};

// schema/Escale.ts
var import_fields9 = require("@keystone-6/core/fields");
var import_access9 = require("@keystone-6/core/access");
var Escale_default = {
  access: import_access9.allowAll,
  fields: {
    libelle: (0, import_fields9.text)({ validation: { isRequired: true } }),
    trajets: (0, import_fields9.relationship)({ ref: "Trajet", many: true })
  }
};

// schema/Autoroute.ts
var import_fields10 = require("@keystone-6/core/fields");
var import_access10 = require("@keystone-6/core/access");
var Autoroute_default = {
  access: import_access10.allowAll,
  fields: {
    libelle: (0, import_fields10.text)({ validation: { isRequired: true } }),
    chemins: (0, import_fields10.relationship)({ ref: "Chemin", many: true })
  }
};

// schema/Paiement.ts
var import_fields11 = require("@keystone-6/core/fields");
var import_access11 = require("@keystone-6/core/access");
var Paiement_default = {
  access: import_access11.allowAll,
  fields: {
    type: (0, import_fields11.text)({ validation: { isRequired: true } }),
    status: (0, import_fields11.select)({
      options: [
        { label: "Payer", value: "payer" },
        { label: "Non Payer", value: "non payer" },
        { label: "Draft", value: "draft" }
      ],
      defaultValue: "payer"
      //ui: { displayMode: 'segmented-control' },
    }),
    montant: (0, import_fields11.float)({ validation: { isRequired: true } }),
    date: (0, import_fields11.calendarDay)({
      db: { map: "my_date" },
      validation: { isRequired: true },
      isIndexed: "unique"
    }),
    trajet: (0, import_fields11.relationship)({ ref: "Trajet", many: false })
  }
};

// schema/Reservation.ts
var import_fields12 = require("@keystone-6/core/fields");
var import_access12 = require("@keystone-6/core/access");
var Reservation_default = {
  access: import_access12.allowAll,
  fields: {
    date: (0, import_fields12.calendarDay)({
      db: { map: "my_date" },
      validation: { isRequired: true },
      isIndexed: "unique"
    }),
    nbre_place: (0, import_fields12.integer)({ validation: { isRequired: true } }),
    trajet: (0, import_fields12.relationship)({ ref: "Trajet", many: false }),
    voyageur: (0, import_fields12.relationship)({ ref: "Voyageur", many: false })
  }
};

// schema/Avi.ts
var import_fields13 = require("@keystone-6/core/fields");
var import_access13 = require("@keystone-6/core/access");
var Avi_default = {
  access: import_access13.allowAll,
  fields: {
    note: (0, import_fields13.decimal)({ validation: { isRequired: true } }),
    reste: (0, import_fields13.decimal)({ validation: { isRequired: true } }),
    user: (0, import_fields13.relationship)({ ref: "User", many: false }),
    trajet: (0, import_fields13.relationship)({ ref: "Trajet", many: false })
  }
};

// schema/Voyageur.ts
var import_fields14 = require("@keystone-6/core/fields");
var import_access14 = require("@keystone-6/core/access");
var Voyageur_default = {
  access: import_access14.allowAll,
  fields: {
    ...User_default.fields,
    reservations: (0, import_fields14.relationship)({ ref: "Reservation", many: true })
  }
};

// schema.ts
var lists = {
  User: (0, import_core.list)(User_default),
  Chauffeur: (0, import_core.list)(Chauffeur_default),
  Voiture: (0, import_core.list)(Voiture_default),
  Post: (0, import_core.list)(Post_default),
  Trajet: (0, import_core.list)(Trajet_default),
  Tag: (0, import_core.list)(Tag_default),
  Chemin: (0, import_core.list)(Chemin_default),
  Gare: (0, import_core.list)(Gare_default),
  Escale: (0, import_core.list)(Escale_default),
  Autoroute: (0, import_core.list)(Autoroute_default),
  Paiement: (0, import_core.list)(Paiement_default),
  Reservation: (0, import_core.list)(Reservation_default),
  Avi: (0, import_core.list)(Avi_default),
  Voyageur: (0, import_core.list)(Voyageur_default)
};

// auth.ts
var import_crypto = require("crypto");
var import_auth = require("@keystone-6/auth");
var import_session = require("@keystone-6/core/session");
var sessionSecret = process.env.SESSION_SECRET || "d44f80a6d7a6017b4d2fee1906b2e21acf02a9a0b20e62a1aab2b55a6da49825";
if (!sessionSecret && process.env.NODE_ENV !== "production") {
  sessionSecret = (0, import_crypto.randomBytes)(32).toString("hex");
}
var { withAuth } = (0, import_auth.createAuth)({
  listKey: "User",
  identityField: "email",
  // this is a GraphQL query fragment for fetching what data will be attached to a context.session
  //   this can be helpful for when you are writing your access control functions
  //   you can find out more at https://keystonejs.com/docs/guides/auth-and-access-control
  sessionData: "name createdAt",
  secretField: "password",
  // WARNING: remove initFirstItem functionality in production
  //   see https://keystonejs.com/docs/config/auth#init-first-item for more
  initFirstItem: {
    // if there are no items in the database, by configuring this field
    //   you are asking the Keystone AdminUI to create a new user
    //   providing inputs for these fields
    fields: ["name", "email", "password"]
    // it uses context.sudo() to do this, which bypasses any access control you might have
    //   you shouldn't use this in production
  }
});
var sessionMaxAge = 60 * 60 * 24 * 30;
var session = (0, import_session.statelessSessions)({
  maxAge: sessionMaxAge,
  secret: sessionSecret
});

// keystone.ts
var keystone_default = withAuth(
  (0, import_core2.config)({
    db: {
      // we're using sqlite for the fastest startup experience
      //   for more information on what database might be appropriate for you
      //   see https://keystonejs.com/docs/guides/choosing-a-database#title
      provider: "mysql",
      url: "mysql://b26c6c6d625e1d:a82a125b@us-cdbr-east-06.cleardb.net:3306/heroku_2eead248f616536?reconnect=true,"
    },
    lists,
    session,
    storage: {
      local_image: {
        // Images that use this store will be stored on the local machine
        kind: "local",
        // This store is used for the image field type
        type: "image",
        // The URL that is returned in the Keystone GraphQL API
        generateUrl: (path) => `http://localhost:3000/images${path}`,
        // The route that will be created in Keystone's backend to serve the images
        serverRoute: {
          path: "/images"
        },
        // Set serverRoute to null if you don't want a route to be created in Keystone
        // serverRoute: null
        storagePath: "public/images"
      },
      local_file: {
        // Images that use this store will be stored on the local machine
        kind: "local",
        // This store is used for the image field type
        type: "file",
        // The URL that is returned in the Keystone GraphQL API
        generateUrl: (path) => `http://localhost:3000/files${path}`,
        // The route that will be created in Keystone's backend to serve the images
        serverRoute: {
          path: "/files"
        },
        // Set serverRoute to null if you don't want a route to be created in Keystone
        // serverRoute: null
        storagePath: "public/files"
      }
    }
  })
);
