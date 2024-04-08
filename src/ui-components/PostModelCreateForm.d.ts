/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PostModelCreateFormInputValues = {
    text?: string;
    image?: string;
};
export declare type PostModelCreateFormValidationValues = {
    text?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PostModelCreateFormOverridesProps = {
    PostModelCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    text?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PostModelCreateFormProps = React.PropsWithChildren<{
    overrides?: PostModelCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PostModelCreateFormInputValues) => PostModelCreateFormInputValues;
    onSuccess?: (fields: PostModelCreateFormInputValues) => void;
    onError?: (fields: PostModelCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PostModelCreateFormInputValues) => PostModelCreateFormInputValues;
    onValidate?: PostModelCreateFormValidationValues;
} & React.CSSProperties>;
export default function PostModelCreateForm(props: PostModelCreateFormProps): React.ReactElement;
