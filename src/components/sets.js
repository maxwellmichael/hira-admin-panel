import React from 'react';
import { ReferenceField, ReferenceArrayInput, ReferenceInput,SelectInput, List, Datagrid, TextField, EditButton, DeleteButton, ShowButton, Show, SimpleShowLayout, ArrayField, Edit, SimpleForm, TextInput, RadioButtonGroupInput, NumberInput, ArrayInput, SimpleFormIterator, Create, ImageInput, ImageField } from 'react-admin';





export const SetList = (props) => {

    return (
        <List {...props}>
            <Datagrid>
                <ImageField source="main_image.src" label='Set Image' title="Main Image" />
                <TextField source='name' />
                <ReferenceField label="Category" source="category" reference="categories">
                    <TextField source="name" />
                </ReferenceField>
                <TextField source='gender' />
                <ShowButton label='' />
                <EditButton redirect={false} />
                <DeleteButton redirect={false} />
            </Datagrid>
        </List>
    )
}

export const SetShow = (props) => {


    return (
        <Show {...props}>
            <SimpleShowLayout>
                <TextField source='id' />
                <TextField source='name' />
                <TextField source='gender' />
                <TextField source='selling_price' />
                <TextField source='maximum_retail_price' />
                <ReferenceField label="Material" source="material" reference="materials">
                    <TextField source="name" />
                </ReferenceField>
                <ReferenceField label="Category" source="category" reference="categories">
                    <TextField source="name" />
                </ReferenceField>
                <ReferenceField label="Brand" source="brand" reference="brands">
                    <TextField source="name" />
                </ReferenceField>
                <ImageField source="main_image.src" title="Main Image" />
                <ArrayField source='items'>
                    <Datagrid>
                        <TextField source='color' label='Item Color' />
                        <TextField source='size' label='Item Size' />
                        <ImageField source='image_url.src' label='Item Image' />
                    </Datagrid>
                </ArrayField>
                <ArrayField source='specifications'>
                    <Datagrid>
                        <TextField source='specific' />
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
            <ImageInput source="main_image" label="Pictures" accept="image/*">
                <ImageField source="src" title="title" />
            </ImageInput>
            <ReferenceInput source="material" reference="materials">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <ReferenceInput source="category" reference="categories">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <ReferenceInput source="brand" reference="brands">
                <SelectInput optionText="name" />
            </ReferenceInput>
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

            <ArrayInput source="specifications">
                <SimpleFormIterator>
                    <TextInput source="specific" label='Specific' />
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
            <ImageInput source="main_image" label="Pictures" accept="image/*">
                <ImageField source="src" title="title" />
            </ImageInput>
            <ReferenceArrayInput source="category" reference="categories">
                <SelectInput optionText="name" />
            </ReferenceArrayInput>
            <ReferenceArrayInput source="material" reference="materials">
                <SelectInput optionText="name" />
            </ReferenceArrayInput>
            <ReferenceArrayInput source="brand" reference="brands">
                <SelectInput optionText="name" />
            </ReferenceArrayInput>
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

            <ArrayInput source="specifications">
                <SimpleFormIterator>
                    <TextInput source="specific" label="Specific Name" />
                </SimpleFormIterator>
            </ArrayInput>

        </SimpleForm>
    </Create>
);