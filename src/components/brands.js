import React from 'react';
import { List, Datagrid, TextField, EditButton, DeleteButton, ShowButton, Show, SimpleShowLayout, Edit, SimpleForm, TextInput, Create} from 'react-admin';



export const BrandList = (props) => {

    return (
        <List {...props}>
            <Datagrid>
                <TextField source='name' />
                <ShowButton label='' />
                <EditButton redirect={false} />
                <DeleteButton redirect={false} />
            </Datagrid>
        </List>
    )
}

export const BrandShow = (props) => {
    return (
        <Show {...props}>
            <SimpleShowLayout>
                <TextField source='id' />
                <TextField source='name' />
            </SimpleShowLayout>
        </Show>

    )
}

export const BrandEdit = (props) => (
    <Edit title='Edit' {...props}>
        <SimpleForm>
            <TextInput source="name" />
        </SimpleForm>
    </Edit>
);

export const BrandCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
        </SimpleForm>
    </Create>
);