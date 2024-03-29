import React from "react";
import Docs from "@common/Docs";
import { CodeSnippet } from "@common/CodeSnippet";
import { Tooltip } from "@sebgroup/react-components/Tooltip";
import { Notification } from "@sebgroup/react-components/Notification";
import { DynamicFormOption, DynamicFormSection, useDynamicForm } from "@sebgroup/react-components/hooks/useDynamicForm";

const TooltipPage: React.FC = () => {
    const importString: string = require("!raw-loader!@sebgroup/react-components/Tooltip/Tooltip");
    const [notificationToggle, setNotifcationToggle] = React.useState<boolean>(false);
    const defaultPosition: DynamicFormOption = { label: "Top", value: "top", key: "top" };
    const defaultTheme: DynamicFormOption = { label: "Primary", value: "primary", key: "primary" };
    const defaultTriggerMethod: DynamicFormOption = { label: "Click", value: "click", key: "click" };
    const defaultTooltipContent: string = "Tooltip content could be long, therefore, controlling the position and width is important";
    const nodeTooltipContent: React.ReactNode = (
        <div>
            <h1>Tooltip Header</h1>
            <div>tooltip content</div>
        </div>
    );
    const checkboxControls: Array<DynamicFormOption> = [
        { label: "Callback on visibility change", value: "isVisibleChanged", key: "isVisibleChanged" },
        { label: "Disable autoposition", value: "disableAutoPosition", key: "disableAutoPosition" },
        { label: "Force show tooltip", value: "forceShow", key: "forceShow" },
        { label: "Render node as tooltip content", value: "isCustomContent", key: "isCustomContent" },
        { label: "Define custom tooltip reference", value: "isCustomReference", key: "isCustomReference" },
    ];
    const fields: Array<DynamicFormSection> = [
        {
            key: "controls",
            items: [
                {
                    key: "position",
                    initialValue: defaultPosition.value,
                    label: "Position",
                    options: [
                        { label: "Top", value: "top", key: "top" },
                        { label: "Top-left", value: "top-left", key: "top-left" },
                        { label: "Top-right", value: "top-right", key: "top-right" },
                        { label: "Right", value: "right", key: "right" },
                        { label: "Right-top", value: "right-top", key: "right-top" },
                        { label: "Right-bottom", value: "right-bottom", key: "right-bottom" },
                        { label: "Bottom", value: "bottom", key: "bottom" },
                        { label: "Bottom-left", value: "bottom-left", key: "bottom-left" },
                        { label: "Bottom-right", value: "bottom-right", key: "bottom-right" },
                        { label: "Left", value: "left", key: "left" },
                        { label: "Left-top", value: "left-top", key: "left-top" },
                        { label: "Left-bottom", value: "left-bottom", key: "left-bottom" },
                    ],
                    controlType: "Dropdown",
                },
                {
                    key: "theme",
                    initialValue: defaultTheme.value,
                    label: "Theme",
                    options: [
                        { label: "Primary", value: "primary", key: "primary" },
                        { label: "Danger", value: "danger", key: "danger" },
                        { label: "Default", value: "default", key: "default" },
                        { label: "Light", value: "light", key: "light" },
                        { label: "Purple", value: "purple", key: "purple" },
                        { label: "Success", value: "success", key: "success" },
                        { label: "Warning", value: "warning", key: "warning" },
                    ],
                    controlType: "Dropdown",
                },
                {
                    key: "trigger",
                    initialValue: defaultTriggerMethod.value,
                    label: "Trigger method",
                    options: [
                        { label: "Click", value: "click", key: "click" },
                        { label: "Hover", value: "hover", key: "hover" },
                        { label: "Focus", value: "focus", key: "focus" },
                    ],
                    controlType: "Dropdown",
                },
                {
                    label: "Optional configurations",
                    key: "checkboxes",
                    controlType: "Option",
                    options: checkboxControls,
                },
            ],
        },
    ];
    const {
        renderForm,
        state: { controls },
    } = useDynamicForm(fields);
    const code: string = `<Tooltip
        content="Tooltip message could be long, therefore, controlling the position and width is important"
        position="right"
    />`;

    /** check if key selected */
    const checkSelectedKey = (key: string) => {
        return (controls.checkboxes as string[])?.find((item: string) => item === key);
    };

    return (
        <>
            <Docs
                mainFile={importString}
                example={
                    <Tooltip
                        id="tooltip-id"
                        content={checkSelectedKey("isCustomContent") ? nodeTooltipContent : defaultTooltipContent}
                        position={(controls as any)?.position}
                        theme={(controls as any)?.theme}
                        trigger={(controls as any)?.trigger}
                        disableAutoPosition={!!checkSelectedKey("disableAutoPosition")}
                        forceShow={!!checkSelectedKey("forceShow")}
                        onVisibleChange={checkSelectedKey("isVisibleChanged") && (() => setNotifcationToggle(true))}
                    >
                        {checkSelectedKey("isCustomReference") && (
                            <abbr className="custom-tooltip text-help" aria-describedby="tooltip-id">
                                This is custom tooltip reference
                            </abbr>
                        )}
                    </Tooltip>
                }
                code={code}
                note={
                    <>
                        <h4>To force show a tooltip</h4>
                        <p>
                            Developers are allowed to force show a tooltip by setting <code>forceShow</code> attribute. It will look something like this:
                        </p>
                        <CodeSnippet className="card" language="jsx">
                            {`<Tooltip content="content" forceShow>Reference</Tooltip>`}
                        </CodeSnippet>
                    </>
                }
                controls={renderForm()}
            />
            <Notification toggle={notificationToggle} type="slide" dismissTimeout={3000} onDismiss={() => setNotifcationToggle(false)}>
                <div>Tooltip visibility changed!</div>
            </Notification>
        </>
    );
};

export default TooltipPage;
