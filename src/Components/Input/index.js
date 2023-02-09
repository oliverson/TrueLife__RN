import { View, Text, TextInput, TouchableOpacity, Keyboard, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useController } from 'react-hook-form';


import EStyleSheet from 'react-native-extended-stylesheet';
import { IconEye, IconEyeClose } from '../../assets/svg';

const styles = StyleSheet.create({
    container: {
        // borderWidth: 1,
        // borderColor: '#FAF7F6',
        // backgroundColor: '#FAF7F6',
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
    },
    containerError: {
        // borderColor: '#bb1a3b',
        // backgroundColor: '#fde9ed',
    },
    containerFocused: {
        // borderColor: '#FD8A28',
    },
    containerDisabled: {
        // backgroundColor: '#f5f5f5',
        // borderColor: '#d9d9d9',
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,

    },
    input: {
        fontSize: 12,
        flex: 1,
        paddingLeft: 0,
    },
    eye: {
        marginLeft: 5,
        marginRight: 10,
    },
    error: {
        fontSize: 12,
        lineHeight: 20,
        color: '#E74C3C',
        paddingHorizontal: 8,
    },
    label: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#000000',
    },
});

const Input = ({
    control,
    name,
    placeholder,
    isPassword = false,
    isHideIconEyes = false,
    keyboardType = 'default',
    label = null,
    containerStyle = () => { },
    inputStyle = () => { },
    labelStyle = () => { },
    //
    register,
    nextField = '',
    setFocus,
    //
    defaultValue = '',
    height = null,
    editable = true,
    trigger,
    maxLength = -1,
    setValue,
    required = false,
    disabled = false,
    autoUpperCase = false,
    staticValue = null,
}) => {


    const { field, fieldState } = useController({
        control,
        name,
        defaultValue,
    });

    const [showPassword, setShowPassword] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    const hasError = !!fieldState?.error;

    useEffect(() => {
        if (field.value) {
            trigger(name);
        }
    }, [field.value]);

    return (
        <>
            {!!label && (
                <Text style={[styles.label, labelStyle]}>
                    {required && <Text style={{ color: 'red' }}>* </Text>}
                    {label}
                </Text>
            )}

            <TouchableOpacity
                activeOpacity={1}
                disabled={!editable}
                onPress={() => {
                    setFocus(name);
                }}
                style={containerStyle}>
                <View
                    style={[
                        styles.container,
                        isFocused && styles.containerFocused,
                        hasError && styles.containerError,
                        !editable && styles.containerDisabled,
                        height && { height: height },
                    ]}>
                    <View style={styles.inputWrapper}>
                        <TextInput
                            maxLength={maxLength === -1 ? undefined : maxLength}
                            {...register(field.name)}
                            ref={field.ref}
                            onChange={e => {
                                if (editable) {
                                    field.onChange(e);
                                } else {
                                    e.preventDefault();
                                }
                            }}
                            value={staticValue ? staticValue : field.value}
                            onChangeText={text => {
                                if (editable) {
                                    field.onChange(text);
                                    // if (autoUpperCase) {
                                    //   field.onChange(text.toUpperCase());
                                    // } else {
                                    //   field.onChange(text);
                                    // }
                                }
                            }}
                            onBlur={e => {
                                field.onBlur(e);
                                setIsFocused(false);
                            }}
                            showSoftInputOnFocus={editable}
                            onFocus={() => {
                                if (editable) {
                                    setIsFocused(true);
                                }
                            }}
                            placeholder={placeholder}
                            secureTextEntry={!showPassword && isPassword}
                            placeholderTextColor={
                                editable ? ('#d6c5c5') : '#727272'
                            }
                            //
                            clearTextOnFocus={false}
                            autoCapitalize={autoUpperCase ? 'characters' : 'none'}
                            disableFullscreenUI={true}
                            blurOnSubmit={!nextField}
                            returnKeyType={nextField ? 'next' : 'default'}
                            // returnKeyLabel={
                            //     nextField ? i18n.t('auth:next') : i18n.t('auth:done')
                            // }
                            onSubmitEditing={e => {
                                if (nextField) {
                                    setFocus(nextField);
                                }
                            }}
                            keyboardType={keyboardType}
                            style={[styles.input, inputStyle]}
                            editable={!disabled}
                        />

                        {!isHideIconEyes && isPassword && (
                            <TouchableOpacity
                                disabled={!editable}
                                hitSlop={{ top: 20, left: 10, bottom: 20, right: 20 }}
                                style={styles.eye}
                                onPress={() => {
                                    setShowPassword(!showPassword);
                                }}>
                                {showPassword ? (
                                    <IconEye color={'#000'} />
                                ) : (
                                    <IconEyeClose color={'#000'} />
                                )}
                            </TouchableOpacity>
                        )}
                    </View>
                </View>

                {/* {hasError && (
                    <Text style={styles.error}>{fieldState?.error?.message}</Text>
                )} */}

                {/* {limitError && (
          <Text style={styles.error}>
            {'Please enter at least 3 characters'}
          </Text>
        )} */}
            </TouchableOpacity>
        </>
    );
};

export default Input;
