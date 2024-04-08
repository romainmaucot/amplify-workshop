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
export declare type PostModelUpdateFormInputValues = {
    text?: string;
    image?: string;
};
export declare type PostModelUpdateFormValidationValues = {
    text?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PostModelUpdateFormOverridesProps = {
    PostModelUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    text?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PostModelUpdateFormProps = React.PropsWithChildren<{
    overrides?: PostModelUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    postModel?: any;
    onSubmit?: (fields: PostModelUpdateFormInputValues) => PostModelUpdateFormInputValues;
    onSuccess?: (fields: PostModelUpdateFormInputValues) => void;
    onError?: (fields: PostModelUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PostModelUpdateFormInputValues) => PostModelUpdateFormInputValues;
    onValidate?: PostModelUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PostModelUpdateForm(props: PostModelUpdateFormProps): React.ReactElement;
