import React from 'react';
import {List, Datagrid, TextField, EditButton, DeleteButton, ShowButton, Show, SimpleShowLayout, ArrayField, Edit, SimpleForm, TextInput, RadioButtonGroupInput, NumberInput, ArrayInput, SimpleFormIterator, Create, ImageInput, ImageField, AutocompleteInput} from 'react-admin';




const materialChoices = [
    { id: 'Cotton Fabric', name: 'Cotton Fabric' },
    { id: 'Silk Fabric', name: 'Silk Fabric' },
    { id: 'Linen Fabric', name: 'Linen Fabric' },
    { id: 'Wool Fabric', name: 'Wool Fabric' },
    { id: 'Leather Material', name: 'Leather Material' },
    { id: 'Georgette Fabric', name: 'Georgette Fabric' },
    { id: 'Chiffon Fabric', name: 'Chiffon Fabric' },
    { id: 'Nylon Fabric', name: 'Nylon Fabric' },
    { id: 'Polyester Fabric', name: 'Polyester Fabric' },
    { id: 'Velvet Fabric', name: 'Velvet Fabric' },
    { id: 'Denim Fabric', name: 'Denim Fabric' },
    { id: 'Rayon Fabric', name: 'Rayon Fabric' },
    { id: 'Viscose Fabric', name: 'Viscose Fabric' },
    { id: 'Satin Fabric', name: 'Satin Fabric' },
    { id: 'Crepe Fabric', name: 'Crepe Fabric' },
    { id: 'Lycra Fabric', name: 'Lycra Fabric' },
    { id: 'Net/Lace Fabric', name: 'Net/Lace Fabric' },
]

const categoryChoices = [
    { id: 'TOP', name: 'TOP' },
    { id: 'LONGTOP', name: 'LONGTOP' },
    { id: 'SHORT TOP', name: 'SHORT TOP' },
    { id: 'GOUN', name: 'GOUN' },
    { id: 'MIDI TOP', name: 'MIDI TOP' },
    { id: 'T SHIRT', name: 'T SHIRT' },
    { id: 'NIGHT DRESS', name: 'NIGHT DRESS' },
]


export const SetList = (props)=>{

    return(
        <List {...props}>
            <Datagrid>
                <ImageField source="main_image.src" label='Set Image' title="Main Image" />
                <TextField source='name' />
                <TextField source='category' />
                <TextField source='gender' />
                <ShowButton label='' />
                <EditButton redirect={false} />
                <DeleteButton redirect={false}/>
            </Datagrid>
        </List>
    )
}

export const SetShow = (props)=>{


    return(
        <Show {...props}>
            <SimpleShowLayout>
                <TextField source='id' />
                <TextField source='name' />
                <TextField source='category' />
                <TextField source='gender' />
                <TextField source='selling_price' />
                <TextField source='maximum_retail_price' />
                <TextField source='material' />
                <ImageField source="main_image.src" title="Main Image" />
                <ArrayField source='items'>
                    <Datagrid>
                        <TextField source='color' label='Item Color' />
                        <TextField source='size' label='Item Size' />
                        <ImageField source='image_url.src' label='Item Image' />
                    </Datagrid>
                </ArrayField>
            </SimpleShowLayout>
        </Show>

    )
}

export const SetEdit = (props) => (
    <Edit title='Edit' {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <NumberInput source="selling_price" />
            <NumberInput source="maximum_retail_price" />
            <AutocompleteInput source="material" choices={materialChoices} />
            <ImageInput source="main_image" label="Pictures" accept="image/*">
                <ImageField source="src" title="title" />
            </ImageInput>
            <AutocompleteInput source="category" choices={categoryChoices} />
            <RadioButtonGroupInput source="gender" choices={[
                { id: 'Male', name: 'Male' },
                { id: 'Female', name: 'Female' },
            ]} />
            <ArrayInput source="items">
                <SimpleFormIterator>
                    <TextInput source="color" label='Item Color' />
                    <ImageInput source="image_url" label="Item Image" accept="image/*">
                        <ImageField source="src" title="title" />
                    </ImageInput>
                    <TextInput source="size" label='Item Size' />
                </SimpleFormIterator>
            </ArrayInput>

        </SimpleForm>
    </Edit>
);

export const SetCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <NumberInput source="selling_price" />
            <NumberInput source="maximum_retail_price" />
            <AutocompleteInput source="material" choices={materialChoices} />
            <ImageInput source="main_image" label="Pictures" accept="image/*">
                <ImageField source="src" title="title" />
            </ImageInput>
            <AutocompleteInput source="category" choices={categoryChoices} />
            <RadioButtonGroupInput source="gender" choices={[
                { id: 'male', name: 'Male' },
                { id: 'female', name: 'Female' },
            ]} />
            <ArrayInput source="items">
                <SimpleFormIterator>
                    <TextInput source="color" label="Item Color" />
                    <ImageInput source="image_url" label="Item Image" accept="image/*">
                        <ImageField source="src" title="title" />
                    </ImageInput>
                    <TextInput source="size" label="Item Size" />
                </SimpleFormIterator>
            </ArrayInput>

        </SimpleForm>
    </Create>
);