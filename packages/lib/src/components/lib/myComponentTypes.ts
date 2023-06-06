import { Validation } from '@vuelidate/core';

export interface OtherComponentProps {
    bar: 'hello' | 'world';
}

export interface MyComponentProps extends OtherComponentProps {
    foo: 'a' | 'b' | 'c',
    validation?: Validation
};