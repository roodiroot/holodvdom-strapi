import type { Schema, Struct } from '@strapi/strapi';

export interface CharacteristicCharacteristic extends Struct.ComponentSchema {
  collectionName: 'components_characteristic_characteristics';
  info: {
    displayName: 'Characteristic';
  };
  attributes: {
    key: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface TagsTagsComponent extends Struct.ComponentSchema {
  collectionName: 'components_tags_tags_components';
  info: {
    displayName: 'Tags Component';
  };
  attributes: {
    tag: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'characteristic.characteristic': CharacteristicCharacteristic;
      'tags.tags-component': TagsTagsComponent;
    }
  }
}
