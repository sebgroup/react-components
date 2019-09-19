import * as React from "react";
import "./text-box-group-style.scss";

export interface TextBoxGroupProps {
    value: string | number;
    name: string;
    id?: string;
    pattern?: string;
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    onKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onRightClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
    onLeftClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
    type?: string;
    label?: string;
    error?: string;
    placeHolder?: string;
    className?: string;
    focus?: boolean;
    readonly?: boolean;
    disabled?: boolean;
    autoComplete?: boolean;
    leftText?: string;
    rightText?: string;
    leftIcon?: any;
    rightIcon?: any;
    rightTitle?: string;
    leftTitle?: string;
    reference?: React.RefObject<HTMLInputElement>;
}

export const TextBoxGroup: React.FunctionComponent<TextBoxGroupProps> = (props: TextBoxGroupProps) => {
    return (
        <div className={"form-group input-box-group" + (props.className ? ` ${props.className}` : "")}>
            {props.label && <label className="custom-label" htmlFor={props.name}>{props.label}</label>}
            <div className={"input-group" + (props.error ? " has-error" : "") + (props.disabled ? " disabled" : "")} >
                <div className="input-box-group-wrapper">
                    {(props.leftIcon || props.leftText) &&
                        <div className={"input-group-prepend" + (props.onLeftClick ? " clickable" : "")} role={props.onLeftClick ? "button" : ""} onClick={props.onLeftClick}>
                            {props.leftText && <span className="input-group-text" title={props.leftTitle}>{props.leftText}</span>}
                            {(props.leftIcon && !props.leftText) &&
                                <span className="input-group-text">
                                    {props.leftIcon}
                                </span>
                            }
                        </div>
                    }
                    <input
                        id={props.id}
                        name={props.name}
                        type={props.type}
                        pattern={props.pattern}
                        required={props.required}
                        minLength={props.minLength}
                        maxLength={props.maxLength}
                        value={props.value}
                        onChange={props.onChange}
                        placeholder={props.placeHolder}
                        className="form-control"
                        autoFocus={props.focus}
                        autoComplete={props.autoComplete ? "on" : "off"}
                        readOnly={props.readonly}
                        disabled={props.disabled}
                        onKeyDown={props.onKeyDown}
                        onKeyUp={props.onKeyUp}
                        onKeyPress={props.onKeyPress}
                        onFocus={props.onFocus}
                        onBlur={props.onBlur}
                        ref={props.reference}
                    />
                    {(props.rightIcon || props.rightText) &&
                        <div className={"input-group-append" + (props.onRightClick ? " clickable" : "")} onClick={props.onRightClick} role={props.onRightClick ? "button" : ""}>
                            {props.rightText && <span className="input-group-text" title={props.rightTitle}>{props.rightText}</span>}
                            {(props.rightIcon && !props.rightText) &&
                                <span className="input-group-text">
                                    {props.rightIcon}
                                </span>
                            }
                        </div>
                    }
                </div>
                <div className="alert alert-danger">{props.error}</div>
            </div>
        </div>
    );
};
